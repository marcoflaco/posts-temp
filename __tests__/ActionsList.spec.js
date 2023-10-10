import { mount } from "@vue/test-utils";
import ActionsList from "@/components/ActionsList.vue";

describe("ActionsList.vue", () => {
  it('shows "NO Actions applied" when there are no actions', () => {
    const wrapper = mount(ActionsList, {
      props: {
        actions: [],
      },
    });

    expect(wrapper.text()).toContain("NO Actions applied");
  });

  it("renders the correct number of action items", () => {
    const mockActions = [
      { message: "Action 1" },
      { message: "Action 2" },
      { message: "Action 3" },
    ];

    const wrapper = mount(ActionsList, {
      props: {
        actions: mockActions,
      },
    });

    const actionItems = wrapper.findAll(".list-group-item");
    expect(actionItems.length).toBe(mockActions.length);
  });

  it('emits "time-travel" event with correct index when "Time travel" button is clicked', async () => {
    const mockActions = [
      { message: "Action 1" },
      { message: "Action 2" },
      { message: "Action 3" },
    ];

    const wrapper = mount(ActionsList, {
      props: {
        actions: mockActions,
      },
    });

    // Let's click the second action's time travel button
    await wrapper.findAll(".list-group-item button").at(1).trigger("click");

    // Check emitted events
    const emittedEvents = wrapper.emitted();
    expect(emittedEvents["time-travel"]).toBeTruthy();
    expect(emittedEvents["time-travel"][0]).toEqual([1]); // [1] is the index of the second action
  });
});
