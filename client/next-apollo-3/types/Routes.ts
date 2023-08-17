import { MenuType } from '../common/services/RouteService';

export type Routes =
  | { menu: Record<MenuType, { getPath: () => string; title: string; hint: string }> }
  | { [key: string]: () => string };
