import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  connect() {
    console.log(this.element);
  }

   delete(e) {
    const confirmed = confirm("Are you sure?");
    if (!confirmed) {
      e.preventDefault();
    } else {
      const id = e.target.dataset.id;
      const csrfToken = document.querySelector("[name='csrf-token']").content;

      fetch(`/tasks/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-Token": csrfToken,
        },
      })
        .then(() => {
          // Redirect to your desired location
          window.location.href = "/task"; // Change this URL as needed
        })
        .catch(error => {
          console.error("Error deleting task:", error);
        });
    }
    }
}
