import React from 'react';
import {shallow} from 'enzyme';
import {TabsContainer} from './tabs-container.component';
import {Tabs} from './tabs.component';
import {tabsContainerClassName} from './tabs-container-classname';

const tabs = [
  {
    id: 1,
    title: 'First',
  },
  {
    id: 2,
    title: 'Second',
  },
];

describe('TabsContainer component', () => {
  test('Should mounted children components', () => {
    const component = shallow(
      <TabsContainer>
        <h1>Hello world</h1>
      </TabsContainer>
    );

    expect(component).toMatchSnapshot();
  });

  test('Should render title component', () => {
    const title = 'Hello';
    const component = shallow(<TabsContainer title={title} />);

    const wrapper = component.find(`.${tabsContainerClassName}__title`).text();
    expect(wrapper).toBe(title);
  });
});

describe('Tabs component', () => {
  test('Should mounted the component', () => {
    const component = shallow(<Tabs tabs={tabs} />);
    expect(component).toMatchSnapshot();
  });

  test('Should render an empty list of tabs when the first argument is not passed', () => {
    const component = shallow(<Tabs />);
    const wrapper = component.find(`.${tabsContainerClassName}__list`).contains('li');
    expect(wrapper).toBeFalsy();
  });
});
