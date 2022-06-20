class LoginPage1 {
    
    get emailInput(){
        return cy.get("[type='email']").click();
    }
    get passwordInput(){
       return cy.get("[type='password']").click();
   }
    get submitBtn(){
       return cy.get("[type='submit']").click();
   }
   

   login1(email,password) {
       this.emailInput.type(email)
       this.passwordInput.type(password)
       this.submitBtn.click()
   }
   
   
   }
   
   export const loginPage1 = new LoginPage1()