const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

export const employeesReducer = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 6,
        name: state.addPostsDefault.newPostsText,
        surname: state.addPostsDefault.newPostsText,
        patronymic: state.addPostsDefault.newPostsText,
        residence: state.addPostsDefault.newPostsText,
        position: state.addPostsDefault.newPostsText
      }
      state.staff.push(newPost)
      state.addPostsDefault.newPostsText = ''
      return state
    case UPDATE_NEW_POST_TEXT:
      state.addPostsDefault.newPostsText = action.newPost
      return state
    default:
      return state
  }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = text => ({
  type: UPDATE_NEW_POST_TEXT,
  newPost: text
})

export default employeesReducer
