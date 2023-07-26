async function newPostHandler(event) {
  event.preventDefault();
  const title = document.querySelector('#title').value.trim();
  const description = document.querySelector('#description').value.trim();

  if (title && description) {
    const response = await fetch('/api/createPost', {
      method: 'POST',
      body: JSON.stringify({
        title,
        description
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      const data = await response.text();
      const dataJSON = JSON.parse(data);
      document.location.replace(`/dashboard/${dataJSON.user_id}`);
    } else {
      alert('Failed update content');
    }
  }
}

document.querySelector('#newPost').addEventListener('click', newPostHandler);