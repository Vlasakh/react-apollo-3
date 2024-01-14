export enum MenuType {
  userCrud = 'userCrud',
  staticUsers = 'staticUsers',
  ssrUsers = 'ssrUsers',
  runCmd = 'runCmd',
  useDeepEffect = 'useDeepEffect',
}

// const BASE_URL = '/api';

type MenuItem = { getPath: () => string; title: string; hint?: string };
type RoutesMenu = Record<MenuType, MenuItem>;

type RoutesItems = 'getHomePath' | 'getUserPath';
type Routes = Record<RoutesItems, () => string>;

const ROUTES_MENU: RoutesMenu = {
  userCrud: { getPath: () => '/users-crud', title: 'User CRUDs' },
  staticUsers: { getPath: () => '/static-users', title: 'Static users' },
  ssrUsers: { getPath: () => '/ssr-users', title: 'Ssr users' },
  runCmd: { getPath: () => '/run-cmd', title: 'Run cmd', hint: 'Running server command' },
  useDeepEffect: { getPath: () => '/use-deep-effect', title: 'use Deep Effect', hint: 'test useDeepEffect hook' },
};

const ROUTES: Routes = {
  getHomePath: () => '/',
  getUserPath: () => '/user/[id]',
};

// type UseRouteService = () => { [K in keyof typeof ROUTES]: typeof ROUTES[K] };
/**
 * Done it with hook just in case we will extend and
 * need access to other hook (eg `useRouter` from next/router)
 */
export const useRouteMenuService = () => ROUTES_MENU;
export const useRouteService = () => ROUTES;

/**
 * For usage Router Service out of React
 */
export const routeService = () => ROUTES;
