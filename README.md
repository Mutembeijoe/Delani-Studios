# DELANI STUDIO
#### A simple website for Delani Studios to showcase themselves. 
#### By **Joe Mutembei**
*******
## Description
Delani Studio is a simple website for Delani Studio to introduce themselves and showcase some of their works. Its is an exellent idea to promote the Studio customer base
## Setup/Installation Requirements
* clone the repository to your local computer
* Open the project folder 
* (Optional) Open in a text editor (preffered Visual studio code or Atom)       Download a Live-server package on the editor and run the project.         (Default port is 5500)
*  Alternative to step 3, you may start up the project with a simple python http server.

    Python 3

    ```bash
        python -m http.server 8080
    ```
    Python 2

    ```bash
        python -m SimpleHTTPServer 8080
    ```
* Use updated browsers. Google chrome and Firefox are preferred. Code uses ES6 syntax.
## Known Bugs
   Cross Origin Browser Resource Sharing problem when contacting the MailChimp API, message goes through just fine but ajax resolves to to error. Working on a solution
## Technologies Used
 * HTML
 * CSS
    * Flexbox
    * -webkit- prefixes
 * JavaScript
    * ES6
 * Jquery
 * Jquery form validate plugin
 * Google Fonts

 --------
## BDD 
   | Action                                           	| Expected Behaviour                                    	| Possible Impementation                                                   	|
|--------------------------------------------------	|-------------------------------------------------------	|--------------------------------------------------------------------------	|
| Page Load                                        	| Bouncing Mouse Animation                              	| CSS Keyframes Animations || jQuery                                       	|
| Hover over Bouncing Mouse                        	| Stop Bouncing Animation                               	| CSS Pesudo class: hover  || jQuery mouse events                          	|
| Click Bouncing Mouse                             	| Scroll Down to The About Section                      	| HTML #id same page navigation                                            	|
| Scroll from the Landing Page                     	| -Smooth Scroll & parallax effect                	| -CSS 3 scroll behaviour && fixed backgrounds        	|
| Hover over What we Do icons                      	| Box Shadow applied                                    	| CSS pseudo class: hover                                                  	|
| Click on What we Do icons                        	| Toggle between icon and description                   	| jQuery fadeOut & fade in Effects                                         	|
| Hover over Portfolio images                      	| fade background Image & Reveal projection decription  	| jQuery Fade to animations,toogle Class & CSS methods                     	|
| Quickly Hover over Portfolio images              	| Animations do not continue for extended periods       	| jQuery stop animations method                                            	|
| View Port Resize                                 	| Responsive page                                       	| CSS Flexbox &&  Media Queries                                            	|
| Fill and Submit Form                             	| Pop up message to verify message is received          	| jQuery Ajax call to Mailchimp Api && bootstrap success alert on success  	|
| Hover over fixed yellow strip in the bottom left 	| Animated slide revealing the designer's alias         	| jQuery animate method                                                    	|
| Hover over social icons                          	| Box shadow                                            	| Css Box shadow                                                           	|

## Support and contact details
    Holla me at mutembeijoe@gmail.com if you run into any additional issues!
