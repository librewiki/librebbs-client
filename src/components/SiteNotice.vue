<template lang="pug">
.liberty-notice(v-if!=err)
    .sitenotice
        viewer(:initialValue="item.text" v-if="item.text")
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
    err = false;
    item: SiteNoticeitem = {
        title: "",
        pageid: 0,
        text: "",
    };
    
    async fetchSiteNotice(): Promise<void> {
        try {
            const { data } = await axios.get<SiteNoticeResponse>(
                "https://librewiki.net/api.php", {
                    params: {
                        action : "parse",
                        origin: window.origin,
                        page: "mediawiki:sitenotice",
                        prop: "text",
                        formatversion: "2",
                        format:"json",
                    },
                }
            );
            this.item = data.parse;
            this.err = false;
            return
        }
        catch (err) {
            console.log(err);
            this.err = true;
        }
    }

    mounted() : void {
        this.fetchSiteNotice();
    }
}
</script>

<style lang="scss">
@import "@/assets/style-variables.scss";
.liberty-notice {
    padding:0.5rem;
    background-color:#d9edf7;
    border-radius:0.25rem;
    margin-bottom:1rem;
    text-align:center;
    
}
    .mw-parser-output {
        font-size:1rem;
    }

</style>