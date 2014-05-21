
var stringifyJSON = function(obj) {

if(obj === null){
	return "null";
}

if(typeof obj === "string"){
	return "\""+ obj +"\"";
}

if(typeof obj  === "function"){
	return "";
}

if(typeof obj === "undefined"){
	return "";
}

if(typeof obj === "object" && obj.length !== undefined){
	if(obj.length === 0){
		return "["+"]";	
	}else{
		var subJson = "";
		_.each(obj, function(value){
			subJson += stringifyJSON(value) + ',';
		});
	    return "["+ subJson.slice(0, -1) +"]";
	}
}

if(typeof obj === "object" && obj.length === undefined){
	if(Object.keys(obj).length=== 0){
		return "{"+"}";	
	}else{
		var subJson = "";
		_.each(obj, function(value,key){
			var subkey = stringifyJSON(key);
			var subValue = stringifyJSON(value);
			if(!subValue){
				subJson = "";
			}else{
				subJson += subkey +':'+ subValue+',';
			}
		});
	    return "{"+ subJson.slice(0, -1) +"}";
	}
}
return (obj).toString();
};
