#Jumbotron Scroll Button Controller
This is some simple JS code that will allow a scroll arrow to be added to a webpage, similar to those often found near the bottom of a jumbotron image.

##Setup
Add the following two lines of code to the head section of your HTML file(s).
`<script src="//code.jquery.com/jquery-1.11.2.min.js"></script>`
`<script src="//code.jquery.com/ui/1.11.4/jquery-ui.min.js"></script>`

Then download the scrollArrowController.js file above and save it to a location withing your website directory, for example in a folder called "scripts".

Finally add the following line of code to the head section of your HTML file(s), making sure to edit the src attribute to the location that you saved scrollArrowController.js to.
`<script src="link/to/scrollArrowController.js"></script>`

##Usage
In order for the scroll funciton to work correctly you need to give the `#scroll-arrow` id to the element that you want to be used as the scrolling button.

Then you need to add the `#scroll-arrow-destination` id to the element that you want the page to scroll to. Note that the page will scroll so that the top of the element with the id "scroll-arrow-destination" will be aligned to the top of the browser window.