export interface IAtpCheckData {}

export const enum EMaterialItemStatus {
  A = 'A',
  B = 'B',
  C = 'C',
}

export interface IMaterialItem {
  partNumber?: string;
  description?: string;
  status?: EMaterialItemStatus;
  quantity?: number;
}

export interface Ilevel {
  name: string;
  available: number;
  upcomingStock: number;
  previousDemand: number;
  total: number;
}

export interface IStockValue {
  color: string;
  value: number;
  title: string;
}

export interface ILocation extends IMaterialItem {
  level1?: Ilevel[];
  level2?: Ilevel[];
  level3?: Ilevel[];
}
