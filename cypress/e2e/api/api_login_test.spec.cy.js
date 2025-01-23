import usersAPI from "../../page_objects/api/usersAPI";
import userUtil from "../../util/userUtil";

describe('This is to test the login API',{ tags: ['@api', '@regression'] }, function(){

    const usersAPIObj = new usersAPI();
    const usersObj = new userUtil();
    var username;
    var password;
    var authToken;

    before(() => {

        cy.fixture('testdata').then(function(userData){
            username = userData.login.username;
            password = userData.login.password;
        })

    });

    it('Verify if user is able to login via API with correct username and password', function(){

        usersAPIObj.postLogin(username,password).then((response) => {
            
            expect(response.status).to.eql(200);
            expect(response.body).to.have.property('token');

        });

    })

});