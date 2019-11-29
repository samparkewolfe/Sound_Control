
//80
//Adding borders
var border = 10
var sensor_coords = [border, border, 320-border, 240-border];
var sound_coords = [320+border, border, 640-border, 240-border];
var model_coords = [640+border, border, 960-border, 240-border];

var sensor_it = 1
var sound_it = 1
var model_it = 1
var subpatch_name = null;

//var instruments = [];

no_instruments = 0;

inlets = 4

function set_subpatch_it(v)
{
	switch(inlet)
	{
    	case 1:
			sensor_it = v
        	break;
    	case 2:
			sound_it = v
        	break;
    	case 3:
			model_it = v
        	break;
	}	
}

function set_subpatch_name(v)
{

	subpatch_name = v
	
}

function use_subpatch_name()
{
	
	var throwaway = subpatch_name;
	subpatch_name = ""
	return throwaway;
	
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
	
	var localname = null;
	if (subpatch_name)
	{
		localname = subpatch_name;
		subpatch_name = null;
	} else {
		localname = ("Instrument"+no_instruments)
	}
	
	var subpatch = this.patcher.newdefault(760 + 102*Math.floor(no_instruments/4), 5+(23*(no_instruments%4)), "p", localname);
	
	
	//var subpatch = this.patcher.newdefault(1000 + 200*Math.floor(no_instruments/4), 5+(23*(no_instruments%4)), "p", localname);
	
	
	subpatch.subpatcher().wind.size = [960, 240]
	//originally 960 by 240
	
	this.patcher.bringtofront(subpatch);
	
	var sensor = subpatch.subpatcher().newdefault(0,0,"bpatcher", "sensor"+sensor_it+".maxpat");
	sensor.rect = sensor_coords;
	
  	var sound = subpatch.subpatcher().newdefault(0,0,"bpatcher", "sound"+sound_it+".maxpat");
	sound.rect = sound_coords;
	
  	var model = subpatch.subpatcher().newdefault(0,0,"bpatcher", "model"+model_it+".maxpat");
	model.rect = model_coords;
	
	subpatch.subpatcher().hiddenconnect(sensor, 0, model, 0);
	subpatch.subpatcher().hiddenconnect(sound, 1, model, 1);
	subpatch.subpatcher().hiddenconnect(model, 0, sound, 0);
	subpatch.subpatcher().hiddenconnect(model, 1, sound, 1);
	subpatch.subpatcher().hiddenconnect(sound, 2, model, 2);
	subpatch.subpatcher().hiddenconnect(model, 2, sound, 2);
	
	var dac_obj = subpatch.subpatcher().newdefault(320+border, border, "dac~");
	dac_obj.hidden = true;
	subpatch.subpatcher().hiddenconnect(sound, 0, dac_obj, 0);
	subpatch.subpatcher().hiddenconnect(sound, 0, dac_obj, 1);
	
	var send_dac_obj = subpatch.subpatcher().newdefault(320+border, 20+border, "send~", "dac");
	send_dac_obj.hidden = true;
	subpatch.subpatcher().hiddenconnect(sound, 0, send_dac_obj, 0);
	
	var closebang_obj = subpatch.subpatcher().newdefault(border, border,"closebang");
	var dispose_message = subpatch.subpatcher().newdefault(border, 30 + border, "message", "@text", "dispose");
	var thispatcher_object = subpatch.subpatcher().newdefault(border, 60 + border, "thispatcher");
	
	//-------------------
	//the code below  will allow saving from the created instrument patch for testing purposes. It produces a bang within the constructed subpatch, which can 	be used to  	launch the save dialog box.
	//comment them out for building, otherwise they will appear in the standalone app!
		
		//var button_object = subpatch.subpatcher().newdefault(1250+border, border,"button");
		
		//var send_activeBang_object = subpatch.subpatcher().newdefault(1100+border, border, "send", "saveBanger");
	
//connect button and send
		
		//subpatch.subpatcher().hiddenconnect(button_object, 0, send_activeBang_object, 0);
	
	
	//-------------------
	
	
	
	subpatch.subpatcher().hiddenconnect(closebang_obj, 0, dispose_message, 0);
	
	subpatch.subpatcher().hiddenconnect(dispose_message, 0, thispatcher_object, 0);
	
	closebang_obj.hidden = true;
	dispose_message.hidden = true;
	thispatcher_object.hidden = true;

	thispatcher_object.message("bgcolor", 0.662745098,0.705882353,0.760784314, 1);

	var active_obj = subpatch.subpatcher().newdefault(640+border, border,"active");
	subpatch.subpatcher().hiddenconnect(active_obj, 0, sensor, 0);
	subpatch.subpatcher().hiddenconnect(active_obj, 0, sound, 3);
	subpatch.subpatcher().hiddenconnect(active_obj, 0, model, 3);
	
	
	
	active_obj.hidden = true;
	
	//var button_obj = subpatch.subpatcher().newdefault(800+border, border, "button");
	
	
	
	
	var localname_message = subpatch.subpatcher().newdefault(120, border, "message", "@text", localname);
	subpatch.subpatcher().hiddenconnect(localname_message, 0, sensor, 1);
	subpatch.subpatcher().hiddenconnect(localname_message, 0, sound, 4);
	subpatch.subpatcher().hiddenconnect(localname_message, 0, model, 4);
	localname_message.message("bang");
	localname_message.hidden = true;

	subpatch.subpatcher().locked = 1;
	subpatch.subpatcher().wind.hasgrow = 1;
	
	outlet(0, "myinstrument "+no_instruments);
	
	no_instruments = no_instruments+1
}

function open_subpatch(v)
{
	//instruments[v].subpatcher().message("front");
}

function take_away(v)
{
	//this.patcher.remove(instruments[v]);
	//instruments.splice(v, 1);
}