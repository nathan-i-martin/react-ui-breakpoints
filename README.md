[![npm](https://badgen.net/npm/v/react-ui-breakpoints)
# react-ui-breakpoints
Easily add media breakpoints to your react components with the useScreen hook!

## Installation
```
npm install react-ui-breakpoints
```

## Introduction
React is a powerful, component based, tool that streamlines the process for developing clean readable website code! And through the use of [React Hooks][1], developers can easily add and create additional functionalities which aren't already in React! React UI Breakpoints (RUB) is one of these functionalities! It allows a clean as simple system for managing media breakpoints in your React project, allowing you to deliver readable, well-organized code which dynamically changes as users resize various aspects of a website.

## Getting Started
To get started, install RUB in your project.

```
npm install react-ui-breakpoints
```

RUB contains two hooks you can use to build screen breakpoints; `useScreen` and `useScreenBreakpoint`. Attach them to the return of a component to make it dynamic!
```typescript
const ExampleComponent = () => {
    const DefaultView = () => (
        <div className='text-left text-neutral-100 text-6xl'>
            <span>Some text</span>
        </div>
    );
    const MobileView = () => (
        <div className='text-center text-neutral-100 text-lg'>
            <span>Some text</span>
        </div>
    );

    return useScreen(
        DefaultView(),
        useScreenBreakpoint('480px',MobileView());
    );
}
```
The component above is what we like to call a *dynamic component*. Instead of directly returning JSX (or returning a render() method which returns JSX.) We hold multiple *views* and then dynamically return then as the breakpoints are met!

Let's also review a version which has state:
```typescript
const ExampleComponent = () => {
    const [ something, setSomething ]: [ string, Function ] = useState('');

    useEffect(() => setSomething('Hello world!'),[]);

    const DefaultView = () => (
        <div className='text-left text-neutral-100 text-6xl'>
            <span>{something}</span>
        </div>
    );
    const MobileView = () => (
        <div className='text-center text-neutral-100 text-lg'>
            <span>{something}</span>
        </div>
    );

    return useScreen(
        DefaultView(),
        useScreenBreakpoint('480px',MobileView());
    );
}
```

As you can see, we don't save state inside of the views, instead we hold state in the parent component and then reference that state inside of our views!

## Special Notes
It's worth mentioning that useScreenBreakpoint uperates using the `(max-width: n)` media query. I.e. **it uses desktop first** this is something I plan to update so that it uses mobile first. I just haven't gotten aroudn to doing that yet.

[1]: https://reactjs.org/docs/hooks-reference.html
