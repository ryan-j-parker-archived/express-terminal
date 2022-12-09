const cookie = require('cookie');

async function signInUser(email, password) {
  const res = await fetch(`${process.env.API_URL}/api/v1/users/sessions`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
    credentials: 'include',
  });
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message);
  }
  const cookieInfo = cookie.parse(res.headers.raw()['set-cookie'][0]);
  return cookieInfo;
}

module.exports = { signInUser };
