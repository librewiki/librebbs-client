<template lang="pug">
.card.topic-comment-card
  header.card-header
    .topic-comment-info
      .topic-comment-author {{ comment.author_name }}
      .topic-comment-date {{ $moment(comment.created_at).format('LLLL') }}
  .card-comment(:class="{ 'hidden-comment': comment.is_hidden }")
    div {{ comment.content }}
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import type { Comment } from "@/api";

@Component
export default class TopicContentCard extends Vue {
  @Prop() comment!: Comment;
}
</script>

<style lang="scss">
@import "@/assets/style-variables.scss";
.topic-comment-card {
  .card-header {
    background-color: $background;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    box-shadow: none;
  }
  .topic-comment-info {
    flex: 1;
    display: flex;
    justify-content: space-between;
  }
  .topic-comment-admin {
    margin-left: 1rem;
  }
  .card-comment {
    padding: 1rem;
  }
  .hidden-comment {
    background-color: $light;
  }
}
</style>
