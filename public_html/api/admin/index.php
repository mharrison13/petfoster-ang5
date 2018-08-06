<?php
require_once dirname(__DIR__, 3) . "/php/classes/autoload.php";
require_once dirname(__DIR__, 3) . "/php/lib/xsrf.php";
require_once("/etc/apache2/capstone-mysql/encrypted-config.php");
use Edu\Cnm\PetRescueAbq\Organization;

/**
 * api for the Profile Activation class
 * @author JCooper<jcooper37@cnm.edu>
 * @author JFarrar<tmafm1@gmail.com>
 **/

//verify the session status. start session if not active
if(session_status() !== PHP_SESSION_ACTIVE) {
	session_start();
}

//prepare an empty reply
$reply = new stdClass();
$reply->status = 200;
$reply->data = null;

try {
	//grab the mySQL connection
	$pdo = connectToEncryptedMySQL("/etc/apache2/capstone-mysql/fosterabq.ini");

	//determine which HTTP method was used
	$method = array_key_exists("HTTP_X_HTTP_METHOD", $_SERVER) ? $_SERVER["HTTP_X_HTTP_METHOD"] : $_SERVER["REQUEST_METHOD"];

	//sanitize activation input
	$activation = filter_input(INPUT_GET, "activation", FILTER_SANITIZE_STRING, FILTER_FLAG_NO_ENCODE_QUOTES);
	// handle GET request - if id is present, that activation is returned, otherwise all activations are returned
	if($method === "GET") {
		//make sure Organization Activation Token is a valid hash
		if(ctype_xdigit($activation) === false) {
			throw (new \InvalidArgumentException("Organization activation token is invalid.", 405));
		}
		//check that activation token is correct length
		if(strlen($activation) !==32) {
			throw (new \InvalidArgumentException("Organization activation token is invalid length", 405));

		}

		//set XSRF Cookie
		setXsrfCookie();
		$organization = Organization::getOrganizationByOrganizationActivationToken($pdo, $activation);
		if(empty($organization) === true) {
			throw(new\InvalidArgumentException("No organization for Activation", 404));
		}
		//set activation token to null
		$organization->setOrganizationActivationToken(null);

		//update profile
		$organization->update($pdo);

		//update reply
		$reply->message = "Organization has been activated";
	}
	else{
		throw (new\Exception("Invalid HTTP method", 405));
	}

	// update reply with exception information
} catch(Exception $exception) {
	$reply->status = $exception->getCode();
	$reply->message = $exception->getMessage();
	$reply->trace = $exception->getTraceAsString();

	//header("Content-type: application/json");
	echo json_encode($reply);
} catch(TypeError $typeError) {
	$reply->status = $typeError->getCode();
	$reply->message = $typeError->getMessage();
	$reply->trace = $typeError->getTraceAsString();
}

//header("Content-type: application/json");
if($reply->data === null) {
	unset($reply->data);
}

// encode and return reply to front end caller
echo json_encode($reply);