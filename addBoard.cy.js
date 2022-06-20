import {loginPage1} from '../page_objects/loginPage1';
import {addBoard} from '../page_objects/addBoard';

describe('login POM', () => {
    
    let Email = 'sasa.antal944@gmail.com'
    let Password = 'Salelexasale11'

    before('visit login page', () =>{
        cy.visit('https://cypress.vivifyscrum-stage.com/login')
        loginPage1.login1(Email,Password);
    })

  it ('add board',() =>{
    addBoard.addBoard1()
    

})
})