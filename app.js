
////////////////////////////////////////////////////////////////////////////////
// Start Configuration.
////////////////////////////////////////////////////////////////////////////////

// The URL you want to throw a request at with some headers.
TARGET_URL = 'http://localhost:8080/deploya/login.jsp';

// The headers you want to send.
HEADERS = {
	'auth-username': 'test@username'
}

////////////////////////////////////////////////////////////////////////////////
// END Configuration.
////////////////////////////////////////////////////////////////////////////////

// The request module. This will do the work.
var request = require('request');

// Options used to configure the call to the request module.
var options = {
	url: TARGET_URL,
	headers: HEADERS
}

// The callback.
// Javascript modules generally work in a "do A and when you are done do B"
// format. The request and the options used to configure it are A and the
// "callback" is B.  In this case the request gets made and when that request
// finishes this callback function is executed with the results of that request.
// A common standard for nodejs is for the first parameter to a callback
// function to be an error. If no error occured during the execution of the
// function the callback is called with list parameter being left undefined or
// set to null. For this call to request the second argument is the COMPLETE
// response that originated from the target. If the request was successful this
// object can be huge. You will generally only be interested in the statusCode
// from this object. Lastly, the final paramter passed to the callback is the
// body of the response, if there was one.
//
// This call back will report an error that occured with the request, if one
// occured. If no error occured the response code of the response will be
// logged along with the body of the response.
var callback = function( error, response, body )
{
	// Bail out on an error.
	if( error ) return console.error( 'Boom: '+ error +'\n', error );

	// Let's show the status code and the body.
	console.log( 'Response status code: '+ response.statusCode );
	console.log( body );
}

// Make the request!
console.log( 'Making a request to '+ TARGET_URL + ' with headers ', HEADERS );
request( options, callback );
