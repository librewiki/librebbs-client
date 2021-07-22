<template lang="pug">
.new-topic
  .field
    label.label 새 주제
    .control
      input.input(type="text", placeholder="제목", v-model="title")
  .field
    editor(
      :options="editorOptions",
      initialEditType="wysiwyg",
      ref="toastuiEditor"
    )
  .field
    .control
      button.button.is-link(@click="handleSubmit") 작성
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { postTopic } from "@/api";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/vue-editor";

@Component({
  components: {
    Editor,
  },
})
export default class NewTopic extends Vue {
  @Prop() boardId!: number;

  title = "";
  editorOptions = {
    usageStatistics: false,
    initialEditType: "wysiwyg",
    hideModeSwitch: true,
  };
  $refs!: {
    toastuiEditor: Editor;
  };

  mounted(): void {
    this.$refs.toastuiEditor.invoke(
      "addHook",
      "addImageBlobHook",
      (
        fileOrBlob: File | Blob,
        callback: (url: string, text?: string) => void
      ): void => {
        callback("https://todo");
      }
    );
  }

  async handleSubmit(): Promise<void> {
    const markdown = this.$refs.toastuiEditor.invoke("getMarkdown");
    await postTopic(this.boardId, this.title, markdown);
    location.reload();
  }
}
</script>
