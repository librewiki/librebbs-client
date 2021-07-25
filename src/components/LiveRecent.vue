<template lang="pug">
nav.panel.live-recent
  .live-recent-header
    .tabs.is-toggle.is-fullwidth
      ul
        li
          a(
            :class="{ 'is-active': mode === 'DOCUMENT' }",
            @click="mode = 'DOCUMENT'; fetchLiveRecent()",
            role="button"
          ) 최근 바뀜
        li
          a(
            :class="{ 'is-active': mode === 'TOPIC' }",
            @click="mode = 'TOPIC'; fetchLiveRecent()",
            role="button"
          ) 최근 토론
  .live-recent-content
    a.panel-block(
      v-for="item in items",
      :href="item.to",
      :key="item.key",
      :title="item.text"
    )
      span.live-recent-time [{{ item.timeString }}]
      span.live-recent-tag(v-if="item.isNew") [New]
      span.live-recent-title {{ item.text }}
  .live-recent-footer.panel-block
    a.button.is-primary.is-small(
      href=`https://librewiki.net/wiki/${encodeURIComponent('특수:최근바뀜')}`
    ) 더보기
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import axios from "axios";
import moment from "moment";

const documentNamespaces = "0|4|10|12|14|1600";
const topicNamespaces = "1|3|5|7|9|11|13|15|2600|1601|1063|3604|3605";
const limit = 10;

interface RecentChangeResponse {
  query: {
    recentchanges: RecentChangeResponseItem[];
  };
}

interface RecentChangeResponseItem {
  timestamp: string;
  type: string;
  title: string;
}

interface RecentChangeItem {
  key: string;
  timeString: string;
  isNew: boolean;
  text: string;
  to: string;
}

@Component
export default class LiveRecent extends Vue {
  error = false;
  pending = false;
  items: RecentChangeItem[] = [];
  mode = "DOCUMENT";

  async fetchLiveRecent(): Promise<void> {
    if (window.innerWidth < 769) return;
    if (this.pending) return;
    this.pending = true;
    try {
      const { data } = await axios.get<RecentChangeResponse>(
        "https://librewiki.net/api.php",
        {
          params: {
            action: "query",
            origin: window.origin,
            list: "recentchanges",
            rcprop: "title|timestamp",
            rcshow: "!bot|!redirect",
            rctype: "edit|new",
            rclimit: limit,
            format: "json",
            rcnamespace:
              this.mode === "DOCUMENT" ? documentNamespaces : topicNamespaces,
            rctoponly: true,
          },
        }
      );
      this.items = data.query.recentchanges.map(
        (item: RecentChangeResponseItem) => {
          let timeString;
          const updateTime = moment(item.timestamp);
          if (updateTime < moment().subtract(1, "day")) {
            timeString = updateTime.fromNow();
          } else {
            timeString = updateTime.format("HH[:]mm[:]ss");
          }
          const isNew = item.type === "new";
          return {
            key: timeString + item.title,
            timeString,
            isNew,
            text: item.title,
            to: `https://librewiki.net/wiki/${encodeURIComponent(item.title)}`,
          };
        }
      );
    } catch (err) {
      console.log(err);
      this.error = true;
    } finally {
      this.pending = false;
    }
  }
  mounted(): void {
    this.fetchLiveRecent();
    setInterval(this.fetchLiveRecent, 30 * 1000);
  }
}
</script>

<style lang="scss">
@import "@/assets/style-variables.scss";
.live-recent {
  width: 15rem;
  .live-recent-header {
    background-color: $background;
    a {
      padding: 0.6rem;
      border-bottom-right-radius: 0 !important;
      border-bottom-left-radius: 0 !important;
      border-bottom: 0 !important;
    }
    .is-active {
      background-color: white;
      border-bottom: 2px solid $primary !important;
    }
  }
  .live-recent-content {
    background-color: white;
    font-size:0.8rem;
  }
  .live-recent-tag {
    color: #b73333;
  }
  .live-recent-time {
    flex-shrink: 0;
    margin-right: 0.2em;
  }
  .live-recent-title {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .live-recent-footer {
    justify-content: flex-end;
    background-color: $background;
    border-bottom-left-radius: $radius;
    border-bottom-right-radius: $radius;
  }
}
</style>
