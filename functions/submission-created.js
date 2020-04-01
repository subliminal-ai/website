const client = require("@sendgrid/client");


function addSendgridRecipient(client, email) {
  return new Promise((fulfill, reject) => {
    const data = [
      {
        email: email      }
    ];
    const request = {
      method: "POST",
      url: "/v3/contactdb/recipients",
      body: data
    };

    client
      .request(request)
      .then(([response, body]) => {
        console.log(response.statusCode);
        console.log(body);
        fulfill(response);
        // cb(null, response);
      })
      .catch(error => reject(error));
  });
}

function sendWelcomeEmail(client, email, senderEmail, senderName, templateID) {
  return new Promise((fulfill, reject) => {
    const data = {
      from: {
        email: senderEmail,
        name: senderName
      },
      reply_to: {
        email: senderEmail
      },
      personalizations: [
        {
          to: [
            {
              email: email
            }
          ]
        }
      ],
      template_id: templateID
    };

    const request = {
      method: "POST",
      url: "/v3/mail/send",
      body: data
    };

    client
      .request(request)
      .then(([response, body]) => {
        console.log(response.statusCode);
        console.log(body);
        fulfill(response);
      })
      .catch(error => reject(error));
  });
}

exports.handler = function(event, context, callback) {
  const {
    SENDGRID_API_KEY,
    SENDGRID_WELCOME_SENDER_EMAIL,
    SENDGRID_WELCOME_SENDER_NAME,
    SENDGRID_WELCOME_TEMPLATE_ID
  } = process.env;

  
  const body = JSON.parse(event.body);
  const email = body.email;
  const welcomeEmail = event.queryStringParameters.welcome_email === "true";
  
  console.log(SENDGRID_API_KEY, SENDGRID_WELCOME_TEMPLATE_ID)

  const sgMail = require('@sendgrid/mail');
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: 'test@example.com',
    from: 'test@example.com',
    subject: 'Sending with Twilio SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  };
//   sgMail.send(msg);

  client.setApiKey(SENDGRID_API_KEY);

  console.log(sgMail, sgMail.client)



  addSendgridRecipient(client, email)
    .then((response, body) => {
      if (welcomeEmail) {
        sendWelcomeEmail(
          client,
          email,
          SENDGRID_WELCOME_SENDER_EMAIL,
          SENDGRID_WELCOME_SENDER_NAME,
          SENDGRID_WELCOME_TEMPLATE_ID
        )
				.then(response => callback(null, { statusCode: response.statusCode, body: email + " added" }) )
				.catch(err => callback(err, null));
      } else {
        callback(null, { statusCode: response.statusCode, body: "" });
      }
    })
    .catch(err => callback(err, null));
};