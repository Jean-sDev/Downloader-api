import ytdl from 'ytdl-core'
import ytSearch from 'yt-search'

export default async (req, res) => {
  try {
    const query = req.query.query
    if (!query) return res.json({ status: false, error: 'Missing query' })

    const search = await ytSearch(query)
    const video = search.videos[0]
    if (!video) return res.json({ status: false, error: 'Not found' })

    const info = await ytdl.getInfo(video.url)
    const audio = ytdl.chooseFormat(info.formats, { quality: 'highestaudio' })

    res.json({
      status: true,
      result: {
        title: video.title,
        duration: video.timestamp,
        views: video.views,
        thumbnail: video.thumbnail,
        download_url: audio.url
      }
    })
  } catch (e) {
    res.json({ status: false, error: e.message })
  }
                                                   }
