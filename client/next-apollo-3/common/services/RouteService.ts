const BASE_URL = '/api';

const ROUTES = {
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
