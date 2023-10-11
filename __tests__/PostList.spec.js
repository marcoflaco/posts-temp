import { mount } from "@vue/test-utils";
import PostsList from "@/components/PostsList.vue";

describe("PostsList.vue", () => {
  it("renders the correct number of posts", () => {
    const mockPosts = [{ id: 1 }, { id: 2 }, { id: 3 }];

    const wrapper = mount(PostsList, {
      props: {
        items: mockPosts,
      },
    });

    const postsElements = wrapper.findAll("ol");
    expect(postsElements.length).toBe(mockPosts.length);
  });

  it("does not show move up button for the first item and move down button for the last item", () => {
    const mockPosts = [{ id: 1 }, { id: 2 }, { id: 3 }];

    const wrapper = mount(PostsList, {
      props: {
        items: mockPosts,
      },
    });

    const firstItem = wrapper.findAll("li.card-body").at(0);
    const lastItem = wrapper.findAll("li.card-body").at(2);

    expect(firstItem.find('button[aria-label="move-up"]').exists()).toBe(false);
    expect(lastItem.find('button[aria-label="move-down"]').exists()).toBe(
      false
    );
  });

  it('emits "reorder" event with correct data when "moveUp" or "moveDown" is called', async () => {
    const mockPosts = [{ id: 1 }, { id: 2 }, { id: 3 }];

    const wrapper = mount(PostsList, {
      props: {
        items: mockPosts,
      },
    });

    await wrapper
      .findAll('li.card-body button[aria-label="move-up"]')
      .at(0)
      .trigger("click");

    let emittedEvents = wrapper.emitted().reorder;
    expect(emittedEvents[0][0].from).toBe(1);
    expect(emittedEvents[0][0].to).toBe(0);
    expect(emittedEvents[0][0].message).toBe(
      "Moved Post 2 from index 1 to index 0"
    );

    await wrapper
      .findAll('li.card-body button[aria-label="move-down"]')
      .at(0)
      .trigger("click");

    emittedEvents = wrapper.emitted().reorder;
    expect(emittedEvents[1][0].from).toBe(0);
    expect(emittedEvents[1][0].to).toBe(1);
    expect(emittedEvents[1][0].message).toBe(
      "Moved Post 1 from index 0 to index 1"
    );
  });
});
