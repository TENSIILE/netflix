import {Input as InputComponent} from '@/components/input/input.component';
import {createStory, createTemplate} from '@/stories/story.template';

export default createStory('Netflix/Components/Input', InputComponent);

export const Input = createTemplate(InputComponent).bind({});
Input.args = {
  value: 'Текст',
  placeholder: 'Введите текст...',
  style: {
    width: '300px',
  },
};
