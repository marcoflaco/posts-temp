<template>
  <div>
    <h2>Sortable Post List</h2>
    <TransitionGroup name="list">
      <ol class="card mt-2" v-for="(post, index) in items" :key="post.id">
        <li class="card-body">
          <span>Post {{ post.id }}</span>
          <button @click="moveUp(index)" v-if="index > 0" aria-label="move-up">
            ↑
          </button>
          <button
            @click="moveDown(index)"
            aria-label="move-down"
            v-if="index < items.length - 1"
          >
            ↓
          </button>
        </li>
      </ol>
    </TransitionGroup>
  </div>
</template>

<script>
export default {
  name: "PostsList",
  emits: ["reorder"],
  props: {
    items: {
      type: Array,
    },
  },
  setup(props, { emit }) {
    function moveUp(index) {
      emit("reorder", {
        message: `Moved Post ${
          props.items[index].id
        } from index ${index} to index ${index - 1}`,
        from: index,
        to: index - 1,
      });
    }

    function moveDown(index) {
      emit("reorder", {
        message: `Moved Post ${
          props.items[index].id
        } from index ${index} to index ${index + 1}`,
        from: index,
        to: index + 1,
      });
    }

    return {
      moveUp,
      moveDown,
    };
  },
};
</script>
