import { homepageConstants } from "../fixtures/homepage/constants"
import { homepagePages } from "../fixtures/homepage/pages"
import { registerConstants } from "../fixtures/register/constants"
import { registerPages } from "../fixtures/register/pages"
import { globalPages } from "../fixtures/global/pages"

afterEach(() => {
  cy.clearCookies()
})
describe('Loging in', () => {
  it('Successful log in', () => {
    cy.visit('/'),
    cy.get(homepagePages.usernameInput).type(homepageConstants.correctUsername),
    cy.get(homepagePages.passwordInput).type(homepageConstants.password),
    cy.get(homepagePages.logInButton).click()
  })
  it('Unsuccessful log in', () => {
    cy.visit('/'),
    cy.get(homepagePages.usernameInput).type(homepageConstants.inncorectUsername),
    cy.get(homepagePages.passwordInput).type(homepageConstants.password),
    cy.get(homepagePages.logInButton).click(),
    cy.get(homepagePages.logInError).contains(homepageConstants.logInerror).should('be.visible')
  })
})
