import loginPage from "../page_objects/web/loginPage"
import contactListPage from "../page_objects/web/contactListPage";
import usersAPI from "../page_objects/api/usersAPI";
import contactsAPI from "../page_objects/api/contactsAPI";

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', function(username, password) {
    const loginObj = new loginPage();
    const contactObj = new contactListPage();

    cy.fixture('testdata').then(function(userData){

        if(username === undefined && password === undefined){
            username = userData.login.username;
            password = userData.login.password;
        }

        cy.visit('/');
        loginObj.enterUsername(username);
        loginObj.enterPassword(password);
        loginObj.clickSubmitButton();
        contactObj.verifyContactListPage();

    })
    
})

Cypress.Commands.add('apiLogin', function(username, password){

    const apiloginobj = new usersAPI();

    return cy.fixture('testdata').then((userData) => {

        if(username === undefined && password === undefined){
            username = userData.login.username;
            password = userData.login.password;
        }
  
    }).then(function(){

        apiloginobj.postLogin(username,password).then((response)=> {

            Cypress.env('authToken', response.body.token);

        })
    })
    
})

Cypress.Commands.add('addUser', function(authToken, userInformation) {

    const userAPIObj = new usersAPI();

    userAPIObj.postAddUser(authToken, userInformation).then(function(response){

        expect(response.status).to.eql(201);

    })

})

Cypress.Commands.add('addContact', function(authToken, contactInformation) {

    const contactAPIObj = new contactsAPI();

    contactAPIObj.postAddContact(authToken, contactInformation).then(function(response){

        expect(response.status).to.eql(201);

    })

})