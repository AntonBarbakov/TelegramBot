const {google} = require('googleapis')
const YOUTUBE_API_TOKEN = 'AIzaSyAbUugM_mx1NJuq0bXTwIIDswhUr4aD0Gw';
const YOUTUBE_VIDEO_URL = 'https://www.youtube.com/watch?v='
const channelId= "UC4e_XPBiiIO4fo4_CucxQeg";
const date = new Date()
date.setDate(date.getDate() - 7)
let videoId = "";
let repo = "";
let videoURL = "";

// Authorization: Bearer [YOUR_ACCESS_TOKEN]
// Accept: application/json

const Hello = [
    `Здоров `,
    `Cколько лет, сколько зим! Здарова пидрило!`,
    `Привет пидр`,
    `Hello there!`,
    `Какие люди!`,
    `Cколько лет, сколько зим! Здарова пидрило!`
]

function rundomHello() {
    const index = Math.floor(Math.random() * Hello.length)
    return Hello[index]
}

function isHere (name, arr) {
    if(arr.indexOf(name) === -1){
        console.log("push")
        arr.push(name)
    }
}

async function getList () {

   return await google.youtube('v3').search.list({
        key: YOUTUBE_API_TOKEN,
        part: 'snippet',
        publishedAfter: date,
        maxResults: 10,
        channelId: channelId
    }).then((res)=>{
        const index = res.data.pageInfo.totalResults - 1;
        console.log(res.data.items[index])
        videoId = res.data.items[index].id.videoId
        if(videoId !== repo) {
            repo = videoId;
            videoURL = `${YOUTUBE_VIDEO_URL}${videoId}`
            // console.log(videoURL)
            return videoURL
        }else{
            return "Пока новой годноты не подьехало, пока...";
        }
    }).catch((e)=>{
        console.log(e)
    })
}



module.exports.rundomHello = rundomHello;
module.exports.isHere = isHere;
module.exports.getList = getList;