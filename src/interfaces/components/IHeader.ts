import {ITab} from './';

export interface IHeaderProp {
  input: string;
  tabs: ITab[];
  onToggleTabs: (e: React.MouseEvent<HTMLLIElement>) => void;
  onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearchMovies: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onKeyPressEnterHandler: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}
