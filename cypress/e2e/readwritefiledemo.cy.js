/// <reference types="cypress" />



before(function(){
    cy.fixture('example.json').as('test_data')
})


it('read file using fixtures',function(){
    cy.fixture('example').then((data) =>{
        cy.log(data.name)
        cy.log(data.email)
        // cy.log(data.body)
    })

    cy.log(this.test_data.name)
})



it('Read file using readfile',function(){
   cy.readFile("./cypress/fixtures/example.json").then((data)=>{
    cy.log(data.name)
   })

})


it('write file using writefile', function(){
    cy.writeFile('sample.txt', 'hello i am shisir\n')
    cy.writeFile('sample.txt', 'i am at swift tech ',{flag:"a+"})
})