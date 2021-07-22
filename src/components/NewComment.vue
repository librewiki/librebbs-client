<template lang="pug">
.new-topic
  .field
    label.label 새 코멘트
  .field
    .control
      textarea.textarea(placeholder="내용", v-model="content")
  .field
    .control
      button.button.is-link(@click="handleSubmit") 작성
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { postComment } from "@/api";

@Component
export default class NewComment extends Vue {
  @Prop() topicId!: number;
  @Prop() refresh!: () => void;

  content = "";

  async handleSubmit(): Promise<void> {
    await postComment(this.topicId, this.content);
    this.refresh();
  }
}
</script>
