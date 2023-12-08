<template>
  <div>
    <div class="like">
      <button @click="incrementLike">❤</button>
      <div>
        {{ post.likes }}
      </div>
    </div>
    <Hashtag
      v-for="tag in post.hashtags"
      :key="tag"
      :hashtag="tag"
      @setHashtag="setHashtag"
    />
  </div>
</template>

<script>
import Hashtag from "./Hashtag.vue";
export default {
  components: {
    Hashtag,
  },
  props: {
    post: {
      type: Object,
    },
  },
  setup(props, ctx) {
    // console.log(props.post.title);
    const setHashtag = (tag) => {
      ctx.emit("setHashtag", tag);
    };

    const incrementLike = () => {
      props.post.likes++;
    };

    return {
      //   post: props.post, //vue do this automaticaly
      setHashtag,
      incrementLike,
    };
  },
};
</script>

<style scoped>
.like {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
}
button {
  border: none;
  background: none;
  cursor: pointer;
  font-size: 18px;
}
</style>
