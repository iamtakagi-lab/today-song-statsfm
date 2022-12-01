process.env.TZ = "Asia/Tokyo"

import { getTopTrackFromLastfm } from "./lastfm.js"
import { postTweet } from "./twitter.js"
import moment from "moment"
import "moment/locale/ja.js"

const handleMain = async () => {
  // 直近のトップソングを取得
  const topTrack = await getTopTrackFromLastfm()
  if (!topTrack) throw new Error("[last.fm] 曲データが存在しません ギャオオオオオオオオオオオオオオオオオオオオオオ")

  const context = `${process.env.LASTFM_USER_ID ?? ''} さんの ${moment().subtract(1, 'days').format("YYYY/MM/DD")} の曲は「${topTrack.artist.name}」の「${topTrack.name}」でした #TodaySong ${topTrack.url}`
  console.log(context)
  
  postTweet(context)
}

;(async () => {
  await handleMain()
})()