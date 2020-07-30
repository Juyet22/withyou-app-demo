

const requireComponents = require.context('./', false, /Floor[A-Z]+\.(vue|js)$/);
/*requireComponents:
webpackContext(req) {
    var id = webpackContextResolve(req);
    return __webpack_require__(id);
}
*/

const FloorAll = {}

// 遍历出每个组件的路径
requireComponents.keys().forEach(fileName => {
    // 组件实例
    const reqCom = requireComponents(fileName)
    // 截取路径作为组件名
    const reqComName = fileName.split("/").pop().replace(/\.\w+$/,"");
    console.log(reqCom);
    console.log(fileName);
    console.log(reqComName)
    FloorAll[reqComName] = reqCom.default || reqCom
})

export default FloorAll
