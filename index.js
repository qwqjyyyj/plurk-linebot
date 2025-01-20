import 'dotenv/config'
import linebot from 'linebot'
import commandDOLL from './commands/doll.js'
import commandDR from './commands/qr.js'

const bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
})

bot.on('message', event => {
  if (event.message.type === 'text') {
    if (event.message.text === '棉花娃') {
      commandDOLL(event)
    } else if (event.message.text === '繪師') {
      commandDR(event)
    }
  }
})

bot.listen('/', 3000 || process.env.PORT, () => {
  console.log('機器人啟動')
})
