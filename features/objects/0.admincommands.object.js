const { expect } = require("@playwright/test")
const { setDefaultTimeout } = require("@cucumber/cucumber")
const { scenari } = require("../../resources/scenari.js")
const bcrypt = require("bcrypt");
const env = require("../../resources/.env.json")
const {apiAuthSignIn} = require("../../resources/auth.api.js")
const {apiAdminDatabaseCommand} = require("../../resources/admin.api.js")

setDefaultTimeout(scenari.timeout.admincommands * 1000)

class AdminCommand {

	async assertEnvIsOk() {
        expect(env).toBeDefined()
        expect(env.admin_signin_login).toBeDefined()
        expect(env.admin_signin_password).toBeDefined()
        expect(env.admin_database_url).toBeDefined()
	}

	async dropCollection(collection) {
        // Login as admin
        const adminSigninResponse = await apiAuthSignIn({
            login: env.admin_signin_login,
            password: env.admin_signin_password,
            encryption: false,
        });
        //console.log("adminSigninResponse \t", adminSigninResponse.type)
        expect(adminSigninResponse.type).toBe("auth.signin.success")
        if (adminSigninResponse.type === "auth.signin.success") {
            const deleteResponse = await apiAdminDatabaseCommand(
                {
                    action: { 
                        type: "delete", 
                        collection: collection, 
                        match: { } 
                    },
                }, 
                adminSigninResponse.data.token
            );
            //console.log("deleteResponse \t", deleteResponse.type)
            expect(deleteResponse.type).toBe("admin.databasecommand.delete.success")
        }
	}   

}

module.exports = { AdminCommand }