const { Client } = require('discord.js');
const client = new Client;
const {updatePlayerCount} = require("./utils/")
global.config = require("./config.json")
// https://discord.com/oauth2/authorize?client_id=759327176843067452&scope=bot&permissions=8
client.on('ready', () => {
    console.log(`Discord Bot logged in as ${client.user.tag}`);
    updatePlayerCount(client, 5)
});

client.login(config.token);