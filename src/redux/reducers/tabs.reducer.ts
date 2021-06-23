import {AnyAction} from 'redux';
import {Tab, TabsType} from '@/types';
import {TOGGLE_TABS} from '@/redux/types/tabs.type';

const initialState = {
  tabs: [
    {id: 0, title: 'title', isSelect: true},
    {id: 1, title: 'genres', isSelect: false},
  ],
  sortTabs: [
    {id: 0, title: 'release date', isSelect: false},
    {id: 1, title: 'rating', isSelect: true},
  ],
};

interface TabsState {
  tabs: Tab[];
  sortTabs: Tab[];
}

interface TabsReducerAction extends AnyAction {
  payload: {
    name: string;
    nameType: TabsType;
  };
}

export const tabsReducer = (
  state: TabsState = initialState,
  action: TabsReducerAction
): TabsState => {
  switch (action.type) {
    case TOGGLE_TABS:
      return {
        ...state,
        [action.payload.nameType]: state[action.payload.nameType].map(tab => {
          if (action.payload.name === tab.title) {
            return {...tab, isSelect: true};
          }
          return {...tab, isSelect: false};
        }),
      };
    default:
      return state;
  }
};
