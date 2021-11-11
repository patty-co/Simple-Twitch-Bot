import tmi from 'tmi.js'
import { BOT_USERNAME , OAUTH_TOKEN, CHANNEL_NAME, BLOCKED_WORDS } from './constants'

const options = {
	options: { debug: true },
	connection: {
    reconnect: true,
    secure: true,
    timeout: 180000,
    reconnectDecay: 1.4,
    reconnectInterval: 1000,
	},
	identity: {
		username: BOT_USERNAME,
		password: OAUTH_TOKEN
	},
	channels: [ CHANNEL_NAME ]
}

const client = new tmi.Client(options)

client.connect()

//#region EVENTS

client.on('subscription', (channel, username, method, message, userstate) => {
  onSubscriptionHandler(channel, username, method, message, userstate)
})

client.on('raided', (channel, username, viewers) => {
  onRaidedHandler(channel, username, viewers)
})

client.on('cheer', (channel, userstate, message) => {
  onCheerHandler(channel, userstate, message)
})

client.on('giftpaidupgrade', (channel, username, sender, userstate) => {
  onGiftPaidUpgradeHandler(channel, username, sender, userstate)
})

client.on('resub', (channel, username, months, message, userstate, methods) => {
  resubHandler(channel, username, months, message, userstate, methods)
})

client.on('subgift', (channel, username, streakMonths, recipient, methods, userstate) => {
  subGiftHandler(channel, username, streakMonths, recipient, methods, userstate)
})

//#endregion

// Chat Messages

client.on('message', (channel, userstate, message, self) => {
  if (self || !message.startsWith('!')) {
    return;
  }
  
  const regexpCommand = new RegExp(/^!([a-zA-Z0-9]+)(?:\W+)?(.*)?/);
  let [raw, command, argument] = message.match(regexpCommand);

  command = command.toLowerCase();

  //#region Socials commands

  if (command === 'discord') {
    discord(client, channel)
    return
  } else if (command === 'instagram' || command === 'insta') {
    instagram(client, channel)
    return
  } else if (command === 'twitter') {
    twitter(client, channel)
    return
  } else if (command === 'subscribe') {
    subscribe(client, channel)
    return
  } else if (command === 'socials') {
    socials(client, channel)
    return
  } else if (command === 'youtube') {
    youtube(client, channel)
    return
  }

  //#endregion

  onMessageHandler(channel, userstate, message, self)
})
