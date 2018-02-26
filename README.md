![alt text](/logos/gif2.gif?raw=true "Title")

# SoundControl

We have created software that can be used by anyone to create new musical instruments using their choice of movements, sensed with a variety of off-the-shelf sensing devices (including webcam, Leap Motion, microbit, GameTrak). These instruments can be used to play and manipulate musical material, which can be either new material recorded by users or taken from third-party sample libraries.

To be able to use the full functionality of this code compile the code to a .app file inside the Sound_Control folder. Then put the whole Sound_Control folder in your /Applications/ folder. This app was built for OSX.

The goal of the Sound Control project is to collaborate with youth with special needs and disabilities in designing, developing and building bespoke digital musical instruments personalised for their unique needs.

The Sound Control project is supported by a Paul Hamlyn Foundation “Widening Access and Participation in the Arts” grant. The project is led by the Northamptonshire Music and Performing Arts Trust.


## Externals & 3rd Party Software Used

### CBMicroBit
https://github.com/Louismac/CBMicroBit

### RapidMax.mxo
http://gitlab.doc.gold.ac.uk/spark041/RapidMax_release

### Shell.mxo
https://cycling74.com/forums/chess-for-max/replies/1#reply-596a3e15d5b2a4159a6c7d04 

http://expr-i0.net/shell_170717.zip

### Leapmotion.mxo
https://www.julesfrancoise.com/leapmotion/

https://forge.ircam.fr/p/leapmotion/

## Known Bugs

The app automatically sets it’s audio I/O to whatever the I/O settings of the Max.app are. If you want to change these you must close the Sound Control app, set the desired audio I/O settings in the Max.app and then reopen Sound Control. However you can then change the audio I/O settings for the Max.app and not change the Sound Control audio I/O settings after the Sound Control app has been opened.

The colour tracker does not work with more than 2 input devices.

If you hold down the mouse on the record button, move off the record button, release the mouse, the record button stays on.

![alt text](/logos/NMPAT_long.jpg?raw=true "Logo1")
![alt text](/logos/pfh.jpg?raw=true "Logo2")
![alt text](/logos/Youth_Music.jpg?raw=true "Logo3")
