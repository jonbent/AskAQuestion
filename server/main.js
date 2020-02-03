import { Meteor } from 'meteor/meteor';
import keys from '/config/keys';

import '/imports/api/questions.js';

import twilio from "twilio";
const twilioClient = twilio(keys.twilioAccountId, keys.twilioAccountToken);

Meteor.methods({
    sendTextForQuestion(userName){
        twilioClient.messages.create({
                body: `${userName} needs Help!`,
                from: "+13312156952",
                to: "+15106850342"
            }).then(message => console.log(message), err => {})
    }
})

Meteor.startup(() => {
  // code to run on server at startup
    ServiceConfiguration.configurations.upsert(
      { service: 'github' },
      {
        $set: {
          loginStyle: "redirect",
          clientId: keys.githubClientId,
          secret: keys.githubClientSecret
        }
      }
    );
});
