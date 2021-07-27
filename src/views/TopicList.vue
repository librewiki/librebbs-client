<template lang="pug">
.page-topic-list
  ul
    li(v-for="topic in topics")
      .card.topic-card
        .topic-card-header
          .topic-author-area
            span.topic-author
              a(
                :href="`https://librewiki.net/wiki/${encodeURIComponent('사용자:' + topic.author_name)}`"
              ) {{ topic.author_name }}
              a.topic-author-link(
                :href="`https://librewiki.net/wiki/${encodeURIComponent('사용자토론:' + topic.author_name)}`"
              ) (토론)
          router-link.topic-updated_at(:to="`/${board.name}/${topic.id}`") {{ $moment(topic.updated_at).add(9, 'hour').endOf('minute').fromNow() + '에 업데이트됨' }}
        router-link(:to="`/${board.name}/${topic.id}`")
          .card-body
            .topic-name {{ decodeTitle(topic.title) }}
            .topic-islocked(v-if="topic.is_closed || topic.is_suspended")
              b-icon(icon="lock")
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

@Component({
  components: {
    NewTopic,
    InfiniteLoading,
    Gravatar,
  },
})
export default class TopicList extends Vue {
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
  resetInfinite() {
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
      console.log("아아아");
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
  margin: 2px 2px 2rem 2px;
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
