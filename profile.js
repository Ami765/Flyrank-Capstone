document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('profile-form');
  var statusMessage = document.querySelector('.form-status');
  var fieldMap = {
    firstName: {
      input: document.getElementById('first-name'),
      error: document.getElementById('first-name-error')
    },
    lastName: {
      input: document.getElementById('last-name'),
      error: document.getElementById('last-name-error')
    },
    email: {
      input: document.getElementById('email'),
      error: document.getElementById('email-error')
    },
    username: {
      input: document.getElementById('username'),
      error: document.getElementById('username-error')
    },
    bio: {
      input: document.getElementById('bio'),
      error: document.getElementById('bio-error')
    }
  };

  function clearErrors() {
    statusMessage.textContent = '';
    Object.values(fieldMap).forEach(function (field) {
      field.input.classList.remove('invalid');
      field.error.textContent = '';
    });
  }

  function displayErrors(errors) {
    Object.keys(errors).forEach(function (key) {
      if (fieldMap[key]) {
        fieldMap[key].input.classList.add('invalid');
        fieldMap[key].error.textContent = errors[key];
      }
    });
  }

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    clearErrors();

    var formData = {
      firstName: fieldMap.firstName.input.value,
      lastName: fieldMap.lastName.input.value,
      email: fieldMap.email.input.value,
      username: fieldMap.username.input.value,
      bio: fieldMap.bio.input.value
    };

    var validation = ProfileValidation.validateProfileData(formData);

    if (!validation.valid) {
      displayErrors(validation.errors);
      statusMessage.textContent = 'Please fix the highlighted fields before saving.';
      statusMessage.style.color = '#b91c1c';
      return;
    }

    statusMessage.textContent = 'Profile saved successfully.';
    statusMessage.style.color = '#166534';
  });
});
