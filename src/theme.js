
//////////////////////////////////////////////////////////////////////
// Theme
//
// A theme is a series of View components, each component is a mini
// code generator that generates HTML fragments from properties of
// the model following the expression:
// C = f(M.part)

export let theme = {};

theme.signInWithEmailAndPassword = (model, intents) => {

    return `
        <form id="login">
            <label>Username <input type="text" name="username" placeholder="username" autocomplete="username" autocapitalize="none" required></label>
            <label>Password <input type="text" name="password" placeholder="password" autocomplete="password" autocapitalize="none" required></label>
            <button onclick="return ${intents['signInWithEmailAndPassword']}({ username: document.getElementById('login').elements['username'].value, password: document.getElementById('login').elements['password'].value })">Log in</button>
        </form>`;
};

theme.signInWithPopup = intents => {

    return `
        <button onclick="return ${intents['signInWithPopup']}('GoogleAuthProvider')">Sign in with Google</button>
        <button onclick="return ${intents['signInWithPopup']}('GithubAuthProvider')">Sign in with Github</button>
        <button onclick="return ${intents['signInWithPopup']}('TwitterAuthProvider')">Sign in with Twitter</button>`;
};

theme.logout = (model, intents) => {

    return `
        <section>
            <img src="${model.photoURL}" width="50px" height="50px"> Hi, ${model.displayName}!
            <button onclick="return ${intents['logout']}()">Log out</button>
        </section>`;
};

theme.error = model => {

    return `
        <pre>Code: ${model.code}</pre>
        <pre>Message: ${model.message}</pre>`;
};
