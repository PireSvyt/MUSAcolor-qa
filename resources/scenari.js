const { random_id } = require("../utils/toolkit.js")

let scenari = {
    paths: {
        "root": "https://musacolor.vercel.app/",
        "landing": "",
        "patient": "patient/"
    },
    'random practician': {
        login: random_id() + '@yopmail.com',
        pawword: random_id()
    },
    'practician A': {
        login: 'practician@yopmail.com',
        pawword: 'practician'
    },
    'practician B': {
        login: '',
        pawword: ''
    },
    authent: {
        signin: {
            timeout: 10 // seconds
        },
        signout: {
            timeout: 10 // seconds
        }
    },

}

module.exports = { scenari };
