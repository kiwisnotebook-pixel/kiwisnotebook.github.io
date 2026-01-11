// Lightweight JS to submit the form with fetch and show success/error messages.
// Progressive enhancement: the HTML form will still POST directly to Formspree if JS is disabled.
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  if (!form) return;

  const statusEl = document.getElementById("form-status");

  form.addEventListener("submit", function (e) {
    // If browser doesn't support fetch, allow normal form submit
    if (!window.fetch) return;

    e.preventDefault();

    // simple client-side spam check for honeypot
    if (form._gotcha && form._gotcha.value) {
      statusEl.textContent = "Submission rejected.";
      statusEl.style.color = "#b00020";
      return;
    }

    const action = form.getAttribute("action");
    const formData = new FormData(form);

    // show a sending state
    statusEl.textContent = "Sending…";
    statusEl.style.color = "";

    fetch(action, {
      method: "POST",
      headers: { "Accept": "application/json" },
      body: formData
    })
    .then(response => {
      if (response.ok) {
        form.reset();
        statusEl.textContent = "Thanks — your message has been sent.";
        statusEl.style.color = "#176e64";
      } else {
        return response.json().then(data => {
          throw new Error((data && data.error) ? data.error : "Form submission failed.");
        });
      }
    })
    .catch((err) => {
      console.error("Form submit error:", err);
      statusEl.textContent = "Sorry — something went wrong. Please try again or email kirstendormanwriting@gmail.com";
      statusEl.style.color = "#b00020";
    });
  });
});
