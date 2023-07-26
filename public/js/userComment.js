async function userComment(event) {
  event.preventDefault();
  const description = document.querySelector('#comment').value.trim();
  const url = window.location.toString().split('/');
  const post_id = url[url.length - 1];

  if (description) {
    const response = await fetch('/api/createComment', {
      method: 'POST',
      body: JSON.stringify({
        description,
        post_id
      }),
      headers: {
        'Content-Type': 'application/json'
      },
    });

    if (response.ok) {
      const data = await response.text();
      const dataJSON = JSON.parse(data);
      document.location.replace(`/get-single-post/${dataJSON.post_id}/comments`);
    } else {
      alert(response.statusText);
      console.log('error in JS file');
    }
  }
}

document.querySelector('#newCommmentSubmit').addEventListener('click', userComment);
