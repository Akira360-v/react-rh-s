let state = {
  EmployeesPage: {
    staff: {
      fullInfo: [
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
        },
        {
          id: 3,
          name: 'Антонов2',
          surname: 'Попов',
          patronymic: 'Хзкович',
          residence: 'Руководитель проекта',
          position: ' Poliglot, Donetsk'
        },
        {
          id: 4,
          name: 'Антонов3',
          surname: 'Попов',
          patronymic: 'Хзкович',
          residence: 'Руководитель проекта',
          position: ' Poliglot, Donetsk'
        },
        {
          id: 5,
          name: 'Антонов4',
          surname: 'Попов',
          patronymic: 'Хзкович',
          residence: 'Руководитель проекта',
          position: ' Poliglot, Donetsk'
        }
      ],
      residence: [
        { id: 1, residence: 'Руководитель' },
        { id: 2, residence: 'Руководитель проекта' },
        { id: 3, residence: 'Руководитель проекта' },
        { id: 4, residence: 'Руководитель проекта' },
        { id: 5, residence: 'Руководитель проекта' }
      ],
      position: [
        { id: 1, position: ' Poliglot, Donetsk' },
        { id: 2, message: 'How' },
        { id: 3, message: 'Yo' },
        { id: 4, message: 'Yo' },
        { id: 5, message: 'Yo' }
      ]
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
}
// exemple
// export let addPost = (postMessage) => {
//   let newPost = {
//       id: 5,
//       message: postMessage,
//       likesCount: 0
//   };
//   state.profilePage.posts.push(newPost);
//   // rerenderEntireTree(state);
// }

export default state
