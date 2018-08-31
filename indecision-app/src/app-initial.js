// src app.js contains jsx, whereas, app.js in scripts is auto generated file that contains babel transformation

console.log('App.js is running!');

// JSX - JavaScript XML 

var app = {
    title: "Indecision App",
    subtitle: "This is some info"
}

var template =(
    <div>
        <h1>{app.title}</h1> 
        <p>{app.subtitle}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);

var user = {
    name: "Dick Grayson",
    age: "12",
    location: "Gotham",
};

// return undefined is implicitly returned
function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>;
    }
}

var templateTwo = (
    <div>
        <h1>{user.name ? user.name : "Anonymous"}</h1>
        <p>Age: {user.age}</p>
        {getLocation(user.location)}
    </div>
);
var appRoot = document.getElementById('app');

// what you want to render and in where
ReactDOM.render(templateTwo, appRoot);
 