describe('Nav Menus', () => {
  // For desktop view
  context('720p resolution', () => {
      beforeEach(() => {
          /**
           * Run these tests as if in a desktop browser,
           * with a 720p monitor
           */
          cy.viewport(1280, 720)
      })
      describe('When you visit home', () => {
          it('Should visit home page', () => {
              cy.visit('/')
          });

          describe('go to checkout', () => {
              it('Should go to checkout', () => { 
                  cy.get('[data-cy=snd-btn]').contains('Enviar').click()
                  cy.url().should('include', '/checkout')
              })
          })
      })
  })

  
})