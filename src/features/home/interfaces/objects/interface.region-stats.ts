export interface IRegionStats {
  id?: number;
  number?: string;
  name: string;
  scorts: { male: number; female: number; trans: number };
}
