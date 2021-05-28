///<reference types="cypress"/>

describe('Autenticação', () => {
    it('Efetuar login com usuário e senha válido', () => {
      //acessar o site
        cy.visit('https://purescript-react-realworld.netlify.app/');
      //clicar no botão sign in
        cy.get('.nav-link')//o nav-link no código tem 4 elementos nav-links iguais
          .contains('Sign in')//aqui procurar o texto dentro dos 4 elementos do nav-link
          //cy.get('[href*=login]').click() -esta linha seria a simplificação das outras duas acima
          .click()
      //informar o usuário e senha
      const user = 'mengovisk@email.com'
      const pass = '12345678'

        cy.get('input[type=email]').type(user)
        cy.get('input[type=password]').type(pass)

      //clicar no botão entrar
      cy.get('button.btn-primary').click()

      //veriicar se foi autenticado
      cy.get('.nav-pills a.nav-link')
        .should('have.length', 2)

      cy.get('.nav-pills a.nav-link') //2 elementos
      //posição eq(0) eq(1)...igual Array. Outra forma é usar o first e o last
        .first() //este first indica o primeiro eq(0)
        .should('contain.text', 'Your Feed') //deve conter...
    });
});