<?PHP

$to      = 'prabakar2218@gmail.com';
$subject = 'the subject';
$message = 'hello! Welocme';
$headers = 'From: msprabu22@gmail.com' . "\r\n" .
    'Reply-To: msprabu22@gmail.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

if (mail($to, $subject, $message, $headers))
{
    echo "Message accepted";die;
}
else
{
    echo "Error: Message not accepted";die;
}
?>
