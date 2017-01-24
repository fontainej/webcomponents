
//////////////////////////////////////////////////////////////////////
// Theme
//
// A theme is a series of View components, each component is a mini
// code generator that generates HTML fragments from properties of
// the model following the expression:
// C = f(M.part)

export let theme = {};

theme.loginForm = (model, intents) => {

    const rememberme = model.rememberme || false;

    return `
        <form id="login">
            <label>Username <input type="text" name="username" placeholder="username" autocomplete="username" autocapitalize="none" required></label>
            <label>Password <input type="text" name="password" placeholder="password" autocomplete="password" autocapitalize="none" required></label>
            <label>Remember me <input type="checkbox" name="rememberme" ${rememberme ? 'checked' : ''}></label>
            <button onclick="return ${intents['login']}({ username: document.getElementById('login').elements['username'].value, password: document.getElementById('login').elements['password'].value, rememberme: document.getElementById('login').elements['rememberme'].value})">Log in</button>
        </form>`;
};

theme.debug = model => `<p>${model.login ? JSON.stringify(model.login) : ''}</p>`;
