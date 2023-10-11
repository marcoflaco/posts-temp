<template>
  <div class="card mb-3 mt-1 mt-md-5">
    <div class="card-header">List of actions commited</div>
    <div class="m-3">
      <TransitionGroup name="list">
        <div v-if="!actions.length">No actions applied</div>
        <ul
          v-else
          class="list-group"
          v-for="(action, index) in actions"
          :key="action.message"
        >
          <li
            class="list-group-item d-flex flex-column flex-lg-row justify-content-between align-items-center font-color-grey"
          >
            {{ action.message }}
            <button
              @click="timeTravel(index)"
              class="custom-light-green-btn px-3 py-2"
            >
              Time travel
            </button>
          </li>
        </ul>
      </TransitionGroup>
    </div>
  </div>
</template>

<script>
import "./ActionsList.css";

export default {
  name: "ActionList",
  props: {
    actions: {
      type: Array,
      required: true,
    },
  },
  setup(props, { emit }) {
    const timeTravel = (index) => {
      emit("time-travel", index);
    };

    return {
      timeTravel,
    };
  },
};
</script>
