import {Tabs as TabsComponent} from '@/components/tabs/tabs.component';
import {createStory, createTemplate} from '@/stories/story.template';

export default createStory('Netflix/Components/Tabs', TabsComponent);

export const Tabs = createTemplate(TabsComponent).bind({});
Tabs.args = {
  tabs: [
    {
      id: 1,
      title: 'Первый таб',
      isSelect: true,
    },
    {
      id: 2,
      title: 'Второй таб',
      isSelect: false,
    },
  ],
  onSelect: () => null,
};
