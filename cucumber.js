module.exports = {
    default: {
        worldParameters: { 
            appUrl: 'http://localhost:3000/' 
        },
        require: [
            "resources/*.js",
            "utils/*.js",
            "utils/**/*.js",

            "features/objects/*.js",
            "features/steps/*.js",

            "setup/*.js",
            "setup/**/*.js",
        ],
        "cucumber.features": [
            "features/*.feature",
        ],
        "cucumber.glue": [
            "features/*.feature",

            "resources/*.js",
            "utils/*.js",
            "utils/**/*.js",

            "features/objects/*.js",
            "features/steps/*.js",

            "setup/*.js",
            "setup/**/*.js",
        ]
    }
};