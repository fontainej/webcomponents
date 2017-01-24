export let actions = {};

actions.init = (present) => {

    actions.present = present;
};

actions.intents = {

    login: 'actions.login'
};

actions.login = (data, present) => {

    const _present = present || actions.present;

    _present({ username: data.username, password: data.password, rememberme: data.rememberme });

    return false;
};
