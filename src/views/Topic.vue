<template lang="pug">
.page-topic
  .topic.box
    h3.title.topic-title {{ topic.title }}
  topic-comment-card.topic-content-card(
    v-for="comment in comments",
    :key="comment.id",
    :comment="comment",
  )
  infinite-loading(@infinite="handleInfinite" :identifier="infiniteId")
    div(slot="no-more")
    div(slot="no-results")
  hr
  new-comment(:topic-id="topic.id", :refresh="refresh")
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import InfiniteLoading, { StateChanger } from "vue-infinite-loading";
import { getBoards, getComments, getTopic } from "@/api";
import type { Topic, Comment } from "@/api";
import TopicCommentCard from "@/components/TopicCommentCard.vue";
import NewComment from "@/components/NewComment.vue";
import store from "@/store";

@Component({
  components: {
    TopicCommentCard,
    NewComment,
    InfiniteLoading,
  },
})
export default class TopicList extends Vue {
  topic: Topic = {
    id: 0,
    board_id: 0,
    title: "",
    is_closed: false,
    is_suspended: false,
    is_hidden: false,
    author_id: 0,
    author_name: "",
    created_at: "",
    updated_at: "",
  };
  comments: Comment[] = [];
  busy = false;
  infiniteId = +new Date();

  refresh(): void {
    this.infiniteId += 1;
  }

  async handleInfinite($state: StateChanger): Promise<void> {
    const limit = 10;
    const topicId = parseInt(this.$route.params.topicId);
    const comments = await getComments(topicId, this.comments.length, limit);
    if (comments.length) {
      this.comments.push(...comments);
    }
    if (comments.length < limit) {
      $state.complete();
    } else {
      $state.loaded();
    }
  }

  @Watch("$route.params", { immediate: true })
  async fetchData(): Promise<void> {
    this.busy = true;
    try {
      const boardName = this.$route.params.boardName;
      const boards = await getBoards();
      const board = boards.find((x) => x.name === boardName);
      if (board) {
        store.commit("setTitle", board.display_name);
      } else {
        store.commit("setError", "존재하지 않는 게시판입니다.");
        return;
      }
      const topicId = parseInt(this.$route.params.topicId);
      const topic = await getTopic(topicId);
      this.topic = topic;
    } catch (err) {
      store.commit("setError", "에러가 발생했습니다.");
    } finally {
      this.busy = false;
    }
  }
}
</script>

<style lang="scss">
.page-topic {
  .topic-content-card {
    margin-bottom: 1rem;
  }
}
</style>
