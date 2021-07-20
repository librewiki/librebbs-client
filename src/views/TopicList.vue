<template lang="pug">
.page-topic-list
  ul
    li(v-for="topic in topics")
      h2 {{ topic.title }}
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { getBoards, getTopics } from "@/api";
import type { Topic } from "@/api";

@Component
export default class TopicList extends Vue {
  topics: Topic[] = [];

  @Watch("$route.params", { immediate: true })
  async fetchData() {
    const boardName = this.$route.params.boardName;
    const boards = await getBoards();
    const board = boards.find((x) => x.name === boardName);
    if (board) {
      this.topics = await getTopics(board.id);
    } else {
      this.$router.push("/");
    }
  }
}
</script>
