# react-ui-breakpoints ![npm](https://badgen.net/npm/v/react-ui-breakpoints)
Easily add media breakpoints to your react components with the useScreen hook!

## Installation
```
npm i react-ui-breakpoints
```

## Introduction
React is a powerful, component-based, tool that streamlines the process of developing clean readable website code! And through the use of [React Hooks][1], developers can easily add and create additional functionalities which aren't already in React! React UI Breakpoints (RUB) is one of these functionalities! It allows a clean and simple system for managing media breakpoints in your React project, allowing you to deliver readable, well-organized code which dynamically changes as users resize various aspects of a website.

## Getting Started
To get started, install react-ui-breakpoints in your project.

```
npm i react-ui-breakpoints
```

react-ui-breakpoints contains two hooks you can use to build screen breakpoints; `useScreen` and `useView`. Attach them to the return of a component to make it dynamic!
You can also define if you want your breakpoints to operate in Desktop first or Mobile first mode using the QueryMode enum!

By setting 
```jsx
const ExampleComponent = () => {
    const MobileView = () => (
        <div className='text-left text-neutral-100 text-6xl'>
            <span>Some text</span>
        </div>
    );
    const TabletView = () => (
        <div className='text-left text-neutral-100 text-6xl'>
            <span>Some text</span>
        </div>
    );
    const DesktopView = () => (
        <div className='text-center text-neutral-100 text-lg'>
            <span>Some text</span>
        </div>
    );

    return useScreen(
        QueryMode.MOBILE_FIRST,
        useView('1000px', DesktopView());
        useView('700px', TabletView());
        useView("default", MobileView());
    );
}
```
The component above is what we like to call a *dynamic component*. Instead of directly returning JSX. We hold multiple *view components* and then dynamically return them as the breakpoints are met!

Let's also review a version that has state:
```jsx
const ExampleComponent = () => {
    const [ something, setSomething ]: [ string, Function ] = useState('');

    useEffect(() => setSomething('Hello world!'),[]);

    const MobileView = () => (
        <div className='text-left text-neutral-100 text-6xl'>
            <span>{something}</span>
        </div>
    );
    const TabletView = () => (
        <div className='text-left text-neutral-100 text-6xl'>
            <span>{something}</span>
        </div>
    );
    const DesktopView = () => (
        <div className='text-center text-neutral-100 text-lg'>
            <span>{something}</span>
        </div>
    );

    return useScreen(
        QueryMode.MOBILE_FIRST,
        useView('1000px', DesktopView());
        useView('700px', TabletView());
        useView("default", MobileView());
    );
}
```

react-ui-breakpoints will only ever update when the component itself updates. If you want the components to update automatically on screen-resizing. You can attach the `useHookOntoScreen` React hook!
This hook will cause your component to re-render anytime the viewport is resized.
If you already have viewport specific state in your component. Adding this hook is unnecessary.
```jsx
const ExampleComponent = () => {
    const autoResize = useHookOntoScreen();

    const MobileView = () => (
        <div className='text-left text-neutral-100 text-6xl'>
            <span>Some text</span>
        </div>
    );
    const TabletView = () => (
        <div className='text-left text-neutral-100 text-6xl'>
            <span>Some text</span>
        </div>
    );
    const DesktopView = () => (
        <div className='text-center text-neutral-100 text-lg'>
            <span>Some text</span>
        </div>
    );

    return useScreen(
        QueryMode.MOBILE_FIRST,
        useView('1000px', DesktopView());
        useView('700px', TabletView());
        useView("default", MobileView());
    );
}
```


As you can see, we don't save state inside of the *view components*, instead, we hold state in the parent component and then reference that state inside of our view components!

[1]: https://reactjs.org/docs/hooks-reference.html
