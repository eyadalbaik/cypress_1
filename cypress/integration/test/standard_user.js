describe("THIS IS TO TEST THE LOGIN" , ()=>{

    it("FIRST TEST TO THE LOGIN" , ()=>{

     cy.visit("https://www.saucedemo.com/")

     cy.get('[data-test="username"]').type("standard_user")
     
     cy.get('[data-test="password"]').type("secret_sauce")
     
     cy.get('[data-test="login-button"]').click()

     cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()

     cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()

     cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()

     cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click()

     cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click()

     cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click()

     cy.get('.shopping_cart_link').click()

     cy.get('[data-test="checkout"]').click() 

     cy.get('[data-test="firstName"]').type("eyad")

     cy.get('[data-test="lastName"]').type("Albaik")

     cy.get('[data-test="postalCode"]').type("1234")

     cy.get('[data-test="continue"]').click()

     cy.get('[data-test="finish"]').click() 

     cy.get('[data-test="back-to-products"]').click() 

      
     })
    })
