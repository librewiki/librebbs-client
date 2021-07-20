<template lang="pug">
.page-topic-list
  ul
    li(v-for="topic in topics")
      h2
        router-link(:to="`/${board.name}/${topic.id}`") {{ topic.title }}
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { getBoards, getTopics } from "@/api";
import type { Topic, Board } from "@/api";
import store from "@/store";

@Component
export default class TopicList extends Vue {
  board: Board = {
    id: 0,
    display_name: "",
    name: "",
    is_active: false,
    created_at: "",
    updated_at: "",
  };
  topics: Topic[] = [];
  busy = false;

  @Watch("$route.params", { immediate: true })
  async fetchData(): Promise<void> {
    this.busy = true;
    try {
      const boardName = this.$route.params.boardName;
      const boards = await getBoards();
      const board = boards.find((x) => x.name === boardName);
      if (board) {
        this.board = board;
        store.commit("setTitle", board.display_name);
        this.topics = await getTopics(board.id);
      } else {
        store.commit("setError", "존재하지 않는 게시판입니다.");
        return;
      }
    } catch {
      store.commit("setError", "에러가 발생했습니다.");
    } finally {
      this.busy = false;
    }
  }
}
</script>
