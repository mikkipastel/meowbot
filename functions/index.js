const functions = require("firebase-functions");
const region = "asia-east2";

//echo bot
const LINE_ACCESS_TOKEN = functions.config().line.echobot.access_token;
//lily
const LINE_ACCESS_TOKEN_LILY = functions.config().line.lilybot.access_token;

const lilyBot = require("./lilyCatBot");
const utils = require("./utils");

exports.lineBot = functions.region(region).https.onRequest((request, response) => {
  if (request.method === "POST") {
    const messageType = request.body.events[0].message.type;
    console.log(request.body.events[0]);

    if (messageType == 'text') {
      const textMessage = request.body.events[0].message.text;
      utils.reply(
        utils.lineBotHeader(LINE_ACCESS_TOKEN),
        request.body.events[0].replyToken,
        { type: "text", text: textMessage }
      );
    }
  }
  return response.status(200).send(request.method)
});

exports.lilyBot = functions.region(region).https.onRequest((request, response) => {
  if (request.method === "POST") {
    const messageType = request.body.events[0].message.type;
    console.log(request.body.events[0]);

    if (messageType == 'text') {
      const textMessage = request.body.events[0].message.text;
      
      let result;
      if (textMessage.includes("ลูบ")) {
        result = { 
          type : "audio", 
          originalContentUrl: "https://dm0qx8t0i9gc9.cloudfront.net/previews/audio/BsTwCwBHBjzwub4i4/cat-purring_zJY2nb4O_NWM.mp3", 
          duration: 9000
        }
      } else {
        result = { 
          type: "text", 
          text: lilyBot.getLilyWording()
        };
      }

      if (result !== "") {
        utils.reply(
          utils.lineBotHeader(LINE_ACCESS_TOKEN_LILY),
          request.body.events[0].replyToken,
          result
        );
      }
    }
  }
  return response.status(200).send(request.method)
});