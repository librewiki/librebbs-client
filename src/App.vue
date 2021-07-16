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
                  h1.title 위키방
                  //- h1.title {{ meta.title }}
              //- .level-right(v-if="meta.toolBox")
              //-   .level-item
              //-     tool-box
          section.main-content
            router-view
          //- liberty-footer.footer.main-footer
      .column.is-narrow.is-hidden-touch
        live-recent
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
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
  // computed: {
  //   ...mapState(["meta", "settings"]),
  // },
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