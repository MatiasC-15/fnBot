/* 

❀ By JTxs

[ Canal Principal ] :
https://whatsapp.com/channel/0029VaeQcFXEFeXtNMHk0D0n

[ Canal Rikka Takanashi Bot ] :
https://whatsapp.com/channel/0029VaksDf4I1rcsIO6Rip2X

[ Canal StarlightsTeam] :
https://whatsapp.com/channel/0029VaBfsIwGk1FyaqFcK91S

[ HasumiBot FreeCodes ] :
https://whatsapp.com/channel/0029Vanjyqb2f3ERifCpGT0W
*/

// $ npm i btch-downloader
// Package : "btch-downloader": "^2.3.2",
// *[ ❀ PLAY ]*

import { youtube } from 'btch-downloader'
import yts from 'yt-search'
import axios from 'axios'

let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) return conn.reply(m.chat, `❀ Ingresa el texto de lo que quieres buscar`, m)

try {
let ytsres = await yts(text)
let video = ytsres.videos[0]

if (!video) return conn.reply(m.chat, `❀ Sin resultados obtenidos :(`, m)

let { title, duration, views, ago, author, thumbnail, url } = video
let HS = `- *Titulo :* ${title}
- *Duracion :* ${duration.timestamp}
- *Visitas :* ${views.toLocaleString()}
- *Subido :* ${ago}
- *Autor :* ${author.name}`

 
await conn.sendMessage(m.chat, {text: HS,
contextInfo: { externalAdReply: {
title: `${title}`, body: `${author.name}`,
thumbnailUrl: thumbnail, sourceUrl: url,
mediaType: 1, renderLargerThumbnail: true
}}}, { quoted: m })

let data = await youtube(url)

if (!data || !data.mp3) return conn.reply(m.chat, `❀ Descarga fallida :(`, m)

await conn.sendMessage(m.chat, { audio: { url: data.mp3 }, mimetype: 'audio/mpeg', }, { quoted: m })
//data.mp4 para video :v
} catch (error) {
console.error(error)
}}

handler.command = ['play']

export default handler
