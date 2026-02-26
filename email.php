<?php
// Check if the form was submitted via POST method
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // Collect the data from the form
    $customerData = htmlspecialchars($_POST['customerData']);
    
    // Email details
    $to = "dispatch1@vdfreight.com"; // Replace with your target email address
    $subject = "New Customer Data Submission";
    $message = "The customer submitted the following data: " . $customerData;
    $headers = "From: dispatch@simple1group.com" . "\r\n" . // Replace with a valid 'from' address on your domain
               "Reply-To: webmaster@example.com" . "\r\n" .
               "X-Mailer: PHP/" . phpversion();

    // Send the email
    if (mail($to, $subject, $message, $headers)) {
        echo "Thank you. The data has been successfully emailed.";
    } else {
        echo "Sorry, there was an error sending the email.";
    }
} else {
    // If accessed directly without form submission
    echo "Access denied.";
}
?>