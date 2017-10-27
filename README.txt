
//Remembers
Generate Instrument size should be 750x100.

remember to build with scroll off.



//ToDos

LEAP
Get some simpler features to extract from leap
	Palm position. (DONE)
	JUST finger tips. (DONE)
	hand width.

HOLISTIC
Undo button for last recording sessions.
	Bring in notion of “classes” or number of recording sessions in the training data.
	Tell the user how many “classes” or number of recording sessions are in a file.
Save file able to hold some meta data about the database that can be printed when loaded.
Poly buffer contents to the “generate” window.
	Thus making it static for the instrument. 
	This will stop the user from making a mapping for some files
		… then changing the files and having a mapping for
		… the old files still going.

UI
Stop window resizing.
Closing window instead of deleting subpatch OR
	Organise subpatch objects.

Generate Instrument:
	Reminder to plug in sensors (DONE)

CAMERA
Stop mirroring of the camera. (DONE)
Get the leap out of the drop down menu. (DONE):NOT TESTED ON MORE THAN 2 INPUT DEVICES!!

GRANULATOR
	Speed to be slower. (DONE)
	Pitch to be lower. (DONE)

MODEL
Buttons, buttons instead of X toggles. 
Hybrid regression-classifier for the granulator.
Automate the recording time. (DONE)
Still posts “Model is ready to run!” twice?. (DONE)

LOOPER
Change the looper to controlling gain instead on off.
	Then you can use regression to mix between them even if it’s just trained on.


SAMPLE PLAYER
Fix load mess for number of samples loaded. (DONE)
	Maybe give those backgrounds.
0th index in the number box say silence instead of 0, use a menu. (DONE)
Looping default on. (DONE)
Rename “play” to “trigger playback” (DONE)


NEW INSTRUMENTS
Build a simple weird synth to play with.
Piano sampler which you map areas of the piano to the sensor positions
	Change Scale.
	Linear Regression.



//Nielsen’s Heuristics.





//Look at these later:

Sample Player:
	Make the 0th say silence in the 
	Make looping default on.
	Rename “play” to “trigger playback”

Cameras:
	Get rid of leap in drop down menu
	Flip camera

Activate different strings on the leap have them as separate instrument.


Colour Tracker:
	Make it multi colours and then we can have an instrument which is a colour classifier.
	Make the minus number clearer like “NOT HERE”

Just grey out the section instrument that is deactivated.

Rescale the  output of the looper

Make poly~ buffer dynamic

Have an auto save file to track the last colour selected in the app.


Microphone input!!
	Wind instruments


Visual design critique 



