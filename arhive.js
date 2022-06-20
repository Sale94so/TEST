class SettingsPage {
    get sidebar() {
        return cy.get('ul[class="vs-c-list"]')
    }

    get configBtn() {
        return this.sidebar.children().last()
    }
    get arhBtn(){
        return cy.get ('button[class="vs-c-btn vs-c-btn--success vs-c-btn--spaced"]')
    }
   
}

export const settingsPage = new SettingsPage();