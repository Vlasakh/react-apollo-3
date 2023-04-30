import jwt from 'jsonwebtoken';

const basicReroute = (req, res) => {
  const expTime = new Date().getTime() + 10 * 60 * 1000;

  const payload = {
    'https://cloud.exabeam.com/user/id': '5e9ffc7b3325b3668eae41be',
    'https://cloud.exabeam.com/permissions':
      'cloud-collectors:access retention:manage site-collectors:access idp:view dashboard:anomalies:access acm:alert:view cloud-connectors:manage alert-triage:access alert-triage:public-saved-filters:manage custom-actions:access cloud-archive:access acm:case:view dashboard:cm:manage css:content:view settings:view idp:role-mappings:manage team:access team:manage collector:context:view settings:manage manage-parsers:access secured-resources:manage correlation-rules:access idp:manage context:manage cloud-collectors:manage audit:query dashboard:access dashboard:anomalies:manage security-outcomes:access team:view dashboard:manage dashboard:cm:access dashboard:dl:manage site-collectors:manage content-studio:view acm:alert:manage dashboard:dl:access correlation-rules:manage cloud-connectors:access acm:case:manage secured-resources:view parser-editor:access content-studio:manage mssp:access apikey:manage collector:context:manage search:query alert-rank:access context:access',
    'https://cloud.exabeam.com/user/email': 'volodymyr.sakharov@exabeam.com',
    'https://cloud.exabeam.com/user/firstname': 'Volodymyr',
    'https://cloud.exabeam.com/user/lastname': 'Sakharov',
    'https://cloud.exabeam.com/user/name': 'Volodymyr Sakharov',
    given_name: 'Volodymyr',
    family_name: 'Sakharov',
    nickname: 'volodymyr.sakharov',
    name: 'Volodymyr Sakharov',
    picture: 'https://lh3.googleusercontent.com/a/AGNmyxY45cXc1q67uHsBWZr7zpA91PHSWG0XGls5m_Q8=s96-c',
    locale: 'en',
    updated_at: '2023-04-26T23:36:43.175Z',
    iss: 'https://auth.dev.exabeam.cloud/',
    aud: 'qHkaQonv05jqR1DjFBF9vBa8HRPorn3H',
    iat: 1682552203,
    exp: expTime / 1000,
    sub: 'google-apps|volodymyr.sakharov@exabeam.com',
    at_hash: 'Dx18BkXpZR6zCX1_a__bxA',
    sid: 'WKvdmECBwLWNb80kxW1jlvJO_-f-2pr1',
    nonce: 'kXspPdtRa1AOzpS2k6KrmiDuGTJs0ved',
  };

  // Set up a secret key to sign the token
  const secretKey = 'my_secret_key';

  // Generate a JWT token with the payload and secret key
  const token = jwt.sign(payload, secretKey);

  res.status(200).json({ token: token, time: new Date().getTime() });
};

// Set up a payload with a sample user ID
export default basicReroute;
