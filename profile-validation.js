;(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.ProfileValidation = factory();
  }
}(typeof self !== 'undefined' ? self : this, function () {
  function trim(value) {
    return String(value || '').trim();
  }

  function validateName(value) {
    return /^[A-Za-zÀ-ÖØ-öø-ÿ]+(?:[ '\u2019-][A-Za-zÀ-ÖØ-öø-ÿ]+)*$/.test(trim(value));
  }

  function validateEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trim(value));
  }

  function validateUsername(value) {
    return /^[a-zA-Z0-9._]{3,20}$/.test(trim(value));
  }

  function validateBio(value) {
    return trim(value).length >= 10;
  }

  function validateProfileData(data) {
    var errors = {};
    var firstName = trim(data.firstName);
    var lastName = trim(data.lastName);
    var email = trim(data.email);
    var username = trim(data.username);
    var bio = trim(data.bio);

    if (!firstName) {
      errors.firstName = 'First name is required.';
    } else if (!validateName(firstName)) {
      errors.firstName = 'First name cannot contain numbers or symbols.';
    }

    if (!lastName) {
      errors.lastName = 'Last name is required.';
    } else if (!validateName(lastName)) {
      errors.lastName = 'Last name cannot contain numbers or symbols.';
    }

    if (!email) {
      errors.email = 'Email address is required.';
    } else if (!validateEmail(email)) {
      errors.email = 'Please enter a valid email address.';
    }

    if (!username) {
      errors.username = 'Username is required.';
    } else if (!validateUsername(username)) {
      errors.username = 'Username must be 3–20 characters and may only contain letters, numbers, dots, or underscores.';
    }

    if (!bio) {
      errors.bio = 'Bio is required.';
    } else if (!validateBio(bio)) {
      errors.bio = 'Bio must contain at least 10 characters.';
    }

    return {
      valid: Object.keys(errors).length === 0,
      errors: errors
    };
  }

  return {
    validateProfileData: validateProfileData
  };
}));
