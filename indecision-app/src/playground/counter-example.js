// N: templateCount is just an object
let count = 0;
const addOne = () => {
    count++;
    renderCounterApp();
    // console.log("add 1", count);
};
const minusOne = () => {
    // console.log("minus 1");
    count--;
    renderCounterApp();
}
const reset = () => {
    // console.log("reset");
    count = 0;
    renderCounterApp();
}
// const templateCount = (
//     <div>
//         <h1>Count: {count}</h1>
//         <button onClick={addOne}>+1</button>
//         <button onClick={minusOne}>-1</button>
//         <button onClick={reset}>reset</button>
//     </div>
// );
// console.log(templateCount);
const appRoot = document.getElementById('app');

// what you want to render and in where
// ReactDOM.render(templateTwo, appRoot);
// ReactDOM.render(templateCount, appRoot);

const renderCounterApp = () => {
    const templateCount = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>reset</button>
        </div>
    );

    ReactDOM.render(templateCount, appRoot);
};

renderCounterApp();