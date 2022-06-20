class AddBoard {

    get organizations() {
        return cy.get('.vs-c-my-organizations-item-wrapper').first()
    }
    get plusInput() {
        return this.organizations.children().eq(1);
    }

    get addNewBoard(){
        return cy.get('.vs-c-organization-boards__item--add-new').click()
    }

    get boardTitle(){
        return cy.get ('.el-form-item').last().find('input').type('neki tekst')
        
    }
    get boardText(){
        return this.boardTitle.last.click()
    
    }
    get nextBtn(){
        return cy.get ("[type='button']").eq(3).click()
    }

    get checkBtn(){
    return cy.get ('.vs-c-radio-check').eq(0).click()
    }
    
    addBoard1() {

        this.plusInput.click()
        cy.contains('OK').click()
        this.addNewBoard.click({force: true})
        this.boardTitle.click()
        this.nextBtn.click({force: true})
        this.checkBtn.click()
        this.nextBtn.click
        this.nextBtn.click
        this.nextBtn.click
        
    }
    }

    export const addBoard = new AddBoard()