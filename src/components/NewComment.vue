<template lang="pug">
.new-topic
  .field
    label.label 새 코멘트
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
import { postComment } from "@/api";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/vue-editor";

@Component({
  components: {
    Editor,
  },
})
export default class NewComment extends Vue {
  @Prop() topicId!: number;
  @Prop() refresh!: () => void;

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
        callback: (url: string, text?: string) => void,
        source: string
      ): void => {
        callback("https://todo");
      }
    );
  }

  async handleSubmit(): Promise<void> {
    const markdown = this.$refs.toastuiEditor.invoke("getMarkdown");
    await postComment(this.topicId, markdown);
    this.$refs.toastuiEditor.invoke("reset");
    this.refresh();
  }
}
</script>
