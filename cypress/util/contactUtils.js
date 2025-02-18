import { faker } from '@faker-js/faker'

class contactUtils {

    generateContactInformation(){

        let birthdate = faker.date.birthdate();
        let formatted_month = birthdate.getMonth() < 10 ? '0' + birthdate.getMonth() : birthdate.getMonth().toString();
        let formatted_day = birthdate.getDate() < 10 ? '0' + birthdate.getDate() : birthdate.getDate().toString();
        let f_birthdate = birthdate.getFullYear() + '-' + formatted_month + '-' + formatted_day;
        let fname = faker.person.firstName();
        let lname = faker.person.lastName();
        let email = fname + '.' + lname + '@yopmail.com';

        let contactInfo = {
            "firstName": fname,
            "lastName": lname,
            "birthdate": f_birthdate,
            "email": email,
            "phone": faker.phone.number({ style: 'international' }),
            "streetOne": faker.location.street(),
            "streetTwo": faker.location.secondaryAddress(),
            "city": faker.location.city(),
            "stateProvince": faker.location.state(),
            "postalCode": faker.location.zipCode,
            "country": faker.location.country,
        }
     
    return contactInfo;

    }

}

export default contactUtils;