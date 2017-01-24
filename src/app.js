import { state } from './state.js';
import { model } from './model.js';
import { actions } from './actions.js';
import { view } from './view.js';

state.init(view);

model.init(state);

actions.init(model.present);

state.representation(model);

window.actions = actions;
