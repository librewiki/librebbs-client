<template lang="pug">
#app.app
  nav-bar
  .main-container.container
    .columns.main-columns
      .column.main-column
        //- block-notice
        article.box.is-paddingless
          header.main-header
            SiteNotice
            .level.title-wrapper-row
              .level-left
                .level-item
                  router-link(:to="`/${board.name}`")
                    h1.title {{ title }}
              tools
              //- .level-right(v-if="meta.toolBox")
              //-   .level-item
              //-     tool-box
          section.main-content
            error-page(v-if="error")
            router-view(v-else)
          FooterContent
      .column.is-narrow.is-hidden-touch
        live-recent
  error-modal(v-if="modalerror")
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import store from "@/store";
import type { Board } from "@/api";
import NavBar from "@/components/NavBar.vue";
import LiveRecent from "@/components/LiveRecent.vue";
import ErrorPage from "@/components/ErrorPage.vue";
import ErrorModal from "@/components/ErrorModal.vue";
import FooterContent from "@/components/FooterContent.vue";
import SiteNotice from "@/components/SiteNotice.vue";
import Tools from "@/components/Tools.vue";

@Component({
  components: {
    NavBar,
    LiveRecent,
    ErrorPage,
    ErrorModal,
    FooterContent,
    SiteNotice,
    Tools,
  },
})
export default class App extends Vue {
  get title(): string {
    return store.state.board.display_name;
  }
  get error(): Error | null {
    return store.state.meta.error;
  }
  get board(): Board {
    return store.state.board;
  }
  get modalerror(): Error | null {
    return store.state.modalError;
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
  font-size: 15px;
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
}
</style>
