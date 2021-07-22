import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import {Card as CardComponent} from '@/components/card/card.component';
import {createStory, createTemplate} from '@/stories/story.template';

export default createStory('Netflix/Components/Card', CardComponent, {
  decorators: [
    Story => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
});

export const Card = createTemplate(CardComponent).bind({});
Card.args = {
  id: 1,
  title: 'Black Widow',
  releaseDate: new Date('09/07/2021'),
  posterPath: 'https://www.startfilm.ru/images/base/film/f_659066/big_startfilmru1434874.jpg',
  genres: ['Action', 'Fantastic'],
};
