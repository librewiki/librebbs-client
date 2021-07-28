<template lang="pug">
.page-topic
  .topic.box.level
    router-link(:to="`/${board.name}/${topic.id}`")
      h3.title.topic-title {{ decodeTitle(topic.title) }}
    b-dropdown.admin-tools.is-right(v-if="user.isAdmin")
      button.button.is-small(slot="trigger") 관리자 메뉴
      b-dropdown-item.admin-button(@click="unhide", v-if="topic.is_hidden") 숨김 해제
      b-dropdown-item.admin-button(@click="hide", v-else) 숨기기
      b-dropdown-item.admin-button(
        @click="unsuspend",
        v-if="topic.is_suspended"
      ) 잠금 해제
      b-dropdown-item.admin-button(@click="suspend", v-else) 잠그기
      b-dropdown-item.admin-button(@click="unclose", v-if="topic.is_closed") 종료 취소
      b-dropdown-item.admin-button(@click="close", v-else) 종료
      b-dropdown-item.admin-button(@click="unpin" v-if="topic.is_pinned") 상단 고정 해제
      b-dropdown-item.admin-button(@click="pin" v-else) 상단 고정

  topic-comment-card.topic-content-card(
    v-for="(comment, index) in comments",
    :key="comment.id",
    :comment.sync="comments[index]"
  )
  infinite-loading(@infinite="handleInfinite", :identifier="infiniteId")
    div(slot="no-more")
    div(slot="no-results")
  hr
  p(v-if="topic.is_closed") 이 주제는 종료되어 의견을 추가할 수 없습니다.
  p(v-else-if="topic.is_suspended") 이 주제는 잠겨있어 의견을 추가할 수 없습니다.
  p(v-else-if="user.isBlocked") 차단되어 있어 의견을 추가할 수 없습니다.
  new-comment(:topic-id="topic.id", :refresh="refresh", v-else)
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
  pinTopic,
  unpinTopic,
} from "@/api";
import type { Topic, Comment, Board } from "@/api";
import TopicCommentCard from "@/components/TopicCommentCard.vue";
import NewComment from "@/components/NewComment.vue";
import store from "@/store";
import { AllHtmlEntities } from "html-entities";
import type { MetaInfo } from "vue-meta";

@Component({
  components: {
    TopicCommentCard,
    NewComment,
    InfiniteLoading,
  },
  metaInfo(): MetaInfo {
    const boardName = (this as TopicPage).board.display_name;
    const topicTitle = (this as TopicPage).decodeTitle(
      (this as TopicPage).topic.title
    );
    return {
      title: `${topicTitle} - ${boardName}`,
    };
  },
})
export default class TopicPage extends Vue {
  topic: Topic = {
    id: 0,
    board_id: 0,
    title: "",
    is_closed: false,
    is_suspended: false,
    is_hidden: false,
    is_pinned: false,
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
      this.checkCanWrite(topic);
    } catch (error) {
      store.commit("setError", error);
    } finally {
      this.busy = false;
    }
  }

  checkCanWrite(tp: Topic): void {
    if (
      tp.is_closed == true ||
      tp.is_suspended == true ||
      tp.is_hidden == true ||
      store.state.user.isBlocked == true
    ) {
      store.commit("setCanWrite", false);
    } else {
      store.commit("setCanWrite", true);
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

  async pin(): Promise<void> {
    await pinTopic(this.topic.id);
    await this.fetchData();
  }

  async unpin(): Promise<void> {
    await unpinTopic(this.topic.id);
    await this.fetchData();
  }
}
</script>

<style lang="scss">
@import "@/assets/style-variables.scss";
.page-topic {
  .topic-content-card {
    margin-bottom: 1rem;
  }
  .topic {
    min-height: 2rem;
  }
  .topic-title {
    font-size: 1.5rem;
  }
  .admin-button {
    cursor: pointer;
  }
  .admin-button:hover {
    color: $navbar-item-hover-color;
    background-color: $primary;
    transition: 0.25s;
  }
}
</style>
