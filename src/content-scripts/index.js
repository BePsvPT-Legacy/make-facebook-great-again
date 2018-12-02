document.onreadystatechange = () => {
  if ('interactive' === document.readyState) {
    require('./monitors/user-feed')()
  }
}
