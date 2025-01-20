export default async event => {
  event.reply({
    type: 'text',
    text: '你想查哪個娃稿繪師的噗浪',
    quickReply: {
      items: [
        {
          type: 'action',
          action: {
            type: 'uri',
            uri: 'https://www.plurk.com/stvoao',
            label: '桑'
          }
        },
        {
          type: 'action',
          action: {
            type: 'uri',
            uri: 'https://www.plurk.com/wlo02736828',
            label: '渡月草'
          }
        },
        {
          type: 'action',
          action: {
            type: 'uri',
            uri: 'https://www.plurk.com/zuuu_1029',
            label: '佐佐'
          }
        }
      ]
    }
  })
}
