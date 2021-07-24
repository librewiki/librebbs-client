<template lang="pug">
.page-error {{ error }}
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import store from "@/store";

@Component
export default class ErrorPage extends Vue {
  get error(): Error | null {
    return store.state.meta.error;
  }
}
</script>
