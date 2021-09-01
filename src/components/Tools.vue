<template lang="pug">
nav.liberty-tools(:class="[isactive ? 'floatTools' : 'level-right']")
  .level-item.search-box-wrapper(v-if="!isactive")
    b-field
      b-input(
        v-model="searchQuery",
        :placeholder="`${board.display_name} 검색`"
        )
      //-b-select(
        placeholder="제목 검색",
        v-model="searchType"
        )
        option(value=2) 제목 검색
        option(value=1) 내용 검색
      p.control
        button.button(active-class="", @click="search")
          b-icon(icon="search")
  .level-item
    button.button(v-if="canWrite", @click="openWriteModal") 
      b-icon(icon="edit")
      span 글쓰기
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import store from "@/store";
import type { Board } from "@/api";

@Component
export default class Tools extends Vue {
  isactive = false;
  searchQuery = "";
  searchType = 2;

  get board(): Board {
    return store.state.board;
  }

  get canWrite(): boolean {
    return store.state.canWrite;
  }

  openWriteModal(): void {
    store.commit("setEditorOpen", true);
  }

  mounted(): void {
    document.addEventListener("scroll", this.scrollButton);
  }
  scrollButton(): void {
    let nowscroll = window.scrollY;
    if (nowscroll > 300) {
      this.isactive = true;
    } else {
      this.isactive = false;
    }
  }

  search(): void {
    const query = this.searchQuery;
    const board = store.state.board;
    if (query) {
      this.$router.push(
        "/" + String(board.name) + "/search/" + query + String(this.searchType)
      );
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/style-variables.scss";
.floatTools {
  position: fixed;
  bottom: 1rem;
  right: 1rem;
}
.floatTools button {
  padding: 1.5rem;
}

@media screen and (max-width: 768px) {
  .floatTools {
    z-index: 20;
  }
}
</style>
