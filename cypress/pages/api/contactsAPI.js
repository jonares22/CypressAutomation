
export const contactsAPI = new class contactsAPI{

    postAddContact(auth, contact_info){

        const param = {
            "firstName": contact_info.firstName,
            "lastName": contact_info.lastName,
            "birthdate": contact_info.birthdate,
            "email": contact_info.email,
            "phone": contact_info.phone,
            "street1": contact_info.streetOne,
            "street2": contact_info.streetTwo,
            "city": contact_info.city,
            "stateProvince": contact_info.stateProvince,
            "postalCode": contact_info.postalCode,
            "country": contact_info.country
        }
        
        const headerOption = {
            "Authorization": "Bearer " + auth,
            "content-type": "application/json"
        }

        return cy.request({method: 'POST', url: '/contacts', body: param, headers: headerOption}).then(function(response) {

            return response;

        })

    }


}
