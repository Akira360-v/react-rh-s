import firebase from 'firebase/app'

export default {
  actions: {
    async login({ email, password }) {
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password)
      } catch (e) {}
    }
  }
}
