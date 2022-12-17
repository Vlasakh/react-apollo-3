export enum MenuType {
  home = 'home',
  userCrud = 'userCrud',
  staticUsers = 'staticUsers',
  ssrUsers = 'ssrUsers',
  runCmd = 'runCmd',
}
type Routes =
  | { menu: Record<MenuType, { getPath: () => string; title: string; hint: string }> }
  | { [key: string]: () => string };

const BASE_URL = '/api';

const ROUTES: Routes = {
  menu: {
    userCrud: { getPath: () => '/users-crud', title: 'User CRUDs' },
    staticUsers: { getPath: () => '/static-users', title: 'Static users' },
    ssrUsers: { getPath: () => '/ssr-users', title: 'Ssr users' },
    runCmd: { getPath: () => '/run-cmd', title: 'Run cmd', hint: 'Running server command' },
  },
  getHomePath: () => '/',
  getUserPath: () => '/user/[id]',
};

/**
 * Done it with hook just in case we will extend and
 * need access to other hook (eg `useRouter` from next/router)
 */
export const useRouteService = () => ROUTES;

/**
 * For usage Router Service out of React
 */
export const routeService = () => ROUTES;
