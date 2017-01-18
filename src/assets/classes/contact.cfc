component output="false" {
  remote function sendMessage( string name, string phone, string email, string message) returnFormat="json"{
    var bodymessage = "Name: "&name&"<br>";
    var bodymessage = bodymessage&"Email: "&email&"<br>";
    var bodymessage = bodymessage&"Phone: "&phone&"<br>";
    var bodymessage = bodymessage&"<br>"&message;

    mail = new mail();
    mail.setSubject( "Message from contact form" );
    mail.setFrom( "noreply@ben-pelletier.com" );
    mail.setTo( "ben.epelletier@gmail.com" );
    mail.setType( type="html");
    mail.send(body=bodymessage);

    var returnVal = serializeJSON('success');
    return returnVal;
  }
}
