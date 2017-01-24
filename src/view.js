import { theme } from './theme.js';

export var view = {};

view.init = (model, intents) => {

    return view.ready(model, intents);
};

view.ready = (model, intents) => {

    return ({

        login: theme.loginForm(model, intents)

        , debug: theme.debug(model)
    });
};

view.display = (representation) => {

    Object.keys(representation).forEach(function (el) {

        const component = document.getElementsByTagName(el)[0];

        component.innerHTML = representation[el];
    });
};
