import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import CardButton from '@/components/CardButton.vue';

describe('CardButton', () => {
  it('renders properly', () => {
    const wrapper = mount(CardButton, { props: { id: '1', selectedAnswer: '' } });
    expect(wrapper.exists());
  });

  it('is marked as correct if selected and isChosen is true', () => {
    const wrapper = mount(CardButton, { props: { id: '1', selectedAnswer: '1', isChosen: true } });
    expect(wrapper.classes()).toContain('correct-choice');
  });

  it('is marked as incorrect if selected and isChosen is false/undefined', () => {
    const wrapper = mount(CardButton, { props: { id: '1', selectedAnswer: '1' } });
    expect(wrapper.classes()).toContain('incorrect-choice');
  });

  it('is not clickable after a selection has been made', async () => {
    const wrapper = mount(CardButton, { props: { id: '1', selectedAnswer: '' } });
    expect(wrapper.classes()).not.toContain('selected-choice');
    await wrapper.setProps({ selectedAnswer: '1' });
    expect(wrapper.classes()).toContain('selected-choice');
  });
});
