import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import ScoreBar from '@/components/ScoreBar.vue';

describe('ScoreBar', () => {
  it('renders properly', () => {
    const wrapper = mount(ScoreBar, { props: { correctChoices: 0, incorrectChoices: 0 } });
    expect(wrapper.exists());
  });

  it('shows the amount of correct choices that have been made', () => {
    const wrapper = mount(ScoreBar, { props: { correctChoices: 1, incorrectChoices: 0 } });
    expect(wrapper.findAll('span')[0].text()).toBe('1');
  });

  it('shows the amount of incorrect choices that have been made', () => {
    const wrapper = mount(ScoreBar, { props: { correctChoices: 0, incorrectChoices: 1 } });
    expect(wrapper.findAll('span')[1].text()).toBe('1');
  });
});
