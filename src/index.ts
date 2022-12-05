process.env.TZ = "Asia/Tokyo"

import { getTopTrackFromStatsfm } from "./statsfm.js"
import { postTweet } from "./twitter.js"
import moment from "moment"
import "moment/locale/ja.js"

const handleMain = async () => {
  // 直近のトップソングを取得
  const data = await getTopTrackFromStatsfm()
  if (!data) throw new Error("[stats.fm] 曲データが存在しません ギャオオオオオオオオオオオオオオオオオオオオオオ")
  const { track } = data
  const context = `${process.env.STATSFM_ID ?? ''} さんの ${moment().subtract(1, 'days').format("YYYY/MM/DD")} の曲は「${track.artists.map((artist) => artist.name).join(",")}」の「${track.name}」でした #TodaySong https://open.spotify.com/track/${track.externalIds.spotify[0]}`
  console.log(context)
  
  postTweet(context)
}

;(async () => {
  await handleMain()
})()