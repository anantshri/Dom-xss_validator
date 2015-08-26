var system = require('system');
var Base64 = require('base-64');
var args = system.args;
console.log(args[1]);
console.log(Base64.decode(args[1]));
var page = require('webpage').create();
page.open(Base64.decode(args[1]), function (status) {
    if (status !== 'success') {
        console.log('Unable to load the address!');
        phantom.exit();
    } else {
        window.setTimeout(function () {
            var title = page.evaluate(function() {
    			return document.title;
  			});
  			console.log('Page title is ' + title);
            phantom.exit();
        }, 100); // Change timeout as required to allow sufficient time
    }
});
