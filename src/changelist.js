

var prevlist = null;
var currlist = null;


function list()
{
	var currlist = arrayfromargs(arguments);
	
	if(prevlist == null)
	{
		outlet(0, currlist);
		prevlist = currlist
		return;
	}
	
	//First Compare Size
	if(prevlist.length != currlist.length)
	{
		return;
	}
	
	for(var i=0; i< currlist.length; i++)
	{
		if(currlist[i]!=prevlist[i])
		{
			outlet(0, currlist);
		}
	}	
	prevlist = currlist
}