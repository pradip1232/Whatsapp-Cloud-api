const express = require('express')
// const body_parser = require("body-parser");
// const axios = require("axios");
const router = express.Router();

const serverless = require('serverless-http')
require('dotenv').config();
// const app = express().use(body_parser.json());
const app = express();
app.use(express.json());
const token = process.env.TOKEN;
const mytoken = process.env.MYTOKEN;

// app.listen(process.env.PORT, () => {
//     console.log("Its is working...");
// });


app.get(8000, () => {
    console.log("Hee this is localhost");
})
// app.get("/webhook", (req, res) => {


//     console.log("Hello this is webhook url")
//     // let mode = req.query["hub.mode"];
//     // let challange = req.query["hub.challenge"];
//     // let token = req.query["hub.verify_token"];

//     // if (mode && token) {

//     //     if (mode === "subscribe" && token === mytoken) {
//     //         res.status(200).send(challange);
//     //     } else {
//     //         res.status(403);
//     //     }

//     // }

// });

// // app.post("/webhook", (req, res) => {
// //     let body_param = req.body;
// //     console.log(JSON.stringify(body_param, null, 2));
// //     if (body_param.object) {
// //         console.log("inside body param");
// //         if (body_param.entry &&
// //             body_param.entry[0].changes &&
// //             body_param.entry[0].changes[0].value.messages &&
// //             body_param.entry[0].changes[0].value.messages[0]
// //         ) {
// //             let phon_no_id = body_param.entry[0].changes[0].value.metadata.phone_number_id;
// //             let from = body_param.entry[0].changes[0].value.messages[0].from;
// //             let msg_body = body_param.entry[0].changes[0].value.messages[0].text.body;
// //             console.log("phone number " + phon_no_id);
// //             console.log("from " + from);
// //             console.log("boady param " + msg_body);
// //             axios({
// //                 method: "POST",
// //                 url: "https://graph.facebook.com/v13.0/" + phon_no_id + "/messages?access_token=" + token,
// //                 data: {
// //                     messaging_product: "whatsapp",
// //                     to: from,
// //                     text: {
// //                         body: "Hi.. I'm coder, your message is " + msg_body
// //                     }
// //                 },
// //                 headers: {
// //                     "Content-Type": "application/json"
// //                 }
// //             });
// //             res.sendStatus(200);
// //         } else {
// //             res.sendStatus(404);
// //         }
// //     }
// // });

// // app.get("/", (req, res) => {
// //     res.status(200).send("hello this is webhook setup");
// // });





// app.use('/.netlify/functions/api', router);


// module.exports.handler = serverless(app);


// // https://yoursite.netlify.app/.netlify/functions/hello