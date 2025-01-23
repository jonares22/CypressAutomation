import stringUtil from "./stringUtil";

class userUtil {

    constructor() {
        this.stringObj = new stringUtil();
    }
    

    generateFirstName() {

        let firstName = "firstname" + this.stringObj.generateRandomString(10);
        return firstName;

    }

    generateLastName() {

        let lastName = "lastname" + this.stringObj.generateRandomString(10);
        return lastName;
        
    }

    generateEmail(fname, lname){

        let email = fname + '.' + lname + '@yopmail.com';
        return email;

    }

    generatePassword(){

        let password = this.stringObj.generateRandomString(15);
        return password;

    }

    generateUserInformation(){

        let firstname = this.generateFirstName();
        let lastname = this.generateLastName();
        let userInfo = {
            firstName: firstname,
            lastName: lastname,
            email: this.generateEmail(firstname, lastname),
            password: this.generatePassword()
        }
        return userInfo;

    }

}

export default userUtil;