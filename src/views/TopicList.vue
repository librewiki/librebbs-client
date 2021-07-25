<template lang="pug">
.page-topic-list
  ul
    li(v-for="topic in topics")
      .card.topic-card
          .topic-author-img
            gravatar.user-gravatar(
              hash="f3ada405ce890b6f8204094deb12d8a8"
              default-img="identicon")
          .card-body
            span.topic-author
              a(:href="`https://librewiki.net/wiki/${encodeURIComponent('사용자:' + topic.author_name )}`") {{ topic.author_name }}
              a.topic-author-link(:href="`https://librewiki.net/wiki/${encodeURIComponent('사용자토론:' + topic.author_name )}`") (토론) - 
            span.topic-updated_at {{ $moment(topic.updated_at).endOf('minute').fromNow() + "에 업데이트됨" }}
            hr
            .topic-name
              router-link(:to="`/${board.name}/${topic.id}`") {{ decodeTitle(topic.title) }}
  infinite-loading(@infinite="handleInfinite" :identifier="infiniteId")
    div(slot="no-more")
    div(slot="no-results")
  hr
  new-topic
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Gravatar from "vue-gravatar";
import InfiniteLoading, { StateChanger } from "vue-infinite-loading";
import { getTopics } from "@/api";
import type { Topic, Board } from "@/api";
import NewTopic from "@/components/NewTopic.vue";
import store from "@/store";
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
}
</script>

<style lang="scss">
.topic-card {
  padding: 0.5rem 1rem 0.5rem 1rem;
  border: 1px solid #e1e8ed;
  border-radius: 0.25rem;
  margin-bottom: 2rem;
}
.card-body {
  padding-right: calc(80px+5rem);
  min-height: 80px;
}
.topic-updated_at {
  font-size: 0.8rem;
}
.topic-author-link {
  font-size: 0.75rem;
  margin-left: 0.25rem;
}
.topic-author-img {
  float: right;
  margin-left: 2rem;
  padding-left: 2rem;
  height: 80px;
}
.topic-name {
  //padding-top:1rem;
  padding-right: calc(1.5rem + 80px);
  line-height: 1.5rem;
}
</style>
