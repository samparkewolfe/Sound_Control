

var sensorX = 0
var sensorY = 0
var soundX = 310
var soundY = 0
var modelX = 620
var modelY = 0
var mixerX = 930
var mixerY = 0

var sensor_int = 0
var sound_int = 0
var model_int = 0

inlets = 4

function msg_int(v)
{
	//switch:
	
	var subpatch = this.patcher.newdefault(900, 20 * v,"p", "myinstrument"+v);

  	subpatch.subpatcher().newdefault(20,20,"toggle")
	
	outlet(0, v);
}

function anything()
{
	var a = arrayfromargs(messagename, arguments);
	post("received message " + a + "\n");
	myval = a;
}