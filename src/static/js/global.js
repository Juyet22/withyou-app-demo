const global = {
  linkTo: function(link) {
    let reg = /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/
    if (link.match(reg)) {
      window.location.href = link
    } else {
      this.$router.push(link)
    }
  },
  preventDf(e) {
    console.log(e)
    e.preventDefault && e.preventDefault()
    e.returnValue = false
  },
}

export default {
  install: function(Vue, options) {
    Vue.prototype.$global = global
  },
}
