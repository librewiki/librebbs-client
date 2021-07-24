<template lang="pug">
.page-topic
  .topic.box
    router-link(:to="`/${board.name}/${topic.id}`")
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
import { getComments, getTopic } from "@/api";
import type { Topic, Comment, Board } from "@/api";
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

  get board(): Board {
    return store.state.board;
  }

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

.topic-title {
  font-size: 1.5rem;
}
</style>
