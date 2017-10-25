

//Which hand are we talking about
var left_hand_id, right_hand_id;
var input_hand_id;
	
//Order of leap data output...
//Right Hand 
//Left Hand
//Right Fingers
//Left Fingers

var right_hand_completed = false;
var left_hand_completed = false;

var output_data = []

var right_hand_data = [];
var left_hand_data = [];

var input_list = [];

var no_of_dims_for_one_hand = 15;

function list()
{
	input_list = arrayfromargs(arguments);
	
	curr_hand_id = input_list[0];
	
	
	if(curr_hand_id == right_hand_id)
	{
		add_something_to_right_hand();
		right_hand_completed = true;
	}
	if(curr_hand_id == left_hand_id)
	{
		add_something_to_left_hand();
		left_hand_completed = true;
	}
	
}


function add_something_to_right_hand()
{
	if(typeof(input_list[1]) === 'number')
	{
		add_finger_to_right_hand();
	}
	else
	{
		//add_hand_to_right_hand();
	}
}

function add_something_to_left_hand()
{
	if(typeof(input_list[1]) === 'number')
	{
		add_finger_to_left_hand();
	} 
	else
	{
		//add_hand_to_left_hand();
	}
}


//palmposition wristposition elbowposition
function add_hand_to_right_hand()
{
	if(input_list[1] == "palmposition" || input_list[1] == "wristposition" || input_list[1] == "elbowposition")
	{
		right_hand_data = right_hand_data.concat(input_list.slice(2, input_list.length));
		//post("Adding hand to right hand: " + right_hand_data.length + " " + input_list + "\n");
	}
}

function add_hand_to_left_hand()
{
	if(input_list[1] == "palmposition" || input_list[1] == "wristposition" || input_list[1] == "elbowposition")
	{
		left_hand_data = left_hand_data.concat(input_list.slice(2, input_list.length));
		//post("Adding hand to left hand: " + left_hand_data.length + " " + input_list + "\n");
	}
}


//metacarpal proximal intermediate distal
function add_finger_to_right_hand()
{
	if(input_list[2] == "distal")
	{
		//input_list from 3 - 16 is the finger position data. I am only going to take the data from 6 - 9 because
		//thats what the example uses to to visualize the balls on the end.
		right_hand_data = right_hand_data.concat(input_list.slice(6, 9));
		//post("Adding finger to right hand: " + right_hand_data.length + " " + input_list + "\n");
	}
}

function add_finger_to_left_hand()
{
	if(input_list[2] == "distal")
	{
		left_hand_data = left_hand_data.concat(input_list.slice(6, 9));
		//post("Adding finger to left hand: " + left_hand_data.length + " " + input_list + "\n");
	}
}





function bang()
{
	if(!left_hand_completed)
	{
		//post("No left hand"+ "\n");
		fill_left_hand();
	}
	if(!right_hand_completed)
	{
		//post("No right hand"+ "\n");
		fill_right_hand();
	}
	
	output_data = right_hand_data.concat(left_hand_data);
	//post("Final data length: " + output_data.length + "\n");
	outlet(0, output_data);
	
	clear_hand_data();
}

function fill_left_hand()
{
	for(var i = 0; i < no_of_dims_for_one_hand; i++) left_hand_data[i] = 0;
}

function fill_right_hand()
{
	for(var i = 0; i < no_of_dims_for_one_hand; i++) right_hand_data[i] = 0;
}

function clear_hand_data()
{
	right_hand_data = [];
	left_hand_data = [];
	right_hand_completed = false;
	left_hand_completed = false;
}

