import User from "../fixtures/ZootopiaUserdata.json"


describe("რეგისტრაცია ვალიდური მონაცემებითთ",()=>{
    it("Case 1",()=>{

        cy.visit("https://testzootopia.loremipsum.ge/ka")
        cy.viewport(1920,1080)
        cy.get('.iprof').click()
        cy.get('.input-shablon > p > a').click()
        cy.get(':nth-child(1) > .ismile').type(User.DATA.Name)
        cy.get(':nth-child(2) > .imail').type(User.DATA.Email)
        cy.get('.ipir').type(User.DATA.PersonaID)
        cy.get(':nth-child(4) > .itel').type(User.DATA.MobileNumber)
        cy.get(':nth-child(5) > .ipass').type(User.DATA.Password)
        cy.get('.reg-form-left > :nth-child(6) > .ipass').type(User.DATA.Password)
        cy.get('.etx > svg').click() // ძალიან ძალიან ძალიან !!! დამტანჯა მარტო ამან.....
        cy.get('.regsub').click()
        cy.get('a').click()
        cy.contains('ჩემი გვერდი').should('be.visible')

    })
})


describe("რეგისტრაცია ვალიდური მონაცემებით - წესების და პირობების არ მონიშვნა",()=>{
    it("Case 2",()=>{
        cy.visit("https://testzootopia.loremipsum.ge/ka")
        cy.viewport(1920,1080)
        cy.get('.iprof').click()
        cy.get('.input-shablon > p > a').click()
        cy.get(':nth-child(1) > .ismile').type(User.DATA.Name)
        cy.get(':nth-child(2) > .imail').type(User.DATA.Email)
        cy.get('.ipir').type(User.DATA.PersonaID)
        cy.get(':nth-child(4) > .itel').type(User.DATA.MobileNumber)
        cy.get(':nth-child(5) > .ipass').type(User.DATA.Password)
        cy.get('.reg-form-left > :nth-child(6) > .ipass').type(User.DATA.Password)
        cy.get('.regsub').click()
        cy.get('.etx > svg').should('have.css','color','rgb(17, 17, 17)')
    })
})


describe("ავტორიზაცია არსებული იუზერით",()=>{
    it("Case 3/13",()=>{
        cy.visit("https://testzootopia.loremipsum.ge/ka")
        cy.viewport(1920,1080)
        cy.get('.iprof').click()
        cy.get(':nth-child(5) > .imail').type(User.DATA2.CorrectEmail)
        cy.get('.ipass').type(User.DATA2.Password)
        cy.get('.avtorization > .input-shablon > .form-button').click()
        cy.contains('ჩემი გვერდი').should('be.visible')
        cy.get('.srch-cart-prof > .iprof').click()
        cy.get(':nth-child(1) > .redinput').should('have.value','Sebastian')
        cy.get(':nth-child(2) > .redinput').should('have.value','123456713')
        cy.get(':nth-child(3) > .redinput').should('have.value','Ctest@test.ge')
        cy.get(':nth-child(4) > .redinput').should('have.value','155123413')
    })
})


describe("კალათაში პროდუქტის დამატება",()=>{
    it("Case 4/18",()=>{
        cy.visit("https://testzootopia.loremipsum.ge/ka")
        cy.viewport(1920,1080)
        cy.get('.burger > .burger-span').click()
        cy.get('.cat-down.active > .category-holder > :nth-child(1) > :nth-child(2) > a').click()
        cy.get(':nth-child(1) > .price-cart > .product-cart').click()
        cy.get(':nth-child(1) > .price-cart > .product-cart').should('have.css','background-color','rgb(245, 98, 31)')
        cy.get('.icart > #cart-items-count').should('contain','1')
        cy.get(':nth-child(5) > .price-cart > .product-cart').click()
        cy.get(':nth-child(5) > .price-cart > .product-cart').should('have.css','background-color','rgb(245, 98, 31)')
        cy.get('.icart > #cart-items-count').should('contain','2')
        cy.get('.icart').click()
        cy.get('.main-cart').should('be.visible')
        cy.get('.cart-list').should('be.visible')
        
    })
})

describe("კალათიდან პროდუქტის წაშლა იკონით.",()=>{
    it("Case 5/19",()=>{
        cy.visit("https://testzootopia.loremipsum.ge/ka")
        cy.viewport(1920,1080)
        cy.get('.burger > .burger-span').click()
        cy.get('.cat-down.active > .category-holder > :nth-child(1) > :nth-child(2) > a').click()
        cy.get(':nth-child(1) > .price-cart > .product-cart').click()
        cy.get(':nth-child(1) > .price-cart > .product-cart').should('have.css','background-color','rgb(245, 98, 31)')
        cy.get('.icart > #cart-items-count').should('contain','1')
        cy.get('.icart').click()
        cy.get('.main-cart').should('be.visible')
        cy.get('.cart-list').should('be.visible')
        cy.get('.clear > a > svg').click({multiple: true})
        cy.get('.empty').should('have.class','empty active')
    
    })
})