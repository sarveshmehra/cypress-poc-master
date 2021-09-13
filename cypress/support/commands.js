import "cypress-localstorage-commands"

Cypress.Commands.add('login', () => {
    cy.request({
        method: 'POST',
        url: Cypress.config().baseUrl + '/api/auth/login',
        body: {
            userid: Cypress.env('username'),
            passw: Cypress.env('password')
        }
    })
        .then((resp) => {
            window.localStorage.setItem('jwt', resp.body.data.itsession)
        })
});