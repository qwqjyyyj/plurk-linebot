import axios from 'axios'

export default async event => {
  try {
    const { data } = await axios.get('https://www.plurk.com/Stats/getAnonymousPlurks?lang=zh&offset=0&limit=200')
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}
