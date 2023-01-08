import React, { useState } from "react";

import "./App.css";
import Image1 from "./Images/image.png";
import Image2 from "./Images/2.png";
import Image3 from "./Images/3.png";
import Image4 from "./Images/4.png";
import Image5 from "./Images/5.png";
import Image6 from "./Images/6.png";
import Image7 from "./Images/7.png";
import Image8 from "./Images/8.png";
import Image9 from "./Images/9.png";
import Image10 from "./Images/10.png";
import Image11 from "./Images/11.png";
import Image12 from "./Images/12.png";
import Image13 from "./Images/13.png";
import Image14 from "./Images/14.png";
import Image16 from "./Images/18.png";
import Image19 from "./Images/19.png";
import Image20 from "./Images/20.png";
import Image21 from "./Images/21.png";
import Image22 from "./Images/22.png";
import Image23 from "./Images/23.png";
import Image24 from "./Images/24.png";
import Image25 from "./Images/25.png";
import Image26 from "./Images/26.png";
import Image27 from "./Images/27.png";
import Image28 from "./Images/28.png";
import Image29 from "./Images/29.png";
import Image30 from "./Images/30.png";
import Image31 from "./Images/31.png";
import Image32 from "./Images/32.png";
import Image33 from "./Images/33.png";
import Image34 from "./Images/34.png";
import Image35 from "./Images/35.png";
import Image36 from "./Images/36.png";
import Image37 from "./Images/37.png";
import Image38 from "./Images/38.png";
import Image39 from "./Images/39.png";
import Image40 from "./Images/40.png";
import Image41 from "./Images/41.png";
import Image42 from "./Images/42.png";
import Image43 from "./Images/43.png";
import Image44 from "./Images/44.png";
import Image45 from "./Images/45.png";
import Image46 from "./Images/46.png";
import Image47 from "./Images/47.png";
import Image48 from "./Images/48.png";
import Image49 from "./Images/49.png";
import Image50 from "./Images/50.png";
import Image51 from "./Images/51.png";
import Image52 from "./Images/52.png";
import Image53 from "./Images/53.png";
import Image54 from "./Images/54.png";
import Image55 from "./Images/55.png";
import Image56 from "./Images/56.png";
import Image57 from "./Images/57.png";
import Image58 from "./Images/58.png";
import Image59 from "./Images/59.png";
import Image60 from "./Images/60.png";
import Image61 from "./Images/61.png";
import Image62 from "./Images/62.png";
import Image63 from "./Images/63.png";
import Image64 from "./Images/64.png";
import Image65 from "./Images/65.png";
import Image66 from "./Images/66.png";
import Image67 from "./Images/67.png";
import Image68 from "./Images/68.png";
import Image69 from "./Images/69.png";
import Image70 from "./Images/70.png";
import Image71 from "./Images/71.png";
import Image72 from "./Images/72.png";
import Image73 from "./Images/73.png";
import Image74 from "./Images/74.png";

const App = () => {
  const [open, setOpen] = useState({});

  return (
    <div className="Main">
      <div className="content">
        <h1 className="React_Questions">React Interview Questions & Answers</h1>
      </div>
      <div className="Box">
        <h1>What is React?</h1>
        <p>
          React is a JavaScript library for building user interfaces. It was
          developed by <b>Facebook</b>, and is often used for building
          single-page applications and mobile applications.
        </p>
      </div>
      <div className="Box">
        <h1>What are the major features of React?</h1>
        <p>
          React uses a <b>virtual DOM</b> to optimize updates to the actual DOM.
          This helps to improve the performance of applications built with
          React.
        </p>
      </div>
      <div className="Box">
        <h1>What is JSX?</h1>
        <p>
          <b>JSX</b> is a syntax extension to JavaScript that allows you to
          write HTML-like code in your JavaScript files.
        </p>
      </div>
      <div className="Box">
        <h1>What is the difference between Element and Component?</h1>
        <p>
          element is a plain object that represents a DOM element. It has a type
          property that specifies the type of DOM <b>element</b> it represents
          <b>(e.g., 'div', 'button', etc.).</b>
        </p>
        <p>
          <b>component</b> is a function or <b>class</b> that returns a React
          element.
          <b>Components</b> are reusable pieces of code that represent a part of
          the UI. They can accept input in the form of props and return a tree
          of elements that describe the UI.
        </p>
      </div>
      <div className="Box">
        <h1>How to create components in React?</h1>
        <p>
          To create a component in React, you can use a JavaScript{" "}
          <b>function</b> or a JavaScript <b>class</b>. Here's an example of a
          functional component:
        </p>
        <p>Here's an example of a functional component:</p>
        <img
          onClick={() => {
            setOpen(!open);
          }}
          className={open ? "Image" : "Image_Open"}
          src={Image6}
          alt=""
        />
        <p>Here's an example of a class-based component:</p>
        <img
          onClick={() => {
            setOpen(!open);
          }}
          className={open ? "Image" : "Image_Open"}
          src={Image7}
          alt=""
        />
      </div>
      <div className="Box">
        <h1>When to use a Class Component over a Function Component?</h1>
        <p>
          Use <b>function components</b> when, You don't need to use{" "}
          <b>state</b> or <b>lifecycle </b>
          methods in your component.You want to create a simple, presentational
          component that only takes props and returns a JSX element.
        </p>
        <p>
          Use
          <b> class components</b> when: You need to use state or lifecycle
          methods in your component.You want to create a more complex component
          that maintains its own internal state or manages data from external
          sources.
        </p>
      </div>
      <div className="Box">
        <h1>What are Pure Components?</h1>
        <p>
          a <b>pure component</b> is a component that only updates when the
          props it receives change. which will re-render whenever the
          component's state changes, or whenever the parent component
          re-renders.
        </p>
      </div>
      <div className="Box">
        <h1>What is state in React?</h1>
        <p>
          the <b>state</b> is an object that represents the component's internal
          data. It is used to store and manage the component's data, and can be
          updated and re-rendered by the component as needed.
        </p>
      </div>
      <div className="Box">
        <h1>What are props in React?</h1>
        <p>
          <b>Props</b> are typically used to pass data that is needed by the
          child component to render itself. They can be of any type, including
          strings, numbers, objects, arrays, and functions.
        </p>
      </div>
      <div className="Box">
        <h1>What is the difference between state and props?</h1>
        <p>
          The main difference between <b>(state)</b> and <b>(props)</b> is that{" "}
          <b>state</b> is managed within the component while props are passed
          from the parent component. state is used to store and manage the
          component's data, and can be updated and re-rendered by the component
          as needed.
        </p>
        <p>
          {" "}
          <b>props</b> are used to pass data from the parent component to the
          child component, and can be accessed by the child component using the
          props object.
        </p>
      </div>
      <div className="Box">
        <h1>Why should we not update the state directly?</h1>
        <p>
          it is generally not recommended to update the state directly, because
          doing so can lead to unexpected behavior and make it difficult to
          understand how the state is being modified.Updating the state
          directly, on the other hand, can lead to problems because the
          component may not re-render when the state changes. This can cause the
          component to become out of sync with its props and the rest of the
          application, and can make it difficult to debug.
        </p>
      </div>
      <div className="Box">
        <h1>
          What is the purpose of callback function as an argument of setState()?
        </h1>
        <p>
          The purpose of the callback function is to allow you to perform some
          action after the state has been updated.
        </p>
        <p>
          This can be useful if you need to trigger some other side effect or
          update some other piece of data based on the updated state.
        </p>
      </div>
      <div className="Box">
        <h1>What is the difference between HTML and React event handling?</h1>
        <p>
          In <b>HTML</b>, event handling is done using attributes such as{" "}
          <b>onclick</b>,<b>onchange</b>, and <b>onsubmit</b>. These attributes
          allow you to specify a JavaScript function to be executed when the
          corresponding event occurs on an element. In <b>React</b>, you cannot
          use the on prefix and the event name to specify an event handler.
          Instead, you use the <b>camelCase </b>
          version of the event name, such as <b>onClick</b> or{" "}
          <b>onMouseEnter</b>. In React, you pass event handler functions as
          props to the components, rather than using attributes to specify the
          functions directly.In React, you can use the bind method or an arrow
          function to pass additional arguments to the event handler. In HTML,
          you can only pass a single argument to the event handler, which is the
          event object.
        </p>
      </div>
      <div className="Box">
        <h1>How to bind methods or event handlers in JSX callbacks?</h1>
        <p>
          You can use the bind method to bind the <b>handleClick</b> function to
          the MyComponent instance and pass it as the event handler for the
          button:
        </p>
        <img
          onClick={() => {
            setOpen(!open);
          }}
          className={open ? "Image" : "Image_Open"}
          src={Image8}
          alt=""
        />
        <p>
          Alternatively, you can use an <b>arrow function</b> in the callback to
          ensure that the correct this value is used:
        </p>
        <img
          onClick={() => {
            setOpen(!open);
          }}
          className={open ? "Image" : "Image_Open"}
          src={Image9}
          alt=""
        />
      </div>
      <div className="Box">
        <h1>How to pass a parameter to an event handler or callback?</h1>
        <p>
          There are several ways to pass a parameter to an event handler or
          callback in JavaScript. Here are three common approaches:
        </p>
        <p>Using an anonymous function:</p>
        <img
          onClick={() => {
            setOpen(!open);
          }}
          className={open ? "Image" : "Image_Open"}
          src={Image10}
          alt=""
        />
        <p>Using an arrow function:</p>
        <img
          onClick={() => {
            setOpen(!open);
          }}
          className={open ? "Image" : "Image_Open"}
          src={Image11}
          alt=""
        />
        <p>Using the bind method:</p>
        <img
          onClick={() => {
            setOpen(!open);
          }}
          className={open ? "Image" : "Image_Open"}
          src={Image12}
          alt=""
        />
      </div>
      <div className="Box">
        <h1>What are synthetic events in React?</h1>
        <p>
          <b>synthetic events</b> are objects that represent the user's
          interaction with the UI, such as a <b>mouse click</b> or{" "}
          <b>key press</b>. They are created by React to provide a consistent
          interface for handling events across different browsers.
        </p>
      </div>
      <div className="Box">
        <h1>What are inline conditional expressions?</h1>
        <p>
          Inline conditional expressions are a concise way to include a
          conditional <b>(ternary)</b> operator in a JSX expression. They allow
          you to conditionally render a piece of JSX based on a boolean
          condition.
        </p>
      </div>
      <div className="Box">
        <h1>
          What is "key" prop and what is the benefit of using it in arrays of
          elements?
        </h1>
        <p>
          <b>key prop</b> is a special attribute that you can use when rendering
          lists of elements. The key prop is used to identify each element in
          the list, and it should be set to a unique value for each element.
        </p>
        <p>
          The <b>benefit</b> of using the <b>key prop</b> is that it allows
          React to optimize the rendering of lists by avoiding the creation and
          destruction of elements unnecessarily. When React sees that the
          <b>key prop</b>
          has changed for an element, it knows that the element has changed and
          needs to be re-rendered.
        </p>
      </div>
      <div className="Box">
        <h1>What is the use of refs?</h1>
        <p>
          <b>ref</b> is a way to access the properties of a DOM element. You can
          create a ref by using the React. <b>createRef</b> method and attaching
          it to an element using the ref <b>attribute.Refs</b>.
        </p>
        <p>
          can be a useful tool in certain situations, but they should be used
          sparingly, as they can make your code <b>harder to understand</b> and
          maintain. In many cases, <b>it is better to use state or props</b> to
          manage the behavior of your components.
        </p>
      </div>
      <div className="Box">
        <h1>How to create refs? </h1>
        <p>
          you can create a ref using the <b>React.createRef</b> method and
          attach it to an element using the ref attribute.
        </p>
      </div>
      <div className="Box">
        <h1>What are forward refs?</h1>
        <p>
          a <b>forward ref</b> is a way to pass a ref from a parent component to
          a child component. This can be useful if you need to access the
          properties of a child component from the parent component, or if you
          need to set focus on an element in the child component from the parent
          component. To create a <b>forward ref</b>, you can use the{" "}
          <b>React.forwardRef </b>
          function and pass it a component. The React.forwardRef function
          returns a new component that can accept a ref as a prop.
        </p>
      </div>
      <div className="Box">
        <h1>
          Which is preferred option with in callback refs and findDOMNode()?
        </h1>
        <p>
          there are two main ways to access the properties of a DOM element:
        </p>
        <p>
          <b>callback refs</b> and <b>ReactDOM.findDOMNode</b>. Both approaches
          have their own benefits and trade-offs, and the best option for your
          project will depend on your specific needs. <b>Callback</b> refs are a
          more modern approach to accessing the properties of a DOM element in
          React. They are created by passing a function as the ref prop of an
          element, and the function is called with the DOM element as an
          argument when the element is mounted or unmounted.
        </p>
      </div>
      <div className="Box">
        <h1>Why are String Refs legacy?</h1>
        <p>
          One reason <b>string refs</b> are considered legacy is because they
          can be less efficient than the newer alternatives. In order to access
          a DOM element using a <b>string ref</b>, React has to use the
          getElementById method, which can be slower than other methods of
          accessing DOM elements, such as using the ref attribute with a
          <b> callback</b> function.
        </p>
      </div>
      <div className="Box">
        <h1>What is Virtual DOM?</h1>
        <p>
          <b>virtual DOM</b> is a programming concept that is used to optimize
          the rendering of components. When a component's state changes, React
          uses the <b>virtual DOM</b> to efficiently update the UI to reflect
          the new state.
        </p>
      </div>
      <div className="Box">
        <h1>How Virtual DOM works?</h1>
        <p>
          <b>virtual DOM </b>
          is an optimization technique used by React to improve the performance
          of web applications. When a component's state changes, React creates a
          new virtual tree representation of the updated UI. It then compares
          this virtual tree to the previous virtual tree, and calculates the
          minimum number of DOM manipulation operations required to update the
          real DOM to match the new virtual tree This process is known as
          <b> reconciliation</b>.
        </p>
      </div>
      <div className="Box">
        <h1>What is the difference between Shadow DOM and Virtual DOM?</h1>
        <p>
          <b>shadow DOM</b> is a web standard that is used to isolate DOM trees
          within a web page, while the <b>virtual DOM</b> is a programming
          concept that is used to optimize the rendering of components in
          libraries such as React.
        </p>
      </div>
      <div className="Box">
        <h1>What is React Fiber?</h1>
        <p>
          One of the main goals of <b>React Fiber</b> is to improve the
          performance of React applications, particularly in cases where the UI
          is being updated frequently or asynchronously. It does this by
          allowing the reconciler to <b>"interrupt"</b> and <b>"resume"</b>{" "}
          rendering as needed, rather than rendering the entire component tree
          in one go. This makes it possible to split rendering work into smaller
          chunks, which can be more efficiently scheduled by the browser.
        </p>
      </div>
      <div className="Box">
        <h1>What is the main goal of React Fiber?</h1>
        <p>
          main goal of <b>React Fiber</b> was to improve the performance and
          flexibility of the React framework, and to make it easier to build
          complex, interactive applications using React.
        </p>
      </div>
      <div className="Box">
        <h1>What are controlled components?</h1>
        <p>
          <b>controlled component </b>
          is a <b>form element</b> whose value is controlled by React. This
          means that the value of the <b>form element</b> is set by the
          component's state, rather than being determined by the user's input.
          For example, consider a <b>form</b> with a text input field that
          allows a user to enter their name. In a traditional HTML form, the
          value of the text input field would be determined by the user's input.
        </p>
        <img
          onClick={() => {
            setOpen(!open);
          }}
          className={open ? "Image" : "Image_Open"}
          src={Image14}
          alt=""
        />
        <p>
          In this example, the <b>input</b> element is now a controlled
          component because the value of the <b>input</b> is set by the parent
          component's state, and the parent component is able to update the
          value of the <b>input</b> by handling the <b>onChange</b> event.
        </p>
      </div>
      <div className="Box">
        <h1>What are uncontrolled components?</h1>
        <p>
          <b>uncontrolled </b>
          component is a{" "}
          <b>form element whose value is not controlled by React. </b>
          This means that the value of the form element is determined by the
          user's input, rather than being set by the component's state. For
          example, consider a form with a text input field that allows a user to
          enter their name. In an uncontrolled component, the value of the text
          input field would be determined by the user's input, rather than being
          controlled by the component's state.
        </p>
        <img
          onClick={() => {
            setOpen(!open);
          }}
          className={open ? "Image" : "Image_Open"}
          src={Image13}
          alt=""
        />
        <p>
          In this example, the <b>input</b> element is an uncontrolled component
          because it manages its own state (the value of the text input by the
          user). The parent component, <b>ExampleForm</b>, has no way to
          directly control or update the value of the <b>input</b>.
        </p>
      </div>
      <div className="Box">
        <h1>What is the difference between createElement and cloneElement?</h1>
        <p>
          <b>createElement</b> used to create a new element in the React Virtual
          DOM. such as a div, p, or button. This can be a string or a function
          that returns a React element.
        </p>
        <p>
          <b>cloneElement </b>
          used to create a new element that is based on an existing element.
        </p>
      </div>
      <div className="Box">
        <h1>What is Lifting State Up in React?</h1>
        <p>
          <b>"lifting state up"</b> refers to the process of moving statefrom a
          lower-level component to a higher-level component that is closer to
          the root of the component tree. This is often necessary when multiple
          components need access to the same state, or when a lower-level
          component needs to pass data to a higher-level component as props.
        </p>
        <p>
          Imagine that you have a parent component called <b>App</b> that
          contains two child components, <b>List</b> and <b>Form</b>. The{" "}
          <b>List</b> component displays a list of items, and the Form component
          allows the user to add new items to the list. Both the List and Form
          components need to access the same list of items, so you decide to
          lift the state up to the <b>App</b> component.
        </p>
      </div>
      <div className="Box">
        <h1>What are the different phases of component lifecycle?</h1>
        <p>
          there 3 of them <b>Mounting</b> - <b>Updating</b> - <b>Unmounting</b>
          <p>
            #1 <b>Mounting</b>: After initialization, the component enters the
            mounting phase, and it becomes visible on the screen. This is when
            the component's <b>render()</b> method is called for the first time.
          </p>
          <p>
            #2 <b>Updating</b>: If the component's props or state change, the
            component will re-render itself. This is known as the{" "}
            <b>updating phase</b>.
          </p>
          <p>
            #3 <b>Unmounting</b>: When the component is no longer needed, it is
            removed from the DOM. This is known as the <b>unmounting phase</b>.
          </p>
        </p>
      </div>
      <div className="Box">
        <h1>What are the lifecycle methods of React?</h1>
        <p>
          there are several lifecycle methods that allow you to perform tasks at
          specific points in a component's lifecycle. <b>componentDidMount</b> -{" "}
          <b>shouldComponentUpdate</b> <b>componentDidUpdate</b> -
          <b> componentWillUnmount</b>
          <p>
            <b>componentDidMount()</b>: This method is called after a component
            has been mounted <b>(inserted into the DOM)</b>. This is a good
            place to perform tasks such as fetching data or setting up
            subscriptions.
          </p>
          <p>
            <b>shouldComponentUpdate()</b>: This method is called before a
            component's props or state are updated. It allows you to decide
            whether or not the component should be re-rendered.
          </p>
          <p>
            <b>componentDidUpdate()</b>: This method is called after a
            component's props or state have been updated.
          </p>
          <p>
            <b>componentWillUnmount()</b>: This method is called just before a
            component is unmounted <b>(removed from the DOM)</b>. It is a good
            place to perform clean up tasks, such as cancelling subscriptions or
            clearing timers.
          </p>
        </p>
      </div>
      <div className="Box">
        <h1>What are Higher-Order Components?</h1>
        <p>
          a higher-order component <b>(HOC)</b> is a function that takes a
          component and returns a new component. <b>HOCs</b> are a way to reuse
          code, logic, and behavior among components. Here is an example of how
          you can use withProps to create a props proxy for an HOC:
        </p>
        <p>import "withProps" from 'recompose';</p>
        <p>const withExtraProp = withProps( extraProp: 'hello' );</p>
        <p> MyComponentWithExtraProp = withExtraProp(MyComponent);</p>
      </div>
      <div className="Box">
        <h1>How to create props proxy for HOC component?</h1>
        <p>
          you can use the <b>withProps</b> HOC from the recompose library.
        </p>
      </div>
      <div className="Box">
        <h1>What is context?</h1>
        <p>
          <b>context</b> refers to a way of passing data through the component
          tree without having to pass props down manually at every level.
        </p>
      </div>
      <div className="Box">
        <h1>What is children prop?</h1>
        <p>
          the <b>children prop</b> is a special prop that represents the content
          between the <b>opening</b> and <b>closing</b> tags of a component. It
          is used to pass the content of a component as a prop, so that it can
          be rendered within the component's JSX.
        </p>
      </div>
      <div className="Box">
        <h1>How to write comments in React?</h1>
        <p>
          you can write comments in your JSX code using the <b>/*</b> comments
          go here
          <b>*/</b> Any content inside the <b>/* */</b> brackets will be treated
          as a comment and will not be rendered in the final output.
        </p>
      </div>
      <div className="Box">
        <h1>
          What is the purpose of using super constructor with props argument?
        </h1>
        <p>
          The purpose of using the <b>super constructor</b> with the{" "}
          <b>props</b> argument in a React component is to initialize the{" "}
          <b>this</b> object for the subclass component and to pass the{" "}
          <b>props</b> received from the parent component to the base component.
        </p>
      </div>
      <div className="Box">
        <h1>What is reconciliation?</h1>
        <p>
          econciliation is the process by which the virtual DOM
          <b> (a lightweight in-memory representation of the actual DOM) </b>
          compares the current version of a component with the previous version,
          and determines the most efficient way to update the actual DOM to
          reflect the changes. When a component's state or props are updated,
          React re-renders the component to reflect these changes. During the
          rendering process, React compares the virtual DOM representation of
          the updated component with the virtual DOM representation of the
          previous version of the component. This process is known as
          reconciliation.
        </p>
      </div>
      <div className="Box">
        <h1>How to set state with a dynamic key name?</h1>
        <p>
          you can use the <b>setState</b> function to update the state of a
          component. To set the state with a dynamic key name, you can use
          computed property names, which are supported in JavaScript.
        </p>
        <img
          onClick={() => {
            setOpen(!open);
          }}
          className={open ? "Image" : "Image_Open"}
          className="Image1"
          src={Image1}
          alt=""
        />
      </div>
      <div className="Box">
        <h1>
          What would be the common mistake of function being called every time
          the component renders?
        </h1>
        <p>
          One common mistake that can cause a function to be called every time a
          component renders is,
          <b>
            forgetting to include the bind method when passing the function as a
            prop to a child component.
          </b>
        </p>
      </div>
      <div className="Box">
        <h1>Is lazy function supports named exports?</h1>
        <p>
          Yes, lazy function supports <b>named exports</b>. In JavaScript, a{" "}
          <b>named export </b>
          is a way of exporting a specific value or function from a module, and
          giving it a specific name.
        </p>
        <img
          onClick={() => {
            setOpen(!open);
          }}
          className={open ? "Image" : "Image_Open"}
          src={Image16}
          alt=""
        />
      </div>
      <div className="Box">
        <h1>Why React uses className over class attribute?</h1>
        <p>
          In JavaScript, the class keyword is used to define a class, so if you
          use the class attribute in your React components, it will cause a
          syntax <b>error</b>. To avoid this issue, React uses the{" "}
          <b> className </b>
          attribute instead.
        </p>
      </div>
      <div className="Box">
        <h1>What are fragments?</h1>
        <p>
          In React, a <b>fragment</b> is a way to group a list of children
          without adding <b>extra</b> nodes to the DOM. <b>Fragments</b> allow
          you to return multiple elements from a component's render method
          without wrapping them in an additional element.
        </p>
      </div>
      <div className="Box">
        <h1>Why fragments are better than container divs?</h1>
        <p>
          #1 By using <b>fragments</b> instead of container <b>divs</b>, you can
          reduce the number of nodes in the DOM, which can improve performance
          and make it easier to work with the DOM.
        </p>
        <p>
          #2 <b>Fragments</b> can make your code more readable and easier to
          understand, especially when you are working with a large and complex
          component that returns multiple elements.
        </p>
      </div>
      <div className="Box">
        <h1>What are portals in React?</h1>
        <p>
          a <b>portal</b> is a way to render a component or an element to a
          different location in the DOM, outside of the parent component's DOM
          tree.
        </p>
      </div>
      <div className="Box">
        <h1>What are stateless components?</h1>
        <p>
          <b>stateless</b> component is a function that takes in props and
          returns a React element. <b>Stateless</b> components are also known as{" "}
          <b>"functional"</b> or
          <b> "presentational"</b> components. They are called{" "}
          <b>"stateless"</b> because they do not have their own internal state,
          they only receive data through props and render that data to the UI.
        </p>
      </div>
      <div className="Box">
        <h1>What are stateful components?</h1>
        <p>
          a <b>stateful</b> component is a type of component that maintains its
          own state and updates it over time. <b>stateful</b> components are
          class-based components that extend the base React.Component class and
          have a state object that is initialized in the constructor.
        </p>
      </div>
      <div className="Box">
        <h1>How to apply validation on props in React?</h1>
        <p>
          you can use prop types to specify the type of a prop and to validate
          the props being passed to a component. To use prop types, you will
          need to install the <b>prop-types</b> package, which can be done by
          running the following command:
        </p>
        <b>npm install prop-types</b>
        <img
          onClick={() => {
            setOpen(!open);
          }}
          className={open ? "Image" : "Image_Open"}
          src={Image2}
          alt=""
        />
        <p>
          In this example, we are specifying that the <b>message</b> prop of
          MyComponent should be a required <b>string</b>. If the prop is not a
          string or if it is not provided, a warning will be logged to the
          console.
        </p>
      </div>
      <div className="Box">
        <h1>What are the advantages of React?</h1>
        <p>
          There are several advantages
          <p>
            #1 <b>Virtual DOM</b>: React uses a virtual DOM{" "}
            <b>(a lightweight in-memory representation of the actual DOM)</b>{" "}
            meaning of this,. When the state of a component changes, React will
            only update the parts of the DOM that have actually changed, rather
            than re-rendering the entire component. This can make your
            application more efficient and perform better.
          </p>
          <p>
            #2 <b>Reusable components</b>: React encourages the creation of
            reusable components, which can be easily shared and reused across
            projects. This makes it easier to build and maintain complex UIs.
          </p>
          <p>
            #3 <b>Declarative</b>: React allows you to write declarative code,
            meaning that you describe what you want the UI to look like, and
            React will take care of the rendering for you. This makes it easier
            to reason about your code and understand how the UI is being
            constructed.
          </p>
          <p>
            #4 <b>Server-side rendering</b>: React can be used to render
            applications on the server, which can be useful for improving the
            performance of your app.
          </p>
          <p>
            #5 <b>Strong community</b>: React has a large and active community
            of developers, which means there is a wealth of resources and
            support available for those learning the library or looking for help
            with a particular problem.
          </p>
        </p>
      </div>
      <div className="Box">
        <h1>What are the limitations of React?</h1>
        <p>
          #1 <b>Complexity</b>: While React itself is relatively simple to
          learn, building complex applications with it can be challenging,
          especially for those new to front-end development. This is because
          React is just a view layer library, and you'll need to use additional
          tools and libraries to build a complete application.
        </p>
        <p>
          #2 <b>Limited to the view layer</b>: Because React is a view layer
          library, it is not a complete solution for building full-stack
          applications. You'll need to use additional tools and libraries to
          handle tasks such as routing, data management, and server-side
          rendering.
        </p>
        <p>
          #3 <b>Lack of a standard way to structure applications</b>: There is
          no "one true way" to structure a React application, which can make it
          difficult for new developers to know where to start. There are many
          different approaches and tools available, and it can be overwhelming
          to determine which ones are the best fit for a particular project.
        </p>
        <p>
          #4 React itself is relatively easy to learn for new front-end
          development. This is because React is just one part of the puzzle when
          it comes to building a complete web application, and you'll need to
          learn about additional tools and technologies such as{" "}
          <b>JavaScript</b>, <b> HTML</b>, and <b>CSS</b> in order to be
          successful.
        </p>
      </div>
      <div className="Box">
        <h1>What are error boundaries in React v16?</h1>
        <p>
          <b>Error boundaries</b> are a feature of <b>React v16</b> that allow
          you to handle runtime errors in a component hierarchy by defining a
          boundary around the component tree. If an error is thrown anywhere in
          the component tree within the boundary, the error boundary will catch
          the error and display a fallback UI instead of the component tree
          crashing.
        </p>
      </div>
      <div className="Box">
        <h1>How are error boundaries handled in React v15?</h1>
        <p>
          If you are using <b>React v15</b> or an earlier version and need to
          handle errors in your component tree, you can use a{" "}
          <b>try-catch block inside the render()</b> method of your component to
          catch and handle errors. However, this approach has some limitations:
        </p>
        <p>
          It only catches errors that occur in the render() method, not in other
          lifecycle methods or event handlers.
        </p>
        <p>It doesn't allow you to display a fallback UI if an error occurs.</p>
        <p>
          It doesn't allow you to log the error to an error reporting service.
        </p>
      </div>
      <div className="Box">
        <h1>What are the recommended ways for static type checking?</h1>
        <p>
          #1 <b>Use a type checker like Flow or TypeScript</b>: are popular
          JavaScript type <b>checkers</b> that can be used with React to add
          static type checking to your code. Both tools allow you to add type
          annotations to your code, and they will check your code at runtime to
          ensure that the types are being used correctly.
        </p>
        <p>
          #2 <b>Use a type-checking library like PropTypes</b>: PropTypes is a
          built-in library in React that allows you to add type checking to your
          components. You can specify the expected types of props for a
          component, and <b>PropTypes</b> will check the props at runtime to
          ensure that they are being used correctly.
        </p>
      </div>
      <div className="Box">
        <h1>What is the purpose of render method of react-dom?</h1>
        <p>
          In the React library, the <b>render()</b> method is used to render a
          React element to the DOM. It takes two arguments:
        </p>
        <p>
          #1 The React element that you want to render. This can be a JSX
          element, a string, a number, or an array of elements.
        </p>
        <p>
          #2 The DOM element that you want to render the element to. This can be
          an element that already exists in the DOM, or it can be a new element
          that you want to create.
        </p>
        <img
          onClick={() => {
            setOpen(!open);
          }}
          className={open ? "Image" : "Image_Open"}
          src={Image19}
          alt=""
        />
        <p>
          This code will render the element to the DOM <b>element</b> with an ID
          of <b>root</b>. The result will be that the text
          <b>"Hello, World!"</b> is displayed on the page.
        </p>
      </div>
      <div className="Box">
        <h1>What is ReactDOMServer?</h1>
        <p>
          <b>ReactDOMServer</b> is a package in the React library that provides
          methods for rendering React components to static HTML. It is primarily
          used for server-side rendering (SSR) of React apps, but it can also be
          used for other purposes such as generating static HTML pages from a
          React app.
          <p>
            The most commonly used method in <b>ReactDOMServer</b> is
            renderToString(), which takes a React element and returns a string
            of HTML that represents the element. For example:
          </p>
          <img
            onClick={() => {
              setOpen(!open);
            }}
            className={open ? "Image" : "Image_Open"}
            src={Image20}
            alt=""
          />
        </p>
      </div>

      <div className="Box">
        <h1>How to use innerHTML in React?</h1>
        <p>
          you can use the <b>dangerouslySetInnerHTML</b> prop to set the HTML
          content of an element. This prop takes an object with <b>a __html</b>{" "}
          property, which is a string containing the HTML to be rendered.
        </p>
        <p>
          Here is an example of how you can use <b>dangerouslySetInnerHTML</b>{" "}
          to set the inner HTML of a div element:
        </p>
        <img
          onClick={() => {
            setOpen(!open);
          }}
          className={open ? "Image" : "Image_Open"}
          src={Image3}
          alt=""
        />
        <p>
          In this example, the <b>html</b> prop of <b>MyComponent</b> is
          expected to contain a string of HTML, which will be set as the inner
          HTML of the <b>div </b>
          element.
        </p>
      </div>
      <div className="Box">
        <h1>How to use styles in React?</h1>
        <p>There are several ways to apply styles in React:</p>
        <p>
          #1 <b>Inline styles</b>: You can apply inline styles to a React
          element using the style prop. This prop takes an object with
          camelCased style properties as its value. For example:
        </p>
        <img
          onClick={() => {
            setOpen(!open);
          }}
          className={open ? "Image" : "Image_Open"}
          src={Image4}
          alt=""
        />
        <p>
          #2 <b>CSS classes</b>: You can apply CSS classes to a React element
          using the className prop. This prop takes a string with the{" "}
          <b>class names </b>
          separated by spaces. For example:
        </p>
        <img
          onClick={() => {
            setOpen(!open);
          }}
          className={open ? "Image" : "Image_Open"}
          src={Image5}
          alt=""
        />
      </div>
      <div className="Box">
        <h1>How events are different in React?</h1>
        <p>
          <b>events</b> are named using <b>camelCase</b>, rather than{" "}
          <b>lowercase</b> as in traditional DOM events. For example, the{" "}
          <b>click</b> event is represented as
          <b> onClick</b> in React.
        </p>
      </div>
      <div className="Box">
        <h1>What will happen if you use setState() in constructor?</h1>
        <p>
          If you call <b>setState()</b> in the <b>constructor</b>, it will
          trigger a re-render before the component has finished initializing,
          which can lead to unexpected behavior and potentially cause errors.
        </p>
      </div>
      <div className="Box">
        <h1>What is the impact of indexes as keys?</h1>
        <p>
          it is generally not recommended to use indexes as keys when rendering
          lists of elements. This is because the index of an element can change
          if the list is reordered or if an element is added or removed from the
          list, which can lead to <b>unexpected behavior</b> and potentially
          cause performance issues.
        </p>
      </div>
      <div className="Box">
        <h1>Is it good to use setState() in componentWillMount() method?</h1>
        <p>
          no it's not good to use <b>setState()</b> in{" "}
          <b>componentWillMount()</b> method. This is because the{" "}
          <b>componentWillMount()</b> method is called just before a component
          is rendered to the DOM for the first time, and calling
          <b>setState()</b> during this phase can trigger an unnecessary
          re-rendering of the component.
        </p>
      </div>
      <div className="Box">
        <h1>What will happen if you use props in initial state?</h1>
        <p>
          If you try to use props in the initial state of a component, it will
          cause an error because the props of a component are not available when
          the initial state is being set. The props are only passed to the
          component after it has been mounted, so they are not available during
          the initial render.
        </p>
        <img
          onClick={() => {
            setOpen(!open);
          }}
          className={open ? "Image" : "Image_Open"}
          src={Image25}
          alt=""
        />
        <p>
          To fix this error, you can either set the initial state to a default
          value or pass the prop value as an argument to the setState method
          when the component mounts.
        </p>
        <img
          onClick={() => {
            setOpen(!open);
          }}
          className={open ? "Image" : "Image_Open"}
          src={Image26}
          alt=""
        />
      </div>
      <div className="Box">
        <h1>How do you conditionally render components?</h1>
        <p>There are a few ways to conditionally render components in React:</p>
        <p>
          #1 Using an if statement: You can use an <b>if</b> statement inside
          the render method to conditionally render a component.
        </p>
        <img
          onClick={() => {
            setOpen(!open);
          }}
          className={open ? "Image" : "Image_Open"}
          src={Image21}
          alt=""
        />
        <p>
          #2 Using a ternary operator: You can use a ternary operator
          <b> (? :)</b>
          inside the render method to conditionally render a component.
        </p>
        <img
          onClick={() => {
            setOpen(!open);
          }}
          className={open ? "Image" : "Image_Open"}
          src={Image22}
          alt=""
        />
        <p>
          #3 Using a short-circuit operator: You can use a short-circuit
          operator <b>(&&)</b> to conditionally render a component. If the
          condition before the <b>&&</b> operator is true, the component after{" "}
          <b>&&</b> will be rendered.{" "}
        </p>
        <img
          onClick={() => {
            setOpen(!open);
          }}
          className={open ? "Image" : "Image_Open"}
          src={Image23}
          alt=""
        />
      </div>
      <div className="Box">
        <h1>Why we need to be careful when spreading props on DOM elements?</h1>
        <p>
          #1 Some props are reserved for React's internal usage and cannot be
          passed to DOM elements. For example, the key prop is used by React to
          identify elements in the virtual DOM, and the ref prop is used to
          access the properties of DOM elements.
        </p>

        <p>
          #2 Some props are not valid HTML attributes and will cause an error if
          you try to spread them on a DOM element. For example, the className
          prop should be used instead of the class prop because class is a
          reserved word in JavaScript.
        </p>
        <p>
          #3 Spreading props on DOM elements can lead to unexpected behavior if
          you are not careful. For example, if you spread the entire props
          object on a DOM element, it will override any props that are specific
          to that DOM element (such as the value prop on an input element).
        </p>
        <p>
          To avoid these problems, it is generally a good idea to only spread
          the props that are relevant to the DOM element you are rendering. You
          can use the ... spread operator to do this:
        </p>
        <img
          onClick={() => {
            setOpen(!open);
          }}
          className={open ? "Image" : "Image_Open"}
          src={Image27}
          alt=""
        />
      </div>
      <div className="Box">
        <h1>How you use decorators in React?</h1>
        <p>
          A decorator is a design pattern that allows you to add new behavior to
          an existing object in a flexible and composable way. In JavaScript,
          you can use the @ symbol to define a decorator.
        </p>
        <p>
          In React, decorators can be used to modify the behavior of a component
          or a higher-order component (HOC). Here is an example of how you might
          use a decorator to log the props of a component whenever it renders:
        </p>
        <img
          onClick={() => {
            setOpen(!open);
          }}
          className={open ? "Image" : "Image_Open"}
          src={Image24}
          alt=""
        />
      </div>
      <div className="Box">
        <h1>How do you memoize a component?</h1>
        <p>
          In React, you can memoize a component by using the <b>React.memo</b>{" "}
          higher-order component (HOC). <b>React.memo</b> is a HOC that is
          similar to <b>React.PureComponent</b> in that it will only re-render a
          component if its props have changed. However, React.memo is for
          functional components, whereas <b>React.PureComponent</b> is for
          class-based components
        </p>
        <p>
          Now, MyComponent will only re-render if its props have changed. This
          can be a useful optimization if you have a large component tree and
          you want to avoid unnecessary re-renders.
        </p>
        <img
          onClick={() => {
            setOpen(!open);
          }}
          className={open ? "Image" : "Image_Open"}
          src={Image28}
          alt=""
        />
        <p>
          React.memo only works for functional components and not class-based
          components. If you need to memoize a class-based component, you can
          use the <b>React.PureComponent</b>.
        </p>
        <img
          onClick={() => {
            setOpen(!open);
          }}
          className={open ? "Image" : "Image_Open"}
          src={Image29}
          alt=""
        />
      </div>
      <div className="Box">
        <h1>How you implement Server Side Rendering or SSR?</h1>
        <p>
          #1 Set up a server-side environment: You'll need to set up a
          server-side environment, such as Node.js, to run your React
          application on the server.
        </p>
        <p>
          #2 Render the React application on the server: To render the React
          application on the server, you'll need to use a library like{" "}
          <b>react-dom/server</b> to render the application to a string of HTML.
        </p>
        <p>
          #3 Serve the rendered HTML to the client: Once you have the rendered
          HTML, you can send it to the client as the response to the HTTP
          request.
        </p>
      </div>
      <div className="Box">
        <h1>How to enable production mode in React?</h1>
        <p>
          To enable production mode in a React application, you can set the
          NODE_ENV environment variable to production when building the
          application. This will enable various performance optimizations and
          warnings suppression, such as:
        </p>
        <p>Minification of the code</p>
        <p>Code-splitting</p>
        <p>Dead code elimination</p>
        <p>Stricter type checking</p>
        <p>
          There are a few different ways to set the <b>NODE_ENV</b> environment
          variable when building a React application:
        </p>
        <p>
          #1 Using the command-line: If you are using a build tool like Webpack
          or Rollup, you can set the NODE_ENV environment variable on the
          command-line when building the application. For example:
        </p>
        <b>NODE_ENV=production webpack</b>
        <p>
          #2 Using a configuration file: Some build tools, such as Webpack,
          allow you to specify the NODE_ENV environment variable in a
          configuration file. For example, in a Webpack configuration file, you
          can set the mode option to production:
        </p>
        <b>module.exports = mode: 'production',;</b>
        <p>NODE_ENV=production</p>
        <p>const env = require('./env.production');</p>
        <p>module.exports = mode: env.NODE_ENV, ;</p>
      </div>
      <div className="Box">
        <h1>What is CRA and its benefits?</h1>
        <p>
          Create React App (CRA) is a tool that helps developers to set up a new
          React project and build a modern, scalable, and maintainable web
          application. It is a command-line tool that is provided by the React
          team and is built on top of popular build tools like Webpack and
          Babel.
        </p>
        <p>CRA has a number of benefits for developers:</p>
        <p>
          #1 Easy to set up: CRA makes it easy to set up a new React project by
          providing a simple command-line interface. You don't need to manually
          configure build tools like Webpack or Babel, as CRA takes care of this
          for you.
        </p>
        <p>
          #2 Modern development practices: CRA includes a number of modern
          development practices out of the box, such as code-splitting, hot
          module replacement, and optimized production builds.
        </p>
        <p>
          #3 Supports latest JavaScript features: CRA is configured to use the
          latest versions of JavaScript.
        </p>
        <p>
          #4 Easy deployment: CRA makes it easy to deploy your application to a
          variety of platforms, including GitHub Pages.
        </p>
        <p>
          #5 Customization: While CRA provides a set of default configurations,
          you can still customize the build process and add additional features
          to your project if needed.
        </p>
        <b>
          Overall, CRA is a powerful tool that helps developers to set up and
          build modern, scalable, and maintainable React applications quickly
          and easily.
        </b>
      </div>
      <div className="Box">
        <h1>What is the lifecycle methods order in mounting?</h1>
        <p>
          The lifecycle methods of a React component are methods that are called
          at different stages of the component's life, from its creation to its
          destruction. In the mounting phase, the lifecycle methods are called
          in the following order:
        </p>
        <p>
          {" "}
          <b>constructor()</b>: This method is called before the component is
          mounted. It is used to initialize the component's state and bind event
          handlers.{" "}
        </p>
        <p>
          {" "}
          <b>static getDerivedStateFromProps()</b>: This method is called before
          the render method. It is used to update the component's state based on
          the props that are passed to the component.{" "}
        </p>
        <p>
          {" "}
          <b>render()</b>: This method is called to render the component's JSX.
          It should not contain any side effects or API calls.{" "}
        </p>
        <p>
          {" "}
          <b>componentDidMount()</b>: This method is called after the component
          is mounted. It is used to perform side effects, such as making API
          calls or setting up event listeners.{" "}
        </p>
      </div>
      <div className="Box">
        <h1>
          What are the lifecycle methods going to be deprecated in React v16?
        </h1>
        <p>
          In React v16, the only lifecycle method that has been deprecated is
          <b>componentWillReceiveProps</b>. This method has been replaced with
          <b>getDerivedStateFromProps</b>, which is a safer and more predictable
          way to update the state of a component based on prop changes.
        </p>
        <p>
          It is recommended to use getDerivedStateFromProps instead, as it
          provides a better mechanism for updating the state of a component
          based on prop changes.
        </p>
        <p>
          Here is a list of all the lifecycle methods in React, along with their
          descriptions:
        </p>
        <p>
          #1 <b>constructor(props)</b>: This method is called when a new
          instance of a component is created. It is used to initialize the state
          of the component and bind event handlers.
        </p>
        <p>
          #2 <b>render()</b>: This method is called to render the JSX for the
          component. It should be a pure function that does not modify the
          component's state or interact with the DOM.
        </p>
        <p>
          #3 <b>componentDidMount()</b>: This method is called after the
          component has been rendered to the DOM. It is a good place to perform
          any DOM-related operations, such as fetching data or setting up event
          listeners.
        </p>
        <p>
          #4 <b>shouldComponentUpdate(nextProps, nextState)</b>: This method is
          called before a component is re-rendered. It should return a boolean
          value indicating whether the component should be updated. This can be
          used to optimize performance by avoiding unnecessary re-renders.
        </p>
        <p>
          #5 <b>componentDidUpdate(prevProps, prevState)</b>: This method is
          called after a component has been updated. It is a good place to
          perform any operations that need to be done after the component has
          been updated, such as making API requests or updating the DOM.
        </p>
        <p>
          #6 <b>componentWillUnmount()</b>: This method is called before a
          component is unmounted and destroyed. It is a good place to clean up
          any resources that were created in <b>componentDidMount</b>.
        </p>
        <p>
          #7 <b>getDerivedStateFromProps(props, state)</b>: This method is
          called before a component is re-rendered. It should return an object
          to update the state of the component, or null if the state does not
          need to be updated. This can be used as an alternative to{" "}
          <b>componentWillReceiveProps</b> for updating the state of a component
          based on prop changes.
        </p>
        <p>
          #8 <b>getSnapshotBeforeUpdate(prevProps, prevState)</b>: This method
          is called right before a component is updated. It should return a
          value that will be passed as the third argument to{" "}
          <b>componentDidUpdate</b>. This can be used to capture a snapshot of
          the component's state or DOM before it is updated.
        </p>
      </div>
      <div className="Box">
        <h1>
          What is the purpose of getDerivedStateFromProps() lifecycle method?
        </h1>
        <p>
          <b>getDerivedStateFromProps</b> is a lifecycle method in React that is
          called before a component is re-rendered. It is used to update the
          state of a component based on prop changes.
        </p>
        <p>
          The purpose of <b>getDerivedStateFromProps</b> is to allow a component
          to update its internal state in response to prop changes. This is
          useful for cases where the component's state is derived from its
          props, and the props need to be used to determine the new state.
        </p>
      </div>
      <div className="Box">
        <h1>
          What is the purpose of getSnapshotBeforeUpdate() lifecycle method?
        </h1>
        <p>
          <b>getSnapshotBeforeUpdate</b> is a lifecycle method in React that is
          called right before a component is updated. It is called with the
          previous props and state of the component, and it should return a
          value that will be passed as the third argument to{" "}
          <b>componentDidUpdate</b>.
        </p>
        <p>
          The purpose of <b>getSnapshotBeforeUpdate</b> is to allow a component
          to capture a snapshot of its state or DOM before it is updated. This
          can be useful for cases where the component needs to make a decision
          or perform an operation based on the state or DOM of the component
          before it was updated.
        </p>
      </div>
      <div className="Box">
        <h1>Do Hooks replace render props and higher order components?</h1>
        <p>
          Hooks are a new feature in React that was introduced in the{" "}
          <b>16.8 version </b>
          of the library. They allow you to use state and other React features
          in functional components, rather than just class-based components.
        </p>
        <p>
          Hooks can be used to replace both render props and higher order
          components (HOCs).{" "}
        </p>
        <p>
          Both render props and HOCs are often used to share behavior between
          components, and Hooks provide an alternative way to do this. They can
          make it easier to reuse stateful logic and can make it easier to
          understand the code because the logic is all in one place, rather than
          being spread out between multiple components and HOCs. However, HOCs
          and render props are still useful patterns to know about and can be
          used in conjunction with Hooks.
        </p>
      </div>
      <div className="Box">
        <h1>What is the recommended way for naming components?</h1>
        <p>
          It is generally recommended to use a capital letter for the{" "}
          <b>first letter </b>
          of the component name when naming a React component. This helps to
          distinguish the component from regular HTML elements, which are always
          lowercase.
        </p>
        <p>
          For example, you might name a component <b>MyComponent</b>, rather
          than <b>myComponent</b>. This convention is not strictly required, but
          it is a common practice that many developers follow.
        </p>
      </div>
      <div className="Box">
        <h1>What is the recommended ordering of methods in component class?</h1>
        <p>
          There is no strict ordering of methods in a component class in a
          JavaScript or TypeScript application, but there are some common
          conventions that can be followed to help make the code more readable
          and maintainable.
        </p>
        <p>
          #1 <b>Constructor </b>: The constructor is typically the first method
          in a component class. It is used to initialize the component's state
          and to bind any event handlers to the component.{" "}
        </p>
        <p>
          #2 Lifecycle methods: Lifecycle methods, such as{" "}
          <b>componentDidMount</b>, <b>componentDidUpdate</b>, and{" "}
          <b>componentWillUnmount</b>, should come after the constructor.{" "}
        </p>
        <p>
          #3 <b>Event handlers</b>: Any event handlers that are bound in the
          constructor should come after the lifecycle methods. This makes it
          easier to see which events are being handled by the component.{" "}
        </p>
        <p>
          #4 Render method: The <b>render</b> method should typically come last,
          as it is the method that returns the JSX that is rendered to the DOM.
        </p>
      </div>
      <div className="Box">
        <h1>What is a switching component?</h1>
        <p>
          {" "}
          <b>Switch</b> is a component that is used to group a set of{" "}
          <b>Route</b> components. It renders the first <b>Route</b> that
          matches the current location. If no routes match the current location,
          the <b>Switch</b> component can render a default <b>route</b> using
          the Route component with no <b>path</b> prop specified.
        </p>
      </div>
      <div className="Box">
        <h1>Why we need to pass a function to setState()?</h1>
        <p>
          there's only 1 reason why you might want to pass a function to
          setState instead of an object is to ensure that the state update is
          atomic. When you pass an object to setState, React will merge the
          object with the current state. If you have multiple calls to setState
          that depend on the current state, it is possible for the state updates
          to be applied out of order, which can lead to unexpected behavior.
        </p>
      </div>
      <div className="Box">
        <h1>What is strict mode in React?</h1>
        <p>
          Strict mode is a feature in React that activates additional checks and
          warnings for your application. It is intended to help you find
          problems in your code that may be difficult to detect without these
          checks.
        </p>
        <p>
          To use strict mode in a React component, you can wrap the component in
          a <b>React.StrictMode</b> element:
        </p>
        <img
          onClick={() => {
            setOpen(!open);
          }}
          className={open ? "Image" : "Image_Open"}
          src={Image30}
          alt=""
        />
      </div>
      <div className="Box">
        <h1>
          Why is isMounted() an anti-pattern and what is the proper solution?
        </h1>
        <p>
          The <b>isMounted()</b> method is an anti-pattern because it is a part
          of the React API that has been deprecated and is no longer recommended
          for use. The <b>isMounted()</b> method was originally introduced as a
          way to check if a component was still mounted to the DOM, but it has
          since been removed from the React API because it can lead to problems
          with code that is difficult to debug.
        </p>
        <p>
          The proper solution to the problem of checking if a component is
          mounted is to use the component's lifecycle methods. In particular,
          you can use the <b>componentDidMount()</b> and{" "}
          <b>componentWillUnmount() </b>
          methods to perform actions when a component is mounted or unmounted,
          respectively.
        </p>
      </div>
      <div className="Box">
        <h1>What are the Pointer Events supported in React? </h1>
        <p>
          Pointer events are a type of event in React that allow you to handle
          events such as touch, mouse, and pen input in a single set of events.
          The pointer events supported in React are:
        </p>
        <p>
          <b>onPointerDown</b>: This event is triggered when a pointer is
          pressed down on an element.
        </p>
        <p>
          <b>onPointerMove</b>: This event is triggered when a pointer moves
          over an element.
        </p>
        <p>
          <b>onPointerUp</b>: This event is triggered when a pointer is released
          from an element.
        </p>
        <p>
          <b>onPointerCancel</b>: This event is triggered when a pointer is
          cancelled, for example if the user moves their finger off the screen
          while interacting with a touch-based element.
        </p>
        <p>
          <b>onPointerEnter</b>: This event is triggered when a pointer enters
          an element.
        </p>
        <p>
          <b>onPointerLeave</b>: This event is triggered when a pointer leaves
          an element.
        </p>
        <p>
          <b>onPointerOver</b>: This event is triggered when a pointer is
          hovering over an element.
        </p>
        <p>
          <b>onPointerOut</b>: This event is triggered when a pointer is no
          longer hovering over an element.
        </p>
        <p>
          <b>onGotPointerCapture</b>: This event is triggered when an element
          receives pointer capture.
        </p>
        <p>
          <b>onLostPointerCapture</b>: This event is triggered when an element
          loses pointer capture.
        </p>
      </div>
      <div className="Box">
        <h1>Why should component names start with capital letter?</h1>
        <p>
          In React, it is a convention to start component names with a capital
          letter. This is because React treats components that start with a
          capital letter as a special type of component called a "stateful
          component" or a "class component", while components that start with a
          lowercase letter are treated as a "functional component".
        </p>
      </div>
      <div className="Box">
        <h1>Are custom DOM attributes supported in React v16? </h1>
        <p>
          Yes, custom DOM attributes are supported in React v16. You can add
          custom attributes to DOM elements in React by using the <b>data-</b>{" "}
          prefix, followed by the attribute name.
        </p>
        <img
          onClick={() => {
            setOpen(!open);
          }}
          className={open ? "Image" : "Image_Open"}
          src={Image31}
          alt=""
        />
        <p>
          You can then access the value of the attribute using the{" "}
          <b>dataset </b>
          property of the DOM element. For example:
        </p>
        <img
          onClick={() => {
            setOpen(!open);
          }}
          className={open ? "Image" : "Image_Open"}
          src={Image32}
          alt=""
        />
        <p>
          Note that custom attributes are not a part of the official DOM
          specification, and their support may vary across browsers. They are
          primarily used as a way to store data associated with an element that
          is not intended to be used by the browser or by CSS.
        </p>
      </div>
      <div className="Box">
        <h1>What is the difference between constructor and getInitialState?</h1>
        <p>
          In a React component, the <b>constructor</b> function is a special
          function that is called when an instance of the component is created.
          It is typically used to initialize the component's state and to bind
          event handlers to the component instance.
        </p>
        <p>
          The <b>getInitialState</b> function, on the other hand, is a method
          that was used in older versions of React to return the initial state
          of a component. It has been replaced by the <b>constructor</b>{" "}
          function in recent versions of React.
        </p>
      </div>
      <div className="Box">
        <h1>
          Can you force a component to re-render without calling setState?
        </h1>
        <p>
          There are a few ways to force a React component to re-render without
          calling setState. One way is to use the <b>forceUpdate</b> method of
          the component instance. This method will skip the normal lifecycle
          methods and immediately re-render the component.
        </p>
        <img
          onClick={() => {
            setOpen(!open);
          }}
          className={open ? "Image" : "Image_Open"}
          src={Image33}
          alt=""
        />
        <p>
          Another way to force a component to re-render is to change the{" "}
          <b>key </b>
          prop of the component. When the key prop changes, React will unmount
          the old component and create a new one, causing it to re-render.
        </p>
      </div>
      <div className="Box">
        <h1>
          What is the difference between super() and super(props) in React using
          ES6 classes?
        </h1>
        <p>
          The <b>super(props)</b> syntax is used to pass the <b>props</b>{" "}
          argument to the parent class's constructor function. This is typically
          used to access the props of the component in the parent class.
        </p>
        <img
          onClick={() => {
            setOpen(!open);
          }}
          className={open ? "Image" : "Image_Open"}
          src={Image35}
          alt=""
        />
        <p>
          {" "}
          the <b>super</b> keyword refers to the parent class (i.e., the class
          that the current class extends). When calling <b>super()</b>, you are
          calling the parent class's constructor function.
        </p>
        <img
          onClick={() => {
            setOpen(!open);
          }}
          className={open ? "Image" : "Image_Open"}
          src={Image34}
          alt=""
        />
        <p>
          The <b>super()</b> call must be the first statement in the constructor
          function. If you do not call <b>super()</b> in the constructor, you
          will receive an error.
        </p>
      </div>
      <div className="Box">
        <h1>How to loop inside JSX?</h1>
        <p>
          You can use a <b>map</b> function to loop through the array and render
          a list of elements
        </p>
        <p>For example, given an array of names:</p>
        <img
          onClick={() => {
            setOpen(!open);
          }}
          className={open ? "Image" : "Image_Open"}
          src={Image36}
          alt=""
        />
        <img
          onClick={() => {
            setOpen(!open);
          }}
          className={open ? "Image" : "Image_Open"}
          src={Image37}
          alt=""
        />
        <p>
          it is generally recommended to use the <b>map</b> function, as it is
          more concise and easier to read.{" "}
        </p>
      </div>
      <div className="Box">
        <h1>How do you access props in attribute quotes?</h1>
        <p>
          In JSX, you can access the <b>props</b> of a component inside
          attribute quotes by using curly braces.
        </p>
        <p>
          For example, given a component with a <b>name</b> prop:
        </p>
        <img
          onClick={() => {
            setOpen(!open);
          }}
          className={open ? "Image" : "Image_Open"}
          src={Image38}
          alt=""
        />
        <p>
          You can use the <b>props.name</b> value as the value of an attribute
          like this:
        </p>
        <img
          onClick={() => {
            setOpen(!open);
          }}
          className={open ? "Image" : "Image_Open"}
          src={Image39}
          alt=""
        />
        <p>
          In this example, the <b>disabled</b> attribute of the <b>button</b>{" "}
          element will be set to <b>true</b> if the <b>name</b> prop of the{" "}
          <b>MyComponent</b> element is equal to "Alice".
        </p>
        <p>
          You can also use expressions and functions inside the curly braces to
          compute the value of an attribute. For example:
        </p>
        <img
          onClick={() => {
            setOpen(!open);
          }}
          className={open ? "Image" : "Image_Open"}
          src={Image40}
          alt=""
        />
        <p>
          In this example, the <b>disabled</b> attribute of the <b>button</b>{" "}
          element will be set to <b>true</b> if the <b>name</b> prop of the{" "}
          <b>MyComponent</b> element has a length greater than 5.
        </p>
      </div>
      <div className="Box">
        <h1>What is React proptype array with shape?</h1>
        <p>
          In React, the <b>prop-types</b> library is used to validate the props
          being passed to a component. The <b>arrayOf</b> method is used to
          check that an array prop only contains a certain type of element, and
          the <b>shape</b> method is used to check the types of the elements in
          an array of objects.
        </p>
        <p>
          Here's an example of how you might use the <b>arrayOf</b> and{" "}
          <b>shape</b> methods together:
        </p>
        <img
          onClick={() => {
            setOpen(!open);
          }}
          className={open ? "Image" : "Image_Open"}
          src={Image41}
          alt=""
        />
        <p>
          This would ensure that the <b>users</b> prop is an array of objects,
          and that each object in the array has a <b>name</b> prop that is a
          string, an <b>age</b> prop that is a number, and a gender prop that is
          either <b>'male'</b> or <b>'female'</b>.
        </p>
      </div>
      <div className="Box">
        <h1>How to conditionally apply class attributes?</h1>
        <p>
          In React, you can conditionally apply class names to an element by
          using a ternary operator to decide which class names to include.
          Here's an example of how you might do this:
        </p>
        <img
          onClick={() => {
            setOpen(!open);
          }}
          className={open ? "Image" : "Image_Open"}
          src={Image42}
          alt=""
        />
      </div>
      <div className="Box">
        <h1>What is the difference between React and ReactDOM?</h1>
        <p>
          <b>React</b> is a JavaScript library for building user interfaces,
          while <b>ReactDOM</b> is a package that provides DOM-specific methods
          that can be used at the top level of your app.
        </p>
        <p>
          {" "}
          <b>React</b> is the main package, and it provides a declarative
          interface for creating and rendering UI components. It allows you to
          describe your UI using a virtual representation of the DOM, and it
          will take care of rendering the actual DOM elements and updating them
          when necessary.{" "}
        </p>
        <p>
          {" "}
          <b>ReactDOM</b> is a separate package that provides DOM-specific
          methods that can be used to render React components to the DOM. It
          provides a way to take the output of your React components and apply
          it to the actual DOM elements in the browser.{" "}
        </p>
        <p>
          In most cases, you will only need to use the React package and not
          <b>ReactDOM</b> directly. However, if you are using React in a
          non-browser environment (such as a server-side rendering library), you
          will need to use a different renderer, such as ReactDOMServer, in
          order to render your components to a string of HTML.
        </p>
      </div>
      <div className="Box">
        <h1>Why ReactDOM is separated from React?</h1>
        <p>
          <b>React</b> and <b>ReactDOM</b> are two different libraries that are
          designed to work together.
        </p>
        <p>
          <b>React</b> is a JavaScript library for building user interfaces. It
          provides a declarative way to specify the component hierarchy and the
          components' state and behavior. It's designed to be used in the
          browser, but it can also be used on the server or in native apps.
        </p>
        <p>
          <b>ReactDOM</b> is a separate library that provides DOM-specific
          methods that can be used to render React components to the DOM. It
          provides a simple way to take a tree of React components and turn it
          into a tree of DOM nodes.
        </p>
        <p>
          By separating the two libraries, it's possible to use <b>React</b> in
          different environments, such as on the server or in native apps,
          without having to include the DOM-specific methods provided by
          <b>ReactDOM</b>. It also makes it easier to update and maintain the
          two libraries independently.
        </p>
      </div>
      <div className="Box">
        <h1>How to use React label element?</h1>
        <p>
          The <b>label</b> element in React can be used to add a <b>label</b> to
          a form element such as an input or a select. To use a label element in
          a form in React, you can do the following:
        </p>
        <p>
          Import the <b>label</b> element from the <b>react-dom</b> library:
        </p>
        <img
          onClick={() => {
            setOpen(!open);
          }}
          className={open ? "Image" : "Image_Open"}
          src={Image43}
          alt=""
        />
        <p>
          Use the <b>label</b> element to wrap the form element that you want to
          label. You can then set the <b>htmlFor</b> attribute of the{" "}
          <b>label</b> element to the <b>id</b> of the form element that you
          want to label.
        </p>
        <p>
          For example, to create a label for a text input, you can do the
          following:
        </p>
        <img
          onClick={() => {
            setOpen(!open);
          }}
          className={open ? "Image" : "Image_Open"}
          src={Image44}
          alt=""
        />
        <p>
          This will create a label that reads <b>"Input:"</b> and is associated
          with the text input. When the user clicks on the <b>label</b>, the
          input will receive focus.
        </p>
      </div>
      <div className="Box">
        <h1>How to combine multiple inline style objects?</h1>
        <p>
          In React, you can combine multiple inline style objects into a single
          style object by using the <b>Object.assign()</b> method or the spread
          operator <b>(...)</b>.
        </p>
        <p>
          Here's an example of how you can use <b>Object.assign()</b> to combine
          two style objects:
        </p>
        <img
          onClick={() => {
            setOpen(!open);
          }}
          className={open ? "Image" : "Image_Open"}
          src={Image45}
          alt=""
        />
      </div>
      <div className="Box">
        <h1>How to re-render the view when the browser is resized?</h1>
        <p>you can re-render a React component when the browser is resized:</p>
        <p>
          Using the <b>useEffect</b> hook: If you are using functional
          components and the <b>useEffect</b> hook, you can use the{" "}
          <b>useEffect</b> hook to trigger a re-render of the component when the
          browser is resized. To do this, you can set up an event listener in
          the <b>useEffect</b> hook and call the
          <b> setState</b> function to trigger a re-render.
        </p>
      </div>
      <div className="Box">
        <h1>
          What is the difference between setState() and replaceState() methods?
        </h1>
        <p>
          In React, the <b>setState()</b> method is used to update the state of
          a component and trigger a re-render of the component. It merges the
          new state with the previous state.
        </p>
        <p>
          On the other hand, the <b>replaceState() </b> method was used in older
          versions of React to completely replace the current state with a new
          state. It has been deprecated and removed in the latest versions of
          React.
        </p>
        <p>
          Here is an example of how <b>setState()</b> can be used:
        </p>
        <img
          onClick={() => {
            setOpen(!open);
          }}
          className={open ? "Image" : "Image_Open"}
          src={Image46}
          alt=""
        />
      </div>
      <div className="Box">
        <h1>How to listen to state changes? </h1>
        <p>
          There are a few different ways that you can listen for changes to the
          state of a React component:
        </p>
        <p>
          <b>Learn tomorrow </b> #1 Use the <b>componentDidUpdate</b> lifecycle
          method: The componentDidUpdate lifecycle method is called after a
          component's updates are flushed to the DOM. You can use this method to
          perform an action after the component's state has been updated.{" "}
        </p>
        <img
          onClick={() => {
            setOpen(!open);
          }}
          className={open ? "Image" : "Image_Open"}
          src={Image47}
          alt=""
        />
        <p>
          {" "}
          <b>Learn tomorrow</b> #2 Use the <b>shouldComponentUpdate</b>{" "}
          lifecycle method: The <b>shouldComponentUpdate</b> lifecycle method is
          called before a component's updates are flushed to the DOM. You can
          use this method to perform a comparison between the current and
          previous props and state and return a boolean value indicating whether
          the component should update. If you return <b>false</b>, the component
          will not update.
        </p>
        <img
          onClick={() => {
            setOpen(!open);
          }}
          className={open ? "Image" : "Image_Open"}
          src={Image48}
          alt=""
        />
        <p>
          #3 Use the <b>useEffect</b> hook: If you are using functional
          components and the <b>useEffect</b> hook, you can use the{" "}
          <b>useEffect</b> hook to listen for changes to the component's state.
          The <b>useEffect</b> hook is called after every render, including the
          initial render.{" "}
        </p>
        <img
          onClick={() => {
            setOpen(!open);
          }}
          className={open ? "Image" : "Image_Open"}
          src={Image49}
          alt=""
        />
      </div>
      <div className="Box">
        <h1>
          What is the recommended approach of removing an array element in React
          state?
        </h1>
        <p>
          In a functional component, you can use the <b>useState</b> hook to
          manage state in a function component. To remove an element from an
          array in state, you can use the <b>filter</b> method to create a new
          array that excludes the element you want to remove. Here's an example
          of how you could do this:
        </p>
        <img
          onClick={() => {
            setOpen(!open);
          }}
          className={open ? "Image" : "Image_Open"}
          src={Image50}
          alt=""
        />
        <p>
          This will render a list of items with a <b>"Remove"</b> button next to
          each item. When the button is clicked, the <b>handleRemove</b>{" "}
          function will be called with the item to remove as an argument, and
          the <b>setItems</b> function will be called with a new array that
          excludes the item.
        </p>
        <img
          onClick={() => {
            setOpen(!open);
          }}
          className={open ? "Image" : "Image_Open"}
          src={Image51}
          alt=""
        />
      </div>
      <div className="Box">
        <h1>Is it possible to use React without rendering HTML?</h1>
        <p>
          Yes, it is possible to use React without rendering HTML. React is a
          flexible JavaScript library that can be used to build user interfaces
          for a variety of platforms, not just the web. React can also be used
          to render components to other types of environments, such as native
          mobile apps using React Native or desktop apps using React Electron.
        </p>
        <p>
          For example, you could use React to build a mobile app that runs on
          iOS and Android by using React Native to render native components for
          each platform. The code that you write with React would be the same on
          both platforms, but the components would be rendered as native iOS and
          Android components, respectively.
        </p>
        <p>
          In summary, React can be used to build user interfaces for a variety
          of platforms, and you do not have to use HTML to do so.
        </p>
      </div>
      <div className="Box">
        <h1>How to pretty print JSON with React?</h1>
        <p>
          you can use the <b>JSON.stringify</b> function and pass in the{" "}
          <b>json</b> object as the first argument and an object with the{" "}
          <b>space</b> option set to <b>2</b> as the second argument. This will
          return a string representation of the JSON object with indentation and
          line breaks.
        </p>
        <p>
          You can then render this string in your React component using the{" "}
          <b>pre</b> element to preserve the formatting. Here's an example of
          how you could do this:
        </p>
        <img
          onClick={() => {
            setOpen(!open);
          }}
          className={open ? "Image" : "Image_Open"}
          src={Image52}
          alt=""
        />
      </div>
      <div className="Box">
        <h1>Why you can't update props in React?</h1>
        <p>
          It is not true that you cannot update props in React. You can pass new
          prop values to a component and the component will re-render with the
          new prop values.
        </p>
      </div>
      <div className="Box">
        <h1>How to focus an input element on page load?</h1>
        <p>
          To focus an input element in a React component on page load, you can
          use the <b>useRef</b> hook and the focus method of the <b>current</b>{" "}
          property of the ref.
        </p>
        <p>Here is an example of how you might do this:</p>
        <img
          onClick={() => {
            setOpen(!open);
          }}
          className={open ? "Image" : "Image_Open"}
          src={Image53}
          alt=""
        />
        <p>
          you can also use the <b>autoFocus</b> prop of the <b>input</b> element
          to focus it on page load:
        </p>
        <img
          onClick={() => {
            setOpen(!open);
          }}
          className={open ? "Image" : "Image_Open"}
          src={Image54}
          alt=""
        />
      </div>
      <div className="Box">
        <h1>What are the possible ways of updating objects in state?</h1>
        <p>
          #1 Using a setter function: Many programming languages and state
          management libraries provide setter functions that allow you to update
          the state in a controlled, predictable way. For example, in React, you
          can use the <b>setState</b> function to update the state of a
          component.
        </p>
        <p>
          #2 Mutating the object directly: In some languages, such as
          JavaScript, you can directly modify the properties of an object stored
          in state. For example, you could write{" "}
          <b>myObject.property = 'new value' </b>
          to change the value of a property on an object stored in state.
        </p>
      </div>
      <div className="Box">
        <h1>How can we find the version of React at runtime in the browser?</h1>
        <p>
          You can find the version of React that is being used in your
          application at runtime by accessing the <b>React.version</b> property.
          This property returns a string containing the version number of React
          that is being used.
        </p>
        <p>
          Here is an example of how you might access the version of React at
          runtime in a browser:
        </p>
        <img
          onClick={() => {
            setOpen(!open);
          }}
          className={open ? "Image" : "Image_Open"}
          src={Image55}
          alt=""
        />
      </div>
      <div className="Box">
        <h1>
          What are the approaches to include polyfills in your create-react-app?
        </h1>
        <p>
          If you are using create-react-app to build your React application,
        </p>
        <p>
          Include polyfills manually: If you want to include specific polyfills
          in your application, you can do so by manually importing them at the
          top of your application entry point (e.g. <b>index.js</b>). For
          example, you could include a polyfill for the fetch function by adding
          the following line to your code: <b>import 'whatwg-fetch'</b> ;
        </p>
      </div>
      <div className="Box">
        <h1>How to use https instead of http in create-react-app?</h1>
        <p>
          To use <b>https</b> instead of <b>http</b> in a create-react-app
          project, you will need to set the HTTPS environment variable to{" "}
          <b>true</b> and start the development server using <b>npm start</b> or{" "}
          <b> yarn start</b>. This will cause the development server to use
          https to serve your app.
        </p>
        <p>
          Here's an example of how you can set the <b>HTTPS</b> environment
          variable and start the development server:
        </p>
        <img
          onClick={() => {
            setOpen(!open);
          }}
          className={open ? "Image" : "Image_Open"}
          src={Image56}
          alt=""
        />
        <p>
          Alternatively, you can also set the <b>HTTPS</b> environment variable
          in the <b>.env</b> file in the root of your create-react-app project:
        </p>
        <img
          onClick={() => {
            setOpen(!open);
          }}
          className={open ? "Image" : "Image_Open"}
          src={Image57}
          alt=""
        />
        <p>
          Once you have set the <b>HTTPS</b> environment variable, the
          development server will automatically use <b>https</b> to serve your
          app.
        </p>
      </div>
      <div className="Box">
        <h1>How to avoid using relative path imports in create-react-app?</h1>
        <p>
          One way to avoid using relative path imports in a create-react-app
          project is to use the <b>src</b> alias. The <b>src</b> alias is a way
          to reference files in the src directory of your project without having
          to use a relative path.
        </p>
        <p>For example, instead of using a relative path import like this:</p>
        <img src={Image58} alt="" />
        <p>You can use the src alias like this:</p>
        <img src={Image59} alt="" />
      </div>
      <div className="Box">
        <h1>How to add Google Analytics for React Router?</h1>
        <p></p>
      </div>
      <div className="Box">
        <h1>How to update a component every second?</h1>
        <p>
          To update a component every second, you can use the <b>setInterval</b>{" "}
          function in JavaScript. Here is an example of how you can use{" "}
          <b>setInterval</b> to update a component every second:
        </p>
        <img src={Image60} alt="" />
        <p>
          The <b>useEffect</b> hook is used to set up the interval, and the{" "}
          <b>clearInterval</b> function is used to clear the interval when the
          component unmounts. The <b>setInterval</b> function will update the{" "}
          <b>count</b> state variable every second, which will cause the
          component to re-render with the updated <b>count</b> value.
        </p>
      </div>
      <div className="Box">
        <h1>How do you apply vendor prefixes to inline styles in React?</h1>
        <p>
          To apply vendor prefixes to inline styles in React using JavaScript,
          you can use the <b>style</b> attribute and include vendor prefixes as
          needed.
        </p>
        <p>For example:</p>
        <img src={Image61} alt="" />
      </div>
      <div className="Box">
        <h1>How to import and export components using React and ES6?</h1>
        <p>
          To import a component in React using ES6, you can use the{" "}
          <b>"import"</b> statement. Here's an example:
        </p>
        <img src={Image62} alt="" />
        <p>
          In this example, the <b>import</b> statement is used to import the{" "}
          <b>React</b> library, as well as a custom component called{" "}
          <b>MyComponent</b> , which is located in a file called MyComponent.js
          in the same directory as the current file.
        </p>
        <p>
          To export a component in React using ES6, you can use the{" "}
          <b>"export"</b> statement. Here's an example of how you might do this:
        </p>
        <img src={Image63} alt="" />
      </div>
      <div className="Box">
        <h1>Why is a component constructor called only once?</h1>
        <p>
          When a component is created, the component's constructor is called
          before the component is mounted. The component's constructor is the
          ideal place to set up the initial state of the component and to bind
          any event handlers to the component instance.
        </p>
        <p>
          After the component is mounted, the component's <b>render()</b> method
          is called whenever the component's state or props change. However, the
          component's constructor is not called again. This means that the
          component's constructor is called only once, at the beginning of the
          component's lifecycle.
        </p>
        <p>
          This can be a useful optimization, because it means that the
          component's constructor does not need to be called every time the
          component's state or props change. Instead, the component can simply
          update its state and re-render itself using the updated state.
        </p>
      </div>
      <div className="Box">
        <h1>How to define constants in React?</h1>
        <p>
          Using the <b>const</b> keyword: You can define a constant using the{" "}
          <b>const</b> keyword, like this:
        </p>
        <img src={Image64} alt="" />
        <p>
          Using the <b>static</b> keyword: If you are defining a constant within
          a class, you can use the <b>static</b> keyword to define a class-level
          constant. For example:
        </p>
        <img src={Image65} alt="" />
      </div>
      <div className="Box">
        <h1>How to programmatically trigger click event in React?</h1>
        <p>
          you can use the <b>onClick</b> event handler and call the <b>click</b>{" "}
          method on the element that you want to trigger the click event for.
        </p>
        <img src={Image66} alt="" />
      </div>
      <div className="Box">
        <h1>Is it possible to use async/await in plain React?</h1>
        <p>
          Yes, it is possible to use <b>async/await</b> in plain React.{" "}
          <b>async/await</b> are JavaScript language features that make it
          easier to work with asynchronous code, and they can be used in any
          JavaScript code, including code that uses React.
        </p>
        <p>
          Here's an example of how you can use <b>async/await</b> in a React
          component:
        </p>
        <img src={Image67} alt="" />
      </div>
      <div className="Box">
        <h1>What are the common folder structures for React?</h1>
        <p>
          #1 <b>Flat structure</b>: In this structure, all of the project's
          files and folders are stored directly in the root directory. This is a
          simple structure that is easy to set up and is well-suited for small
          projects.
        </p>
        <p>
          #2 <b>Component-based structure</b>: In this structure, the project is
          organized into a folder for each component, with each component's
          files (e.g., JavaScript, CSS, tests) stored in the corresponding
          folder. This structure is well-suited for projects with a large number
          of components and is a good choice for organizing large projects.
        </p>
        <p>
          #3 <b>Feature-based structure</b>: In this structure, the project is
          organized into a folder for each feature or page, with each feature's
          files (e.g., components, reducers, actions) stored in the
          corresponding folder. This structure is well-suited for projects with
          a large number of features or pages and helps to keep the project
          organized as it grows.
        </p>
        <p>
          #4 <b>Hybrid structure</b>: In this structure, the project is
          organized using a combination of the component-based and feature-based
          structures. This structure is useful when you want to combine the
          benefits of both structures and is well-suited for projects with a mix
          of components and features.
        </p>
        <p>
          It's important to note that the folder structure for a React project
          is not tied to any specific version of React. The folder structure
          that you choose should be based on the needs of your project and
          should be designed to make it easy for you and your team to work with
          the code.
        </p>
      </div>
      <div className="Box">
        <h1>What are the popular packages for animation?</h1>
        <p>
          Styles modules allow you to write modular and reusable styles in your
          web development projects. There are several benefits to using styles
          modules, some of which include:
        </p>
        <p>
          #1 <b>Modularity</b>: Styles modules allow you to break up your styles
          into smaller, more manageable chunks, making it easier to maintain and
          scale your project.
        </p>
        <p>
          #2 <b>Reusability</b>: Styles written in a styles module can be easily
          reused across different components or pages in your project, reducing
          duplication and making your code more efficient.
        </p>
        <p>
          #3 <b>Encapsulation</b>: Styles written in a styles module are scoped
          to that module, meaning they won't affect any other parts of your
          project. This helps to prevent conflicts and makes it easier to reason
          about the design of your project.
        </p>
        <p>
          Here is an example of a styles module in a project using CSS Modules:
        </p>
        <img src={Image68} alt="" />
        <p>
          To use the styles in this module, you would import them into your
          component file like this:
        </p>
        <img src={Image69} alt="" />
      </div>
      <div className="Box">
        <h1>What are the popular React-specific linters?</h1>
        <p>
          There are several popular linters that are specifically designed to
          work with React code:
        </p>
        <p>
          #1 ESLint: ESLint is a popular JavaScript linter that can be used to
          lint React code. There are several plugins available that extend
          ESLint's capabilities to include React-specific rules.
        </p>
        <p>
          #2 react-codemod: This is a tool that can be used to automatically
          transform React code to follow certain conventions or to fix common
          issues.
        </p>
        <p>
          #3 react-perf-tool: This is a performance analysis tool that helps to
          identify bottlenecks in React components.
        </p>
        <p>
          #4 react-a11y: This is a linter that checks for accessibility issues
          in React components.
        </p>
        <p>
          #5 react-beautify: This is a tool that can be used to automatically
          reformat React code to follow a specific style guide.
        </p>
      </div>
      <div className="Box">
        <h1>
          How to make AJAX call and in which component lifecycle methods should
          I make an AJAX call?
        </h1>
        <p>
          To make an AJAX call in a React application, you can use the{" "}
          <b>axios</b>{" "}
        </p>
        <img src={Image67} alt="" />
      </div>
      <div className="Box">
        <h1>What are render props?</h1>
        <p>
          In React, a <b>"render prop"</b> is a function prop that a component
          uses to know what to render. It's called a <b>"render prop"</b>{" "}
          because the prop is a function that the component uses to render
          something.
        </p>
        <p>Here is an example of a component using a render prop:</p>
        <img src={Image70} alt="" />
        <p>
          To use this component, you would pass a function as the <b>render</b>{" "}
          prop when you render the <b>MyComponent</b> element:
        </p>
        <img src={Image71} alt="" />
      </div>
      <div className="Box">
        <h1>What is React Router?</h1>
        <p>
          React Router is a popular library for routing in a React application.
          It provides components for declaratively defining the routes in a
          React application and managing the navigation between different views
          or <b>"pages"</b> in the app.
        </p>
        <p>
          React Router helps you to design the structure of the application's
          URLs, including the nesting of routes, and handles the rendering of
          the appropriate components for a given route. It allows you to build
          single-page applications (SPAs) with a rich and responsive user
          experience, as the app doesn't need to fully reload the page every
          time the user navigates to a new route.
        </p>
      </div>
      <div className="Box">
        <h1>How React Router is different from history library?</h1>
        <p>
          {" "}
          <b>React Router</b> is a library that lets you add routing to your
          React app, while <b>history</b> is a standalone JavaScript library
          that lets you manage session history in a JavaScript app.
        </p>
        <p>
          {" "}
          <b>React Router</b> is built on top of the <b>history</b> library, and
          it uses the <b>history</b> library to manage the navigation of a
          single-page app. When you use <b>React Router</b> , you don't need to
          explicitly use the <b>history</b> library in your code, as{" "}
          <b>React Router</b> provides a higher-level API for managing the
          navigation of your app.
        </p>
      </div>
      <div className="Box">
        <h1>
          What are the <b>Router</b> components of React Router v4?
        </h1>
        <p>
          #1 <b>BrowserRouter</b>: This component is used to define the root
          router for your app. It should be wrapped around your main application
          component.{" "}
        </p>
        <p>
          #2 <b>Route</b>: This component is used to define a route for a
          specific path in your app. You can specify the component that should
          be rendered when the route is active, as well as any additional props
          that should be passed to the component.
        </p>
        <p>
          #3 <b>Link</b>: This component is used to create a link to a specific
          route in your app. It should be used in place of an anchor tag (a) to
          avoid full page reloads when navigating between routes.
        </p>
        <p>
          #4 <b>Switch</b>: This component is used to group a number of{" "}
          <b>Route</b> components together and only render the first one that
          matches the current location.
        </p>
      </div>
      <div className="Box">
        <h1>What is the purpose of push() and replace() methods of history?</h1>
        <p>
          The <b>push()</b> method is used to navigate to a new location in the
          history stack. This means that if you use <b>push()</b> to navigate to
          a new route, the new route will be added to the history stack and the
          user will be able to use the browser's back button to navigate back to
          the previous route.
        </p>
        <p>
          The <b>replace()</b> method is similar to <b>push()</b>, but it
          replaces the current location in the history stack rather than adding
          a new one. This means that if you use replace() to navigate to a new
          route, the new route will replace the current route in the history
          stack, and the user will not be able to use the back button to
          navigate back to the previous route.
        </p>
      </div>
      <div className="Box">
        <h1>How do you programmatically navigate using React Router v4?</h1>
        <p>
          To programmatically navigate using React Router v4, you can use the
          History package it's the thing under the hood of react Router that's
          doing all work of keeping track of the session history of the
          application When a component is rendered by React Router, that
          component is going to be passed three different props, <b>location</b>{" "}
          <b>match</b> <b>history prop</b>{" "}
        </p>
      </div>
      <div className="Box">
        <h1>How to get query parameters in React Router v4?</h1>
        <p>
          n React Router v4, you can use the <b>match</b> object that is passed
          to your component props to get the query parameters.
        </p>
        <img src={Image72} alt="" />
        <p>
          In this example, <b>MyComponent</b> is a component that is being
          rendered by a <b>Route</b> component from the <b>react-router-dom</b>{" "}
          library. The <b>withRouter</b> higher-order component is used to give
          the <b>MyComponent</b> access to the <b>match</b>, location, and{" "}
          <b>history</b> props of the <b>react-router-dom</b> <b>Route</b>{" "}
          component.
        </p>
      </div>
      <div className="Box">
        <h1>Why you get "Router may have only one child element" warning?</h1>
        <p>
          In React, a <b>Router</b> component is a container that is used to
          manage the rendering of routes in your application. Each <b>Router</b>{" "}
          may have only one child element, which is typically a <b>Switch</b>{" "}
          component. If you try to add more than one child element to a Router,
          you will get a warning that says "Router may have only one child
          element". This is because the Router is designed to manage the
          rendering of a single set of routes, and having multiple child
          elements would be ambiguous and potentially lead to errors.
        </p>
        <p>
          To fix this warning, you should ensure that your <b>Router</b> has
          only a single child element, which is typically a <b>Switch</b>{" "}
          component. You can then add as many routes as you need to the Switch
          using Route components.
        </p>
        <p>
          For example, the following code would trigger the "Router may have
          only one child element" warning:
        </p>
        <img src={Image73} alt="" />
        <p>
          To fix this code, you could wrap the two <b>div</b> elements in a{" "}
          <b>Switch</b> like this:
        </p>
        <img src={Image74} alt="" />
      </div>
      <div className="Box">
        <h1>How to implement default or NotFound page?</h1>
        <p>
          There are a few different ways you could implement a default or{" "}
          <b>"Not Found"</b> page for a website, depending on the specific
          requirements of your site and the technologies you are using. Here are
          a few options you might consider:
        </p>
        <p>
          #1 <b>Redirect to a default page</b>: You can use HTTP redirects to
          direct users to a default page when they request a URL that doesn't
          exist on your site. For example, you might set up a redirect to send
          all traffic from "example.com/not-found" to "example.com/default".
        </p>
        <p>
          #2 <b>Use a custom error page</b>: Most web servers allow you to
          configure custom error pages for different HTTP status codes. For
          example, you could set up a custom "404 Not Found" page to be
          displayed whenever a user requests a page that doesn't exist on your
          site.{" "}
        </p>
        <p>
          #3 <b>Render a default page from your application code</b>: If you are
          building a dynamic website using a server-side language like PHP, you
          can use your application code to detect when a user has requested a
          non-existent page and render a default page instead.
        </p>
        <p>
          #4 <b>Use a catch-all route</b>: If you are using a framework like
          Ruby on Rails or Django, you can set up a catch-all route that will
          match any URL that doesn't match any other routes in your application.
          This allows you to handle requests for non-existent pages by rendering
          a default page or redirecting to a different URL.{" "}
        </p>
      </div>
      <div className="Box">
        <h1>How to get history on React Router v4?</h1>
        <p></p>
      </div>
      <div className="Box">
        <h1>How to perform automatic redirect after login?</h1>
        <p></p>
      </div>
      <div className="Box">
        <h1>What is React Intl?</h1>
        <p></p>
      </div>
      <div className="Box">
        <h1>What are the main features of React Intl?</h1>
        <p></p>
      </div>
      <div className="Box">
        <h1>What are the two ways of formatting in React Intl?</h1>
        <p></p>
      </div>
      <div className="Box">
        <h1>
          How to use <b>FormattedMessage</b> as placeholder using React Intl?
        </h1>
        <p></p>
      </div>
      <div className="Box">
        <h1>How to access current locale with React Intl?</h1>
        <p></p>
      </div>
      <div className="Box">
        <h1>How to format date using React Intl?</h1>
        <p></p>
      </div>
      <div className="Box">
        <h1>What is Shallow Renderer in React testing?</h1>
        <p></p>
      </div>
      <div className="Box">
        <h1>What is TestRenderer package in React?</h1>
        <p></p>
      </div>
      <div className="Box">
        <h1>What is the purpose of ReactTestUtils package?</h1>
        <p></p>
      </div>
      <div className="Box">
        <h1>What is Jest?</h1>
        <p></p>
      </div>
      <div className="Box">
        <h1>What are the advantages of Jest over Jasmine?</h1>
        <p></p>
      </div>
      <div className="Box">
        <h1>Give a simple example of Jest test case</h1>
        <p></p>
      </div>
      <div className="Box">
        <h1>What is flux?</h1>
        <p></p>
      </div>
      <div className="Box">
        <h1>What is Redux?</h1>
        <p></p>
      </div>
      <div className="Box">
        <h1>What are the core principles of Redux?</h1>
        <p></p>
      </div>
      <div className="Box">
        <h1>What are the downsides of Redux compared to Flux?</h1>
        <p></p>
      </div>
      <div className="Box">
        <h1>
          What is the difference between mapStateToProps() and
          mapDispatchToProps()?
        </h1>
        <p></p>
      </div>
      <div className="Box">
        <h1>Can I dispatch an action in reducer?</h1>
        <p></p>
      </div>
      <div className="Box">
        <h1>What are the drawbacks of MVW pattern?</h1>
        <p></p>
      </div>
      <div className="Box">
        <h1>Are there any similarities between Redux and RxJS?</h1>
        <p></p>
      </div>
      <div className="Box">
        <h1>How to dispatch an action on load?</h1>
        <p></p>
      </div>
      <div className="Box">
        <h1>How to use connect() from React Redux?</h1>
        <p></p>
      </div>
      <div className="Box">
        <h1>How to reset state in Redux?</h1>
        <p></p>
      </div>
      <div className="Box">
        <h1>Whats the purpose of at symbol in the Redux connect decorator?</h1>
        <p></p>
      </div>
      <div className="Box">
        <h1>What is the difference between React context and React Redux?</h1>
        <p></p>
      </div>
      <div className="Box">
        <h1>Why are Redux state functions called reducers?</h1>
        <p></p>
      </div>
      <div className="Box">
        <h1>How to make AJAX request in Redux?</h1>
        <p></p>
      </div>
      <div className="Box">
        <h1>Should I keep all component's state in Redux store?</h1>
        <p></p>
      </div>
      <div className="Box">
        <h1>What is the proper way to access Redux store?</h1>
        <p></p>
      </div>
      <div className="Box">
        <h1>
          What is the difference between component and container in React Redux?
        </h1>
        <p></p>
      </div>
      <div className="Box">
        <h1>What is the purpose of the constants in Redux?</h1>
        <p></p>
      </div>
      <div className="Box">
        <h1>What are the different ways to write mapDispatchToProps()?</h1>
        <p></p>
      </div>
      <div className="Box">
        <h1>
          What is the use of the ownProps parameter in mapStateToProps() and
          mapDispatchToProps()?
        </h1>
        <p></p>
      </div>
      <div className="Box">
        <h1>How to structure Redux top level directories?</h1>
        <p></p>
      </div>
      <div className="Box">
        <h1>What is redux-saga?</h1>
        <p></p>
      </div>
      <div className="Box">
        <h1>What is the mental model of redux-saga?</h1>
        <p></p>
      </div>
      <div className="Box">
        <h1>
          What are the differences between call() and put() in redux-saga?
        </h1>
        <p></p>
      </div>
      <div className="Box">
        <h1>What is Redux Thunk?</h1>
        <p></p>
      </div>
      <div className="Box">
        <h1>What are the differences between redux-saga and redux-thunk?</h1>
        <p></p>
      </div>
      <div className="Box">
        <h1>What is Redux DevTools?</h1>
        <p></p>
      </div>
      <div className="Box">
        <h1>What are the features of Redux DevTools?</h1>
        <p></p>
      </div>
      <div className="Box">
        <h1>What are Redux selectors and why to use them?</h1>
        <p></p>
      </div>
      <div className="Box">
        <h1>What is Redux Form?</h1>
        <p></p>
      </div>
      <div className="Box">
        <h1>How to add multiple middlewares to Redux?</h1>
        <p></p>
      </div>
      <div className="Box">
        <h1>How to set initial state in Redux?</h1>
        <p></p>
      </div>
      <div className="Box">
        <h1>How Relay is different from Redux?</h1>
        <p></p>
      </div>
      <div className="Box">
        <h1>What is an action in Redux?</h1>
        <p></p>
      </div>
      <div className="Box">
        <h1>What is the difference between React Native and React?</h1>
        <p></p>
      </div>
      <div className="Box">
        <h1>How to test React Native apps?</h1>
        <p></p>
      </div>
      <div className="Box">
        <h1>How to do logging in React Native?</h1>
        <p></p>
      </div>
      <div className="Box">
        <h1>How to debug your React Native?</h1>
        <p></p>
      </div>
      <div className="Box">
        <h1>What is reselect and how it works?</h1>
        <p></p>
      </div>
      <div className="Box">
        <h1>What is Flow?</h1>
        <p></p>
      </div>
      <div className="Box">
        <h1>What is the difference between Flow and PropTypes?</h1>
        <p></p>
      </div>
      <div className="Box">
        <h1>How to use Font Awesome icons in React?</h1>
        <p></p>
      </div>
      <div className="Box">
        <h1>What is React Dev Tools?</h1>
        <p></p>
      </div>
      <div className="Box">
        <h1>Why is DevTools not loading in Chrome for local files?</h1>
        <p></p>
      </div>
      <div className="Box">
        <h1>How to use Polymer in React?</h1>
        <p></p>
      </div>
      <div className="Box">
        <h1>What are the advantages of React over Vue.js?</h1>
        <p></p>
      </div>
      <div className="Box">
        <h1>What is the difference between React and Angular?</h1>
        <p></p>
      </div>
      <div className="Box">
        <h1>Why React tab is not showing up in DevTools?</h1>
        <p></p>
      </div>
      <div className="Box">
        <h1>What are Styled Components?</h1>
        <p></p>
      </div>
      <div className="Box">
        <h1>Give an example of Styled Components?</h1>
        <p></p>
      </div>
      <div className="Box">
        <h1>What is Relay?</h1>
        <p></p>
      </div>
      <div className="Box">
        <h1>How to use TypeScript in create-react-app application?</h1>
        <p></p>
      </div>
      <div className="Box">
        <h1>What are the main features of Reselect library?</h1>
        <p></p>
      </div>
      <div className="Box">
        <h1>Give an example of Reselect usage?</h1>
        <p></p>
      </div>
      <div className="Box">
        <h1>Does the statics object work with ES6 classes in React?</h1>
        <p></p>
      </div>
      <div className="Box">
        <h1>Can Redux only be used with React?</h1>
        <p></p>
      </div>
      <div className="Box">
        <h1>Do you need to have a particular build tool to use Redux?</h1>
        <p></p>
      </div>
      <div className="Box">
        <h1>How Redux Form initialValues get updated from state?</h1>
        <p></p>
      </div>
      <div className="Box">
        <h1>How React PropTypes allow different types for one prop?</h1>
        <p></p>
      </div>
      <div className="Box">
        <h1>Can I import an SVG file as react component?</h1>
        <p></p>
      </div>
      <div className="Box">
        <h1>Why are inline ref callbacks or functions not recommended?</h1>
        <p></p>
      </div>
      <div className="Box">
        <h1>What is render hijacking in react?</h1>
        <p></p>
      </div>
      <div className="Box">
        <h1>What are HOC factory implementations?</h1>
        <p></p>
      </div>
      <div className="Box">
        <h1>How to pass numbers to React component?</h1>
        <p></p>
      </div>
      <div className="Box">
        <h1>
          Do I need to keep all my state into Redux? Should I ever use react
          internal state?
        </h1>
        <p></p>
      </div>
      <div className="Box">
        <h1>What is the purpose of registerServiceWorker in React?</h1>
        <p></p>
      </div>
      <div className="Box">
        <h1>What is React memo function?</h1>
        <p></p>
      </div>
      <div className="Box">
        <h1>What is React lazy function?</h1>
        <p></p>
      </div>
      <div className="Box">
        <h1>How to prevent unnecessary updates using setState?</h1>
        <p></p>
      </div>
      <div className="Box">
        <h1>
          How do you render Array, Strings and Numbers in React 16 Version?
        </h1>
        <p></p>
      </div>
      <div className="Box">
        <h1>How to use class field declarations syntax in React classes?</h1>
        <p></p>
      </div>
      <div className="Box">
        <h1>What are hooks?</h1>
        <p></p>
      </div>
      <div className="Box">
        <h1>What rules need to be followed for hooks?</h1>
        <p></p>
      </div>
      <div className="Box">
        <h1>How to ensure hooks followed the rules in your project?</h1>
        <p></p>
      </div>
      <div className="Box">
        <h1>What are the differences between Flux and Redux?</h1>
        <p></p>
      </div>
      <div className="Box">
        <h1>What are the benefits of React Router V4?</h1>
        <p></p>
      </div>
    </div>
  );
};

export default App;
