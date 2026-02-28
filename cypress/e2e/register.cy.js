import { globalPages } from "../fixtures/global/pages"
import { registerConstants } from "../fixtures/register/constants"
import { registerPages } from "../fixtures/register/pages"
let user

afterEach(() => {
  cy.clearCookies()
})

before(() => {
  user = registerConstants.generateUser()
})

describe('Customer Registration', () => {
  it('Register new user', () => {
    cy.visit('/')
    cy.get('a:contains("Register")').should('be.visible').click()
    cy.url().should('include', 'register.htm')
    cy.get(registerPages.firstNameInput).type(user.firstName)
    cy.get(registerPages.lastNameInput).type(user.lastName)
    cy.get(registerPages.addressInput).type(user.address)
    cy.get(registerPages.cityInput).type(user.city)
    cy.get(registerPages.stateInput).type(user.state)
    cy.get(registerPages.zipCodeInput).type(user.zipCode)
    cy.get(registerPages.phoneInput).type(user.phoneNumber)
    cy.get(registerPages.ssnInput).type(user.ssn)
    cy.get(registerPages.usernameInput).type(user.username)
    cy.get(registerPages.passwordInput).type(user.password)
    cy.get(registerPages.confirmPasswordInput).type(user.password)
    cy.get(registerPages.registerButton).click()
    cy.get(globalPages.rightPannel).should('be.visible')
    cy.get(globalPages.rightPannelParagraph).should('contain.text', registerConstants.registrationSuccessMessage)
  })

  it('Register with existing username', () => {
    cy.visit('/')
    cy.get('a:contains("Register")').should('be.visible').click()
    cy.url().should('include', 'register.htm')
    cy.get(registerPages.registrationForm).should('be.visible')
    cy.get(registerPages.firstNameInput).type(user.firstName)
    cy.get(registerPages.lastNameInput).type(user.lastName)
    cy.get(registerPages.addressInput).type(user.address)
    cy.get(registerPages.cityInput).type(user.city)
    cy.get(registerPages.stateInput).type(user.state)
    cy.get(registerPages.zipCodeInput).type(user.zipCode)
    cy.get(registerPages.phoneInput).type(user.phoneNumber)
    cy.get(registerPages.ssnInput).type(user.ssn)
    cy.get(registerPages.usernameInput).type(registerConstants.existingUsername)
    cy.get(registerPages.passwordInput).type(user.password)
    cy.get(registerPages.confirmPasswordInput).type(user.password)
    cy.get(registerPages.registerButton).click()
    cy.get(registerPages.usernameTakenError).should('be.visible').and('contain.text', registerConstants.usernameTakenError)
  })

  it('Empty user form', () => {
    cy.visit('/')
    cy.get('a:contains("Register")').should('be.visible').click()
    cy.url().should('include', 'register.htm')
    cy.get(registerPages.registrationForm).should('be.visible')
    cy.get(registerPages.registerButton).click()
    cy.get(registerPages.firstNameRequired).should('be.visible').and('contain.text', registerConstants.firstNameError)
    cy.get(registerPages.lastNameRequired).should('be.visible').and('contain.text', registerConstants.lastNameError)
    cy.get(registerPages.addressRequired).should('be.visible').and('contain.text', registerConstants.addressError)
    cy.get(registerPages.cityRequired).should('be.visible').and('contain.text', registerConstants.cityError)
    cy.get(registerPages.stateRequired).should('be.visible').and('contain.text', registerConstants.stateError)
    cy.get(registerPages.zipCodeRequired).should('be.visible').and('contain.text', registerConstants.zipCodeError)
    cy.get(registerPages.ssnRequired).should('be.visible').and('contain.text', registerConstants.ssnError)
    cy.get(registerPages.usernameRequired).should('be.visible').and('contain.text', registerConstants.usernameError)
    cy.get(registerPages.passwordRequired).should('be.visible').and('contain.text', registerConstants.passwordError)
    cy.get(registerPages.confirmPasswordRequired).should('be.visible').and('contain.text', registerConstants.confirmPasswordError)
  })

  it('One field empty', () => {
    cy.visit('/')
    cy.get('a:contains("Register")').should('be.visible').click()
    cy.url().should('include', 'register.htm')
    cy.get(registerPages.registrationForm).should('be.visible')
    cy.get(registerPages.lastNameInput).type(user.lastName)
    cy.get(registerPages.addressInput).type(user.address)
    cy.get(registerPages.cityInput).type(user.city)
    cy.get(registerPages.stateInput).type(user.state)
    cy.get(registerPages.zipCodeInput).type(user.zipCode)
    cy.get(registerPages.phoneInput).type(user.phoneNumber)
    cy.get(registerPages.ssnInput).type(user.ssn)
    cy.get(registerPages.usernameInput).type(user.username)
    cy.get(registerPages.passwordInput).type(user.password)
    cy.get(registerPages.confirmPasswordInput).type(user.password)
    cy.get(registerPages.registerButton).click()
    cy.get(registerPages.firstNameRequired).should('be.visible').and('contain.text', registerConstants.firstNameError)

  })

})