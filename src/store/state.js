// let defaultUserPhoto = 'static/img/Fruit-1.png'
// try {
//   if (localStorage.userPhoto) {
//     defaultUserPhoto = localStorage.userPhoto
//   }
// } catch (e) {}

export default {
  // menuIds :'', //所选菜单的id(全部)
  // typeIds:[],
  // datas:[],  //角色所属系统下面勾选的菜单
  // menuName:'',
  // userPhoto: defaultUserPhoto,
  // sides:{},    //breadcrumb,tags,sidebar的联动数据
  // checkValue:false,
  // mId:'',
  // tags:[],
  // nodata:[], //角色所属系统下面未勾选的菜单
  // view:'',
  tabBarShow: false,
  headerShow: false,
  headerType: '',
  goodsData: [
    {
      name: 'iphoneX 16+256GB',
      goodsType: 'smartphone',
      goodId: '18723',
      saleWord: '侧边指纹，双曲面玻璃机身',
      saleWay: '无需预存',
      imageList: [
        require('static/image/more-icon.jpg'),
        require('static/image/more-icon.jpg'),
      ],
      link: 'https://segmentfault.com/q/1010000013945750',
      brand: 'iphone',
      price: '2099',
      color: '绿色',
      memory: '16G',
      storage: '256G',
      delivery: {
        area: '仅限上海',
      },
    },
    {
      name: 'iphone',
      goodsType: 'smartphone',
      goodId: '18724',
      image: require('static/image/more-icon.jpg'),
      link: 'https://segmentfault.com/q/1010000013945750',
      brand: 'iphone',
    },
    {
      name: 'iphone',
      goodsType: 'smartphone',
      goodId: '18725',
      image: require('static/image/more-icon.jpg'),
      link: '/home',
      brand: 'iphone',
    },

    {
      name: '',
      goodsType: 'smartwatch',
      image: '',
    },
    {
      name: '',
      goodsType: 'smartwatch',
      image: '',
    },
  ],
}
