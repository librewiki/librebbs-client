<template lang="pug">
#app.app
  nav-bar
  .main-container.container
    .columns.main-columns
      .column.main-column
        //- block-notice
        //- site-notice
        article.box.is-paddingless
          header.main-header
            .level.title-wrapper-row
              .level-left
                .level-item
                  router-link(:to="`/${board.name}`")
                    h1.title {{ title }}
              //- .level-right(v-if="meta.toolBox")
              //-   .level-item
              //-     tool-box
          section.main-content
            p(v-if="error") {{ error }}
            router-view
          //- liberty-footer.footer.main-footer
      .column.is-narrow.is-hidden-touch
        live-recent
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import store from "@/store";
import { getBoards } from "@/api";
import type { Board } from "@/api";
import NavBar from "@/components/NavBar.vue";
import LiveRecent from "@/components/LiveRecent.vue";
// import ToolBox from "@/components/ToolBox";
// import LibertyFooter from "@/components/LibertyFooter";
// import SiteNotice from "@/components/SiteNotice";
// import BlockNotice from "@/components/BlockNotice";

@Component({
  components: {
    NavBar,
    LiveRecent,
  },
})
export default class App extends Vue {
  get title(): string {
    return store.state.meta.title;
  }
  get error(): string | null {
    return store.state.meta.error;
  }
  board: Board = {
    id: 0,
    display_name: "",
    name: "",
    is_active: false,
    created_at: "",
    updated_at: "",
  };
  busy = false;

  @Watch("$route.params", { immediate: true })
  async fetchData(): Promise<void> {
    this.busy = true;
    try {
      const boardName = this.$route.params.boardName;
      console.log(boardName);
      const boards = await getBoards();
      const board = boards.find((x) => x.name === boardName);
      console.log(board);
      if (board) {
        this.board = board;
        store.commit("setTitle", board.display_name);
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

<style lang="scss">
@import "@/assets/style-variables.scss";
@import "~bulma";
@import "~buefy/src/scss/buefy";
* {
  outline: none;
}
html {
  background-color: #f5f5f5;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}
a.new {
  color: $newlink-color;
}
body {
  font-family: "Apple SD Gothic Neo", "Spoqa Han Sans", "SpoqaHanSans",
    "Noto Sans KR", "Noto Sans", "Noto Sans CJK KR", "NanumBarunGothic",
    "Nanum Gothic", "KoPub Dotum", "Malgun Gothic", "맑은 고딕", sans-serif;
}
a.external {
  color: #33b733;
  &::before {
    font: normal normal normal 14px/1 FontAwesome;
    text-align: center;
    color: #33b733;
    content: "\f0c1";
  }
}
.right-wrapper {
  display: flex;
  justify-content: flex-end;
}
.app {
  .main-container {
    margin-top: ($navbar-height + 1rem);
    margin-bottom: 1rem;
    @include touch {
      margin-top: ($navbar-height * 2 + 0.333rem);
    }
  }
  .main-columns {
    @include touch {
      margin-left: 0;
      margin-right: 0;
    }
  }
  .main-column {
    overflow-y: hidden;
    @include touch {
      padding-top: 0;
      padding-left: 0;
      padding-right: 0;
    }
  }
  .liberty-navbar {
    position: fixed;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.16),
      0 2px 10px 0 rgba(0, 0, 0, 0.12);
  }
  .main-header {
    padding: $box-padding;
    @include touch {
      padding: ($box-padding / 2);
    }
    border-top-left-radius: $radius-large;
    border-top-right-radius: $radius-large;
    border: 1px solid #e1e8ed;
    background-color: $background;
    .title-wrapper-row {
      .level-left > .level-item {
        flex-shrink: 1;
        flex-direction: column;
        align-items: flex-start;
      }
      @include mobile {
        display: flex;
        flex-direction: column-reverse;
        align-items: stretch;
        .level-left {
          display: flex;
          align-items: flex-start;
        }
        .level-right {
          margin-top: 0;
          padding-bottom: 0.5rem;
          margin-bottom: 0.5rem;
          display: flex;
          justify-content: flex-end;
          border-bottom: 1px solid #e1e8ed;
        }
      }
    }
  }
  .main-content {
    word-wrap: break-word;
    padding: $box-padding;
    border-left: 1px solid #e1e8ed;
    border-right: 1px solid #e1e8ed;
    @include touch {
      padding: ($box-padding / 2);
    }
  }
  .main-footer {
    padding: $box-padding;
    @include touch {
      padding: ($box-padding / 2);
    }
    border: 1px solid #e1e8ed;
    border-bottom-left-radius: $radius-large;
    border-bottom-right-radius: $radius-large;
    background-color: $background;
  }
}
</style>
