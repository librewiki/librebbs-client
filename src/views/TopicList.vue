<template lang="pug">
.page-topic-list
  ul
    li(v-for="topic in topics")
      h2
        router-link(:to="`/${board.name}/${topic.id}`") {{ topic.title }}
  infinite-loading(@infinite="handleInfinite" :identifier="infiniteId")
    div(slot="no-more")
    div(slot="no-results")
  hr
  new-topic(:board-id="board.id")
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import InfiniteLoading, { StateChanger } from "vue-infinite-loading";
import { getTopics } from "@/api";
import type { Topic, Board } from "@/api";
import NewTopic from "@/components/NewTopic.vue";
import store from "@/store";

@Component({
  components: {
    NewTopic,
    InfiniteLoading,
  },
})
export default class TopicList extends Vue {
  topics: Topic[] = [];
  busy = false;
  infiniteId = +new Date();

  get board(): Board {
    return store.state.board;
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
