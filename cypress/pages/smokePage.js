class SmokePage {

    getPageTitle() {
        return cy.get('h1')
    }

    getSearchBox() {
        return cy.get('#search-box')
    }

    getHitOnSearch() {
        return cy.get('li > a')
    }

    getHeroDetails() {
        return cy.get('app-hero-detail h2')
    }

    getHeroNameInput() {
        return cy.get('#hero-name')
    }

    getSaveButton() {
        return cy.get('app-hero-detail > :nth-child(1) > :nth-child(5)')
    }

    getAppMessageEdit() {
        return cy.get('app-messages > :nth-child(1) > :nth-child(6)')
    }

    getHeroesButton() {
        return cy.get('[routerlink="/heroes"]')
    }

    getFirstHero() {
        return cy.get(':nth-child(1) > a')
    }

    getHeroNameInputBox() {
        return cy.get('#hero-name')
    }

    getDeleteHeroButton() {
        return cy.get(':nth-child(1) > .delete')
    }

    getNameInput() {
        return cy.get('input')
    }

    getAddButton() {
        return cy.get('.add-button')
    }

    getSecondAppMessage() {
        return cy.get('app-messages > :nth-child(1) > :nth-child(5)')
    }

    getSelectHeroButton() {
        return cy.get(':nth-child(11) > a')
    }
}

export default SmokePage
