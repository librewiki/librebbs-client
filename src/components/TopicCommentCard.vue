<template lang="pug">
.card.topic-comment-card
  header.card-header
    .topic-comment-info
      a(:href="`https://librewiki.net/wiki/${encodeURIComponent('사용자:' + comment.author_name )}`")
        .topic-comment-author {{ comment.author_name }}
      a.comment-author-link(:href="`https://librewiki.net/wiki/${encodeURIComponent('사용자토론:' + comment.author_name )}`") (토론)
    .topic-comment-tools
      .topic-comment-date {{ $moment(comment.created_at).add(9,'hour').format('LLLL') }}
      .admin-tools.dropdown.is-right(
        v-if="user.isAdmin",
        v-bind:class="{ 'is-active': adminDropdown }")
        .dropdown-trigger
          button.button.is-small(@click="adminDropdownToggle",v-on:blur="adminDropdownToggle")
            b-icon(icon="angle-down")
        .dropdown-menu
          .dropdown-content
            template(v-if="comment.is_hidden")
              .dropdown-item.admin-button(@click="unhide") 숨기기 취소
              .dropdown-item.admin-button(@click="showHidden") 보기
            .dropdown-item.admin-button(@click="hide" v-else) 숨기기
            a.dropdown-item.admin-button(:href="`https://librewiki.net/wiki/${encodeURIComponent('특수:차단/' + comment.author_name )}`") 사용자 차단
      
  .card-comment(:class="{ 'hidden-comment': comment.is_hidden }")
    viewer(:initialValue="comment.content" v-if="comment.content")
    p(v-else) 이 의견은 관리자에 의해 숨겨졌습니다.
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { hideComment, unhideComment, getComment } from "@/api";
import type { Comment } from "@/api";
import store from "@/store";
import "@toast-ui/editor/dist/toastui-editor-viewer.css";
import { Viewer } from "@toast-ui/vue-editor";

@Component({
  components: {
    Viewer,
  },
})
export default class TopicContentCard extends Vue {
  @Prop() comment!: Comment;
  adminDropdown = false;

  get user(): typeof store.state.user {
    return store.state.user;
  }

  async hide() {
    const data = await hideComment(this.comment.id);
    this.$emit("update:comment", data);
  }

  async unhide() {
    const data = await unhideComment(this.comment.id);
    this.$emit("update:comment", data);
  }

  async showHidden() {
    const data = await getComment(this.comment.id, true);
    this.$emit("update:comment", data);
  }
  adminDropdownToggle(): void {
    if (this.adminDropdown == true) {
      this.adminDropdown = false;
    } else {
      this.adminDropdown = true;
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/style-variables.scss";
.topic-comment-card {
  .card-header {
    background-color: $background;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    box-shadow: none;
  }
  .topic-comment-info {
    flex: 1;
    display: flex;
    justify-content: flex-start;
  }
  .topic-comment-tools {
    flex: 1;
    display: flex;
    justify-content: flex-end;
  }
  .comment-author-link {
    margin-left:0.5rem;
    font-size:0.8rem;
  }
  .topic-comment-date {
    margin-right:1rem;
  }
  .topic-comment-admin {
    margin-left: 1rem;
  }
  .card-comment {
    padding: 1rem;
  }
  .hidden-comment {
    background-color: $light;
  }
  .admin-button {
    cursor: pointer;
  }
  .admin-button:hover {
    color: $navbar-item-hover-color;
    background-color: $primary;
    transition: 0.25s;
  }
}
</style>
