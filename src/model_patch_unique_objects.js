

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
	
	var write_obj = this.patcher.getnamed("write_message");
	var read_obj = this.patcher.getnamed("read_message");
	var dumb_x_obj = this.patcher.getnamed("dump_x");
	var read_bang_obj = this.patcher.getnamed("read_bang");
	//var X_js_visualiser_obj = this.patcher.getnamed("X_js_visualiser");
	var fromsymbol_obj = this.patcher.getnamed("fromsymbol_obj");
	var train_update_bang_obj = this.patcher.getnamed("train_update_bang");
	var zliter_obj = this.patcher.getnamed("zliter_obj");
	//message_set_dollar
	var message_set_dollar_obj = this.patcher.getnamed("message_set_dollar");


	this.patcher.connect(write_obj, 0, coll_training_data_obj, 0);
	this.patcher.connect(read_obj, 0, coll_training_data_obj, 0);
	this.patcher.connect(dumb_x_obj, 0, coll_training_data_obj, 0);

	this.patcher.connect(coll_training_data_obj, 0, zliter_obj, 0);
	this.patcher.connect(coll_training_data_obj, 2, read_bang_obj, 0);
	this.patcher.connect(coll_training_data_obj, 2, train_update_bang_obj, 0);
	this.patcher.connect(coll_training_data_obj, 1, message_set_dollar_obj, 0);

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