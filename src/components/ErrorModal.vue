<template lang="pug">
.error-modal.modal(
  ref="errormodal",
  :class="{ 'is-active': `data.isactive` }"
)
  .modal-background(@click="modalclose")
  #ErrorModal.modal-content
    span {{ data.errormsg }}
  button.modal-close.is-large(aria-label="close", @click="modalclose")
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import store from "@/store";

@Component
export default class ErrorModal extends Vue {
  data = {
    isactive: false,
    errormsg: store.state.modalError,
  };

  mounted(): void {
    this.data.isactive = true;
  }

  modalclose(): void {
    this.data.isactive = false;
    store.commit("setErrormodal", null);
  }
}
</script>

<style lang="scss">
@import "@/assets/style-variables.scss";
#ErrorModal {
  width: 50vw;
  padding: 5rem;
  text-align: center;
  background-color: $background;
  border-radius: 2rem;
}
</style>
