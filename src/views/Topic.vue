<template lang="pug">
.page-topic
  .topic.box
    router-link(:to="`/${board.name}/${topic.id}`")
      h3.title.topic-title {{ decodeTitle(topic.title) }}
    .admin-tools(v-if="user.isAdmin")
      button.button.is-small(@click="unhide" v-if="topic.is_hidden") 숨김 해제
      button.button.is-small(@click="hide" v-else) 숨기기
      button.button.is-small(@click="unsuspend" v-if="topic.is_suspended") 잠금 해제
      button.button.is-small(@click="suspend" v-else) 잠그기
      button.button.is-small(@click="unclose" v-if="topic.is_closed") 종료 취소
      button.button.is-small(@click="close" v-else) 종료
  topic-comment-card.topic-content-card(
    v-for="(comment, index) in comments",
    :key="comment.id",
    :comment.sync="comments[index]"
  )
  infinite-loading(@infinite="handleInfinite" :identifier="infiniteId")
    div(slot="no-more")
    div(slot="no-results")
  hr
  p(v-if="topic.is_closed") 이 주제는 종료되어 의견을 추가할 수 없습니다.
  p(v-else-if="topic.is_suspended") 이 주제는 잠겨있어 의견을 추가할 수 없습니다.
  new-comment(:topic-id="topic.id", :refresh="refresh" v-else)
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import InfiniteLoading, { StateChanger } from "vue-infinite-loading";
import {
  getComments,
  getTopic,
  hideTopic,
  unhideTopic,
  suspendTopic,
  unsuspendTopic,
  closeTopic,
  uncloseTopic,
} from "@/api";
import type { Topic, Comment, Board } from "@/api";
import TopicCommentCard from "@/components/TopicCommentCard.vue";
import NewComment from "@/components/NewComment.vue";
import store from "@/store";
import { AllHtmlEntities } from "html-entities";

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

  get user(): typeof store.state.user {
    return store.state.user;
  }

  get board(): Board {
    return store.state.board;
  }

  decodeTitle(x: string): string {
    return AllHtmlEntities.decode(x);
  }

  refresh(): void {
    this.infiniteId += 1;
  }

  async refreshComment(comment: Comment): Promise<void> {
    const index = this.comments.indexOf(comment);
    const newComment = (await getComments(this.topic.id, index, 1))[0];
    this.$set(this.comments, index, newComment);
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
    } catch (error) {
      store.commit("setError", error);
    } finally {
      this.busy = false;
    }
  }

  async hide(): Promise<void> {
    await hideTopic(this.topic.id);
    this.$router.push(`/${this.board.name}`);
  }

  async unhide(): Promise<void> {
    await unhideTopic(this.topic.id);
    await this.fetchData();
  }

  async suspend(): Promise<void> {
    await suspendTopic(this.topic.id);
    await this.fetchData();
  }

  async unsuspend(): Promise<void> {
    await unsuspendTopic(this.topic.id);
    await this.fetchData();
  }

  async close(): Promise<void> {
    await closeTopic(this.topic.id);
    await this.fetchData();
  }

  async unclose(): Promise<void> {
    await uncloseTopic(this.topic.id);
    await this.fetchData();
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
