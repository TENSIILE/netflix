export interface ITab {
  readonly id: string | number;
  title: string;
  isSelect: boolean;
}

export interface ITabProp {
  tabs: ITab[];
  onSelect: (e: React.MouseEvent<HTMLLIElement>) => void;
}
