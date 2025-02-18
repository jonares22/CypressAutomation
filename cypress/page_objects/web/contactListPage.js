class contactListPage {

    elements = {

        contactListHeader: () => cy.get('header > h1'),
        addContactBtn: () => cy.get('#add-contact'),
        logoutBtn: () => cy.get('#logout'),
        contactTable: () => cy.get('#myTable'),

    }

    verifyContactListPage() {
        this.elements.contactListHeader().should('have.text', 'Contact List');
    }

    clickAddNewContactButton() {
        this.elements.addContactBtn().click();
    }

    clickLogoutButton() {
        this.elements.logoutBtn().click();
    }

    verifyAddedContactByEmail(email) {
        this.elements.contactTable()
            .find('td')
            .contains('td', email, {matchCase: false}).should('exist');
    }

    clickRowByName(name) {
        this.elements.contactTable().contains('td', name)
            .parents('tr').click();
    }

}

export default contactListPage;