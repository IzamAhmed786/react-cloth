import express from "express";
import cors from "cors";

const twilio = require("twilio");

const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const verifySid = process.env.TWILIO_SERVICE_ID;

const client = twilio(accountSid, authToken);

client.verify.v2
  .services(verifySid)
  .verifications.create({
    to: "+918287313088", // user's phone number with country code
    channel: "sms"
  })
  .then(verification => console.log(verification.status))
  .catch(error => console.error(error));