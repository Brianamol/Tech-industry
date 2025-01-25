// 1. Search functionality
const searchButton = document.querySelector(".search-icon");

searchButton.addEventListener("click", () => {
  const doctorName = document.getElementById("doctorName").value;
  const location = document.getElementById("location").value;
  
  if (doctorName !== "Doctor's Name" && location !== "Location") {
    alert(`Searching for ${doctorName} in ${location}`);
  } else {
    alert("Please select both a doctor's name and a location.");
  }
});

// 2. Newsletter Subscription (Email Validation)
const newsletterButton = document.querySelector(".newsletter-section button");

newsletterButton.addEventListener("click", () => {
  const emailInput = document.querySelector(".newsletter-section input").value;

  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if (emailPattern.test(emailInput)) {
    alert("Thanks for subscribing!");
  } else {
    alert("Please enter a valid email.");
  }
});

// 3. Modal for Log in and Sign up
const loginButton = document.querySelector("button.btn-outline-primary");
const signUpButton = document.querySelector("button.btn-primary");

// Create the modal HTML structure
const modalHTML = `
  <div class="modal" id="authModal" tabindex="-1" aria-labelledby="authModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="authModalLabel">Authentication</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div>
            <label for="username">Username</label>
            <input type="text" id="username" class="form-control" placeholder="Enter your username" />
          </div>
          <div>
            <label for="password">Password</label>
            <input type="password" id="password" class="form-control" placeholder="Enter your password" />
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Submit</button>
        </div>
      </div>
    </div>
  </div>
`;

document.body.insertAdjacentHTML('beforeend', modalHTML);

// Open the modal on login or signup button click
loginButton.addEventListener("click", () => {
  const modal = new bootstrap.Modal(document.getElementById('authModal'));
  modal.show();
});

signUpButton.addEventListener("click", () => {
  const modal = new bootstrap.Modal(document.getElementById('authModal'));
  modal.show();
});
