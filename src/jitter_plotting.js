
var line_colour = [255, 0, 0];

var Y_data_scale = 1;

if (jsarguments.length>1)
{
	//First three arguments are line colour
	line_colour[0] = jsarguments[1];
	line_colour[1] = jsarguments[2];
	line_colour[2] = jsarguments[3];
	
	//4th argument is y range
	Y_data_scale = jsarguments[4];
}

var mymatrix = new JitterMatrix(3, "char", 320, 240); 

var training_data = []

var number_of_training_data_dims = 0;

var display_gap = 2

function list()
{
	
	var list = arrayfromargs(arguments);
	
	if(training_data.length == 0)
	{
		number_of_training_data_dims = list.length;
		initialise_training_data(list.length);
	}
	
	for(var i = 0; i<list.length; i++)
	{
		training_data[i].push(list[i]);
	}
	
	mymatrix.setall(0, 0, 0);
	
	
	for(var box_it = 0; box_it < number_of_training_data_dims; box_it++)
	{
		var new_box = draw_box(training_data[box_it], number_of_training_data_dims, box_it);
		
		mymatrix.op("+", new_box);
		
	}
	
	outlet(0,"jit_matrix", mymatrix.name);	
}


function draw_box(data, no_dims, box_it)
{
	
	var box_height = (240/no_dims);
	var new_box = new JitterMatrix(3, "char", 320, 240); 
		
	var box_start_y = (box_height*box_it) + display_gap;
	
	var box_end_y = box_start_y + (box_height-(display_gap*2));
	
	var box_start_x = display_gap;
	
	var box_end_x = 320-display_gap;
	
	var box_width = 320 - (display_gap*2);
	var box_height2 = box_height - (display_gap*2);
	
	
	for(var x = box_start_x; x <box_end_x; x++)
	{
		for(var y = box_start_y; y < box_end_y; y++)
		{
			new_box.setcell2d(x, y, 255, 255, 255);
		}
	}
		
	for(var data_it = 0; data_it < data.length; data_it++)
	{
		var datascale = 1.0;
		if(data.length > box_width)
		{
			datascale = box_width / data.length;
		}
		
		var data_it_bkwrds = (data.length-1) - data_it;
		
		var x_val = (data_it * datascale) + box_start_x;
		
		//Flip the data upside down to draw.
		var y_val = data[data_it_bkwrds];
		
		y_val = y_val/Y_data_scale;
		
		y_val = 1.0 - y_val;
		
		//Scale the data down.
		y_val = ((y_val * 0.5) + 0.25);
		
		//Scale the data to the display range.
		y_val = (y_val * box_height) + (box_it * box_height);
		
		for(var thick = -1; thick < 3; thick++)
		{
			new_box.setcell2d(x_val, y_val+thick, line_colour[0], line_colour[1], line_colour[2]);
		}
	}
	
	return new_box;
}

function initialise_training_data(list_length)
{
	for(var i = 0; i<list_length; i++)
	{
		training_data.push([]);
	}
}


function clear()
{
	mymatrix.setall(0, 0, 0);
	training_data = []
	
	outlet(0,"jit_matrix", mymatrix.name);
}