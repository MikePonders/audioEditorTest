exports.pageLoaded = function() {
var observable = require("data/observable");
var user = new observable.fromObject({
    email: "user@domain.com",
    password: "password"
});

};
