import loginPage from "../../page_objects/web/loginPage";
import contactListPage from "../../page_objects/web/contactListPage";
import userUtil from "../../util/userUtil";

describe('This is to verify the Login Functionality',{ tags: ['@ui', '@regression'] }, function() {

    const loginObj = new loginPage();
    const contactlistObj = new contactListPage();
    const userUtilObj = new userUtil();

    beforeEach( function() {

        cy.fixture('testdata').then(function(userData){
            this.loginData = userData.login;
        })
        cy.step('Open the page');
        cy.visit('/');

    })

    it('Verify if user is able to login with correct username and password', function() {

        cy.step('Enter username and password then click login');
        loginObj.enterUsername(this.loginData.username);
        loginObj.enterPassword(this.loginData.password);
        loginObj.clickSubmitButton();
        cy.step('Verify if user is able to successfully logged-in');
        contactlistObj.verifyContactListPage();

    })

    it('Verify if user is NOT able to login with incorrect username and password', function() {

       cy.step('Enter username and password then click login');
       loginObj.enterUsername(this.loginData.incorrectusername);
       loginObj.enterPassword(this.loginData.incorrectpassword);
       loginObj.clickSubmitButton();
       cy.step('Verify if user is unable to login and error message is displayed');
       loginObj.verifyLoginErrorMessage();

    })

    it('Verify if newly created user via API is able to login', function() {

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