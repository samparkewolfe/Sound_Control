


function bang()
{
	var randval = Math.round(Math.random()*10000);
	
	var prepend_replace_obj = this.patcher.getnamed("prepend_replace_obj");
	var clear_message = this.patcher.getnamed("clear_message");
	var write_obj = this.patcher.getnamed("write_message");
	var trigger_b_s_obj = this.patcher.getnamed("trigger_b_s_obj");
	
	var dict_obj = this.patcher.newdefault(197, 639, "dict", "training_data_"+randval);

	this.patcher.connect(prepend_replace_obj, 0, dict_obj, 0);
	this.patcher.connect(clear_message, 0, dict_obj, 0);
	this.patcher.connect(write_obj, 0, dict_obj, 0);
	this.patcher.connect(trigger_b_s_obj, 1, dict_obj, 0);


	var train_update_bang = this.patcher.getnamed("train_update_bang");
	var prepend_train_obj = this.patcher.getnamed("prepend_train_obj");

	var message_training_data_obj = this.patcher.newdefault(90, 787, "message", "@text", "training_data_"+randval);
	
	this.patcher.connect(train_update_bang, 0, message_training_data_obj, 0);
	this.patcher.connect(message_training_data_obj, 0, prepend_train_obj, 0);
}