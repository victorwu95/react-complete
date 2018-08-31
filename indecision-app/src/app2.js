// src app.js contains jsx, whereas, app.js in scripts is auto generated file that contains babel transformation

console.log('App.js is running!');

// JSX - JavaScript XML
// N: Browswer understands function calls
//    Babel takes JSX and compile down to regular old function calls as shown below
//    These function calls are what's actually running
// N: Second arguement is the attribute object
// var template = React.createElement(
    //     'p',
    //     null, // {id: "someid"}
    //     'This is JSX from app.js!'
    // );
// N: jsx syntax error: only one root tag, so wrap h1 and p in a div
// N: the brackets are not required just styling instructor prefers
const app={
    title: 'Indecision App',
    subtitle: 'This is some info',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    // check if there is a text
    if (option){
        app.options.push(option);
        e.target.elements.option.value = '';
        renderApp();
    }

}; 

// {app.options.length > 0 ? <p>"Here are your options</p> : <p>"No options"</p>}

// for this line, '' is a falsey value, so the expression becomes: {''}, which outputs "" in the React developer window, in the Elements window, nothing shows up
// {'' && <p>{app.subtitle}</p>}
// const template = (
//     <div>
//         <h1>{app.title}</h1>
//         {app.subtitle && <p>{app.subtitle}</p>}
//         {'' && <p>{app.subtitle}</p>}
//         <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
//         <p>{app.options.length}</p>
//         <ol>
//             <li>Item one</li>
//             <li>Item two</li>
//         </ol>
//         <form onSubmit={onFormSubmit}>
//             <input type="text" name="option"/>
//             <button>Add Option</button>
//         </form>
//     </div>
// );

// not form, does not need preventDefault
const onRemoveAll = (e) => {
    app.options = [];
    renderApp();
};

const appRoot = document.getElementById('app');
// ReactDOM.render(template, appRoot);

const numbers = [55, 101, 1000];

// {
//     [<p key="1">a</p>, <p key="2">b</p>, <p key="3">c</p>]
// }

// {
//     [<p key={1}>a</p>, <p key="2">b</p>, <p key="3">c</p>]
// }

// {
//     numbers.map((number) => {
//         return <p key={number}>Number: {number}</p>;
//     })
// }

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

const renderApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            {'' && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <button onClick={onMakeDecision} disabled={app.options.length === 0}>What should I do?</button>
            <button onClick={onRemoveAll}>Remove All</button>
            <ol>
                {/* map options */
                    app.options.map((option) => <li key={option}>{option}</li>)
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
}

renderApp();




// //N: {} - any JS expression can go inside brackets
// //   cannot put if statement is {}, it is for javascript expression, not if statement
// //   you can write jsx in {<p></p>}
// //   {undefined} - nothing will show up
// //   boolean, undefine, null will all not show up when placed in {}
// //   ternary operator is expression, not a statement (can be used in {})
// //N: cannot render objects, but object properties

// const user = {
//     name: 'Victor',
//     age: 22,
//     location: 'Gotham'
// };
// function getLocation(location) {
//     //N: a string with length greater than zero is truthy value (so length equal 0 is false)
//     if (location) {
//         return <p>Location: {location}</p>;
//     } else {
//         //N: undefined is implicitly return, so you technically don't even need the else statement
//         return undefined;
//     }
// }
// // var userName = 'Victor';
// // var userAge = 23;
// // var userLocation = 'Gotham'
// const templateTwo = (
//     <div>
//         <h1>{user.name ? user.name : 'Anonymous'}</h1>
//         {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
//         {getLocation(user.location)}
//     </div>
// );
