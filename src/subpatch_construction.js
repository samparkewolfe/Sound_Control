

var sensor_coords = [0, 0, 319, 239];
var sound_coords = [319, 0, 639, 239];
var model_coords = [639, 0, 959, 239];
var mixer_coords = [959, 0, 1119, 239];

var sensor_int = 1
var sound_int = 1
var model_int = 1

number_of_instruments = 0

inlets = 4

function msg_int(v)
{
	switch(inlet)
	{
    	case 1:
			sensor_int = v
        	break;
    	case 2:
			sound_int = v
        	break;
    	case 3:
			model_int = v
        	break;
	}
}

function anything()
{
	var a = arrayfromargs(messagename, arguments);
	if(a == "bang")
	{
		build_subpatch()
	}
}

function build_subpatch()
{
	
	var subpatch = this.patcher.newdefault(640., 5+(20*number_of_instruments), "p", "myinstrument"+number_of_instruments);
	
	subpatch.subpatcher().wind.size = [1280, 240]
	
	this.patcher.bringtofront(subpatch);
			
  	var sensor = subpatch.subpatcher().newdefault(0,0,"bpatcher", "sensor"+sensor_int+".maxpat");
	sensor.rect = sensor_coords;
	
  	var sound = subpatch.subpatcher().newdefault(0,0,"bpatcher", "sound"+sound_int+".maxpat");
	sound.rect = sound_coords;
	
  	var model = subpatch.subpatcher().newdefault(0,0,"bpatcher", "model"+model_int+".maxpat");
	model.rect = model_coords;
	
	var mixer = subpatch.subpatcher().newdefault(0,0,"bpatcher", "mixer.maxpat");
	mixer.rect = mixer_coords;
	
	subpatch.subpatcher().hiddenconnect(sensor, 0, model, 0);
	subpatch.subpatcher().hiddenconnect(sound, 0, mixer, 0);
	subpatch.subpatcher().hiddenconnect(sound, 1, model, 1);
	subpatch.subpatcher().hiddenconnect(model, 0, sound, 0);
	subpatch.subpatcher().hiddenconnect(model, 1, sound, 1);
	

	
	var close_window_comment = subpatch.subpatcher().newdefault( 1121., 79., "comment", "@text", "CLOSE_WINDOW");
	
	var close_window_bang = subpatch.subpatcher().newobject("button", 1145., 101., 57., 57.);
	var dispose_message = subpatch.subpatcher().newdefault(1145., 191., "message", "@text", "dispose");
	var thispatcher_object = subpatch.subpatcher().newdefault(1145., 218., "thispatcher");
	subpatch.subpatcher().hiddenconnect(close_window_bang, 0, dispose_message, 0);
	subpatch.subpatcher().hiddenconnect(dispose_message, 0, thispatcher_object, 0);

	dispose_message.hidden = true;
	thispatcher_object.hidden = true;

	subpatch.subpatcher().locked = 1;
	
	number_of_instruments = number_of_instruments+1
}