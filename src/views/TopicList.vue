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
                  @click.stop
                  :href="`https://librewiki.net/wiki/${encodeURIComponent('사용자:' + topic.author_name)}`"
                ) {{ topic.author_name }}
                span.topic-author-link
                  | (
                  a(
                    @click.stop
                    :href="`https://librewiki.net/wiki/${encodeURIComponent('사용자토론:' + topic.author_name)}`"
                  ) 토론
                  | |
                  a(
                    @click.stop
                    :href="`https://librewiki.net/wiki/${encodeURIComponent('특수:기여/' + topic.author_name)}`"
                  ) 기여
                  | )
            span.topic-updated_at(:to="`/${board.name}/${topic.id}`") {{ $moment(topic.updated_at).fromNow() + '에 업데이트됨' }}
          .card-body
            .topic-name {{ decodeTitle(topic.title) }}
            .topic-icons
              b-tooltip.topic-isupdated(label="마지막 방문 이후에 바뀜" v-if="isUpdated(topic)")
                b-icon(icon="exclamation")
              b-tooltip.topic-islocked(label="종료됨" v-if="topic.is_closed")
                b-icon(icon="lock")
              b-tooltip.topic-islocked(label="중단됨" v-else-if="topic.is_suspended")
                b-icon(icon="lock")
              b-tooltip.topic-ispinned(label="상단 고정됨" v-if="topic.is_pinned")
                b-icon(icon="thumbtack")
  infinite-loading(@infinite="handleInfinite", :identifier="infiniteId")
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
import md5 from "md5";
import { AllHtmlEntities } from "html-entities";
import type { MetaInfo } from "vue-meta";
import moment from "moment";

@Component({
  components: {
    NewTopic,
    InfiniteLoading,
    Gravatar,
  },
  metaInfo(): MetaInfo {
    return {
      title: (this as TopicListPage).board.display_name,
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
    return AllHtmlEntities.decode(x);
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

  isUpdated(topic: Topic): boolean {
    const lastVisited = this.lastVisited(topic.id);
    return !!lastVisited && moment(topic.updated_at).isAfter(lastVisited);
  }

  lastVisited(id: number): Date | null {
    const item = localStorage.getItem(`topic-last-visited.${id}`);

    if (item) {
      return new Date(item);
    } else {
      return null;
    }
  }

  genGravataHash(topic: Topic): string {
    const key = topic.id + topic.author_name;
    return md5(key);
  }

  mounted(): void {
    if (
      store.state.board.is_active == true &&
      store.state.user.isBlocked == false
    ) {
      store.commit("setCanWrite", true);
    }
  }

  checkCanWrite(tp: Topic): boolean {
    if (
      tp.is_closed == true ||
      tp.is_suspended == true ||
      tp.is_hidden == true ||
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
