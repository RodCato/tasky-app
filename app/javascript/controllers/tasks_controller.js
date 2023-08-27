import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  connect() {
    console.log(this.element);
  }

  toggle(e) {
        const id = e.target.dataset.id
        const csrfToken = document.querySelector("[name='csrf-token']").content

        fetch(`/tasks/${id}/toggle`, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-Token': csrfToken
            },
            body: JSON.stringify({ completed: e.target.checked }) // body data type must match "Content-Type" header
        })
            .then(response => response.json())
            .then(data => {
                alert(data.message)
            })
    
  //  delete(e) {
  //   const confirmed = confirm("Are you sure?");
  //   if (!confirmed) {
  //     e.preventDefault();
  //   } else {
  //     const id = e.target.dataset.id;
  //     const csrfToken = document.querySelector("[name='csrf-token']").content;

  //     fetch(`/tasks/${id}`, {
  //       method: "DELETE",
  //       headers: {
  //         "Content-Type": "application/json",
  //         "X-CSRF-Token": csrfToken,
  //       },
  //     })
  //       .then(() => {
  //         // Redirect to your desired location
  //         window.location.href = "/"; // Change this URL as needed
  //       })
  //       .catch(error => {
  //         console.error("Error deleting task:", error);
  //       });
  //   }
    }
}
