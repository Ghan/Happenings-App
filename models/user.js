var mongoose		= require("mongoose");

var Schema			= mongoose.Schema;
var ObjectId		= Schema.ObjectId;

var User = new Schema({
	//fbtoken			: String,
	fbtoken		: { type: String, required: true, index: { unique: true } },
	mail			: String,
	fname 			: String,
	lname			: String, 
	phone			: String,
	pic		 		: String, 
	rushList		: [String],
	created_at		: {type : Date, default : Date.now}
});
/*
User.path("fname").set(function(v){
	return v.capitalize();
});

User.path("lname").set(function(v){
	return v.capitalize();
});

String.prototype.capitalize = function(){ 
    return this.replace(/\w+/g, function(a){
        return a.charAt(0).toUpperCase() + a.substr(1).toLowerCase();
    });
};
*/
//exports.User = User;
module.exports = mongoose.model('user', User);
