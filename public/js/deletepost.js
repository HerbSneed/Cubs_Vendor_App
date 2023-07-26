const deleteFormHandler = async event => {
  event.preventDefault();
  const url = window.location.toString().split('/');
  const post_id = url[url.length - 2];

  const response = await fetch(`/api/delete/${post_id}`, {
    method: 'DELETE',
    body: JSON.stringify({
      post_id,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
    document.location.replace('/');
  } else {
    alert('Something went wrong!')
  }
}
document
  .querySelector('#delete-btn')
  .addEventListener('click', deleteFormHandler);