const Swiper = function(swiper) {
  let dpr = window.devicePixelRatio
  let endf
  this.swiper = document.querySelector(swiper)
  this.swiperItems = document.querySelectorAll('.swiper-wrap-item')
  this.swiperPag = document.querySelector('.swiper-pagination-points')
  this.swiperItemWidth = this.swiperItems[0].getBoundingClientRect().width
  this.indexObj = {
    left: this.swiperItems.length - 1,
    current: 0,
    right: 1,
  }
  this.touchStartX = 0
  this.touchStartTime = 0
  this.timer = null
  let _index = this.indexObj

  this.touchStartHandle = (e) => {
    this.touchStartTime = 0
    clearInterval(this.timer)
    this.touchStartX = e.changedTouches[0].clientX
  }
  this.touchMoveHandle = (e) => {
    let dx = e.changedTouches[0].clientX - this.touchStartX
    if (this.timer) clearInterval(this.timer)
    if (Math.abs(dx) > this.swiperItemWidth / dpr) {
      return false
    }
    this.setTransition(0, 0, 0)
    this.setTransform(dx)
  }
  this.touchEndHandle = (e) => {
    let dx = e.changedTouches[0].clientX - this.touchStartX
    let timeGap = Date.now() - this.touchStartTime
    if (
      Math.abs(dx) > this.swiperItemWidth / 3 ||
      (timeGap < 300 && Math.abs(dx) > 30)
    ) {
      if (dx > 0) {
        this.swiperMovePrev()
      } else {
        this.swiperMoveNext()
      }
    } else {
      this.setTransition(1, 1, 1)
      this.setTransform()
    }
    if (endf) {
      clearTimeout(endf)
      endf = null
    } else {
      endf = setTimeout(() => {
        this.swiperStart()
      }, 2500)
    }
  }
  this.setPagPoints = function() {
    const swiperPagPotints = this.swiperPag.querySelectorAll('li')
    for (var i = 0; i < swiperPagPotints.length; i++) {
      swiperPagPotints[i].classList.remove('active')
    }
    swiperPagPotints[this.indexObj.current].classList.add('active')
  }
  this.swiperMoveNext = () => {
    this.indexObj.left = this.indexObj.current
    this.indexObj.current = this.indexObj.right
    this.indexObj.right++
    if (this.indexObj.right > this.swiperItems.length - 1) {
      this.indexObj.right = 0
    }
    this.setTransition(1, 1, 0)
    this.setTransform()
    this.setPagPoints()
  }
  this.swiperMovePrev = function() {
    this.indexObj.right = this.indexObj.current
    this.indexObj.current = this.indexObj.left
    this.indexObj.left--
    if (this.indexObj.left < 0) {
      this.indexObj.left = this.swiperItems.length - 1
    }
    this.setTransform()
    this.setTransition(0, 1, 1)
    this.setPagPoints()
  }
  this.swiperStart = function() {
    endf = false
    this.timer = setInterval(this.swiperMoveNext, 3000)
  }

  this.setTransform = function(dx) {
    dx = dx / 10 / dpr || 0
    // console.log(this.indexObj);
    console.log(dpr, dx)
    for (let key in this.indexObj) {
      let slideParam = key == 'current' ? 0 : key == 'right' ? 1 : -1
      this.swiperItems[this.indexObj[key]].style.transform = `translateX(${10 *
        slideParam +
        dx}rem)`
    }
  }

  this.setTransition = function(left, current, right) {
    Array.prototype.map.call(
      this.swiperItems,
      (item) => (item.style.transition = 'none')
    )
    if (left) {
      this.swiperItems[this.indexObj.left].style.transition = 'transform 1s'
    }
    if (current) {
      this.swiperItems[this.indexObj.current].style.transition = 'transform 1s'
    }
    if (right) {
      this.swiperItems[this.indexObj.right].style.transition = 'transform 1s'
    }
  }
}

// class Swiper {
//     constructor(swiper) {

//     }
// }

export default Swiper
