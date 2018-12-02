import isSponsored from './feed-helpers/is-sponsored'

/**
 * Listen for user feeds.
 *
 * @return void
 */
module.exports = () => {
  window.onscroll = () => {
    // 確保只在主畫面運行
    if ('/' !== window.location.pathname) {
      return
    }

    document.querySelectorAll('div[id^="hyperfeed_story_id"]').forEach(feed => {
      if (isSponsored(feed)) {
        console.log(feed)
        feed.remove()
      }
    })
  }
}
