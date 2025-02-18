import contactListPage from "../../page_objects/web/contactListPage";
import loginPage from "../../page_objects/web/loginPage";
import addContactPage from "../../page_objects/web/addContactPage";
import userUtil from "../../util/userUtil";
import contactUtils from "../../util/contactUtils";
import contactDetailsPage from "../../page_objects/web/contactDetailsPage";

describe('Verify the Contacts CRUD functionality',{ tags: ['@ui', '@regression'] }, () => {

    const contactObj = new contactListPage();
    const loginObj = new loginPage();
    const addcontactObj = new addContactPage();
    const contactdetailsObj = new contactDetailsPage();

    beforeEach(() => {
        cy.login();
        cy.apiLogin()
    })

    it('Verify if user is able to add contact record', function() {

        const userObj = new userUtil();
        var userInfo = userObj.generateUserInformation();
        var email = userInfo.email;

        contactObj.clickAddNewContactButton();
        addcontactObj.enterFirstName(userInfo.firstName);
        addcontactObj.enterLastName(userInfo.lastName);
        addcontactObj.enterEmailAddress(email);
        addcontactObj.clickSubmitButton();
        contactObj.verifyAddedContactByEmail(email);

    })

    it('Verify if user is able to successfully logout', function() {
    
        contactObj.clickLogoutButton();
        loginObj.verifyLoginPage();

    })

    it('Verify if user is able to view the Contact Details', function() {

        const contactsUtilObj = new contactUtils();
        let contactInfo = contactsUtilObj.generateContactInformation();
        let token = Cypress.env('authToken');
        cy.addContact(token,contactInfo);
        cy.reload();
        contactObj.clickRowByName(contactInfo.firstName);
        contactdetailsObj.verifyContactDetailsInformation(contactInfo);

    })

})