<?php

require_once dirname(__DIR__, 3) . "/php/classes/autoload.php";
require_once dirname(__DIR__, 3) . "/vendor/autoload.php";
require_once dirname(__DIR__, 3) . "/php/lib/xsrf.php";
require_once("/etc/apache2/capstone-mysql/encrypted-config.php");

//Cloudinary?

use Edu\Cnm\PetRescueAbq\{
	Post, Image, Organization
};

/**
 * Api for Post/Image Class
 *
 * @author Amy Skidmore <askidmore1@cnm.edu>
 *
 */

// Verify the session, start if inactive

if(session_status() !== PHP_SESSION_ACTIVE) {
	session_start();

}

//Prepare an empty reply

$reply = new stdClass();
$reply->status = 200;
$reply->data = null;

try {

	//grab the connection to mySQL
	$pdo = connectToEncryptedMySQL("/etc/apache2/capstone-mysql/fosterabq.ini");

//mock an organization being logged in
//	TODO: Remove this after testing
	$_SESSION["organization"] = Organization::getOrganizationByOrganizationId($pdo, 1);

	/** Cloudinary API  */
	$config = readConfig("/etc/apache2/capstone-mysql/fosterabq.ini");
	$cloudinary = json_decode($config["cloudinary"]);
	\Cloudinary::config(["cloud_name" => $cloudinary->cloudName, "api_key" => $cloudinary->apiKey, "api_secret" => $cloudinary->apiSecret]);


	// Determine the HTTP method
	$method = array_key_exists("HTTP_X_HTTP_METHOD", $_SERVER) ? $_SERVER["HTTP_X_HTTP_METHOD"] : $_SERVER["REQUEST_METHOD"];

	// sanitize input
	// make the variable names match the input [JC]
	$id = filter_input(INPUT_GET, "id", FILTER_VALIDATE_INT);
	$postOrganizationId = filter_input(INPUT_GET, "postOrganizationId", FILTER_VALIDATE_INT);
	$postBreed = filter_input(INPUT_GET, "postBreed", FILTER_SANITIZE_STRING);
	$postDescription = filter_input(INPUT_GET, "postDescription", FILTER_SANITIZE_STRING);
	$postSex = filter_input(INPUT_GET, "postSex", FILTER_SANITIZE_STRING);
	$postType = filter_input(INPUT_GET, "postType", FILTER_SANITIZE_STRING);
	$imageId = filter_input(INPUT_GET, "imageId", FILTER_VALIDATE_INT);
	$imagePostId = filter_input(INPUT_GET, "imagePostId", FILTER_VALIDATE_INT);
	$imageCloudinaryId = filter_input(INPUT_GET, "imageCloudinaryId", FILTER_SANITIZE_STRING, FILTER_FLAG_NO_ENCODE_QUOTES);

	// Validate Id per methods required
	if(($method === "DELETE") && (empty($id) === true || $id < 0)) {
		throw (new InvalidArgumentException("id can't be negative or empty", 405));
	}

	// Handle get requests
	if($method === "GET") {

		// set the XSRF cookie
		setXsrfCookie();

		//get image/all images then update reply

		//if(empty($id) === false) {
		//	$profile = Profile::getProfileByProfileId($pdo, $id);
		//	if($profile !== null) {
		//	$reply->data = $profile;

		if(empty($id) === false) {
			$post = Post::getPostByPostId($pdo, $id);
			if($post !== null) {
				$reply->data = $posts;

			}

		} elseif(empty($postOrganizationId) === false) {
			$post = Post::getPostsByPostOrganizationId($pdo, $postOrganizationId)->toArray();
			if($post !== null) {
				$reply->data = $posts;
			}

		} elseif(empty($postBreed) === false) {
			$post = Post::getPostsByPostBreed($pdo, $postBreed)->toArray();
			if($post !== null) {
				$reply->data = $posts;

			}

		} elseif(empty($postDescription) === false) {
			$posts = Post::getPostByPostDescription($pdo, $postDescription)->toArray();
			if($posts !== null) {
				$reply->data = $posts;
			}

		} elseif(empty($postSex) === false) {
			$posts = Post::getPostByPostSex($pdo, $postSex)->toArray();
			if($posts !== null) {
				$reply->data = $posts;
			}

		} elseif(empty($postType) === false) {
			$posts = Post::getPostByPostType($pdo, $postType)->toArray();
			if($posts !== null) {
				$reply->data = $posts;
			}

		}
		if(empty($imageId) === false) {
			$image = Image::getImageByImageId($pdo, $imageId);
			if($image !== null) {
				$reply->data = $image;
			}

		} elseif(empty($imagePostId) === false) {
			$image = Image::getImageByImagePostId($pdo, $imagePostId);
			if($image !== null) {
				$reply->data = $image;

			}

		} elseif(empty($imageCloudinaryId) === false) {
			$image = Image::getImageByImageCloudinaryId($pdo, $imageCloudinaryId);
			if($image !== null) {
				$reply->data = $image;
			}
		}

	} elseif($method === "PUT" || $method === "POST") {
		verifyXsrf();
//		$requestContent = file_get_contents("php://input");
		// Retrieves the JSON package that the front end sent, and stores it in $requestContent. Here we are using file_get_contents("php://input") to get the request from the front end. file_get_contents() is a PHP function that reads a file into a string. The argument for the function, here, is "php://input". This is a read only stream that allows raw data to be read from the front end request which is, in this case, a JSON package.
//		$requestObject = json_decode($requestContent);
		// This Line Then decodes the JSON package and stores that result in $requestObject

		//TODO enforce that all the needed variables to create both post and image are present
		//took out profile, added org have Q's about profile id or $id
		//verifying that the user is logged in before they can insert an post/image

//			If(empty($requestObject->OrganizationId) === true) {
//				throw (new\InvalidArgumentException("You must have an Organization Id to post"));
//
//			}
//TODO do we need to check postId on insert
		if(empty($_SESSION["organization"]) === true) {
			throw (new\InvalidArgumentException("User must be logged in to Post.", 401));

		}



//		$postFlag=filter_input(INPUT_POST, "postFlag", FILTER_SANITIZE_STRING, FILTER_FLAG_NO_ENCODE_QUOTES);

//		if($postFlag === "y") {

			$postBreed = filter_input(INPUT_POST, "postBreed", FILTER_SANITIZE_STRING, FILTER_FLAG_NO_ENCODE_QUOTES);


			if(empty($postBreed) === true) {
				throw (new\InvalidArgumentException("You must specify breed to Post", 402));

			}

			$postDescription = filter_input(INPUT_POST, "postDescription", FILTER_SANITIZE_STRING, FILTER_FLAG_NO_ENCODE_QUOTES);


			if(empty($postDescription) === true) {
				throw (new\InvalidArgumentException("You must specify description to Post", 402));

			}

			$postSex = filter_input(INPUT_POST, "postSex", FILTER_SANITIZE_STRING, FILTER_FLAG_NO_ENCODE_QUOTES);


			if(empty($postSex) === true) {
				throw (new\InvalidArgumentException("You must specify sex to Post", 402));

			}

			$postType = filter_input(INPUT_POST, "postType", FILTER_SANITIZE_STRING, FILTER_FLAG_NO_ENCODE_QUOTES);


			if(empty($postType) === true) {
				throw (new\InvalidArgumentException("You must specify type to Post", 402));

			}


//
//
//
//			if(empty($requestObject->postDescription) === true) {
//				throw (new\InvalidArgumentException("You must place a description to Post", 402));
//
//			}
//			if(empty($requestObject->postSex) === true) {
//				throw (new\InvalidArgumentException("You must specify animals sex to Post", 402));
//
//			}
//			if(empty($requestObject->postType) === true) {
//				throw (new\InvalidArgumentException("You must specify type to Post", 402));
//			}

			$post = new Post(null, $_SESSION['organization']->getOrganizationId(), $postBreed, $postDescription, $postSex, $postType);
			$post->insert($pdo);
//		} else {

// comment out the following three "ifs" and test to see if it works without this [JC]
			/*			if(empty($requestObject->imageId) === true) {
							throw (new\InvalidArgumentException("You must place an image in the Post", 402));

						}
						if(empty($requestObject->imagePostId) === true) {
							throw (new\InvalidArgumentException("You must be logged in to Post", 402));

						}
						if(empty($requestObject->imageCloudinaryId) === true) {
							throw (new\InvalidArgumentException("You must be logged in to Post", 402));

						}*/
			//Variable assignment for the users image name, MIME type, and image extension
			//ask about image id below ""
			$tempUserFileName = $_FILES["dog"]["tmp_name"];

			//upload the image to Cloudinary and get the public id
			$cloudinaryResult = \Cloudinary\Uploader::upload($tempUserFileName, array("width" => 500, "crop" => "scale"));

			// Inserting image into database

//			$postId = filter_input(INPUT_POST, "postId", FILTER_VALIDATE_INT);

			$image = new Image(null, $post->getPostId(), $cloudinaryResult["public_id"]);
			$image->insert($pdo);
//		}


//Push the data to the imageId, upload the new image, and notify user.
//				$reply->data = $image->getImageId();
		$reply->message = "Post successful.";

	} elseif($method === "DELETE") {
		verifyXsrf();

		//retrieve the postId to delete
		$post = Post::getPostByPostId($pdo, $id);
		if($post === null) {
			throw (new RuntimeException("Post does not exist", 404));
		}
		if($_SESSION["organization"]->getOrganizationId() !== $post->getPostOrganizationId()) {
			throw (new \InvalidArgumentException("You are not allowed to delete this post.", 401));
		}
		//getting the image by image post id
		$postId = $post->getPostId();

		$image = Image::getImageByImagePostId($pdo, $postId);

		//deleting the image and the post

		$image->delete($pdo);

		$post->delete($pdo);

		$reply->message = "Post successfully deleted.";


		//verify user is logged in to delete post/image_ i'm just not sure how to structure this... above in another form
		//if(empty($_SESSION ["organization"]) === true || $_SESSION ["organization"]->getOrganizationId() !== $post->getPostOrganizationId()); {
		//throw (new\InvalidArgumentException("You must be logged in to delete."));
	} else {
		throw (new InvalidArgumentException("Invalid HTTP method request"));
	}

} catch(Exception $exception) {
	$reply->status = $exception->getCode();
	$reply->message = $exception->getMessage();
} catch(TypeError $typeError) {
	$reply->status = $typeError->getCode();
	$reply->message = $typeError->getMessage();
}
header("Content-type: application/json");

//encode and return reply to front end caller
echo json_encode($reply);














