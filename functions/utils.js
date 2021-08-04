//LINE
const LINE_MESSAGING_API = "https://api.line.me/v2/bot";

const axios = require("axios");

const reply = (header, token, payload) => {
    return axios({
        method: "post",
        url: `${LINE_MESSAGING_API}/message/reply`,
        headers: header,
        data: JSON.stringify({
            replyToken: token,
            messages: [payload]
        })
    });
};

const lineBotHeader = (access_token) => {
    return {
        "Content-Type": "application/json",
        Authorization: `Bearer ${access_token}`
      };
}

module.exports = { reply, lineBotHeader }; 