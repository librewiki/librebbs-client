<template lang="pug">
.modal(v-bind:class="{ 'is-active': editorOpen }")
  .modal-background
  .modal-card
    .modal-card-head
      label.modal-card-title 새 주제
      button.delete(@click="modalclose")
    .modal-card-body
      .new-topic
        .field
          .control
            input.input(type="text", placeholder="제목", v-model="title")
        .field
          editor(
            :options="editorOptions",
            initialEditType="wysiwyg",
            ref="toastuiEditor"
          )
    .modal-card-foot
      .field
        span(v-if="!user.isLoggedIn") ⚠️현재 로그인되어 있지 않습니다. 글 작성 시 IP가 노출됩니다.
        .control
          button.button.is-link(@click="handleSubmit") 작성
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { postFile, postTopic } from "@/api";
import type { Board } from "@/api";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/vue-editor";
import "@toast-ui/editor/dist/i18n/ko-kr";
import store from "@/store";

@Component({
  components: {
    Editor,
  },
})
export default class NewTopic extends Vue {
  title = "";
  editorOptions = {
    usageStatistics: false,
    initialEditType: "wysiwyg",
    hideModeSwitch: true,
    language: "ko-KR",
  };
  $refs!: {
    toastuiEditor: Editor;
  };

  get board(): Board {
    return store.state.board;
  }

  get user(): typeof store.state.user {
    return store.state.user;
  }

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
        if (file.size > 10 * 1000000) {
          store.commit(
            "setErrormodal",
            "업로드할 파일 용량은 10MB까지만 가능합니다."
          );
          return;
        } else {
          const { path } = await postFile(file.name, await this.toBase64(file));
          callback(`https://image.librewiki.net/${path}`);
        }
      }
    );
  }

  async handleSubmit(): Promise<void> {
    const markdown = this.$refs.toastuiEditor.invoke("getMarkdown");
    const topic = await postTopic(this.board.id, this.title, markdown);
    this.$router.push(`/${this.board.name}/${topic.id}`);
    this.modalclose();
  }

  get editorOpen(): boolean {
    return store.state.editorOpen;
  }

  modalclose(): void {
    store.commit("setEditorOpen", false);
  }
}
</script>

<style lang="scss">
@import "@/assets/style-variables.scss";
.modal-card-foot .field {
  width: 100%;
}
.control {
  text-align: right;
}
.button:hover {
  background-color: $primary;
  color: white;
  transition: 0.25s;
}
</style>