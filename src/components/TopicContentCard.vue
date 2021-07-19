<template lang="pug">
.card.topic-content-card
  header.card-header
    .topic-content-info
      .topic-content-author {{ content.authorName || content.ipAddress }}
      .topic-content-date {{ $moment(content.createdAt).format('LLLL') }}
    //- .comment-admin(
    //-   v-if="user.specialPermissions.includes('SET_DISCUSSION_STATUS')"
    //- )
    //-   b-dropdown(position="is-bottom-left")
    //-     button.button.is-small(slot="trigger")
    //-       span 관리
    //-       b-icon(icon="caret-down")
    //-     b-dropdown-item(@click="hide", v-if="comment.status === 'PUBLIC'") 이 코멘트 숨기기
    //-     b-dropdown-item(@click="unhide", v-else) 이 코멘트 숨김 해제
  .card-content(:class="{ 'hidden-content': content.status === 'HIDDEN' }")
    div {{ content.text }}
    //- wiki-html(v-if="comment.status === 'PUBLIC'", :html="comment.html")
    //- div(v-else) 이 코멘트는
    //-   = ' '
    //-   nuxt-link(
    //-     :to="`/article/${encodeURIComponent('사용자:' + comment.hiderName)}`"
    //-   ) 사용자:{{ content.hiderName }}
    //-   | 에 의해 숨겨졌습니다.
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  props: {
    content: Object,
  },
})
export default class TopicContentCard extends Vue {
  @Prop() content?: {
    status: string;
    title: string;
    authorName?: string;
    ipAddress?: string;
  };
}
</script>

<style lang="scss">
@import "@/assets/style-variables.scss";
.topic-content-card {
  .card-header {
    background-color: $background;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    box-shadow: none;
  }
  .topic-content-info {
    flex: 1;
    display: flex;
    justify-content: space-between;
  }
  .topic-content-admin {
    margin-left: 1rem;
  }
  .card-content {
    padding: 1rem;
  }
  .hidden-comment {
    background-color: $light;
  }
}
</style>
