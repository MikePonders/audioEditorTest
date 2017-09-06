var observable = require("data/observable");
var fs = require("tns-core-modules/file-system");
var app = require("tns-core-modules/application");
var platform = require("tns-core-modules/platform");

console.log('--the library object: ');
console.dir(com.github.hiteshsondhi88.libffmpeg);

var MyCustomLoadBinaryResponseHandler = com.github.hiteshsondhi88.libffmpeg.LoadBinaryResponseHandler.extend({
			onStart: function(){
				console.log('Started loading ffmpeg');
				},
			onFailure: function(){
				console.log('FAILED loading ffmpeg');
				},
			onSuccess: function(){
				console.log('Successfully loaded ffmpeg');
				},
			onFinish: function(){
				console.log('Finished loading ffmpeg');
				}
});



console.log('--LoadBinaryResponseHandler');
console.dir(MyCustomLoadBinaryResponseHandler);

// var context = app.android.startActivity;
var context = app.android.context;
var ffmpeg = com.github.hiteshsondhi88.libffmpeg.FFmpeg.getInstance(context);
 console.log('--got ffmpeg instance');
 console.dir(ffmpeg);
	ffmpeg.loadBinary(
		new MyCustomLoadBinaryResponseHandler()
	);

console.log('--ended loading binary');

var MyCustomExecuteBinaryResponseHandler = com.github.hiteshsondhi88.libffmpeg.ExecuteBinaryResponseHandler.extend({
		onStart: function(){
			console.log('Started running ffmpeg');
			},
		onProgress: function(thisMessage){
			console.log(' ffmpeg running');
			console.log(thisMessage);
			},
		onFailure: function(thisMessage){
			console.log('FAILED running ffmpeg');
			console.log(thisMessage);
			},
		onSuccess: function(thisMessage){
			console.log('Successfully run ffmpeg');	
			console.log(thisMessage);
			},
		onFinish: function(){
			console.log('Finished running ffmpeg');
			}		
});


ffmpeg.execute('-version', new MyCustomExecuteBinaryResponseHandler());


function pageLoaded(args) {
    
    console.log('page loaded');
    
}
exports.pageLoaded = pageLoaded;
