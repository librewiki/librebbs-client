<template lang="pug">
.card.topic-comment-card
  header.card-header
    .topic-comment-info
      a(:href="`https://librewiki.net/wiki/${encodeURIComponent('사용자:' + comment.author_name )}`")
        .topic-comment-author {{ comment.author_name }}
      .admin-tools(v-if="user.isAdmin")
        template(v-if="comment.is_hidden")
          button.button.is-small(@click="unhide") 숨기기 취소
          button.button.is-small(@click="showHidden") 보기
        button.button.is-small(@click="hide" v-else) 숨기기
      .topic-comment-date {{ $moment(comment.created_at).add(9,'hour').format('LLLL') }}
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
    justify-content: space-between;
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
}
</style>
