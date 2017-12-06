# Sound Control Dev

## Holistics
* Save File.
* Optimise all sensors.
* Change colour scheme of app
* Change colour scheme/design of max GUI

#### Grab n Play
* Make hybrid’s classifier automatically be output 1.
* Change Grab n Play model into “Quick” and “Precise”
	* “Quick” records Grab n Play data, builds a grab n play model when released and empty’s training data.
	* “Precise” records supervised data, supervised data on top of Grab n Play data.
	* Make the UI of these options look like alternatives.
* Get rid of in-app console

#### Microbit
* Get compass.

#### Colour Tracker
* Fix umenu that doesn’t work with more than 2 input devices.

#### Leap
* Make visualisation indicate Z position better.
* Implement leap finger angles.

#### Models

#### Sample Player

#### Granulator

## New Samples
* Make some ourselves on garage band.
    * Deffo acoustic instruments.
    * Orchestral pop covers.
    * Group loops.
    * Sax Groups.
    * Discordant sounds.
    * Solo instrument loops.
    * Strings and Brass.
    * Same motif on lots of different instruments.
    * Samples which progress after each other (possible whole songs)


## New Instruments
* Colour Detector
    * Lets you set 3 colours to be tracked
    * 3 dimension input of just each colour is present to classifier.

* Recorder
    * Separate floating window which records the output of the instrument
    * Could then be used with the volume object.
    * Kid can listen back sounds they've made and compare.
    * Self evaluation
    * Mmmmm meta..
    * Combine this with a mic recorder?
    * Thought shower different interfaces for recording the instrument and recording the mic.

* Internal Sound File Browser
    * Save copies of SoundFiles in Library.
    * Build internal menu to sounds in app.
    * Integrate this into the instruments.
    * How not to make internal sound finder polluted.
    * Take into account more than one kid using the same app.
    * Automatically name files and subdirectories.
    * Divide stuff up with sample content.

* Undo button for last recording sessions.
    * Bring in notion of “classes” or number of recording sessions in the training data.
    * Tell the user how many “classes” or number of recording sessions are in a file.

* Piano sampler which you map areas of the piano to the sensor positions.
    * Change Scale.
    * Linear Regression.


* Press Quick
	* Record inputs into grab_n_play buffer
* Unclick Quick
	* training_data is emptied
	* training_data is filled with random elements
	* new model is trained.
* Press Precise
	* Record more data into training_data
	* Retrain model





