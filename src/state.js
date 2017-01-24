import { actions } from './actions.js';

export var state =  {};

state.init = view => {

    state.view = view;
};

state.representation = model => {

    var representation = 'oops... something went wrong, the system is in an invalid state';

    // This is where the State decides which component of the View should be displayed
    // here the we designed the application with a single (control) State (~page)
    // In a real-world application there would be many control states and which
    // would trigger the display of different components
    if (state.ready(model)) {

        representation = state.view.ready(model, actions.intents);
    }

    state.view.display(representation);
};

state.ready = model => true;

state.nextAction = model => {};

state.render = model => {

    state.representation(model);

    state.nextAction(model);
};
