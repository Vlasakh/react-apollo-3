import { Router } from 'express';
import { cookieTest } from './api/cookie-test';
import { cookieTest2 } from './api/cookie-test2';
import customerInfo from './api/customers';

const routes = Router();

routes.get('/api/test/cookie-test', cookieTest);
routes.get('/cookie-test', cookieTest);
routes.get('/cookie-test2', cookieTest2);
routes.get('/feeds', customerInfo);
// routes.get('/api/test/cookie-test', (req, res) => {
//   res.status(200).json({ name: 'check cookies from /api/test' });
// });

export { routes };
