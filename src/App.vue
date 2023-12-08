<template>
  <label for="search">Search Hashtag: #</label>
  <input
    id="search"
    type="text"
    :value="curruntHashtag"
    @input="setInputHashtag"
  />
  <div class="cards">
    <Card v-for="post in filteredPosts" :key="post">
      <template v-slot:title>
        {{ post.title }}
      </template>
      <template v-slot:content>
        {{ post.content }}
      </template>
      <template v-slot:description>
        <Controles :post="post" @setHashtag="setHashtag" />
      </template>
    </Card>
  </div>
</template>

<script>
import { reactive, ref, computed } from "vue";
// import store from "../composables/store.js";
import Card from "./components/Card.vue";
import Controles from "./components/Controles.vue";
export default {
  name: "App",
  components: { Card, Controles },
  setup(props, ctx) {
    // const { posts } = store;
    const store = reactive({
      posts: [
        {
          id: 1,
          title: "learning vue js3",
          content:
            "'I am learning Vue.js 3 with the composition API. It is great!",
          likes: 10,
          hashtags: ["javascript", "vue", "composition api"],
        },
        {
          id: 2,
          title: "learning vue js3",
          content:
            "Vuex is a state management solution for Vue. It allows you to logically separate entities into modules.",
          likes: 9,
          hashtags: ["javascript", "vue2", "option api"],
        },
        {
          id: 1,
          title: "learning vue js3",
          content: "I am creating a complex front-end app using Vue Router.",
          likes: 15,
          hashtags: ["typescript", "vuex", "pinia"],
        },
        {
          id: 1,
          title: "learning vue js3",
          content:
            "I am writing some tests for my application using Vue Test Utils. Testing is critical by often overlooked due to complexity or time ",
          likes: 18,
          hashtags: ["javascript", "vue/react ", "composition api"],
        },
      ],
    });

    const curruntHashtag = ref(null);
    const setHashtag = (tag) => {
      curruntHashtag.value = tag;
      // console.log(tag);
    };
    const filteredPosts = computed(() => {
      if (!curruntHashtag.value) {
        //if it was null return all posts (at first)
        return store.posts;
      }
      return store.posts.filter((post) => {
        if (post.hashtags.includes(curruntHashtag.value)) {
          return true;
        }
        return false;
      });
    });
    const setInputHashtag = (evt) => {
      // console.log(evt.target.value);
      setHashtag(evt.target.value);
    };

    return {
      filteredPosts,
      curruntHashtag,
      setHashtag,
      setInputHashtag,
    };
  },
};
</script>

<style>
body {
  font-family: sans-serif;
}
input {
  height: 30px;
  font-size: 18px;
  border: none;
  border-bottom: 1px solid grey;
  outline: none;
}
.cards {
  margin: 10px 0;
  display: flex;
}

.title {
  height: 40px;
}

.content {
  height: 150px;
}
</style>
