import contactListPage from "../../page_objects/web/contactListPage";

describe('Verify the Contacts CRUD functionality',{ tags: ['@ui', '@regression'] }, () => {

    const contactObj = new contactListPage();

    beforeEach(() => {
        cy.login();
    })

    it('Verify if user is able to add contact record', function() {

        contactObj.clickAddNewContactButton();

    })

})