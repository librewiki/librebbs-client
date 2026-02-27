<template lang="pug">
.card.topic-comment-card
  header.card-header
    .topic-comment-info
      a(
        :href="`https://librewiki.net/wiki/${encodeURIComponent('사용자:' + comment.authorName)}`"
      )
        .topic-comment-author {{ comment.authorName }}
      span.comment-author-link
        | (
        a(
          @click.stop,
          :href="`https://librewiki.net/wiki/${encodeURIComponent('사용자토론:' + comment.authorName)}`"
        ) 토론
        | |
        a(
          @click.stop,
          :href="`https://librewiki.net/wiki/${encodeURIComponent('특수:기여/' + comment.authorName)}`"
        ) 기여
        | )
    .topic-comment-tools
      .topic-comment-date {{ dateString }}
      b-dropdown.is-right
        button.button.is-small(slot="trigger")
          b-icon(icon="angle-down")
        b-dropdown-item.comment-tool-button(@click="quote") 인용
        template(v-if="user.isAdmin")
          hr.dropdown-divider
          template(v-if="comment.isHidden")
            b-dropdown-item.comment-tool-button(@click="unhide") 숨기기 취소
            b-dropdown-item.comment-tool-button(@click="showHidden") 내용 보기
          b-dropdown-item.comment-tool-button(@click="hide", v-else) 숨기기
          b-dropdown-item.comment-tool-button(
            :href="`https://librewiki.net/wiki/${encodeURIComponent('특수:차단/' + comment.authorName)}`"
          ) 사용자 차단

  .card-comment(:class="{ 'hidden-comment': comment.isHidden }")
    viewer(:initialValue="comment.content", v-if="comment.content")
    p(v-else) 이 의견은 관리자에 의해 숨겨졌습니다.
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { hideComment, unhideComment, getComment } from "@/api";
import type { Comment } from "@/api";
import store from "@/store";
import "@toast-ui/editor/dist/toastui-editor-viewer.css";
import { Viewer } from "@toast-ui/vue-editor";
import { DateTime } from "luxon";

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

  get dateString(): string {
    return DateTime.fromISO(this.comment.createdAt).toLocaleString(
      DateTime.DATETIME_MED
    );
  }

  async hide(): Promise<void> {
    const data = await hideComment(this.comment.id);
    this.$emit("update:comment", data);
  }

  async unhide(): Promise<void> {
    const data = await unhideComment(this.comment.id);
    this.$emit("update:comment", data);
  }

  async showHidden(): Promise<void> {
    const data = await getComment(this.comment.id, true);
    this.$emit("update:comment", data);
  }

  quote(): void {
    console.log(this.comment.content);
    const content = this.comment.content
      ?.replaceAll("<br>", "")
      .replaceAll("\n", "\n> ");
    const value = `>${this.dateString}에 ${this.comment.authorName} 님이 작성:
>${content}
`;
    store.commit("setEditorOpen", true);
    store.commit("setEditorInitialValue", value);
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
    margin-left: 0.5rem;
    font-size: 0.8rem;
  }
  .topic-comment-date {
    margin-right: 1rem;
    word-break: keep-all;
  }
  @media screen and (max-width: 768px) {
    .topic-comment-date {
      margin-right: 0.2rem;
    }
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
  .comment-tool-button {
    cursor: pointer;
  }
  .comment-tool-button:hover {
    color: $navbar-item-hover-color;
    background-color: $primary;
    transition: 0.25s;
  }
}
</style>
