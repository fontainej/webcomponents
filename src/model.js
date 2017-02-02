export let model = {};

model.init = (state) => {

    if (firebase.auth().currentUser) {

        model.data = firebase.auth().currentUser.providerData[0];
    }

    model.state = state;
};

model.presentFilters = (data) => {

    // TODO: Error filters
};

model.CRUD = (data) => {

    if (data.user) {

        return data.user.providerData[0];
    }

    if (data.code && data.message) {

        return { code: data.code, message: data.message };
    }
};

model.postProcessing = _ => {

    // TODO: Count login attempts, cookie updates, etc.
};

model.present = (data) => {

    data = data || {};

    model.presentFilters(data);

    model.data = model.CRUD(data);

    model.postProcessing();

    model.state.render(model.data);
};
