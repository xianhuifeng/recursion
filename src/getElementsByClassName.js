var getElementsByClassName = function(classname){
  var results = [];
  var nodes = document.body;

  var checkClassName = function(nodes){
  	if(nodes.className){
  		var classnameArray = nodes.className.split(' ');
  		if(_.indexOf(classnameArray, classname) !== -1){
  			return true;
  		}
  	}return false;
  };

  var addResults = function(nodes){
  	if(checkClassName(nodes)){
  		results.push(nodes);
  	}
  };

  var recur = function(nodes){
    if(!nodes.hasChildNodes()){
    	addResults(nodes);
  	}else{
	  	addResults(nodes);
	  	_.each(nodes.childNodes, function(childnode){	
	  		recur(childnode);
	  	});
    }
  };
  recur(nodes);
  return results;
};
