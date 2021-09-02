<template lang="pug">
nav.liberty-Tools
  .topBtn
    .level-item
      button.button(v-if="canWrite", @click="openWriteModal") 
        b-icon(icon="edit")
        span 글쓰기
  nav#liberty-scollTools(:class="{ withWriteTools: isactive }")
    button#btnBottomWrite.scroll-button(
      v-if="canWrite && isactive",
      @click="openWriteModal"
    )
      b-icon(icon="edit")
    button.scroll-button(@click="scrollUp")
      b-icon(icon="angle-up")
    button.scroll-button(@click="scrollDown")
      b-icon(icon="angle-down")
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import store from "@/store";

@Component
export default class Tools extends Vue {
  isactive = false;
  get canWrite(): boolean {
    return store.state.canWrite;
  }

  openWriteModal(): void {
    store.commit("setEditorOpen", true);
  }

  mounted(): void {
    document.addEventListener("scroll", this.scrollButton);
  }

  scrollButton(): void {
    let nowscroll = window.scrollY;
    if (nowscroll > 300) {
      this.isactive = true;
    } else {
      this.isactive = false;
    }
  }
  scrollDown(): void {
    window.scroll({
      left: 0,
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  }

  scrollUp(): void {
    window.scroll({
      left: 0,
      top: 0,
      behavior: "smooth",
    });
  }
}
</script>

<style lang="scss">
@import "@/assets/style-variables.scss";

@media screen and (max-width: 768px) {
  #liberty-scollTools {
    z-index: 20;
  }
}
#liberty-scollTools {
  position: fixed;
  right: 0px;
  bottom: 0px;
  background: $primary;
  height: 40px;
  overflow: hidden;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-radius: 5px 5px 0 0;
}

#liberty-scollTools.withWriteTools {
  grid-template-columns: 1fr 1fr 1fr;
}

#liberty-scollTools .scroll-button {
  width: 40px;
  font-size: 40px;
  line-height: 40px;
  color: white;
  text-align: center;
  cursor: pointer;
  background: $primary;
  border: 0;
}

#liberty-scollTools .scroll-button:hover {
  background-color: #2774dc;
  transition: 500ms;
}

#liberty-scollTools .scroll-button#btnBottomWrite {
  font-size: 25px;
}
</style>
