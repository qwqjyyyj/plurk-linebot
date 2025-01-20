import axios from 'axios'

export default async event => {
  try {
    const { data } = await axios.get('https://www.plurk.com/Stats/getAnonymousPlurks?lang=zh&offset=0&limit=100')
    const result = await event.reply(data.content)
    // console.log(data.pids)
    console.log(result)
  } catch (error) {
    console.log(error)
  }
}
