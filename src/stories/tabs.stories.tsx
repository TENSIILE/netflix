import React, {ThemeProvider, ComponentMeta, ComponentStory, GlobalStyle, theme} from '@/stories';
import {Tabs as TabsComponent} from '@/components/tabs/tabs.component';

export default {
  title: 'Netflix/Components/Tabs',
  component: TabsComponent,
} as ComponentMeta<typeof TabsComponent>;

const Template: ComponentStory<typeof TabsComponent> = args => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <TabsComponent {...args} />
  </ThemeProvider>
);

export const Tabs = Template.bind({});
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
