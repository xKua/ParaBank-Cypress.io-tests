const { faker } = require('@faker-js/faker')

export const registerConstants = {
  generateUser: () => ({
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    address: faker.location.streetAddress(),
    city: faker.location.city(),
    state: faker.location.state({ abbreviated: true }),
    zipCode: faker.location.zipCode(),
    phoneNumber: faker.phone.number(),
    ssn: faker.string.numeric(9),
    username: faker.internet.username() + faker.string.numeric(6), // Ensure uniqueness
    password: faker.internet.password({ length: 6 }),
  }),

  // Static test data
  existingUsername: 'user',

  // Error messages
  registrationSuccessMessage: 'Your account was created successfully. You are now logged in.',
  firstNameError: 'First name is required.', 
  lastNameError: 'Last name is required.',
  addressError: 'Address is required.',
  cityError: 'City is required.', 
  stateError: 'State is required.',
  zipCodeError: 'Zip Code is required.',
  ssnError: 'Social Security Number is required.',
  usernameError: 'Username is required.',
  passwordError: 'Password is required.',
  confirmPasswordError: 'Password confirmation is required',
  usernameTakenError: 'This username already exists.',
}
