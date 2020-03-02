const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let store = {
  _state: {
    EmployeesPage: {
      staff: [
        {
          id: 1,
          name: 'Антонов0',
          surname: 'Попов',
          patronymic: 'Хзкович',
          residence: 'Руководитель',
          position: ' Poliglot, Donetsk'
        },
        {
          id: 2,
          name: 'Антонов1',
          surname: 'Попов',
          patronymic: 'Хзкович',
          residence: 'Руководитель проекта',
          position: ' Poliglot, Donetsk'
        }
      ]
    },
    addPostDefault: {
      newPostsText: 'hello'
    },
    profilePage: {
      posts: [
        { id: 1, message: 'Hi, how are you?', likesCount: 12 },
        { id: 2, message: "It's my first post", likesCount: 11 },
        { id: 3, message: 'Blabla', likesCount: 11 },
        { id: 4, message: 'Dada', likesCount: 11 }
      ]
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: 'Dimych' },
        { id: 2, name: 'Andrew' },
        { id: 3, name: 'Sveta' },
        { id: 4, name: 'Sasha' },
        { id: 5, name: 'Viktor' },
        { id: 6, name: 'Valera' }
      ],
      messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How is your it-kamasutra?' },
        { id: 3, message: 'Yo' },
        { id: 4, message: 'Yo' },
        { id: 5, message: 'Yo' }
      ]
    },
    SettingsPage: {
      dialogs: [
        { id: 1, name: 'Dimyasdasdasdasch' },
        { id: 2, name: 'Andasdasdasdasrew' },
        { id: 3, name: 'Svasdasdasdaeta' },
        { id: 4, name: 'Saasdasdasdasdsha' },
        { id: 5, name: 'Viasdasdasdasdktor' },
        { id: 6, name: 'Valasdasdasdera' }
      ],
      messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How is your it-kamasutra?' },
        { id: 3, message: 'Yo' },
        { id: 4, message: 'Yo' },
        { id: 5, message: 'Yo' }
      ]
    }

    // async fetchCurrency() {
    //   const key = process.env.VUE_APP_FIXER
    //   const res = await fetch(`http://data.fixer.io/api/latest?access_key=${key}&symbols=USD,EUR,RUB`)
    //   return await res.json()
    // }
  },
  _callSubscriber() {
    console.log('State changed')
  },
  getState() {
    return this._state
  },

  subscribe(observer) {
    this._callSubscriber = observer // observer
  },

  dispatch(action) {
    //type: 'ADD-POST'
    if (action.type === ADD_POST) {
      let newPost = {
        id: 6,
        name: this._state.addPostDefault.newPostsText,
        surname: this._state.addPostDefault.newPostsText,
        patronymic: this._state.addPostDefault.newPostsText,
        residence: this._state.addPostDefault.newPostsText,
        position: this._state.addPostDefault.newPostsText
      }
      this._state.EmployeesPage.staff.push(newPost)
      this._state.addPostDefault.newPostsText = ''
      this._callSubscriber(this._state)
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.addPostDefault.newPostsText = action.newPost
      this._callSubscriber(this._state)
    }
  }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = text => ({
  type: UPDATE_NEW_POST_TEXT,
  newPost: text
})

export default store
window.store = store
