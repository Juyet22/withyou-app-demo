const getters = {
  states: (state) => state.user.states,
  GetGoodInfo: (state) => (id) => {
    return state.goodsData.filter((item) => item.goodId === id)[0]
  },
  GmenuId: (state) => {
    return state.menuIds
  },
  Gtype2Id: (state) => {
    return state.typeIds
  },
  Gtdata: (state) => {
    return state.datas
  },
  Gsides: (state) => {
    return state.sides
  },
  Gtagslist: (state) => {
    return state.tags
  },
  Gnodata: (state) => {
    return state.nodata
  },
  Gview: (state) => {
    return state.view
  },
}
export default getters
