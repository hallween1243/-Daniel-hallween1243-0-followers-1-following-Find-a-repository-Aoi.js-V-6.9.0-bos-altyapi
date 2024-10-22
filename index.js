const { AoiClient, LoadCommands } = require("aoi.js");
require('dotenv').config();

const client = new AoiClient({
    token: process.env.token, // Here goes the Token you copied earlier!
    prefix: "-", // Here goes the prefix you want to use for your bot!
    intents: ["MessageContent", "Guilds", "GuildMessages", "GuildMembers", "GuildBans", "GuildPresences","GuildVoiceStates","GuildInvites"],
    events: ["onGuildJoin", "onGuildLeave", "onFunctionError", "onJoin", "onLeave", "onInteractionCreate", "onMemberUpdate", "onMessage", "onPresenceUpdate", "onGuildLeave", "onGuildJoin", "onVoiceStateUpdate","onUserUpdate","onMemberUpdate","onChannelCreate", "onChannelDelete", "onFunctionError", "onMessageDelete", "onMessageUpdate", "onBanAdd", "onBanRemove", "onRoleCreate", "onRoleDelete", "onGuildJoin", "onUserUpdate"],
    database: {
        type: "aoi.db",
        db: require("@aoijs/aoi.db"),
        dbType: "KeyValue",
        tables: ["main"],
        securityKey: "a-32-characters-long-string-here"
    }
});



require('./handler/variables.js')(client);
const loader = new LoadCommands(client);
loader.load(client.cmd, "./commands/")