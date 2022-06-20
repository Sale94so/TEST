import {loginPage1} from '../page_objects/loginPage1';

describe('login POM', () => {
    
    let Email = 'sasa.antal944@gmail.com'
    let Password = 'Salelexasale11'

    before('visit login page', () =>{
        cy.visit('https://cypress.vivifyscrum-stage.com/login')
    })

    it ('valid login using POM1',() =>{

        cy.intercept({
            method:'POST',
            url:'https://cypress-api.vivifyscrum-stage.com/api/v2/login'       
        }).as('validLogin')

        cy.url().should('include','/login');
        loginPage1.login1(Email,Password);
})

})