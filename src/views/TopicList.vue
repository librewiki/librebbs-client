<template lang="pug">
.page-topic-list
  ul
    li(v-for="topic in topics")
      h2
        router-link(:to="`/${board.name}/${topic.id}`") {{ topic.title }}
  hr
  new-topic(:board-id="board.id")
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { getTopics } from "@/api";
import type { Topic, Board } from "@/api";
import NewTopic from "@/components/NewTopic.vue";
import store from "@/store";

@Component({
  components: {
    NewTopic,
  },
})
export default class TopicList extends Vue {
  topics: Topic[] = [];
  busy = false;

  get board(): Board {
    return store.state.board;
  }

  @Watch("$route.params", { immediate: true })
  async fetchData(): Promise<void> {
    this.busy = true;
    try {
      this.topics = await getTopics(this.board.id);
    } catch {
      store.commit("setError", "에러가 발생했습니다.");
    } finally {
      this.busy = false;
    }
  }
}
</script>
