<template lang="pug">
.page-topic
  .topic
    h3.title.topic-title {{ topic.title }}
  topic-content-card.topic-content-card(
    v-for="content in topic.contents",
    :key="content.id",
    :content="content"
  )
  hr
  //- .add-topic-form
  //-   h3.title 새 댓글
  //-   b-field
  //-     b-input(
  //-       type="textarea",
  //-       v-model="model.wikitext"
  //-     )
  //-   .right-wrapper
  //-     button.button.is-primary(@click="submit") 작성
</template>

<script lang="ts">
import TopicContentCard from "@/components/TopicContentCard.vue";

import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
    TopicContentCard,
  },
})
export default class TopicList extends Vue {
  topic = {
    title: "topic 1",
    contents: [
      {
        authorName: "Author1",
        text: "Text1",
      },
      {
        authorName: "Author1",
        text: "Text1",
      },
      {
        authorName: "Author1",
        text: "Text1",
      },
      {
        authorName: "Author1",
        text: "Text1",
      },
      {
        authorName: "Author1",
        text: "Text1",
      },
    ],
  };
  busy = false;
}
</script>

<style lang="scss">
.page-topic {
  .topic-title {
    margin-bottom: 1rem;
  }
  .topic-content-card {
    margin-bottom: 1rem;
  }
}
</style>
