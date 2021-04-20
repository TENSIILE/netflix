export type TabsType = 'tabs' | 'sortTabs';

export interface Tab {
  readonly id: string | number;
  title: string;
  isSelect: boolean;
}
