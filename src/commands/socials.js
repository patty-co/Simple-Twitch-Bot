import { CHANNEL_NAME } from './constants'

function discord (client, channel) {
  client.say(channel, 
    `Join our community Discord here! [YOUR DISCORD INVITE LINK]`
  );
}

function instagram (client, channel) {
  client.say(channel, 
    `Follow ${CHANNEL_NAME}'s Instagram [YOUR INSTAGRAM]`
  );
}

function twitter (client, channel) {
  client.say(channel, 
    `Follow ${CHANNEL_NAME}'s Twitter [YOUR TWITTER]`
  );
}

function subscribe (client, channel) {
  client.say(channel, 
    `Want to help support the stream? Subscribe here! [YOUR SUBSCRIBE LINK]`
  );
}

function socials (client, channel) {
  client.say(channel, 
    `⭐ Social Medias! ⭐ [YOUR INSTAGRAM] ⭐ [YOUR TWITTER] ⭐ [YOUR YOUTUBE] ⭐`
  );
}

function youtube (client, channel) {
  client.say(channel, 
    `Subscribe to ${CHANNEL_NAME}'s YouTube channel: [YOUR YOUTUBE]`
  );
}