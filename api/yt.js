import ytdl from 'ytdl-core'
import ytSearch from 'yt-search'

export default async (req, res) => {
  try {
    const query = req.query.query
    if (!query) return res.json({ status: false })

    const search = await ytSearch(query)
    const video = search.videos[0]

    const info = await ytdl.getInfo(video.url)
    const format = ytdl.chooseFormat(info.formats, { quality: '18' })

    res.json({
      status: true,
      result: {
        title: video.title,
        duration: video.timestamp,
        views: video.views,
        thumbnail: video.thumbnail,
        download_url: format.url
      }
    })
  } catch (e) {
    res.json({ status: false, error: e.message })
  }
}
