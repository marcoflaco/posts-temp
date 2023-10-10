<template>
  <div class="background"></div>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-6">
        <PostsList @reorder="handleReorder" :items="posts" />
      </div>
      <div class="col-md-6">
        <ActionsList :actions="actions" @time-travel="handleTimeTravel" />
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";

import PostsList from "./components/PostsList.vue";
import ActionsList from "./components/ActionsList.vue";
import { moveItemWithinArray } from "./utils";
import { fetchPosts } from "./service";

export default {
  name: "App",
  components: {
    PostsList,
    ActionsList,
  },
  setup() {
    const actions = ref([]);
    const posts = ref([]);

    // re-oder element in the array and add the action to the actions array
    function handleReorder(action) {
      posts.value = moveItemWithinArray(posts.value, action.from, action.to);
      actions.value.unshift(action);
    }

    function handleTimeTravel(toIndex) {
      for (let i = 0; i <= toIndex; i++) {
        const action = actions.value.shift();
        posts.value = moveItemWithinArray(posts.value, action.to, action.from);
      }
    }

    onMounted(() => {
      fetchPosts()
        .then((data) => {
          posts.value = data;
        })
        // handle error properly
        .catch((error) => console.log(error));
    });

    return {
      actions,
      posts,
      handleReorder,
      handleTimeTravel,
    };
  },
};
</script>

<style>
.background {
}
</style>
