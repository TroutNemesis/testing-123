
function retsTheSame(thing)
{
	return thing;
};

var throwing = function(){
	throw new Error();
};

function random(){
	return Math.floor(Math.random()*100000);
}

function thisCallsSomethingElse(carpeDiem){
	events.yolo(carpeDiem);
}



