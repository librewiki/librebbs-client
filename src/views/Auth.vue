<template lang="pug">
.page-auth {{ error }}
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { getToken } from "@/auth";
import store from "@/store";
import type { MetaInfo } from "vue-meta";

@Component({
  name: "Auth",
  metaInfo(): MetaInfo {
    return {
      title: "로그인",
    };
  },
})
export default class AuthPage extends Vue {
  error = "";

  async beforeMount(): Promise<void> {
    if (typeof this.$route.query.code !== "string") {
      this.error = "로그인 중 에러가 발생했습니다.";
      return;
    }
    try {
      await getToken(this.$route.query.code);
    } catch {
      this.error = "로그인 중 에러가 발생했습니다.";
      return;
    }
    if (typeof this.$route.query.state === "string") {
      this.$router.replace(this.$route.query.state);
    } else {
      this.$router.replace("/");
    }
    store.dispatch("fetchUserInfo");
  }
}
</script>
