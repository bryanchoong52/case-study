///<reference types="cypress" />

// Employeeproject.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test


describe('Test Employee Project', () => {

  const userJohn = 'johnsmith'
  const passwordJohn = 'john123'
  beforeEach(() => {
    cy.visit('https://www.figma.com/proto/PJS5uZNqDxmIRJJXiwHTdx/Case-Study?node-id=1%3A2&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=10%3A7372&hide-ui=1')
  })

   it('Login Employment Screen',() =>{
    cy.get('Username').type(userJohn)
    cy.get('Password').type(passwordJohn)
    cy.get('btn').click()
    })


     
  it('Add Employee',()=>{
	  cy.contains('ADD NEW EMPLOYEE').click()
	  cy.get('Employee Name').type('Bella')
	  cy.get('Current Position').type('Admin')
	  cy.get('EmployeeID').type('00992')
	  cy.get('Address').select('Bandar Utama')
	  cy.get('Role').type('important')
	  cy.get('SAVE').click()
  })
  

  it('Edit Employee', ()=>{
	  cy.get('Employee Name').should('have.value', '').within(() => {
		  get('edit').click()
		  cy.get('Current Position').type('Executive')
		  cy.get('SAVE').click()
	  })
  })

  it('Add New Address',()=>{
	  cy.contains('NEW ADDRESS').click()
	  cy.get('Address Name').type('Bandar Utama ')
	  cy.get('Unit/Block/Building').type('No 678')
	  cy.get('Street').type('10/7, jalan BU2')
	  cy.get('Postcode').type('47800')
	  cy.get('Country').type('Malaysia')
	  cy.get('SAVE').click()
  })
  
  it('Filter Address',()=>{
	  cy.get('Filter Address').type('Avenue').should('have.value', 'Bandar Utama')
	  
  })

})