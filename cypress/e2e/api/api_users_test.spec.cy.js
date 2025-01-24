import usersAPI from "../../page_objects/api/usersAPI";
import userUtil from "../../util/userUtil";


describe("Verify CRUD functionality of API",{ tags: ['@api', '@regression'] }, ()=> {

    
    const usersAPIObj = new usersAPI();
    const usersObj = new userUtil();
    var authToken;

    before(() => {

        cy.apiLogin().then(()=> { authToken = Cypress.env('authToken'); });


    })

    it('Verify if API is able to return the profile information', function(){
 
        usersAPIObj.getUserProfile(authToken).then((response) => {

            expect(response.status).to.eql(200);
            expect(response.body).to.include.keys('firstName', 'lastName', 'email');

        })

    })

    it('Verify Add User API functionality', function(){

        let userInfo = usersObj.generateUserInformation();

        usersAPIObj.postAddUser(authToken, userInfo).then((response) => {

            expect(response.status).to.eql(203);
            expect(response.body).to.include.keys('user','token');

        });

    })

})