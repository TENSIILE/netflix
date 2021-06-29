import {AnyAction} from 'redux';
import {TabsType} from '@/types';
import {TOGGLE_TABS} from '@/redux/types/tabs.type';

export const toggleTabsAction = (
  e: React.MouseEvent<HTMLLIElement>,
  nameType: TabsType
): AnyAction => ({
  type: TOGGLE_TABS,
  payload: {
    name: e.currentTarget.dataset.name,
    nameType,
  },
});
