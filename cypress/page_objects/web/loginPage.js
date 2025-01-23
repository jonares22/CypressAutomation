class loginPage {

    elements = {
        usernameInput: () => cy.get('#email'),
        passwordInput: () => cy.get('#password'),
        submitBtn: () => cy.get('#submit'),
        loginErrorMessage: () => cy.get('#error')
    }

    
    /**
     * The function `enterUsername` is used to input a username into a username input field.
     * @param username - The `enterUsername` function takes a `username` parameter as input.
     */
    enterUsername(username){
        this.elements.usernameInput().type(username);
    }

    enterPassword(password){
        this.elements.passwordInput().type(password);
    }

    clickSubmitButton(){
        this.elements.submitBtn().click();
    }

    verifyLoginErrorMessage(){
        this.elements.loginErrorMessage().should('have.text','Incorrect username or password');
    }

}

export default loginPage;