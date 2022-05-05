var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');

// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
  colorize: true
});
logger.level = 'debug';

// Initialize Discord Bot
var bot = new Discord.Client({
  token: auth.token,
  autorun: true
});

bot.on('ready', function(evt) {
  logger.info('Connected');
  logger.info('Logged in as: ');
  logger.info(bot.username + ' - (' + bot.id + ')');
});

bot.on('message', function(user, userID, channelID, message, evt) {
  var triggerMessages = ['i have a doubt can someone help',
    'can anyone help me',
    'can i ask a question',
    'can somebody help'
  ];

  // It will listen for messages that will start with `!`
  if (triggerMessages.includes(message)) {
    //get last 3 messages in the channel
    let lastFewMsgs = []
    let messages = message.channel.messages.fetch({
      limit: 5
    });
    for (let [key, value] of messages.id) {
      lastFewMsgs.push(value);
    }
    lastFewMsgs.splice(0, 1);
    if (lastFewMsgs.includes(userId))) {
    bot.sendMessage({
      to: channelID,
      message: 'https://dontasktoask.com/'
    });
  }
}
}
});
