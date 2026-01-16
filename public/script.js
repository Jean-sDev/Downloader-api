async function search() {
  const q = document.getElementById('query').value
  const resultsBox = document.getElementById('results')
  resultsBox.innerHTML = '⏳ Recherche...'

  // Recherche YouTube (audio + vidéo)
  const r = await fetch(`/api/search?query=${encodeURIComponent(q)}`)
  const data = await r.json()

  resultsBox.innerHTML = ''

  data.results.forEach(v => {
    const div = document.createElement('div')
    div.className = 'result'

    div.innerHTML = `
      <img src="${v.thumbnail}">
      <div>
        <b>${v.title}</b><br>
        <small>${v.duration}</small><br>
        <button onclick="downloadAudio('${v.id}')">🎵 Audio</button>
        <button onclick="downloadVideo('${v.id}')">🎥 Vidéo</button>
      </div>
    `
    resultsBox.appendChild(div)
  })
}

async function downloadAudio(id) {
  window.open(`/api/play?id=${id}`, '_blank')
}

async function downloadVideo(id) {
  window.open(`/api/yt?id=${id}`, '_blank')
}
```js
async function play() {
  const q = document.getElementById('query').value
  const r = await fetch(`/api/play?query=${encodeURIComponent(q)}`)
  document.getElementById('result').innerText = await r.text()
}

async function yt() {
  const q = document.getElementById('query').value
  const r = await fetch(`/api/yt?query=${encodeURIComponent(q)}`)
  document.getElementById('result').innerText = await r.text()
}
```js
async function play() {
  const q = document.getElementById('query').value
  const r = await fetch(`/api/play?query=${encodeURIComponent(q)}`)
  document.getElementById('result').innerText = await r.text()
}

async function yt() {
  const q = document.getElementById('query').value
  const r = await fetch(`/api/yt?query=${encodeURIComponent(q)}`)
  document.getElementById('result').innerText = await r.text()
      }
