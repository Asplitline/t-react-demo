const init = {
  locale: 'zh-CN'
}

const localeReducer = (state = init, action) => {
  switch (action.type) {
    case 'CHANGE_LANGUAGE':
      return { locale: action.value }
    default:
      return state
  }
}

export default localeReducer
