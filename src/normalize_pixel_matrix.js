


function list()
{
	var l = arrayfromargs(arguments);
	for(var i = 0; i<l.length; i++)
	{
		l[i] = l[i]/255.0;
	}
	outlet(0,l);
}