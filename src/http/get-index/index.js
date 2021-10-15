// learn more about HTTP functions here: https://arc.codes/primitives/http
const arc = require('@architect/functions')
exports.handler = async function http (req) {
  return {
    statusCode: 200,
    headers: {
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0',
      'content-type': 'text/html; charset=utf8'
    },
    body: `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset='utf-8'>
      <meta name='viewport' content='width=device-width,initial-scale=1'>
    
      <title>Svelte app</title>
    
      <link rel='icon' type='image/png' href=${arc.static('/favicon.png')}>
      <link rel='stylesheet' href=${ arc.static('/global.css')}>
      <link rel='stylesheet' href=${ arc.static('build/bundle.css')}>
    
      <script defer src=${arc.static('/build/bundle.js')}></script>
    </head>
    
    <body>
    </body>
    </html>`
  }
}