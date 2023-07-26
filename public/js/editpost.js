const editFormHandler = async event => {
    event.preventDefault();
    const url = window.location.toString().split('/');
    const post_id = url[url.length - 2];
    const title = document.querySelector('#title').value.trim();
    const description = document.querySelector('#description').value.trim();

    if (title && description) {
        const response = await fetch(`/api/update/${post_id}`, {
            method: 'PUT',
            body: JSON.stringify({
                title,
                description,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to update content!')
        }
    }
}
document.querySelector('#edit-post').addEventListener('click', editFormHandler);
