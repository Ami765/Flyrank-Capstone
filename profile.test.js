const assert = require('assert');
const { validateProfileData } = require('./profile-validation');

function testInvalidSubmissionBlocks() {
  const invalidData = {
    firstName: 'Jane123',
    lastName: '',
    email: 'not-an-email',
    username: 'ab',
    bio: 'Short'
  };

  const result = validateProfileData(invalidData);

  assert.strictEqual(result.valid, false, 'Invalid input should block form submission.');
  assert.strictEqual(result.errors.firstName, 'First name cannot contain numbers or symbols.');
  assert.strictEqual(result.errors.lastName, 'Last name is required.');
  assert.strictEqual(result.errors.email, 'Please enter a valid email address.');
  assert.strictEqual(result.errors.username, 'Username must be 3–20 characters and may only contain letters, numbers, dots, or underscores.');
  assert.strictEqual(result.errors.bio, 'Bio must contain at least 10 characters.');

  console.log('PASS: invalid submission blocks form submit action and shows inline errors.');
}

if (require.main === module) {
  testInvalidSubmissionBlocks();
}

module.exports = {
  testInvalidSubmissionBlocks
};
