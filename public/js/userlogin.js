async function userLogin(event) {
  event.preventDefault();
  const username = document.querySelector('#username').value.trim();
  const password = document.querySelector('#password').value.trim();

  if (username && password) {
    const response = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({
        username,
        password
      }),
      headers: {
        'Content-Type': 'application/json'
      },
    });
    if (response.ok) {
      const rest = await response.json();
      document.location.replace(`/dashboard/${rest.user_id}`);
  } else {
    alert(response.statusText);
    console.log('error in JS file');
    }
  }
}

document.querySelector('#login').addEventListener('click', userLogin);

