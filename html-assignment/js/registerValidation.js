const form = document.getElementById("form");
const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const company = document.getElementById("company");

// Show input error messages
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

// Show success color and remove error message
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
  const small = formControl.querySelector("small");
  small.innerText = "";
}

// Check if email is valid
function checkEmail(input) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (input.value.trim() === "") {
    showError(input, "Please enter an email");
  } else if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, "Email is not valid");
  }
}

// Check if full name contains only alphabets
function checkFullName(input) {
  const re = /^[A-Za-z\s]+$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, "Name should contain only alphabets");
  }
}

// Check required fields
function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === "") {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

// Check input length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} characters`
    );
  } else {
    showSuccess(input);
  }
}

// Get field name
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Event Listeners
form.addEventListener("submit", function (e) {
  e.preventDefault();

  checkRequired([fullName, email, company]);
  checkLength(fullName, 3, 50);
  checkLength(company, 3, 50);
  checkEmail(email);
  checkFullName(fullName);

  // Submit the form
  if (!document.querySelector(".form-control.error")) {
    form.submit();
  }
});

// Event Listener for real-time validation
fullName.addEventListener("input", function () {
  if (fullName.value.trim() !== "") {
    checkFullName(fullName);
  }
});

email.addEventListener("input", function () {
  if (email.value.trim() !== "") {
    checkEmail(email);
  }
});

company.addEventListener("input", function () {
  if (company.value.trim() !== "") {
    checkLength(company, 3, 50);
  }
});
