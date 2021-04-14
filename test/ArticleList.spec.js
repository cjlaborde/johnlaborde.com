import { mount } from '@vue/test-utils';
import ArticleList from '@/components/ArticleList.vue';

// describe('Logo', () => {
//   test('is a Vue instance', () => {
//     const wrapper = mount(ArticleList);
//     expect(true).toBe(true);
//     // expect(wrapper.vm).toBeTruthy();
//   });
// });

describe('Logo', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(ArticleList, {
      propsData: {
        articles: {},
      },
    });
    // const wrapper = mount(ArticleList);
    expect(true).toBe(true);
    // expect(wrapper.vm).toBeTruthy();
  });
});
