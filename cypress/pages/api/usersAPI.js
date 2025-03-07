
export const usersAPI = new class usersAPI {

    /**
     * The `postLogin` function sends a POST request to log in a user with the provided username and
     * password, expecting a token in the response.
     * @param username - The `username` parameter in the `postLogin` function represents the email address
     * of the user trying to log in.
     * @param password - The `postLogin` function you provided is a Cypress test function for logging in a
     * user. It sends a POST request to the '/users/login' endpoint with the provided username and
     * password, and expects a response with status code 200 and a token property in the response body.
     * @returns The `postLogin` function is returning the authentication token received from the server
     * after successfully logging in with the provided username and password.
     */
    postLogin(username,password) {

        const param = {
            "email": username,
            "password": password
        }

        return cy.request({method:'POST', url: '/users/login', body: param}).then((response) => {

            return response;

        })

    }

    getUserProfile(authToken) {

        const headerOptions = {
            "content-type": "application/json",
            "Authorization": "Bearer " + authToken
        }

        return cy.request({method: 'GET', url: '/users/me', headers: headerOptions}).then((response) => {
            
            return response;

        });

    }

    postAddUser(authToken, userInformation) {

        const params = {

            "firstName": userInformation.firstName,
            "lastName": userInformation.lastName,
            "email": userInformation.email,
            "password": userInformation.password

        }

        const headerOptions = {
            "Authorization": authToken,
            "content-type": "application/json"
        }

        return cy.request({method: 'POST', url: '/users', body: params, headers: headerOptions}).then((response) => {

            return response;

        })

    }

}

export default usersAPI;