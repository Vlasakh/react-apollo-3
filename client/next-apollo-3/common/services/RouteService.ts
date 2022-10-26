export enum MenuType {
  home = 'home',
  userCrud = 'userCrud',
  staticUsers = 'staticUsers',
}
type Routes = { menu: Record<MenuType, { getPath: () => string; title: string }> } | { [key: string]: () => string };

const BASE_URL = '/api';

const ROUTES: Routes = {
  menu: {
    userCrud: { getPath: () => '/users-crud', title: 'User CRUDs' },
    staticUsers: { getPath: () => '/static-users', title: 'Static users' },
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
