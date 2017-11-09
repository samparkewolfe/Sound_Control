

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

var right_hand_data = -1;
var left_hand_data = -1;

var input_list = [];

var no_of_dims_for_one_hand = 1;

var right_thumb_pos = [0., 0., 0.];
var left_thumb_pos = [0., 0., 0.];
var right_pinky_pos = [0., 0., 0.];
var left_pinky_pos = [0., 0., 0.];

var waiting_for_right_thumb_pos = false;
var waiting_for_left_thumb_pos = false;
var waiting_for_right_pinky_pos = false;
var waiting_for_left_pinky_pos = false;

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
	//input_list from 3 - 16 is the finger position data. I am only going to take the data from 6 - 9 because
	//thats what the example uses to to visualize the balls on the end.

	if(input_list[2] == "type")
	{
		if(input_list[3] == "thumb")
		{
			//post("Waiting for thumb" + "\n");
			waiting_for_right_thumb_pos = true;
		}
		if(input_list[3] == "pinky")
		{
			//post("Waiting for pinky" + "\n");
			waiting_for_right_pinky_pos = true;
		}
	}
	

	if(waiting_for_right_thumb_pos)
	{
		if(input_list[2] == "distal")
		{
			
			right_thumb_pos = input_list.slice(6, 9);//left_hand_data.concat(input_list.slice(6, 9));
			//post("Adding finger to left hand: " + left_hand_data.length + " " + input_list + "\n");
			//post("Thumb Pos: " + left_thumb_pos + "\n");
			//post("Not looking for thumb anymore" + "\n");
			waiting_for_right_thumb_pos = false;
		}
	}
	if(waiting_for_right_pinky_pos)
	{
		if(input_list[2] == "distal")
		{
			right_pinky_pos = input_list.slice(6, 9);//left_hand_data.concat(input_list.slice(6, 9));
			//post("Thumb Pos: " + left_pinky_pos + "\n");
			//post("Not looking for pinky anymore" + "\n");
			//post("Adding finger to left hand: " + left_hand_data.length + " " + input_list + "\n");
			waiting_for_right_pinky_pos = false;
		}
	}
}

function add_finger_to_left_hand()
{
	if(input_list[2] == "type")
	{
		if(input_list[3] == "thumb")
		{
			//post("Waiting for thumb" + "\n");
			waiting_for_left_thumb_pos = true;
		}
		if(input_list[3] == "pinky")
		{
			//post("Waiting for pinky" + "\n");
			waiting_for_left_pinky_pos = true;
		}
	}
	

	if(waiting_for_left_thumb_pos)
	{
		if(input_list[2] == "distal")
		{
			
			left_thumb_pos = input_list.slice(6, 9);//left_hand_data.concat(input_list.slice(6, 9));
			//post("Adding finger to left hand: " + left_hand_data.length + " " + input_list + "\n");
			//post("Thumb Pos: " + left_thumb_pos + "\n");
			//post("Not looking for thumb anymore" + "\n");
			waiting_for_left_thumb_pos = false;
		}
	}
	if(waiting_for_left_pinky_pos)
	{
		if(input_list[2] == "distal")
		{
			left_pinky_pos = input_list.slice(6, 9);//left_hand_data.concat(input_list.slice(6, 9));
			//post("Thumb Pos: " + left_pinky_pos + "\n");
			//post("Not looking for pinky anymore" + "\n");
			//post("Adding finger to left hand: " + left_hand_data.length + " " + input_list + "\n");
			waiting_for_left_pinky_pos = false;
		}
	}
}


function fill_left_hand()
{
	//for(var i = 0; i < no_of_dims_for_one_hand; i++) left_hand_data[i] = 0;
	left_hand_data = -1;
}

function fill_right_hand()
{
	//for(var i = 0; i < no_of_dims_for_one_hand; i++) right_hand_data[i] = 0;
	right_hand_data = -1;
}

function clear_hand_data()
{
	right_hand_data = [];
	left_hand_data = [];
	output_data = [];
	right_thumb_pos = [0., 0., 0.];
	left_thumb_pos = [0., 0., 0.];
	right_pinky_pos = [0., 0., 0.];
	left_pinky_pos = [0., 0., 0.];
	right_hand_completed = false;
	left_hand_completed = false;
}


function bang()
{
	/*
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
	*/
	
	
	
	
	//post("Final data length: " + output_data.length + "\n");
	
	right_hand_data = euclidean_distance(right_thumb_pos, right_pinky_pos);
	left_hand_data = euclidean_distance(left_thumb_pos, left_pinky_pos);
	
	output_data.push( right_hand_data)
	output_data.push(left_hand_data);

	outlet(0, output_data);
	
	clear_hand_data();
}

function euclidean_distance(a, b)
{
	if(a.length != b.length && a.length != 3)
	{
		return;
	}
	
    var dx = a[0] - b[0];
    var dy = a[1] - b[1];
    var dz = a[2] - b[2];

    return Math.sqrt( (dx * dx) + (dy * dy) + (dz * dz) );
}

