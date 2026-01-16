import express from 'express'
import cors from 'cors'

import play from './api/play.js'
import yt from './api/yt.js'
import tiktok from './api/tiktok.js'

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static('public'))

app.get('/api/play', play)
app.get('/api/yt', yt)
app.get('/api/tiktok', tiktok)

app.get('/', (_, res) => {
  res.sendFile(process.cwd() + '/public/index.html')
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log('API running on port ' + PORT)
})
