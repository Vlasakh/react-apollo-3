const basicReroute = (req, res) => {
  res.writeHead(200, {
    'Set-Cookie': `mycookie=test`,
    'Content-Type': `text/plain`,
    'Access-Control-Allow-Origin': `*`,
  });

  res.json({ name: 'John Doe' });
};

export function cookieTest(req, res) {
  // To Write a Cookie
  // res.status(200).json({ name: 'check cookies from /api/test 111111' });
  // return;
  res.header({
    'Content-Type': 'text/plain',
    'Access-Control-Allow-Origin': [
      // 'http://localhost:3000',
      // 'http://kubernetes.docker.internal:3000',
      'http://sub-host.localhost:3000',
    ],
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Credentials': true,
    // 'Set-Cookie': `mycookie=TEST TETS 1; Path=/; Domain=localhost`,
    // 'Set-Cookie': `mycookie=TEST TETS 15; SameSite=None; Secure; Domain=kubernetes.docker.internal`,
    'Set-Cookie': `mycookie=TEST TETS 19; SameSite=None; Secure`,
    // 'Set-Cookie': `mycookie=TEST TETS 11`,
  });

  res.json({ cookie: 'was set to /api/test' });
}
