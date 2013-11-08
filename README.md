UAR - Ubuntu Affiliate Redirect
====

This project is a fork of the JBAR-Chrome, JBAR-Firefox, JBAR-Opera and JBAR-Safari browser extensions found https://github.com/rikai. The fork is designed to support Ubuntu by way of tagging Amazon shopping sessions with Ubuntu's affiliate code. This is useful for people who would prefer to have a browser extension rather than using the built in functionality with Unity. At this point only countries are supported:

* USA u1webapp-20
* UK u1webapp-uk-21
* Germany u1webapp-21
* Canada u1webapp-ca-20
* France u1webapp-fr-21

I would love to add more to the list, but tags for other countries do not seem to exist. I referenced http://bazaar.launchpad.net/~ubuntu-branches/ubuntu/saucy/libunity-webapps/saucy/view/head:/src/runner/unity-webapps-runner-amazon.c in order to find the tags.

The functionality in these extensions before the fork offer the flexibility to include affiliates other than Amazon that use multiple values in the URL to tag shopping sessions. This functionality has been left in place for the time being.

Note that with the Opera extension, the tag is not revealed in the URL bar until it is clicked.

