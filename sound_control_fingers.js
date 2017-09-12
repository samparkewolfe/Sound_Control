
var list_of_fingers = []


function list()
{
	var a = arrayfromargs(arguments);
	
	list_of_fingers.push(a);
}

function bang()
{
	
	var l = list_of_fingers.length
		
	while (l<5)
	{
		list_of_fingers.push([0.0, 0.0, 0.0])
		l = l+1
	}
	
	var flattened_list_of_fingers = list_of_fingers.reduce(function(a, b) { return a.concat(b); }, []);
	
	outlet(0, flattened_list_of_fingers);
		
	list_of_fingers = []
}