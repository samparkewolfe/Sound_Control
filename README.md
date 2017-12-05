# Sound Control Dev

## Holistics
* Save File.
* Optimise all sensors.
* Change colour scheme of app
* Change colour scheme/design of max GUI

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

* Grab n Play (New Model)
	* Ensure all instruments range from 0 127.
	* Make a model 4, 5 and 6 which are class, reg, and hybrid with GnP functionality.
	* Workthrough
		* 2 dicts, gnp_training_data, final_training_data. (Done)
		* Record button is pressed.
			* final_training_data stores inputs and outputs. (Done)
			* gnp_training_data stores inputs. (Done)
		* Record button is lifted 
			* Model is trained on bad final_training_data. (Done)
		* “Make GnP Model” Button click.
			* final_training_data is cleared. (Done)
			* 5 random inputs are chosen from gnp_training_data and 5 random outputs are generated. (Done)
			* Chosen inputs and random  outputs are written to final_training_data. (Done)
			* model is trained on final_training_data. (Done)
		* Record button is pressed again.
			* final_training_data is appended with more inputs and outputs. (Done)
			* gnp_training_data stores more inputs. (Done)
		* Record button is lifted 
			* Model trains on modified final_training_data. (Done)
		* “Make GnP Model” Button click again.
			* final_training_data is cleared. (Done)
			* 5 random inputs are chosen from modified gnp_training_data and 5 random outputs are generated. (Done)
			* Chosen inputs and random  outputs are written to final_training_data. (Done)
			* model is trained on final_training_data. (Done)
		* Clear is pressed.
			* Training data is cleared and gnp_training_data is cleared. (Done)




