export const registerPages = {
  // Form inputs
  registrationForm: '[id="customerForm"]',
  firstNameInput: '[id="customer.firstName"]',
  lastNameInput: '[id="customer.lastName"]',
  addressInput: '[id="customer.address.street"]',
  cityInput: '[id="customer.address.city"]',
  stateInput: '[id="customer.address.state"]',
  zipCodeInput: '[id="customer.address.zipCode"]',
  phoneInput: '[id="customer.phoneNumber"]',
  ssnInput: '[id="customer.ssn"]',
  usernameInput: '[id="customer.username"]',
  passwordInput: '[id="customer.password"]',
  confirmPasswordInput: '[id="repeatedPassword"]',

  // Errors (required-field & field-specific messages)
  firstNameRequired: 'span[id="customer.firstName.errors"].error',
  lastNameRequired: 'span[id="customer.lastName.errors"].error',
  addressRequired: 'span[id="customer.address.street.errors"].error',
  cityRequired: 'span[id="customer.address.city.errors"].error',
  stateRequired: 'span[id="customer.address.state.errors"].error',
  zipCodeRequired: 'span[id="customer.address.zipCode.errors"].error',
  ssnRequired: 'span[id="customer.ssn.errors"].error',
  usernameRequired: 'span[id="customer.username.errors"].error',
  usernameTakenError: 'span[id="customer.username.errors"].error',
  passwordRequired: 'span[id="customer.password.errors"].error',
  confirmPasswordRequired: 'span[id="repeatedPassword.errors"].error',

  // Buttons
  registerButton: 'input[type="submit"][value="Register"]',
  cancelButton: 'a:contains("Cancel")',

  // Messages
  successMessage: '.title',
  errorMessage: '.error',
}
