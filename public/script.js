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
