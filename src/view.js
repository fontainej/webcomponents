import { theme } from './theme.js';

export let view = {};

view.init = (model, intents) => {

    return view.ready(model, intents);
};

view.loggedIn = (model, intents) => {

    return ({

        logout: theme.logout(model, intents)
    });
};

view.error = model => {

    return ({

        error: theme.error(model)
    });
};

view.ready = (model, intents) => {

    return ({

        signInWithEmailAndPassword: theme.signInWithEmailAndPassword(model, intents)

        , signInWithPopup: theme.signInWithPopup(intents)
    });
};

view.display = (representation) => {

    Object.keys(representation).forEach(function (el) {

        const component = document.getElementsByTagName(el)[0];

        component.innerHTML = representation[el];
    });
};
