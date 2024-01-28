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
        'practician patients': {
            login: 'practicianpatients@yopmail.com',
            password: 'practician'
        },
        'practician exams': {
            login: 'practicianexams@yopmail.com',
            password: 'practician'
        },
    },
    timeout: { // in seconds
        admincommands: 10,
        appmenu: {
            value: 3
        }, 
        authent: {
            value: 10,
        }, 
        practician: {
            managepatients: { 
                value: 5
            },
            manageexams: { 
                value: 5,
                pvo: { 
                    value: 10                
                },
                luscher8: { 
                    value: 5                
                },
            },
        },
        helppage: 3
    }
}

module.exports = { scenari };
