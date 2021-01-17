const INITIAL_STATE = {
  changeBackground: false
}

export default function auth(state = INITIAL_STATE, action: any) {
  switch (action.type) {
    case 'CHANGE_BACKGROUND':
      return {
        ...state,
        changeBackground: action.active
      }
    default:
      return state
  }
}
