export let actions = {};

actions.init = (present) => {

    actions.present = present;
};

actions.intents = {

    signInWithEmailAndPassword: 'actions.signInWithEmailAndPassword'
    , signInWithPopup: 'actions.signInWithPopup'
    , logout: 'actions.logout'
};

actions.signInWithPopup = provider => {

    firebase.auth()
        .signInWithPopup(new firebase.auth[provider]())
        .then(actions.present);
};

actions.signInWithEmailAndPassword = data => {

    firebase.auth()
        .signInWithEmailAndPassword(data.username, data.password)
        .catch(actions.present);
};

actions.logout = () => {

    firebase.auth()
        .signOut()
        .then(actions.present);
};
