

function anything()
{
	var a = arrayfromargs(messagename, arguments);
	if(a == "bang")
	{
		build_patch();
	}
}


function build_patch()
{
	var randval = Math.round(Math.random()*10000);
	
	//459 209
	var coll_training_data_obj = this.patcher.newdefault(241, 491, "coll", "temp_training_data_"+randval);

	var prependmerge_obj = this.patcher.getnamed("model_prependmerge");
	var clear_obj = this.patcher.getnamed("model_clear");
	
	this.patcher.connect(prependmerge_obj, 0, coll_training_data_obj, 0);
	this.patcher.connect(clear_obj, 0, coll_training_data_obj, 0);
	
	var message_training_data_obj = this.patcher.newdefault(241, 694, "message", "@text", "temp_training_data_"+randval);
	var prepend_pull_from_coll_obj = this.patcher.newdefault(241, 724, "prepend", "pull_from_coll");
	var dict_obj = this.patcher.newdefault(241, 754, "dict", "training_data_"+randval);
	
	//model_cycle
	var cycle_obj = this.patcher.getnamed("model_cycle");
	this.patcher.connect(cycle_obj, 0, message_training_data_obj, 0);
	this.patcher.connect(message_training_data_obj, 0, prepend_pull_from_coll_obj, 0);
	this.patcher.connect(prepend_pull_from_coll_obj, 0, dict_obj, 0);
	
	//32 44
	var message_training_data_obj_2 = this.patcher.newdefault(273, 798, "message", "@text", "training_data_"+randval);
	this.patcher.connect(cycle_obj, 1, message_training_data_obj_2, 0);
	var prepend_train_obj = this.patcher.getnamed("model_prepend_train");
	this.patcher.connect(message_training_data_obj_2, 0, prepend_train_obj, 0);
	
}