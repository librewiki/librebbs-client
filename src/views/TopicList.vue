<template lang="pug">
.page-topic-list
  ul
    li(v-for="topic in topics")
      .card.topic-card
        .card-body
          span.topic-author
            a(
              :href="`https://librewiki.net/wiki/${encodeURIComponent('사용자:' + topic.author_name)}`"
            ) {{ topic.author_name }}
            a.topic-author-link(
              :href="`https://librewiki.net/wiki/${encodeURIComponent('사용자토론:' + topic.author_name)}`"
            ) (토론) -
          span.topic-updated_at {{ $moment(topic.updated_at).add(9, 'hour').endOf('minute').fromNow() + '에 업데이트됨' }}
          hr
          .topic-name
            router-link(:to="`/${board.name}/${topic.id}`") {{ decodeTitle(topic.title) }}
        .topic-author-img
          gravatar.user-gravatar(
            :hash="genGravataHash(topic)",
            default-img="identicon"
          )
  infinite-loading(@infinite="handleInfinite", :identifier="infiniteId")
    div(slot="no-more")
    div(slot="no-results")
  hr
  new-topic
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import Gravatar from "vue-gravatar";
import InfiniteLoading, { StateChanger } from "vue-infinite-loading";
import { getTopics } from "@/api";
import type { Topic, Board } from "@/api";
import NewTopic from "@/components/NewTopic.vue";
import store from "@/store";
import md5 from "md5";
import { AllHtmlEntities } from "html-entities";

@Component({
  components: {
    NewTopic,
    InfiniteLoading,
    Gravatar,
  },
})
export default class TopicList extends Vue {
  topics: Topic[] = [];
  busy = false;
  infiniteId = +new Date();

  get board(): Board {
    return store.state.board;
  }

  decodeTitle(x: string): string {
    return AllHtmlEntities.decode(x);
  }

  @Watch("$route.params")
  resetInfinite() {
    this.infiniteId = +new Date();
    this.topics = [];
  }

  async handleInfinite($state: StateChanger): Promise<void> {
    const limit = 10;
    const topics = await getTopics(this.board.id, this.topics.length, limit);

    if (topics.length) {
      this.topics.push(...topics);
    }
    if (topics.length < limit) {
      $state.complete();
    } else {
      $state.loaded();
    }
  }

  genGravataHash(topic: Topic): string {
    const key = topic.id + topic.author_name;
    return md5(key);
  }

  mounted(): void {
    if (
      store.state.board.is_active == true &&
      store.state.user.isBlocked == false
    ) {
      store.commit("setCanWrite", true);
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/style-variables.scss";
.topic-card {
  padding: 0.5rem 1rem 0.5rem 1rem;
  border: 1px solid #e1e8ed;
  border-radius: 0.25rem;
  margin-bottom: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.card-body {
  max-width: 80%;
  min-height: 80px;
  flex: 1;
}
.topic-updated_at {
  font-size: 0.8rem;
}
.topic-author-link {
  font-size: 0.75rem;
  margin-left: 0.25rem;
}
.topic-author-img {
  max-width: 80px;
  width: auto;
  height: 80px;
  flex: 1;
}
@media (max-width: 400px) {
  .topic-card {
    display: block;
    align-content: none;
  }
  .card-body {
    flex: none;
  }
  .topic-author-img {
    display: none;
  }
}
</style>
