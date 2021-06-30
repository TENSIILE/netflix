export type TabsType = 'tabs' | 'sortTabs';
export type QueryType = 'id' | 'search';

export interface Tab {
  readonly id: string | number;
  title: string;
  isSelect: boolean;
}
