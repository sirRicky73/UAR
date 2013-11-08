#UAR - Ubuntu Affiliate Redirect

This project is a fork of the JBAR-Chrome, JBAR-Firefox, JBAR-Opera and JBAR-Safari browser extensions found here https://github.com/rikai. The fork is designed to support Ubuntu by way of tagging Amazon shopping sessions with Ubuntu's affiliate code. This is useful for people who would prefer to have a browser extension rather than using the built-in functionality with Unity. At this point only five countries are supported:

* USA u1webapp-20
* UK u1webapp-uk-21
* Germany u1webapp-21
* Canada u1webapp-ca-20
* France u1webapp-fr-21

I would love to add more to the list, but tags for other countries do not seem to exist. I referenced http://bazaar.launchpad.net/~ubuntu-branches/ubuntu/saucy/libunity-webapps/saucy/view/head:/src/runner/unity-webapps-runner-amazon.c in order to find the tags.

The functionality in these extensions before the fork offer the flexibility to include affiliates other than Amazon that use multiple values in the URL to tag shopping sessions. This functionality has been left in place for the time being.

Note that with the Opera extension, the tag is not revealed in the URL bar until it is clicked.

Tags in all the extensions should be viewable while looking at a product.

## Web Stores

Getting these extensions to web stores is a bit of a problem. 
* Chrome, it requires $5 to register as a developer. It is a small amount, I am nonetheless not going to be spending that money. 
* Firefox, it is actually pretty good, the extension can be found here https://addons.mozilla.org/en-US/firefox/addon/ubuntu-affiliate-redirect/
* Opera, it seems they are in a transition phase regarding how to package extensions. I am confused about what is required and do not have the time to investigate it. I think it might be related to the fact that the Linux version of Opera is a few versions behind the Windows version and is making use of the old packaging methods. I am working under Linux. I don't know.
* Safari, the extension might be in their web store? I don't know. Submitting it was actually fairly easy, though it did require a Windows virtual machine. However, I could not figure out how to search for the extension in the store, and I receieved no link for it while submitting. I don't know.

##Contributions

Of course they are welcome, I'm am new to GitHub, I'll have to figure that out. At the moment, it would be nice to consolodate the code that is duplicated accross the extensions.
