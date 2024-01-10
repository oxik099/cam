<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = sanitize_input($_POST["name"]);
    $email = sanitize_input($_POST["email"]);
    $phone = sanitize_input($_POST["phone"]);
    $contactMethod = isset($_POST["contactMethod"]) ? sanitize_input($_POST["contactMethod"]) : '';
    $servicesInterested = [];
    if (isset($_POST["service1"])) $servicesInterested[] = sanitize_input($_POST["service1"]);
    if (isset($_POST["service2"])) $servicesInterested[] = sanitize_input($_POST["service2"]);
    if (isset($_POST["service3"])) $servicesInterested[] = sanitize_input($_POST["service3"]);
    $message = sanitize_input($_POST["message"]);

    $recipient = "sajal.sarker26@gmail.com"; // replace with your email
    $subject = "New Contact Form Submission";
    $email_header = "From: $email \r\n";
    $email_header .= "Reply-To: $email \r\n";

    $email_body = "Name: $name\n";
    $email_body .= "Email: $email\n";
    $email_body .= "Phone: $phone\n";
    $email_body .= "Preferred Contact Method: $contactMethod\n";
    $email_body .= "Services Interested: " . implode(", ", $servicesInterested) . "\n\n";
    $email_body .= "Message:\n$message\n";

    if (mail($recipient, $subject, $email_body, $email_header)) {
        echo "Thank you for contacting us. We will get back to you shortly.";
    } else {
        echo "Something went wrong. Please try again.";
    }
}

function sanitize_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}
?>
