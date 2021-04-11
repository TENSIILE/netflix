import {ITab} from '../components';
import {Tabs} from '../../types';

export interface ISearchOptionsProp {
  countMovies: number;
  sortTabs: ITab[];
  onSelect: (e: React.MouseEvent<HTMLLIElement>, name: Tabs) => void;
}
