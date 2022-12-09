const fetch = require('cross-fetch');
const cookie = require('cookie');

async function fetchSecrets(cookieInfo) {
  const res = await fetch(`${process.env.API_URL}/api/v1/secrets`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Cookie: cookie.serialize('session', cookieInfo.session),
    },
    credentials: 'include',
  });
  const data = await res.json();
  return data;
}

module.exports = { fetchSecrets };
