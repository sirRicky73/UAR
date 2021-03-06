var configurations = {
  amazon : {
  	rx: /^http.*?\.amazon.com.*?(\/dp\/|obidos.tg.detail|.gp.product)/i,
  	params: [
      { param: "tag", paramValue: "u1webapp-20" }
  	]
  },
  amazonuk : {
   rx: /^http.*?\.amazon.co.uk.*?(\/dp\/|obidos.tg.detail|.gp.product)/i,
   params: [
     { param: "tag", paramValue: "u1webapp-uk-21" }
   ]
  },
  amazonde : { 
  	rx: /^http.*?\.amazon.de.*?(\/dp\/|obidos.tg.detail|.gp.product)/i, 
  	params: [
  	  { param: "tag", paramValue: "u1webapp-21" }
  	]
  },
  amazonca : { 
  	rx: /^http.*?\.amazon.ca.*?(\/dp\/|obidos.tg.detail|.gp.product)/i,
  	params: [
  	  { param: "tag", paramValue: "u1webapp-ca-20" }
  	]
  },
  
  amazonfr : { 
  	rx: /^http.*?\.amazon.fr.*?(\/dp\/|obidos.tg.detail|.gp.product)/i,
  	params: [
  	  { param: "tag", paramValue: "u1webapp-fr-21" }
  	]
  }
};

var url = window.location.href;
for( var configVariable in configurations ) {
  if( configurations.hasOwnProperty(configVariable) ) {
	//Be grateful and do not steel other affiliate links & further avoid circular redirection
	var config = configurations[configVariable];
	if(url.match(config.rx) && url.indexOf(config.params[0].param) == -1) {
	  if(url.indexOf("?") == -1) {
		url = url + "?" + createTag(config.params);
	  } else {
	    url = url + "&" + createTag(config.params);
	  }
	  window.location.href=url;
	}
  }
}

function createTag( parameters ) {
	var result = "";
	for( var i = 0; i < parameters.length; i++ ) {
		result = result + parameters[i].param + "=" + parameters[i].paramValue;
		if( i >= 0 && i < parameters.length - 1 ) {
			result = result + "&";
		}
	}
	return result;
}