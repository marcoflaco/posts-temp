import { flushPromises, shallowMount } from "@vue/test-utils";
import App from "@/App.vue";
// import { moveItemWithinArray } from "@/utils";
import { fetchPosts } from "@/service";

jest.mock("@/service", () => {
  return {
    fetchPosts: jest.fn(),
  };
});

describe("App.vue", () => {
  beforeEach(() => {
    fetchPosts.mockResolvedValue([
      { id: 1, title: "post1", body: "body1" },
      { id: 2, title: "post2", body: "body2" },
      { id: 3, title: "post3", body: "body3" },
    ]);
  });
  it("renders correctly", async () => {
    const wrapper = shallowMount(App);
    await flushPromises();
    expect(wrapper.find(".background").exists()).toBe(true);
    expect(wrapper.findComponent({ name: "PostsList" }).exists()).toBe(true);
    expect(wrapper.findComponent({ name: "ActionsList" }).exists()).toBe(true);
  });
});
