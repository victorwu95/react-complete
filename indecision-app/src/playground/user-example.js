//N: {} - any JS expression can go inside brackets
//   cannot put if statement is {}, it is for javascript expression, not if statement
//   you can write jsx in {<p></p>}
//   {undefined} - nothing will show up
//   boolean, undefine, null will all not show up when placed in {}
//   ternary operator is expression, not a statement (can be used in {})
//N: cannot render objects, but object properties

const user = {
    name: 'Victor',
    age: 22,
    location: 'Gotham'
};
function getLocation(location) {
    //N: a string with length greater than zero is truthy value (so length equal 0 is false)
    if (location) {
        return <p>Location: {location}</p>;
    } else {
        //N: undefined is implicitly return, so you technically don't even need the else statement
        return undefined;
    }
}
// var userName = 'Victor';
// var userAge = 23;
// var userLocation = 'Gotham'
const templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);