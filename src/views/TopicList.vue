<template lang="pug">
.page-topic-list
  ul
    li(v-for="topic in topics")
      h2 {{ topic.title }}
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class TopicList extends Vue {
  topics = [
    {
      title: "topic 1",
    },
    {
      title: "topic 2",
    },
  ];
}
</script>
