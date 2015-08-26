# Dom-xss_validator
a rudimentary dom-xss validator by sending crafted payload and expecting a response on a user controlled server.

# components
1. verifier.sh : takes one argument which is a text file with one url per line containing DomXSS payload.
2. verifier.js : phantomjs script which will open the page and parse javascript.

# How to Fuzz DomXSS
Let me reiterate this is just a rudimentary dom xss verification and not a fuzzer. It only verifies if domxss exist on the url.

# How to use

ensure following is set

1. Phantomjs
  1. base64 module
2. a file with one url per line.


# how to detect DomXSS

To detect domXSS we can try to execute following payload.

document.location=http://127.0.0.1:8081/+document.domain

and start a simpleserver at port 8081 on localhost

as this is a 127.0.0.1 hence no request is going outside of user machine and hence its a simplest and quickest way of detecting if the javascript actually worked.



