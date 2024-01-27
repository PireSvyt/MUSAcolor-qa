const { random_id } = require("../utils/toolkit.js")

let scenari = {
    paths: {
        "root": "http://localhost:3000/",
        "landing": "",
        "patient": "patient/"
    },
    accounts:{
        'random practician': {
            login: random_id() + '@yopmail.com',
            password: random_id()
        },
        'practician A': {
            login: 'practicianA@yopmail.com',
            password: 'practician'
        },
        'practician B': {
            login: 'practicianB@yopmail.com',
            password: 'practician'
        },
    },
    timeout: { // in seconds
        admincommands: 10,
        appmenu: 3, 
        authent: 10, 
        practician: {
            managepatients: 5,
            manageexams: 5
        },
        helppage: 3
    }
}

module.exports = { scenari };
