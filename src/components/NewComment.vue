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
import { postFile, postComment } from "@/api";
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

  toBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve((reader.result as string).split(",")[1]);
      reader.onerror = (error) => reject(error);
    });
  }

  mounted(): void {
    type Callback = (url: string, text?: string) => void;
    this.$refs.toastuiEditor.invoke(
      "addHook",
      "addImageBlobHook",
      async (file: File, callback: Callback): Promise<void> => {
        const { path } = await postFile(file.name, await this.toBase64(file));
        callback(`https://image.librewiki.net/${path}`);
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
