<template lang="pug">
.new-topic
  .field
    label.label 새 주제
    .control
      input.input(type="text", placeholder="제목", v-model="title")
  .field
    .control
      textarea.textarea(placeholder="내용", v-model="content")
  .field
    .control
      button.button.is-link(@click="handleSubmit") 작성
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { postTopic } from "@/api";

@Component
export default class NewTopic extends Vue {
  @Prop() boardId!: number;

  title = "";
  content = "";

  async handleSubmit(): Promise<void> {
    await postTopic(this.boardId, this.title, this.content);
    location.reload();
  }
}
</script>
