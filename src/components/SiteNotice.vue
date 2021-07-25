<template lang="pug">
.liberty-notice(v-if="done")
  #sitenotice
    viewer(:initialValue="item.text", v-if="item.text")
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import axios from "axios";
import { Viewer } from "@toast-ui/vue-editor";

interface SiteNoticeResponse {
  parse: SiteNoticeitem;
}

interface SiteNoticeitem {
  title: string;
  pageid: number;
  text: string;
}

@Component({
  components: {
    Viewer,
  },
})
export default class SiteNotice extends Vue {
  done = false;
  item: SiteNoticeitem = {
    title: "",
    pageid: 0,
    text: "",
  };

  async fetchSiteNotice(): Promise<void> {
    try {
      const { data } = await axios.get<SiteNoticeResponse>(
        "https://librewiki.net/api.php",
        {
          params: {
            action: "parse",
            origin: window.origin,
            page: "mediawiki:sitenotice",
            prop: "text",
            formatversion: "2",
            format: "json",
          },
        }
      );
      this.item = data.parse;
      this.done = true;
      return;
    } catch (err) {
      console.log(err);
      this.done = false;
    }
  }

  mounted(): void {
    this.fetchSiteNotice();
  }
}
</script>

<style lang="scss">
@import "@/assets/style-variables.scss";
.liberty-notice {
  padding: 0.5rem;
  background-color: #d9edf7;
  border-radius: 0.25rem;
  margin-bottom: 1rem;
  text-align: center;
}
#sitenotice .mw-parser-output {
  font-size: 1rem;
  color: rgb(49, 112, 143);
}
#sitenotice .mw-parser-output ul {
  color: rgb(49, 112, 143);
  list-style-image: none;
  list-style-type: none;
  text-align: center;
  line-height: 1.8rem;
}
#sitenotice .mw-parser-output ul li::before {
  content: none;
}
</style>