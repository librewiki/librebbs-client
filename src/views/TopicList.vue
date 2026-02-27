<template lang="pug">
.page-topic-list
  ul
    li(v-for="topic in topics")
      router-link(:to="`/${board.name}/${topic.id}`")
        .card.topic-card
          .topic-card-header
            .topic-author-area
              span.topic-author
                a(
                  @click.stop,
                  :href="`https://librewiki.net/wiki/${encodeURIComponent('사용자:' + topic.authorName)}`"
                ) {{ topic.authorName }}
                span.topic-author-link
                  | (
                  a(
                    @click.stop,
                    :href="`https://librewiki.net/wiki/${encodeURIComponent('사용자토론:' + topic.authorName)}`"
                  ) 토론
                  | |
                  a(
                    @click.stop,
                    :href="`https://librewiki.net/wiki/${encodeURIComponent('특수:기여/' + topic.authorName)}`"
                  ) 기여
                  | )
            .topic-info-area
              span.topic-updated_at(:to="`/${board.name}/${topic.id}`") {{ updatedAtString(topic) }}
          .card-body
            .topic-title-area
              span.topic-title {{ decodeTitle(topic.title) }}
              span.topic-comment-count(v-if="topic.commentCount > 1") [{{ topic.commentCount }}]
            .topic-icons
              b-tooltip.topic-isupdated(
                label="마지막 방문 이후에 바뀜",
                v-if="isUpdated(topic)"
              )
                b-icon(icon="exclamation")
              b-tooltip.topic-islocked(label="종료됨", v-if="topic.isClosed")
                b-icon(icon="lock")
              b-tooltip.topic-islocked(
                label="중단됨",
                v-else-if="topic.isSuspended"
              )
                b-icon(icon="lock")
              b-tooltip.topic-ispinned(label="상단 고정됨", v-if="topic.isPinned")
                b-icon(icon="thumbtack")

  infinite-loading(
    @infinite="handleInfinite",
    spinner="waveDots",
    :identifier="infiniteId"
  )
    div(slot="no-more")
    div(slot="no-results")
  hr
  new-topic
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import Gravatar from "vue-gravatar";
import InfiniteLoading, { StateChanger } from "vue-infinite-loading";
import { getTopics } from "@/api";
import type { Topic, Board } from "@/api";
import NewTopic from "@/components/NewTopic.vue";
import store from "@/store";
import { decode } from "html-entities";
import type { MetaInfo } from "vue-meta";
import { DateTime } from "luxon";

@Component({
  components: {
    NewTopic,
    InfiniteLoading,
    Gravatar,
  },
  metaInfo(): MetaInfo {
    return {
      title: (this as TopicListPage).board.displayName,
    };
  },
})
export default class TopicListPage extends Vue {
  topics: Topic[] = [];
  busy = false;
  infiniteId = +new Date();

  get board(): Board {
    return store.state.board;
  }

  decodeTitle(x: string): string {
    return decode(x);
  }

  @Watch("$route.params")
  resetInfinite(): void {
    this.infiniteId = +new Date();
    this.topics = [];
  }

  async handleInfinite($state: StateChanger): Promise<void> {
    const limit = 10;
    const topics = await getTopics(this.board.id, this.topics.length, limit);

    if (topics.length) {
      this.topics.push(...topics);
    }
    if (topics.length < limit) {
      $state.complete();
    } else {
      $state.loaded();
    }
  }

  updatedAtString(topic: Topic): string {
    return `${DateTime.fromISO(topic.updatedAt).toRelative()}에 업데이트됨`;
  }

  isUpdated(topic: Topic): boolean {
    const lastVisited = this.lastVisited(topic.id);
    return !!lastVisited && DateTime.fromISO(topic.updatedAt) > lastVisited;
  }

  lastVisited(id: number): DateTime | null {
    const item = localStorage.getItem(`topic-last-visited.${id}`);

    if (item) {
      return DateTime.fromISO(item);
    } else {
      return null;
    }
  }

  mounted(): void {
    if (
      store.state.board.isActive == true &&
      store.state.user.isBlocked == false
    ) {
      store.commit("setCanWrite", true);
    }
  }

  checkCanWrite(tp: Topic): boolean {
    if (
      tp.isClosed == true ||
      tp.isSuspended == true ||
      tp.isHidden == true ||
      store.state.user.isBlocked == true
    ) {
      return false;
    } else {
      return true;
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/style-variables.scss";
.topic-card {
  padding: 0.5rem 1rem 0.5rem 1rem;
  border: 1px solid #e1e8ed;
  border-radius: 0.25rem;
  margin: 2px 2px 5px 2px;
}
.topic-card:hover {
  box-shadow: 0 0 3px 1px;
}
.topic-card-header {
  display: flex;
  justify-content: space-between;
}
.card-body {
  width: 100%;
  color: #4a4a4a;
  display: flex;
  justify-content: space-between;
}
.topic-comment-count {
  margin-left: 0.2rem;
  color: #777;
}
.topic-updated_at {
  font-size: 0.8rem;
  flex: 99;
  text-align: right;
  color: #4a4a4a;
}
.topic-author-link {
  font-size: 0.75rem;
  margin-left: 0.25rem;
  z-index: 3;
}
@media (max-width: 400px) {
  .topic-card {
    display: block;
    align-content: none;
  }
  .card-body {
    flex: none;
  }
  .topic-author-img {
    display: none;
  }
}
</style>
