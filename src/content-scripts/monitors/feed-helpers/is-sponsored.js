/**
 * Determine the feed is sponsored or not.
 *
 * @return boolean
 */
export default (feed) => {
  const isSponsored = feed.querySelector('a[href^="https://l.facebook.com/l.php"]')

  if (! isSponsored) {
    return false
  }

  switch (isSponsored.innerText) {
    case 'Sponsored':
    case '贊助':
    case '広告':
      return true

    default:
      return false
  }
}
