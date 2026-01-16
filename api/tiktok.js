import axios from 'axios'

export default async (req, res) => {
  try {
    const url = req.query.url
    if (!url) return res.json({ status: false })

    const api = `https://tikwm.com/api/?url=${encodeURIComponent(url)}`
    const { data } = await axios.get(api)

    res.json({
      status: true,
      result: {
        video: data.data.play,
        music: data.data.music,
        author: data.data.author.nickname
      }
    })
  } catch (e) {
    res.json({ status: false, error: e.message })
  }
}
