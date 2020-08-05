const global = {
    linkTo: function (link) {
        let reg=/(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/;
      if (link.match(reg)) {
        window.location.href = link;
      } else {
        this.$router.push(link);
      }
    }
}

export default {
  install: function (Vue,options) {
        Vue.prototype.$global = global
      }
  }