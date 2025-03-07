import { loginPage, contactListPage } from '../../pages';
import userUtil from "../../util/userUtil";

describe('This is to verify the Login Functionality',{ tags: ['@ui', '@regression'] }, function() {

    const userUtilObj = new userUtil();

    beforeEach( function() {

        cy.fixture('testdata').then(function(userData){
            this.loginData = userData.login;
        })
        cy.step('Open the page');
        cy.visit('/');

    })

    it('Verify if user is able to login with correct username and password', { tags: ['@current'] }, function() {

        cy.step('Enter username and password then click login');
        loginPage.enterUsername(this.loginData.username);
        loginPage.enterPassword(this.loginData.password);
        loginPage.clickSubmitButton();
        cy.step('Verify if user is able to successfully logged-in');
        contactListPage.verifyContactListPage();

    })

    it('Verify if user is NOT able to login with incorrect username and password', function() {

       cy.step('Enter username and password then click login');
       loginPage.enterUsername(this.loginData.incorrectusername);
       loginPage.enterPassword(this.loginData.incorrectpassword);
       loginPage.clickSubmitButton();
       cy.step('Verify if user is unable to login and error message is displayed');
       loginPage.verifyLoginErrorMessage();

    })

    it('Verify if newly created user via API is able to login', { tags: ['@now'] } , function() {

        cy.step('Generate User Information');
        let userInfo = userUtilObj.generateUserInformation();
        let token;
        cy.log(JSON.stringify(userInfo));
        cy.step('Get Authentication');
        cy.apiLogin().then((resp) => { token = Cypress.env('authToken'); });
        cy.step('Add New User via API');
        cy.addUser(token,userInfo);
        cy.step('Verify if newly created user is able to login')
        cy.login(userInfo.email, userInfo.password);

    })

})