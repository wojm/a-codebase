# Discord Bot
This repository tracks changes made to a discord bot.

## Prerequisites
### Node
Node can be found [here](https://nodejs.org/en/).

### Discord Server
Have access to a [discord server](https://discord.com/).

#### Bot Token
You will need access to a bot token. To create a new bot, follow [these instructions](https://www.writebots.com/discord-bot-token/).
The token will need to be passed into the script as an environment variable. Add the token to secrets.sh and run the file with `source secrets.sh`
The bot should have access to the channel you are messaging.

## Development
Use `npm run` to see commands.

### Installation
To install prerequisites type: `npm ci`.

### Test
To validate, type `npm test` or `npm run test`. The test requires manual validation, more in [qa.md](./qa.md).

### Run
To execute the main execution path, type `npm run start`.
