export let model = {};

model.init = (state) => {

    model.state = state;
};

model.presentFilters = (data) => {

    // TODO: Error filters
};

model.CRUD = (data) => {

    if (data.username && data.password) {

        model.login = {
            username: data.username
            , password: data.password
            , rememberme: data.rememberme
        };
    }
};

model.postProcessing = _ => {

    // TODO: Count login attempts, cookie updates, etc.
};

model.present = (data) => {

    data = data || {};

    model.presentFilters(data);

    model.CRUD(data);

    model.postProcessing();

    model.state.render(model);
};
