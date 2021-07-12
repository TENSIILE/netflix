import React, {
  BrowserRouter,
  ThemeProvider,
  ComponentMeta,
  ComponentStory,
  GlobalStyle,
  theme,
} from '@/stories';
import {Card as CardComponent} from '@/components/card/card.component';

export default {
  title: 'Netflix/Components/Card',
  component: CardComponent,
} as ComponentMeta<typeof CardComponent>;

const Template: ComponentStory<typeof CardComponent> = args => (
  <BrowserRouter>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <CardComponent {...args} />
    </ThemeProvider>
  </BrowserRouter>
);

export const Card = Template.bind({});
Card.args = {
  id: 1,
  title: 'Black Widow',
  releaseDate: new Date('09/07/2021'),
  posterPath: 'https://www.startfilm.ru/images/base/film/f_659066/big_startfilmru1434874.jpg',
  genres: ['Action', 'Fantastic'],
};
