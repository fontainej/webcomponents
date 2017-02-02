import { actions } from './actions.js';

export let state =  {};

state.init = view => {

    state.view = view;
};

state.representation = model => {

    let representation = 'oops... something went wrong, the system is in an invalid state';

    if (state.error(model)) {

        representation = state.view.error(model);
    } else if (state.ready()) {

        representation = state.view.ready(model, actions.intents);
    } else {

        representation = state.view.loggedIn(model, actions.intents);
    }

    state.view.display(representation);
};

state.ready = () => !firebase.auth().currentUser;

state.error = model => model.code && model.message;

state.nextAction = () => {};

state.render = model => {

    state.representation(model);

    state.nextAction();
};
