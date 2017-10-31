

var sensor_coords = [0+80, 0, 319+80, 239];
var sound_coords = [320+80, 0, 639+80, 239];
var model_coords = [640+80, 0, 959+80, 239];


var sensor_int = 1
var sound_int = 1
var model_int = 1

var instruments = [];


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
	
	var subpatch = this.patcher.newdefault(760 + 102*Math.floor(instruments.length/4), 5+(23*(instruments.length%4)), "p", "myinstrument"+instruments.length);
	
	subpatch.subpatcher().wind.size = [1040, 240]
	
	this.patcher.bringtofront(subpatch);
			
  	var sensor = subpatch.subpatcher().newdefault(0,0,"bpatcher", "sensor"+sensor_int+".maxpat");
	sensor.rect = sensor_coords;
	
  	var sound = subpatch.subpatcher().newdefault(0,0,"bpatcher", "sound"+sound_int+".maxpat");
	sound.rect = sound_coords;
	
  	var model = subpatch.subpatcher().newdefault(0,0,"bpatcher", "model"+model_int+".maxpat");
	model.rect = model_coords;
	
	subpatch.subpatcher().hiddenconnect(sensor, 0, model, 0);
	subpatch.subpatcher().hiddenconnect(sound, 1, model, 1);
	subpatch.subpatcher().hiddenconnect(model, 0, sound, 0);
	subpatch.subpatcher().hiddenconnect(model, 1, sound, 1);
	
	
	var dac_obj = subpatch.subpatcher().newdefault(319., 0., "dac~");
	dac_obj.hidden = true;
	subpatch.subpatcher().hiddenconnect(sound, 0, dac_obj, 0);
	subpatch.subpatcher().hiddenconnect(sound, 0, dac_obj, 1);

	var close_window1_comment = subpatch.subpatcher().newdefault( 13., 0., "comment", "@text", "CLOSE");
	var close_window2_comment = subpatch.subpatcher().newdefault( 6.5, 13., "comment", "@text", "WINDOW");
	var close_window_bang = subpatch.subpatcher().newobject("button", 19., 35., 37., 37.);
	var dispose_message = subpatch.subpatcher().newdefault(0, 191., "message", "@text", "dispose");
	var thispatcher_object = subpatch.subpatcher().newdefault(0, 218., "thispatcher");
	subpatch.subpatcher().hiddenconnect(close_window_bang, 0, dispose_message, 0);
	subpatch.subpatcher().hiddenconnect(dispose_message, 0, thispatcher_object, 0);

	dispose_message.hidden = true;
	thispatcher_object.hidden = true;

	subpatch.subpatcher().locked = 1;
	
	instruments.push(subpatch);
	
	outlet(0, "myinstrument"+instruments.length);
	
	post(instruments.length, "\n");
}

function open_subpatch(v)
{
	instruments[v].subpatcher().message("front");
}