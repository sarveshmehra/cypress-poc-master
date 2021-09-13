import SmokePage from '../pages/smokePage'
import '../support/commands'

const smokePage = new SmokePage();


describe('My first test', () => {
    it('should do a hero search', function () {
        cy.visit('/')
        smokePage.getPageTitle().should('contain', 'Tour of Heroes')
        smokePage.getSearchBox().type('narco')
        smokePage.getHitOnSearch().click()
        smokePage.getHeroDetails().should('contain', 'NARCO Details')
    })

    it('should search for a hero and edit a hero', function () {
        cy.visit('/')
        smokePage.getPageTitle().should('contain', 'Tour of Heroes')
        smokePage.getSearchBox().type('narco')
        smokePage.getHitOnSearch().click()
        smokePage.getHeroDetails().should('contain', 'NARCO Details')
        smokePage.getHeroNameInput().clear().type('Leo')
        smokePage.getSaveButton().click() //find better selector
        smokePage.getAppMessageEdit().should('contain', 'HeroService: updated hero id=12')
    })
    it('Should navigate to a hero and edit hero', () => {
        cy.visit('/')
        smokePage.getPageTitle().should('contain', 'Tour of Heroes')
        smokePage.getHeroesButton().click()
        smokePage.getFirstHero().click()
        smokePage.getHeroNameInputBox().clear().type('Dr Cypress')
        smokePage.getSaveButton().click() //find better selector
        smokePage.getAppMessageEdit().should('contain', 'HeroService: updated hero id=11')
    })
    it('Should delete a hero', () => {
        cy.visit('/')
        smokePage.getPageTitle().should('contain', 'Tour of Heroes')
        smokePage.getHeroesButton().click()
        smokePage.getDeleteHeroButton().click()
        smokePage.getSecondAppMessage().should('contain', 'HeroService: deleted hero id=11')
    })
    it('Should add a new hero', function () {
        cy.visit('/')
        smokePage.getPageTitle().should('contain', 'Tour of Heroes')
        smokePage.getHeroesButton().click()
        smokePage.getNameInput().type('Dr Cypress')
        smokePage.getAddButton().click()
        smokePage.getSecondAppMessage().should('contain', 'HeroService: added hero w/ id=21')
        smokePage.getSelectHeroButton().click()
        smokePage.getHeroDetails().should('contain', 'DR CYPRESS Details')
    })
})
