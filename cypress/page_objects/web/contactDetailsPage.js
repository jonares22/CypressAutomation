class contactDetailsPage {

    elements = {

        firstnameText: () => cy.get('#firstName'),
        lastnameText: () => cy.get('#lastName'),
        birthText: () => cy.get('#birthdate'),
        emailText: () => cy.get('#email')

    }

    verifyContactDetailsInformation(contact_info){

        this.elements.firstnameText().should('have.text', contact_info.firstName);
        this.elements.lastnameText().should('have.text', contact_info.lastName);
        this.elements.birthText().should('have.text', contact_info.birthdate);
        this.elements.emailText().contains(contact_info.email, { matchCase: false})

    }


}


export default contactDetailsPage;