import employeesReducer from './employees-reducer'
import dialogsReducer from './dialogs-reducer'

let store = {
  // (_)state напрямую не обращяться => getState()
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
      ],
      addPostsDefault: {
        newPostsText: 'hello'
      }
      
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
      ],
      newMessageBody: ''
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
    this._state.EmployeesPage =employeesReducer(this._state.EmployeesPage, action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    this._callSubscriber(this._state)
  }
}

export default store
window.store = store
