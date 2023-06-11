describe("THIS IS TO TEST THE LOGIN",()=>{
    it("FIRST TEST TO LOGIN",()=>{

     cy.visit("https://www.saucedemo.com/")

     cy.get('[data-test="username"]').type("problem_user")
     
     cy.get('[data-test="password"]').type("secret_sauce")

     cy.get('[data-test="login-button"]').click()

     cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()

     cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()

     cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click()  
       
     cy.get('.shopping_cart_link').click()
     
     cy.get('[data-test="checkout"]').click() 

     


     
     })
    })
