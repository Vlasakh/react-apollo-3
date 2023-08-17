import { Routes } from '../../types/Routes';

export enum MenuType {
  home = 'home',
  userCrud = 'userCrud',
  staticUsers = 'staticUsers',
  ssrUsers = 'ssrUsers',
  runCmd = 'runCmd',
  useDeepEffect = 'useDeepEffect',
}

const BASE_URL = '/api';

const ROUTES: Routes = {
  menu: {
    userCrud: { getPath: () => '/users-crud', title: 'User CRUDs' },
    staticUsers: { getPath: () => '/static-users', title: 'Static users' },
    ssrUsers: { getPath: () => '/ssr-users', title: 'Ssr users' },
    runCmd: { getPath: () => '/run-cmd', title: 'Run cmd', hint: 'Running server command' },
    useDeepEffect: { getPath: () => '/use-deep-effect', title: 'use Deep Effect', hint: 'test useDeepEffect hook' },
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
