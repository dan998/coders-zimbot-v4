
// ⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈
//▮ZIM BOT INC 2022 ®️ALL RIGHTS RESERVED
//▮
//▮FORK AND DON'T FORGET TO GIVE A STAR
//▮
//▮WHATSAPP 
//▮YOUTUBE CHANNEL: 
//▮
//╰▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
//
//┏━━━━━━━━━━━━━━━━━━━━━━━━━
//┃THIS SOFTWARE INCLUDES 
//┃SOME ENCRYPTED FILES
//┃
//┃THANKS FOR CHOOSING CODERS-ZIMBOT
//| CREDIT TO DIKA ARDNT
//┗━━━━━━━━━━━━━━━━━━━━━━━━━
//




const axios = require('axios')
const cheerio = require('cheerio')

const ApkDown = async (url) => {
const res = await axios.get(url) 
const $ = cheerio.load(res.data)
const total = []
$(`div.entry-inner`).each(function(e,hasil){
let desc = $(hasil).find('p').text()

let title = $('div.post-inner.group').find('h1.post-title').text()

let size = $('div#dlbox1').find('ul > li > span').text().split('size: ')[1].split('Update')[0]

let vers = $('div#dlbox1').find('ul > li > span').text().split('Version: ')[1].split('File')[0]

let up = $('div#dlbox1').find('ul > li > span').text().split('Update: ')[1]

let link = $('div#dlbox12').find('li > a').attr('href')

let thumb = $('div#dlbox').find('img').attr('data-src')

total.push({title,size,vers,up,link,thumb,desc})
console.log(total)
})
return (total)
}


module.exports = { ApkDown }
