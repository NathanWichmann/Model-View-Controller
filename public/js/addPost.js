async function newFormHandler(event) {
  event.preventDefault();
  const title = document.querySelector("#title").value;
  const body = document.querySelector("#body").value;

  // Send fetch request to add a new dish
  const response = await fetch(`/api/posts`, {
    method: "POST",
    body: JSON.stringify({
      title,
      body,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log(JSON);

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert("Failed to add post");
  }
}
const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/id/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/posts');
    } else {
      alert('Failed to delete post');
    }
  }
};


document
  .querySelector('.project-list')
  .addEventListener('click', delButtonHandler);

document
  .querySelector(".new-post-form")
  .addEventListener("submit", newFormHandler);
