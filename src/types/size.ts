export type MapbSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type MapbNumberSize = MapbSize | number | (string & {});
export type MapbSizes = Record<MapbSize, string>;
