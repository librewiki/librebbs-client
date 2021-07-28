<template lang="pug">
nav.liberty-navbar.navbar
  .container
    .navbar-menu.is-active
      .navbar-start
        a.navbar-item(active-class="", href="https://librewiki.net")
          img(alt="Logo", src="../assets/logo.png")
          | {{ settings.data.wikiName }}
        a.navbar-item(
          href=`https://librewiki.net/wiki/${encodeURIComponent('특수:최근바뀜')}`
        )
          b-icon(icon="sync")
          span.navbar-text 최근 바뀜
        a.navbar-item(
          href=`https://librewiki.net/wiki/${encodeURIComponent('특수:임의문서')}`
        )
          b-icon(icon="random")
          span.navbar-text 임의 문서
        a.navbar-item(href="https://maps.librewiki.net")
          b-icon(icon="map")
          span.navbar-text 맵스
        b-dropdown
          a.navbar-item(slot="trigger")
            b-icon(icon="comments")
            span.navbar-text 게시판
            b-icon.navbar-caret(icon="caret-down")
          b-dropdown-item(has-link)
            router-link(to="/wiki") 위키방
          b-dropdown-item(has-link)
            router-link(to="/freeboard") 자유게시판
        b-dropdown
          a.navbar-item(slot="trigger")
            b-icon(icon="wrench")
            span.navbar-text 도구
            b-icon.navbar-caret(icon="caret-down")
          b-dropdown-item(has-link, v-if="user.isAdmin")
            router-link(to="/admin") 관리자 도구
          b-dropdown-item(has-link)
            a(
              :href="`https://librewiki.net/wiki/${encodeURIComponent('특수:올리기')}`"
            ) 파일 업로드
        b-dropdown
          a.navbar-item(slot="trigger")
            b-icon(icon="question")
            span.navbar-text 도움말
            b-icon.navbar-caret(icon="caret-down")
          b-dropdown-item(has-link)
            a(
              :href="`https://librewiki.net/wiki/${encodeURIComponent('도움말:문법 도움말')}`"
            ) 문법 도움말
          b-dropdown-item(has-link)
            a(
              :href="`https://librewiki.net/wiki/${encodeURIComponent('도움말:Tex 문법')}`"
            ) TeX 문법
      .user-items(v-if="user.isInitialized")
        a.navbar-item(v-if="!user.isLoggedIn", @click="login")
          b-icon(pack="fa", icon="sign-in")
        template(v-else)
          b-dropdown
            a.navbar-item.user-gravatar-wrapper(slot="trigger")
              gravatar.user-gravatar(:email="user.email")
            b-dropdown-item(has-link)
              a(
                :href="`https://librewiki.net/wiki/${encodeURIComponent('사용자:' + user.username)}`"
              ) 사용자:{{ user.username }}
            hr.dropdown-divider
            b-dropdown-item(has-link)
              a(
                :href="`https://librewiki.net/wiki/${encodeURIComponent('특수:환경설정')}`"
              ) 환경설정
            hr.dropdown-divider
            b-dropdown-item(has-link)
              a.navbar-item(@click="logout") 로그아웃
          a.navbar-item(role="button", @click="logout")
            b-icon(pack="fa", icon="sign-out")
      .navbar-end
        .search-box-wrapper
          b-field
            b-autocomplete(
              placeholder="검색",
              icon="search",
              v-model="searchInput",
              :data="autoCompleteItem",
              @keyup.enter.native="go",
              @select="(option) => (selected = option)",
              v-on:input="getMedaiwikiSearch(searchInput)",
              max-height="100%"
            )
            p.control
              button.button(active-class="", @click="go")
                b-icon(icon="arrow-right")
            p.control
              button.button(active-class="", @click="search")
                b-icon(icon="search")
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Gravatar from "vue-gravatar";
import { startLoginProcess, logout } from "@/auth";
import store from "@/store";
import axios from "axios";

interface AutoCompleteResponse {
  batchcomplete: string;
  continue: {
    sroffset: number;
    continue: string;
  };
  query: {
    searchinfo: {
      totalhits: number;
    };
    search: AutoCompleteResponseItem[];
  };
}

interface AutoCompleteResponseItem {
  ns: number;
  title: string;
  pageid: number;
  size: number;
  wordcount: number;
  snippet: string;
  timestamp: string;
}

@Component({
  components: {
    Gravatar,
  },
})
export default class NavBar extends Vue {
  searchInput = "";
  settings = {
    data: {
      wikiname: "리브레 위키",
    },
  };
  autoCompleteItem = [""];

  get user(): typeof store.state.user {
    return store.state.user;
  }

  async login(): Promise<void> {
    startLoginProcess(this.$route.fullPath);
  }

  async logout(): Promise<void> {
    await logout();
    location.reload();
  }

  go(): void {
    if (this.searchInput) {
      location.href = `https://librewiki.net/index.php?title=special:search&search=${encodeURIComponent(
        this.searchInput
      )}`;
    }
  }

  search(): void {
    if (this.searchInput) {
      location.href = `https://librewiki.net/index.php?title=special:search&search=${encodeURIComponent(
        this.searchInput
      )}&fulltext=search`;
    }
  }

  async getMedaiwikiSearch(key: string): Promise<void> {
    try {
      const { data } = await axios.get<AutoCompleteResponse>(
        "https://librewiki.net/api.php",
        {
          params: {
            action: "query",
            list: "search",
            origin: window.origin,
            format: "json",
            srsearch: key,
            srlimit: 10,
          },
        }
      );
      this.autoCompleteItem = [];
      data.query.search.forEach((item) =>
        this.autoCompleteItem.push(item.title)
      );
      return;
    } catch (err) {
      console.log(err);
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/style-variables.scss";
.liberty-navbar {
  top: 0;
  z-index: 18 !important;
  position: fixed;
  width: 100%;
  @include touch {
    & > .container {
      display: flex;
      padding-left: 0.5rem;
      padding-right: 0.5rem;
      padding-bottom: 0.5rem;
    }
    .navbar-text {
      display: none;
    }
    .navbar-menu {
      flex: 1;
      display: flex !important;
      flex-wrap: wrap;
      padding: 0;
      background-color: inherit;
      justify-content: space-between;
    }
    .navbar-start,
    .navbar-end {
      display: flex;
      flex-direction: row;
    }
    .navbar-item {
      padding: 0.25rem !important;
    }
    .navbar-caret {
      display: none;
    }
    .user-gravatar-wrapper {
      display: flex;
    }
    .navbar-end {
      flex: 0 0 100%;
    }
    .search-box-wrapper {
      flex: 1;
      .input,
      .icon.is-left,
      .button {
        height: 2rem;
      }
      .button {
        padding-top: 0;
        padding-bottom: 0;
      }
      .fa {
        font-size: 1.1rem;
      }
    }
    .navbar-search-input {
      width: 100%;
    }
    .user-items {
      .fa {
        font-size: 1rem;
      }
    }
    .user-gravatar {
      max-height: 1.8rem;
    }
  }
  @include desktop {
    .search-box-wrapper {
      margin-right: 0.3rem;
    }
    .navbar-start .navbar-item .icon:first-child {
      margin-right: 0.5rem;
    }
    .user-items {
      order: 3;
    }
  }
  .navbar-menu {
    box-shadow: none;
  }
  .dropdown + .dropdown {
    margin: 0;
  }
  .navbar-start .navbar-item {
    padding: 0.5rem 0.7rem;
    .icon {
      .fa {
        font-size: 1rem;
      }
    }
  }
  .navbar-item {
    white-space: nowrap;
  }
  .navbar-end {
    align-items: center;
  }
  .search-box-wrapper {
    .button:focus {
      box-shadow: none;
    }
    .autocomplete .dropdown-item{
      text-align: left;
      white-space: pre-line;
      word-break: break-all;
    }
  }
  .navbar-search-input {
    input:focus,
    input:active,
    input:hover {
      border-color: rgb(219, 219, 219);
      box-shadow: inset 0 1px 2px hsla(0, 0%, 4%, 0.1);
    }
  }
  .user-items {
    display: flex;
    flex-direction: row;
  }
  .user-gravatar {
    max-height: 2rem;
    border-radius: 0.35rem;
    border: 1px solid #e1e8ed;
  }
}
</style>
