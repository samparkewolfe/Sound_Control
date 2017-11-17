
inlets =2;
outlets =3;

var leap_present = false;
var leap_index = -1;
var input_devices = []


function inArray(needle,haystack)
{
    var num=haystack.length;
    for(var i=0;i<num;i++)
    {
        if(haystack[i].toString()===needle.toString()){return true;}
    }
    return false;
}

function anything()
{
	if(inlet == 0)
	{
		var a = arrayfromargs(messagename, arguments);
		
		if(!inArray(a, input_devices))
		{
			input_devices.push(a);
		}
		
		if(a.toString() == "Leap Motion Controller")
		{
			leap_present = true;
			leap_index = input_devices.length -1;
		}else{
			outlet(0, a);
			outlet(2, 0);
		}
	}
}


function msg_int(v)
{
	if(inlet == 1)
	{
		if(leap_present)
		{
			//0<0
			if(v <= leap_index)
			{
				v=v+1;
			}
		}
		//post("received int " + v + "\n");
		outlet(1, v);
	}
}
