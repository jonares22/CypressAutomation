class contactListPage {

    elements = {

        contactListHeader: () => cy.get('header > h1'),
        addContactBtn: () => cy.get('#add-contact')

    }

    verifyContactListPage() {
        this.elements.contactListHeader().should('have.text', 'Contact List');
    }

    clickAddNewContactButton() {
        this.elements.addContactBtn().click();
    }

}

export default contactListPage;