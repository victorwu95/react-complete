const app = {
    detail: 'I\'m hiding!',
    hidden: true
};

const appRoot = document.getElementById('app');

// toggleVisibility might be a better name
const onChangeVisibility = () => {
    app.hidden = !app.hidden;
    renderApp();
}

const hiddenText = () => {
    if (!app.hidden){
        return <p>{app.detail}</p>
    }
}

const buttonText = () => {
    return app.hidden ? 'Show details' : 'Hide details';
}

const renderApp = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={onChangeVisibility}>{buttonText()}</button>
            {hiddenText()}
        </div>
    );

    ReactDOM.render(template, appRoot);
}
// renderApp();

const toggleVisibility = () => {
    app.hidden = !app.hidden;
    renderAppWithinTemplate();
}

const renderAppWithinTemplate = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleVisibility}>{app.hidden ? 'Show details' : 'Hide details'}</button>
            {!app.hidden && (
                <p>I'm hiding</p>
            )}
        </div>
    );

    ReactDOM.render(template, appRoot);
}

renderAppWithinTemplate();
