export function cookieTest2(req, res) {
  console.log('❗req.headers', req.headers);
  res.header({
    'Access-Control-Allow-Origin': [
      //'http://localhost:3000',
      // 'http://kubernetes.docker.internal:3000',
      'http://sub-host.localhost:3000',
    ],
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Credentials': true,
  });
  res.status(200).json({ name: 'check cookies from /api/test' });
}
