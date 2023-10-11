<template>
  <div class="mt-1 mt-md-5">
    <h2 class="title-color">Sortable Post List</h2>
    <TransitionGroup name="list">
      <ol class="card mt-2" v-for="(post, index) in items" :key="post.id">
        <li class="card-body d-flex justify-content-between align-items-center">
          <span class="font-color-grey">Post {{ post.id }}</span>
          <div class="d-flex flex-column">
            <button
              @click="moveUp(index)"
              v-if="index > 0"
              aria-label="move-up"
              class="btn"
            >
              <i class="bi bi-chevron-compact-up font-color-grey"></i>
            </button>
            <button
              @click="moveDown(index)"
              aria-label="move-down"
              v-if="index < items.length - 1"
              class="btn"
            >
              <i class="bi bi-chevron-compact-down font-color-grey"></i>
            </button>
          </div>
        </li>
      </ol>
    </TransitionGroup>
  </div>
</template>

<script>
import "./PostsList.css";

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
