export const changeBackground = (active: boolean) => (dispatch: any) =>
  dispatch({
    type: 'CHANGE_BACKGROUND',
    active
  })
