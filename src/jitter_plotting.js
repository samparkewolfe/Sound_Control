
var mymatrix = new JitterMatrix(3, "char", 320, 240); 

var playhead = 0;

var x_point_width = 0.25;

var mycoordinates = []

function list()
{
	
	var y_points = arrayfromargs(arguments);
	
	var number_of_dims = y_points.length;

	mycoordinates.push(y_points);
	
	var y_space = 240/number_of_dims;
	
	mymatrix.setall(255, 255, 255);	
	
	for(var hist = 0; hist < mycoordinates.length; hist++)
	{
		for(var it = 0; it<number_of_dims; it++)
		{
			var history_slice = (mycoordinates.length-1)-hist;

			mymatrix.setcell2d(hist * 0.25, (((mycoordinates[history_slice][it] * 0.75)+0.25) * y_space)+(y_space*it), 0,0,0);
		}
	}
	
/*	
	for(var it = 0; it<number_of_dims; it++)
	{
		mymatrix.setcell2d(playhead, (((y_points[it] * 0.75)+0.25) * y_space)+(y_space*it), 0,0,0);
	}
*/

	outlet(0,"jit_matrix", mymatrix.name);
	
	playhead = playhead + x_point_width;
}

function clear()
{
	mymatrix.setall(255, 255, 255);	
	outlet(0,"jit_matrix", mymatrix.name);
	playhead = 0;
	mycoordinates = []
}