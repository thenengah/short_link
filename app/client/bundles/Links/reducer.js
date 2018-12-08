export default (state={}, action) => {
  let links
  switch(action.type) {
    case 'ADD_LINK_SUCCESS':
      links = state.links.reduce((_links, link) => {
        link.updated_at = new Date(link.updated_at)
        _links[link.id] = link
        return _links
      }, {})
      action.link.updated_at = new Date(action.link.updated_at)
      links[action.link.id] = action.link
      links = Object.keys(links)
        .map(k => links[k])
        .sort((a, b) => b.updated_at - a.updated_at)
      return { ...state, links, errors: [] }
    case 'ADD_LINK_ERROR':
      return { ...state, errors: action.errors }
    case 'REMOVE_LINK_SUCCESS':
      links = state.links.reduce((_links, link) => {
        if (link.id !== action.link.id) _links.push(link)
        return _links
      }, [])
      return { ...state, links }
    case 'REMOVE_LINK_ERROR':
      return state
    default:
      return { ...state, errors: [] }
  }
}
