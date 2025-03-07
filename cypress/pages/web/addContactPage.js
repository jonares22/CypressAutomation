
export const addContactPage = new class {

    elements = {

        firstNameInput: () => cy.get('#firstName'),
        lastNameInput: () => cy.get('#lastName'),
        emailAddressInput: () => cy.get('#email'),
        submitBtn: () => cy.get('#submit')

    }

    enterFirstName(firstname) {

        this.elements.firstNameInput().type(firstname);

    }    

    enterLastName(lastname) {

        this.elements.lastNameInput().type(lastname);

    }

    enterEmailAddress(email) {

        this.elements.emailAddressInput().type(email);

    }

    clickSubmitButton(){

        this.elements.submitBtn().click();

    }

}

export default addContactPage;