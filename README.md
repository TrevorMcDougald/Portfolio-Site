# Repository for portfolio website
TODO: Look up "Emmet" (HTML template), look up "Flow" (JS Linter),



#### 9/3/2019
- I figured out that to redirect all of my domains to my main one I 
need to get an SSL/TLS certificate from AWS Certificate Manager service
for my domain. This has something to do with the encryption that occurs
from user redirection. So from what I can gather, my domain name 
(mcdougald.info) is converted to a numerical IP address by the
Domain Name System (DNS) directory service (route 53?). 
    *     I confirmed "Route 53" IS a DNS service, and the one I'm using
        *        Route 53 automatically assigns four name servers to
        my hosted zone. 
    *     Ah, so maybe the issue I'm having is that both domains need to
    resolve to the same IP address? I can use an A records or set one to
    CNAME to the other. Which is what I did with ACM. ("A" records stands for
    address records)
        *         Okay, so apparently the DNS (Route 53) only resolves a 
        domain name to an IP address. It can't actually tell the browser
        to switch to a different domain, although I assumed it'd do it
        automatically. 
- I spent the rest of my time figuring out how to format HTML5/CSS
- I solved the formatter, but the website redirection isn't solved with
the CNAME cert like I thought...

#### 9/5/2019
-   I changed the text/background color of the website. I also changed the font size
-   I learned more about HTTP / HTML / CSS. 
-   I'm still having trouble rerouting trevormcdougald.com to mcdougald.info... 
