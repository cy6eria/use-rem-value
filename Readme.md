# use-rem-value

This hook can help you to solve problems, when you have to use values in pixel (e.g. if you use react-virtualized), but all your sizes is based on rem. You can check an example [here](https://codesandbox.io/s/eager-gagarin-u5byz).

## Installation

```
npm install use-rem-value
```

## How to use

```
const MyComponent = (props) => {
    const remValue = useRemValue();

    return (
        <div>Current rem value is {remValue}.</div>
    );
}
```


