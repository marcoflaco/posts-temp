<template>
  <h2>Actions</h2>
  <div class="card">
    <TransitionGroup name="list">
      <div v-if="!actions.length">NO Actions applied</div>
      <ul
        v-else
        class="list-group"
        v-for="(action, index) in actions"
        :key="action.message"
      >
        <li class="list-group-item">
          {{ action.message }}
          <button @click="timeTravel(index)">Time travel</button>
        </li>
      </ul>
    </TransitionGroup>
  </div>
</template>

<script>
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
