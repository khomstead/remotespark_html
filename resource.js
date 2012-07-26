function svloadResource(){
	function getLibPath(f){
		  var tags=document.getElementsByTagName("script");
		  var j, s, result = null, len = tags.length;
		  for(var i=0; i < len; i++){
		    s = tags[i].src;
		    j = s.indexOf(f);
		    if(j > -1){
		      result = s.substring(0,j);
		      break;
		    }
		  }
		  return result;
	}
	
	function createScript(name){
		var s = document.createElement("script");
		s.type = "text/javascript";
		s.src = name;
		return s;
	}
	
	var nl = navigator.language || navigator.userLanguage;
	
	console.log("User language:" + nl);
	
	var libPath = getLibPath("resource.js");

	var lan = "en";
	
	if (nl == "en" || (nl.indexOf("en-") == 0)){
		lan = "en"; 
	}else if (nl.indexOf("zh-CN") == 0){
		lan = "zh-CN";
	}else if (nl.indexOf("zh-TW") == 0){
		lan = "zh-TW";
	}
	libPath += ("strings-" + lan + ".js");
	document.writeln('<script type="text\/javascript" src="'+ libPath +'"><\/script>');
};

svloadResource();