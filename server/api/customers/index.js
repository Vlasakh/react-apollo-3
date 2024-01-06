const basicReroute = (req, res) => {
  const ecpHeaders = Object.entries(req.headers).filter(([key, value]) => key.toLowerCase().includes('x-ecp-'));
  console.log('❗headers with x-ecp-', ecpHeaders, req.body);
  ecpHeaders.length || console.log('❗req.headers', req.headers);

  res.status(200).json({ name: 'check okok', time: new Date().getTime() });
};

export default basicReroute;
