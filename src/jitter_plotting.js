
var mymatrix = new JitterMatrix(3, "char", 320, 240); 

var playhead = 0;

var x_point_width = 0.25;

var training_data = []

var display_gap = 5


var ii = 0;
while(ii<6)
{
	training_data.push([0.0, 0.0]);	
	ii = ii+1;
	
	post(training_data[0], "\n");
}

function list()
{
	
	var list = arrayfromargs(arguments);
	
	var number_of_training_data_dims = list.length;
	
	
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

	
	for(var x = display_gap; x < 320-display_gap; x++)
	{
		for(var y = box_start_y; y < box_end_y; y++)
		{
			new_box.setcell2d(x, y, 255, 255, 255);
		}
	}
		
	for(var data_it = 0; data_it < data.length; data_it++)
	{
		
		var data_it_bkwrds = (data.length-1) - data_it;
		
		var x_val = data_it + display_gap;
		
		var y_val = data[data_it_bkwrds];
		
		//Scale the data down.
		y_val = ((y_val * 0.5) + 0.25);
		
		//Scale the data to the display range.
		y_val = (y_val * box_height) + (box_it * box_height);
		
		new_box.setcell2d(x_val, y_val, 255, 0, 0);
	}
	
	return new_box;
}


function clear()
{
	mymatrix.setall(255, 255, 255);	
	outlet(0,"jit_matrix", mymatrix.name);
	
	training_data = []
	
	var ii = 0;
	while(ii<6)
	{
		training_data.push([0.0, 0.0]);	
		ii = ii+1;
		
		post(training_data[0], "\n");
	}
}