<?php

    // Allow requests from any origin
    header("Access-Control-Allow-Origin: https://directcapital.co.bw/");

    // Permit the following HTTP methods
    header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");

    // Set the allowed headers for the request
    header("Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token");

    // Allow cookies to be sent and received across domains
    header("Access-Control-Allow-Credentials: true");

// Retrieve data from the request
$data = json_decode(file_get_contents("php://input"));

$recipient = $data->recipient;
$subject = $data->subject;
$body = $data->body;

$from = 'info@directcapital.co.bw'; // Your email address
$headers = 'From: ' . $from;

if (mail($recipient, $subject, $body, $headers)) {
    echo json_encode(['success' => true]);
} else {
    echo json_encode(['error' => 'Failed to send email']);
}
?>