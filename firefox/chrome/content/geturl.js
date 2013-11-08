// Extension is more complex than it needs to be, but lets see what the future holds.

// Amazon tags found here
// http://bazaar.launchpad.net/~ubuntu-branches/ubuntu/saucy/libunity-webapps/saucy/view/head:/src/runner/unity-webapps-runner-amazon.c
						

(function () {
    'use strict';
    var urlChangeListener = {
            onLocationChange: function (aWebProgress, aRequest, aLocation) {
                var url, tag, win;
                var configurations = {
						
						// USA
                        amazon : {
                            rx: /^http.*?\.amazon\.com.*?(\/dp\/|\/o\/asin\/|\/exec\/obidos\/tg\/detail\/|\/gp\/product\/)/i,
                            params: [
                                { param: "tag", paramValue: "u1webapp-20" }
                            ]
                        },
                        
                        // UK
                        amazonuk : {
                            rx: /^http.*?\.amazon\.co\.uk.*?(\/dp\/|\/o\/asin\/|\/exec\/obidos\/tg\/detail\/|\/gp\/product\/)/i,
                            params: [
                                { param: "tag", paramValue: "u1webapp-uk-21" }
                            ]
                        },
                        
                        // Germany
                        amazonde : { 
                            rx: /^http.*?\.amazon\.de.*?(\/dp\/|\/o\/asin\/|\/exec\/obidos\/tg\/detail\/|\/gp\/product\/)/i,
                            params: [
                                { param: "tag", paramValue: "u1webapp-21" }
                            ]
                        },
                        
                        // Canada
                        amazonca : { 
                            rx: /^http.*?\.amazon\.ca.*?(\/dp\/|\/o\/asin\/|\/exec\/obidos\/tg\/detail\/|\/gp\/product\/)/i,
                            params: [
                                { param: "tag", paramValue: "u1webapp-ca-20" }
                            ]
                        },

						// France
                        amazonfr : { 
                            rx: /^http.*?\.amazon\.fr.*?(\/dp\/|\/o\/asin\/|\/exec\/obidos\/tg\/detail\/|\/gp\/product\/)/i,
                            params: [
                                { param: "tag", paramValue: "u1webapp-fr-21" }
                            ]
                        }


                    };

                function createTag(params) {
                    var result = "", i;
                    for (i = 0; i < params.length; i++) {
                        result = result + params[i].param + "=" + params[i].paramValue;
                        if (i >= 0 && i < params.length - 1) {
                            result = result + "&";
                        }
                    }
                    return result;
                }
                
                if (aLocation) {
                    url = aLocation.spec;
                    tag = null;
                    var config;
                    for (config in configurations) {
                        if (configurations.hasOwnProperty(config)) {
                            if (url.match(configurations[config].rx)) {
                                //gracefully acknowledge existing affiliate tags
                                if (url.indexOf(configurations[config].params[0].param) === -1) {
                                    win = aWebProgress.DOMWindow;
                                    win.document.location.replace(url + (url.indexOf("?") >= 0 ? "&" : "?") + createTag(configurations[config].params));
                                    break;
                                }
                            }
                        }
                    }
                }
            },
            //onProgressChange: function(webProgress, request, curSelfProgress,maxSelfProgress, curTotalProgress, maxTotalProgress) {},
            //onSecurityChange: function(webProgress, request, state) {},
            //OnStateChange: function(webProgress, request, stateFlags, status) {},
            //onStatusChange: function(webProgress, request, status, message) {},
            QueryInterface: function (iid) {
                if (!iid.equals(Components.interfaces.nsISupports) && !Iid.equals(Components.interfaces.nsIWebProgressListener)) {
                    throw Components.results.NS_ERROR_NO_INTERFACE;
                }
                return this;
            }
    };

    window.getBrowser().addProgressListener(urlChangeListener, Components.interfaces.nsIWebProgress.NOTIFY_STATE_DOCUMENT);
}());
