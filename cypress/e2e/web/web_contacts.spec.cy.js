import { loginPage, contactListPage, addContactPage, contactDetailsPage } from "../../pages";
import userUtil from "../../util/userUtil";
import contactUtils from "../../util/contactUtils";

describe('Verify the Contacts CRUD functionality',{ tags: ['@ui', '@regression'] }, () => {

    beforeEach(() => {
        cy.login();
        cy.apiLogin()
    })

    it('Verify if user is able to add contact record', function() {

        const userObj = new userUtil();
        var userInfo = userObj.generateUserInformation();
        var email = userInfo.email;

        contactListPage.clickAddNewContactButton();
        addContactPage.enterFirstName(userInfo.firstName);
        addContactPage.enterLastName(userInfo.lastName);
        addContactPage.enterEmailAddress(email);
        cy.screenshot();
        addContactPage.clickSubmitButton();
        contactListPage.verifyAddedContactByEmail(email);

    })

    it('Verify if user is able to successfully logout', function() {
    
        contactListPage.clickLogoutButton();
        loginPage.verifyLoginPage();

    })

    it('Verify if user is able to view the Contact Details', { tags: ['@current'] } ,function() {

        const contactsUtilObj = new contactUtils();
        let contactInfo = contactsUtilObj.generateContactInformation();
        let token = Cypress.env('authToken');
        cy.addContact(token,contactInfo);
        cy.reload();
        contactListPage.clickRowByName(contactInfo.firstName);
        contactDetailsPage.verifyContactDetailsInformation(contactInfo);

    })

})