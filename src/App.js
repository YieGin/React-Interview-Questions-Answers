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
import Image75 from "./Images/75.png";
import Image76 from "./Images/76.png";
import Image77 from "./Images/77.png";
import Image78 from "./Images/78.png";
import Image79 from "./Images/79.png";
import Image80 from "./Images/80.png";
import Image81 from "./Images/81.png";
import Image82 from "./Images/82.png";
import Image83 from "./Images/83.png";
import Image84 from "./Images/84.png";
import Image85 from "./Images/85.png";
import Image86 from "./Images/86.png";
import Image87 from "./Images/87.png";
import Image88 from "./Images/88.png";
import Image89 from "./Images/89.png";
import Image90 from "./Images/90.png";
import Image91 from "./Images/91.png";
import Image92 from "./Images/92.png";
import Image93 from "./Images/93.png";
import Image94 from "./Images/94.png";
import Image95 from "./Images/95.png";
import Image96 from "./Images/96.png";
import Image97 from "./Images/97.png";
import Image98 from "./Images/98.png";
import Image99 from "./Images/99.png";
import Image100 from "./Images/100.png";
import Image101 from "./Images/101.png";
import Image102 from "./Images/102.png";
import Image103 from "./Images/103.png";
import Image104 from "./Images/104.png";
import Image105 from "./Images/105.png";
import Image107 from "./Images/107.png";
import Image108 from "./Images/108.png";
import Image109 from "./Images/109.png";
import Image110 from "./Images/110.png";
import Image111 from "./Images/111.png";
import Image112 from "./Images/112.png";
import Image113 from "./Images/113.png";

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
        <h1>what is event loop?</h1>
        <p>
          JavaScript read from top to bottom, event Loop = Queue for example..
        </p>
        <img src={Image104} alt="" />
        <p>
          So SetTimeout will put you in Queue even if it's 0 sec in this example
          we will get <b>1 4 3 2</b>
        </p>
      </div>
      <div className="Box">
        <h1>what is event bubbling and event capturing in javascript</h1>
        <p>
          <b>bubbling</b> means start from bottom up to top
        </p>
        <p>
          <b>capturing</b> means start from top to bottom{" "}
        </p>
        <p>
          {" "}
          If you pass true, it will use event <b>capturing</b> , if you pass
          false or leave it out, it will use event <b>bubbling</b>.
        </p>
      </div>
      <div className="Box">
        <h1>what is Promise?</h1>
        <img src={Image107} alt="" />
      </div>
      <div className="Box">
        <h1> what is higher order function in javascript</h1>
        <p>
          A higher-order function is a function that returns a function as its
          result.
        </p>
        <p>
          higher-order functions in JavaScript include array methods like{" "}
          <b>map</b>, <b>filter</b>, and <b>reduce</b>, as well as functions
          like <b>setTimeout</b> and <b>addEventListener</b>, which accept
          callback functions as arguments.
        </p>
      </div>
      <div className="Box">
        <h1>Explain different-2 types of function in javascript</h1>
        <p>There are several types of functions in JavaScript, including:</p>
        <ul>
          <li>
            Named function: A named function is a function that has a name, and
            can be called by that name. An example of a named function is:
          </li>
          <img src={Image108} alt="" />
          <li>
            Anonymous function: An anonymous function is a function without a
            name. It is often used as a callback function or passed as an
            argument to another function. An example of an anonymous function
            is:
          </li>
          <img src={Image109} alt="" />
          <li>
            Arrow function: Arrow functions are a shorthand syntax for anonymous
            functions. It uses the "fat arrow" notation to define the function.
            An example of an arrow function is:
          </li>
          <img src={Image110} alt="" />
        </ul>
      </div>
      <div className="Box">
        <h1>why we use call, apply , bind method in javascript</h1>
        <p>
          In JavaScript, the call(), apply(), and bind() methods are used to
          change the context of a function, also known as "binding" the function
          to a specific object.
        </p>
        <p>
          The <b>call()</b> method allows you to call a function and set the
          this value within that function to a particular object. It also allows
          you to pass in any number of arguments as separate parameters.
        </p>
        <img src={Image111} alt="" />
        <p>
          The <b>apply()</b> method is similar to the <b>call()</b> method, but
          it allows you to pass in arguments as an array.
        </p>
        <img src={Image112} alt="" />
        <p>
          The <b>bind()</b> method creates a new function with the this value
          set to the object passed in as an argument. Unlike <b>call()</b> and{" "}
          <b>apply()</b> which invoke the function immediately, bind() returns a
          new function that can be invoked later.
        </p>
        <img src={Image113} alt="" />
      </div>
      <div className="Box">
        <h1>Where do you use Rest operator?</h1>
        <p>
          The rest operator (also known as the <b>"spread" operator</b> ) is
          used in JavaScript to spread the elements of an array or object into
          individual elements. It is represented by three dots (...).
        </p>
        <p>It can be used in a number of ways, including:</p>
        <ul>
          <li>In function calls, to pass an unknown number of arguments</li>
          <li>
            In array literals, to create a new array with the elements of an
            existing array
          </li>
          <li>
            In destructuring assignment, to assign the remaining elements of an
            array to a variable
          </li>
        </ul>
        <img src={Image105} alt="" />
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
        <img
          onClick={() => {
            setOpen(!open);
          }}
          className={open ? "Image" : "Image_Open"}
          src={Image58}
          alt=""
        />
        <p>You can use the src alias like this:</p>
        <img
          onClick={() => {
            setOpen(!open);
          }}
          className={open ? "Image" : "Image_Open"}
          src={Image59}
          alt=""
        />
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
        <img
          onClick={() => {
            setOpen(!open);
          }}
          className={open ? "Image" : "Image_Open"}
          src={Image60}
          alt=""
        />
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
        <img
          onClick={() => {
            setOpen(!open);
          }}
          className={open ? "Image" : "Image_Open"}
          src={Image61}
          alt=""
        />
      </div>
      <div className="Box">
        <h1>How to import and export components using React and ES6?</h1>
        <p>
          To import a component in React using ES6, you can use the{" "}
          <b>"import"</b> statement. Here's an example:
        </p>
        <img
          onClick={() => {
            setOpen(!open);
          }}
          className={open ? "Image" : "Image_Open"}
          src={Image62}
          alt=""
        />
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
        <img
          onClick={() => {
            setOpen(!open);
          }}
          className={open ? "Image" : "Image_Open"}
          src={Image63}
          alt=""
        />
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
        <img
          onClick={() => {
            setOpen(!open);
          }}
          className={open ? "Image" : "Image_Open"}
          src={Image64}
          alt=""
        />
        <p>
          Using the <b>static</b> keyword: If you are defining a constant within
          a class, you can use the <b>static</b> keyword to define a class-level
          constant. For example:
        </p>
        <img
          onClick={() => {
            setOpen(!open);
          }}
          className={open ? "Image" : "Image_Open"}
          src={Image65}
          alt=""
        />
      </div>
      <div className="Box">
        <h1>How to programmatically trigger click event in React?</h1>
        <p>
          you can use the <b>onClick</b> event handler and call the <b>click</b>{" "}
          method on the element that you want to trigger the click event for.
        </p>
        <img
          onClick={() => {
            setOpen(!open);
          }}
          className={open ? "Image" : "Image_Open"}
          src={Image66}
          alt=""
        />
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
        <img
          onClick={() => {
            setOpen(!open);
          }}
          className={open ? "Image" : "Image_Open"}
          src={Image67}
          alt=""
        />
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
        <img
          onClick={() => {
            setOpen(!open);
          }}
          className={open ? "Image" : "Image_Open"}
          src={Image68}
          alt=""
        />
        <p>
          To use the styles in this module, you would import them into your
          component file like this:
        </p>
        <img
          onClick={() => {
            setOpen(!open);
          }}
          className={open ? "Image" : "Image_Open"}
          src={Image69}
          alt=""
        />
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
        <img
          onClick={() => {
            setOpen(!open);
          }}
          className={open ? "Image" : "Image_Open"}
          src={Image67}
          alt=""
        />
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
        <img
          onClick={() => {
            setOpen(!open);
          }}
          className={open ? "Image" : "Image_Open"}
          src={Image70}
          alt=""
        />
        <p>
          To use this component, you would pass a function as the <b>render</b>{" "}
          prop when you render the <b>MyComponent</b> element:
        </p>
        <img
          onClick={() => {
            setOpen(!open);
          }}
          className={open ? "Image" : "Image_Open"}
          src={Image71}
          alt=""
        />
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
        <img
          onClick={() => {
            setOpen(!open);
          }}
          className={open ? "Image" : "Image_Open"}
          src={Image72}
          alt=""
        />
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
        <img
          onClick={() => {
            setOpen(!open);
          }}
          className={open ? "Image" : "Image_Open"}
          src={Image73}
          alt=""
        />
        <p>
          To fix this code, you could wrap the two <b>div</b> elements in a{" "}
          <b>Switch</b> like this:
        </p>
        <img
          onClick={() => {
            setOpen(!open);
          }}
          className={open ? "Image" : "Image_Open"}
          src={Image74}
          alt=""
        />
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
        <p>
          In React Router v4, the <b>history</b> object is no longer included in
          the <b>Router</b> component like it was in previous versions. Instead,
          it is now possible to create your own history object and pass it as a
          prop to the <b>Router</b> component.
        </p>
        <img
          onClick={() => {
            setOpen(!open);
          }}
          className={open ? "Image" : "Image_Open"}
          src={Image75}
          alt=""
        />
      </div>
      <div className="Box">
        <h1>How to perform automatic redirect after login?</h1>
        <p>
          In a React application, you can perform an automatic redirect after a
          successful login using the <b>useEffect</b> hook to check the login
          status on the page load, and then redirect the user to the desired
          page using the <b>useHistory</b> hook from the react-router-dom
          library. Here is an example of how you might do this:
        </p>
        <img
          onClick={() => {
            setOpen(!open);
          }}
          className={open ? "Image" : "Image_Open"}
          src={Image76}
          alt=""
        />
      </div>
      <div className="Box">
        <h1>What is React Intl?</h1>
        <p>
          React Intl is a library for internationalization (i18n) and
          localization (l10n) in React applications. It provides a set of
          components and APIs for formatting and handling translations of text
          and other data in a React application.
        </p>
        <p>
          React Intl provides a set of higher-order components and hooks that
          wrap your components and automatically format and translate text,
          numbers, dates, and other data. It also provides an API for managing
          translations, including support for pluralization, gender, and
          relative time.
        </p>
        <p>
          One of the core features of React Intl is the <b>FormattedMessage</b>{" "}
          component, which allows you to specify a message ID and a set of
          placeholders for replacement values. The message ID is used to look up
          the translated message, and the placeholders are replaced with the
          corresponding values.
        </p>
        <p>
          React Intl also provides a <b>FormattedNumber</b> component for
          formatting numbers, a <b>FormattedDate</b> component for formatting
          dates, and a <b>FormattedTime</b> component for formatting times.
        </p>
        <p>
          React Intl also provides a <b>IntlProvider</b> component that makes it
          easy to set the current locale and provide translations for your
          application.
        </p>
      </div>
      <div className="Box">
        <h1>What are the main features of React Intl?</h1>
        <p>
          #1 Formatting components: React Intl provides a set of higher-order
          components and hooks for formatting text, numbers, dates, and other
          data. These components automatically format and translate text based
          on the current locale.
        </p>
        <p>
          #2 Translation management: React Intl provides an API for managing
          translations, including support for pluralization, gender, and
          relative time. It allows you to specify a message ID and a set of
          placeholders for replacement values.
        </p>
        <p>
          #3 Pluralization: React Intl provides support for pluralization, which
          allows you to handle different forms of a word or phrase depending on
          the quantity of a number.
        </p>
        <p>
          #4 Gender: React Intl provides support for gender-specific
          translations, which allows you to handle different forms of a word or
          phrase depending on the gender of a person.
        </p>
        <p>
          #5 Relative time: React Intl provides support for formatting relative
          time, which allows you to display time in a human-readable format,
          such as "5 minutes ago" or "in 3 days".
        </p>
        <p>
          #6 Custom formatters: React Intl allows you to handle complex
          localization needs by providing custom formatters, allowing you to
          format and translate text in a way that suits your specific needs.
        </p>
        <p>
          #7 IntlProvider: React Intl provides a <b>IntlProvider</b> component
          that makes it easy to set the current locale and provide translations
          for your application.
        </p>
        <p>
          #8 Server-side rendering: React Intl supports server-side rendering,
          so your app can be pre-rendered with the correct translations on the
          server before being sent to the browser.
        </p>
      </div>
      <div className="Box">
        <h1>What are the two ways of formatting in React Intl?</h1>
        <p>
          #1 Higher-Order Components (HOC): React Intl provides a set of
          higher-order components and hooks that wrap your components and
          automatically format and translate text, numbers, dates, and other
          data based on the current locale. These components include{" "}
          <b>FormattedMessage</b> , <b>FormattedMessage</b>,{" "}
          <b>FormattedMessage</b>, and <b>FormattedMessage</b>.
        </p>
        <p>
          #2 API: React Intl also provides an API for formatting data, which
          allows you to format and translate text, numbers, dates, and other
          data in a programmatic way. This API is exposed via the intl object,
          which is passed as a prop to your components via the{" "}
          <b>IntlProvider</b> component.
        </p>
        <p>
          The most common way of formatting data is using the React Intl's HOC
          as it makes it easy to format and translate text, numbers, dates, and
          other data with minimal setup and configuration. The API is also
          useful in situations where you need more control over the formatting
          process, or you need to format and translate data in a more
          programmatic way.
        </p>
      </div>
      <div className="Box">
        <h1>
          How to use <b>FormattedMessage</b> as placeholder using React Intl?
        </h1>
        <p>
          You can use the <b>FormattedMessage</b> component as a placeholder in
          another <b>FormattedMessage</b> component by passing it as a value for
          a named parameter. Here's an example:
        </p>
        <img
          onClick={() => {
            setOpen(!open);
          }}
          className={open ? "Image" : "Image_Open"}
          src={Image77}
          alt=""
        />
        <p>
          In this example, the <b>FormattedMessage</b> component with the id of
          "greeting" is being rendered, which has a placeholder named name. The
          value of this placeholder is being replaced by another{" "}
          <b>FormattedMessage</b> component with the id of "userName".
        </p>
        <p>
          It's important to notice that the nested <b>FormattedMessage</b>{" "}
          component has its own id and defaultMessage properties, that will be
          used to look for the correct translation.
        </p>
        <p>
          You can also use variables as a placeholder, for example, if you have
          a variable called userName, you can use it as a placeholder value like
          this:
        </p>
        <img
          onClick={() => {
            setOpen(!open);
          }}
          className={open ? "Image" : "Image_Open"}
          src={Image78}
          alt=""
        />
        <p>
          This way the value of the variable userName will be used as a value
          for the placeholder in the translation message.
        </p>
      </div>
      <div className="Box">
        <h1>How to access current locale with React Intl?</h1>
        <p>
          In order to access the current locale with React Intl, you can use the{" "}
          <b>injectIntl</b> higher-order component (HOC) to inject the{" "}
          <b>intl</b> object, which contains the current locale, into your
          component's props. Here is an example of how to use the{" "}
          <b>injectIntl</b> HOC:
        </p>
        <img
          onClick={() => {
            setOpen(!open);
          }}
          className={open ? "Image" : "Image_Open"}
          src={Image79}
          alt=""
        />
      </div>
      <div className="Box">
        <h1>How to format date using React Intl?</h1>
        <p>
          In order to format a date using React Intl, you can use the{" "}
          <b>formatDate</b> method of the intl object, which is passed to your
          component via the <b>injectIntl</b> higher-order component (HOC). Here
          is an example of how to use the <b>formatDate</b> method
        </p>
        <img
          onClick={() => {
            setOpen(!open);
          }}
          className={open ? "Image" : "Image_Open"}
          src={Image80}
          alt=""
        />
        <p>
          In this example, <b>injectIntl</b> is used to wrap the{" "}
          <b>MyComponent</b> component, and the <b>intl</b> object is passed to
          the component via props. The <b>formatDate</b> method of the intl
          object is then used to format the date passed as an argument. You can
          also pass options to formatDate method like
        </p>
        <img
          onClick={() => {
            setOpen(!open);
          }}
          className={open ? "Image" : "Image_Open"}
          src={Image81}
          alt=""
        />
      </div>
      <div className="Box">
        <h1>What is Shallow Renderer in React testing?</h1>
        <p>
          Shallow renderer is a tool that allows you to test React components in
          isolation by rendering only the component itself and not its children.
          This can be useful in situations where you want to test the
          component's behavior and interactions without testing the behavior of
          its children.
        </p>
        <p>
          Here's an example of how you can use the shallow renderer to test a
          component:
        </p>
        <img
          onClick={() => {
            setOpen(!open);
          }}
          className={open ? "Image" : "Image_Open"}
          src={Image82}
          alt=""
        />
        <p>
          In this example, a new instance of the ShallowRenderer is created, and
          the MyComponent component is rendered using the render method. The{" "}
          <b>getRenderOutput</b> method is then used to retrieve the rendered
          component, which can be used to perform assertions and make sure that
          the component is rendered correctly.
        </p>
      </div>
      <div className="Box">
        <h1>What is Jest?</h1>
        <p>
          Jest is a popular JavaScript testing framework created by Facebook. It
          is a complete and easy to set-up JavaScript testing solution that
          works out of the box for any JavaScript project. It is widely used for
          unit testing and integration testing of React and React Native
          applications, but it can also be used to test any JavaScript code.
        </p>
        <p>
          Jest provides a powerful and flexible testing environment that allows
          you to write tests quickly and easily. It includes many features such
          as:
        </p>
        <ul>
          <li>Automatically finds and runs tests</li>
          <li>Provides a consistent and easy-to-use testing interface</li>
          <li>Built-in assertion library</li>
          <li>Snapshot testing</li>
          <li>Built-in code coverage reports</li>
          <li>Built-in support for mocking and spying</li>
          <li>Parallel test execution</li>
          <li>Support for TypeScript</li>
        </ul>
      </div>
      <div className="Box">
        <h1>What are the advantages of Jest over Jasmine?</h1>
        <p>
          Jest and Jasmine are both popular JavaScript testing frameworks, but
          Jest has some advantages over Jasmine. Some of the main advantages of
          Jest over Jasmine are:
        </p>
        <ul>
          <li>
            Jest is faster: Jest uses a more efficient algorithm for running
            tests, which makes it faster than Jasmine.
          </li>
          <li>
            Jest is more versatile: Jest is built with JavaScript in mind, it
            has a lot of utilities out of the box such as support for snapshot
            testing, and it works well with React and React Native. Jasmine, on
            the other hand, is more focused on testing web applications.
          </li>
          <li>
            Jest has better assertion library: Jest's assertion library has more
            features and is more user-friendly than Jasmine's.
          </li>
          <li>
            Jest's snapshot testing: allows you to capture the rendered output
            of a component and use it as a reference for future test, if the
            output changes unexpectedly, it will let you know.
          </li>
          <li>
            Jest has a built-in code coverage reporter: Jest can generate code
            coverage reports, which can be useful for understanding how much of
            your code is being tested. Jasmine does not have this feature
            built-in, but you can use third-party tools to get the same
            functionality.
          </li>
        </ul>
        <p>
          In summary, Jest is a more modern, versatile, and fast testing
          framework with a lot of out of the box functionality that allows for
          easy testing of JavaScript code.
        </p>
      </div>
      <div className="Box">
        <h1>Give a simple example of Jest test case</h1>
        <p>
          Here is a simple example of a Jest test case in a React component
          called <b>MyComponent</b>:
        </p>
        <img
          onClick={() => {
            setOpen(!open);
          }}
          className={open ? "Image" : "Image_Open"}
          src={Image83}
          alt=""
        />
        <p>
          In this example, the <b>test</b> function is used to create a test
          case. The first argument is a string describing the test case, and the
          second argument is a callback function that contains the actual test
          logic.
        </p>
      </div>
      <div className="Box">
        <h1>What is Redux?</h1>
        <p>
          Redux is a JavaScript library for managing the state of an
          application. It is often used with React to build complex, large-scale
          user interface applications. Redux is based on the principles of the
          Flux architecture, but it provides a more robust and powerful approach
          to state management.
        </p>
        <p>Redux has three main components:</p>
        <ul>
          <li>
            Store: A single JavaScript object that contains the entire state of
            the application. The store is the single source of truth for the
            state of the application.
          </li>
          <li>
            Actions: Represent the user's intent to change the data in the
            application. An action is a plain JavaScript object that describes
            the change.
          </li>
          <li>
            Reducers: Functions that specify how the state of the application
            should be updated in response to an action. They take in the current
            state and an action, and return the new state.
          </li>
        </ul>
        <p>
          In Redux, the data flow is unidirectional, meaning that data flows in
          a single direction through the application, from the action to the
          store and then to the view.
        </p>
        <p>
          One of the main benefits of Redux is that it makes it easy to reason
          about the state of an application. The store is the single source of
          truth, and the actions and reducers provide a clear and consistent way
          to handle updates to the state. Additionally, Redux makes it easy to
          implement features such as time-travel debugging and undo/redo
          functionality.
        </p>
      </div>
      <div className="Box">
        <h1>What are the core principles of Redux?</h1>
        <ul>
          <li>Store</li>
          <li>Action</li>
          <li>Reducer</li>
        </ul>
        <p></p>
      </div>
      <div className="Box">
        <h1>What are the downsides of Redux compared to Flux?</h1>
        <p>
          <b>Boilerplate</b>: Because Redux follows a more strict pattern for
          managing state, it can lead to more boilerplate code, particularly
          when it comes to setting up actions and reducers.{" "}
        </p>
        <p>
          <b>Steep learning curve</b>: The concepts behind Redux can be
          difficult to understand for developers new to the library, and it may
          take some time to fully grasp the principles behind the architecture.{" "}
        </p>
        <p>
          <b>Over-engineering</b>: Because Redux is a powerful library, it can
          be overused in smaller projects, resulting in unnecessary complexity
          and increased bundle size.{" "}
        </p>
        <p>
          Verbosity: Redux follows strict unidirectional data flow and
          immutability rules, which can lead to verbose and complex code,
          especially when dealing with nested data.{" "}
        </p>
        <p>
          It's worth noting that these downsides are more about the complexity
          and learning curve of the library, and less about its performance, as
          Redux is highly performant and scales well with large applications.
        </p>
      </div>
      <div className="Box">
        <h1>
          What is the difference between mapStateToProps() and
          mapDispatchToProps()?
        </h1>
        <p>
          <b>mapStateToProps()</b> and <b>mapDispatchToProps()</b> are both
          functions that are used in the <b>connect()</b> function from the
          react-redux library to connect a React component to the Redux store.{" "}
        </p>
        <p>
          <b>mapStateToProps()</b> is used to map the current state from the
          store to the props of the component. It takes the current state as an
          argument and returns an object that maps the state to the props of the
          component. For example, if you have a piece of the state that
          represents a user, you could map it to the props using:
        </p>
        <img src={Image99} alt="" />
        <p>
          <b> mapDispatchToProps()</b> is used to map the dispatch function to
          the props of the component. It takes the dispatch function as an
          argument and returns an object that maps the dispatch function to the
          props of the component. This allows the component to dispatch actions
          to the store and update the state. For example, you could map the
          dispatch function to a prop called <b>dispatchAction</b> like this:
        </p>
        <img src={Image100} alt="" />
        <p>
          In short, <b>mapStateToProps</b> is used to connect the state of the
          store to the props of the component, and <b>mapDispatchToProps</b> is
          used to connect the dispatch function to the props of the component.
        </p>
      </div>
      <div className="Box">
        <h1>Can I dispatch an action in reducer?</h1>
        <p>
          No, dispatching an action should only be done in the component or in
          an action creator. In a reducer, the only thing that should be done is
          updating the state based on the action that was dispatched. The
          reducer should be a pure function that takes in the current state and
          an action, and returns the new state. Dispatching an action within a
          reducer would create an infinite loop, as it would trigger another
          update to the state, causing the reducer to be called again.
        </p>
      </div>
      <div className="Box">
        <h1>What are the drawbacks of MVW pattern?</h1>
        <p>
          {" "}
          <b>The Model-View-Whatever</b> (MVW) pattern, also known as the{" "}
          <b>Model-View-ViewModel</b> (MVVM) pattern, is a popular architectural
          pattern for building user interfaces. However, it does have some
          drawbacks:
        </p>
        <ul>
          <li>
            {" "}
            <b>Complexity</b>: The MVW pattern can add a lot of complexity to a
            project, especially when dealing with large and complex data models.
          </li>
          <li>
            <b>Testability</b>: Because the ViewModel often contains the logic
            for handling user interactions and updating the view, it can be
            difficult to write unit tests for this component.{" "}
          </li>
          <li>
            <b>Debugging</b>: Debugging can be difficult as it requires tracing
            the flow of data and events through multiple components.{" "}
          </li>
          <li>
            <b>Learning curve</b>: The MVW pattern can be difficult to learn and
            understand, especially for developers who are new to it.
          </li>
          <li>
            <b>Over-architecture</b>: When over-architecting, it is easy to end
            up with a lot of unnecessary boilerplate code that does not add any
            value to the project.{" "}
          </li>
        </ul>
        <p>
          That being said, it's worth noting that most of these issues can be
          mitigated with the right implementation, testing and debugging
          practices.
        </p>
      </div>
      <div className="Box">
        <h1>Are there any similarities between Redux and RxJS?</h1>
        <p>
          Yes, there are similarities between Redux and RxJS. Both are libraries
          that are used to manage the state of an application and handle the
          flow of data through the application.
        </p>
        <p>
          {" "}
          <b>Redux</b> is a library for managing the state of a JavaScript
          application. It uses a centralized store to hold the state of the
          application and a set of reducer functions to update the state in
          response to actions.
        </p>
        <p>
          <b>RxJS </b> is a library for working with reactive programming in
          JavaScript. It allows you to create and manipulate streams of data,
          and to handle the flow of data through an application using
          observables and operators.
        </p>
        <p>
          Both Redux and RxJS can be used to manage the state of an application
          and handle the flow of data, but they approach the problem from
          slightly different angles. Redux is focused on managing the state of
          the application using a centralized store, while RxJS is focused on
          handling the flow of data using observables and operators.
        </p>
      </div>
      <div className="Box">
        <h1>How to dispatch an action on load?</h1>
        <p>
          In a Redux application, you can dispatch an action on load by calling
          the <b>dispatch</b> function and passing it the action you want to
          dispatch, in the lifecycle method of your React component such as{" "}
          <b>componentDidMount()</b> or in your main index.js file.
        </p>
        <p>
          Here is an example of how you might dispatch an action on load in a
          React component:
        </p>
        <img src={Image101} alt="" />
        <p>
          In this example, the <b>loadData</b> action is imported from a
          separate actions file and passed to the <b>dispatch</b> function. The{" "}
          <b>useEffect</b> hook is used to ensure that the action is dispatched
          when the component is first loaded.
        </p>
        <p>
          Alternatively, you can use the <b>store.dispatch </b> method in your
          main index.js file
        </p>
        <img src={Image102} alt="" />
        <p>
          In this example, the <b>loadData</b> action is imported from a
          separate actions file and passed to the <b>store.dispatch</b> method
          after the store is created.
        </p>
      </div>
      <div className="Box">
        <h1>How to use connect() from React Redux?</h1>
        <p>
          <b>connect</b> is a higher-order component (HOC) provided by the{" "}
          <b> react-redux</b> library that allows you to connect a React
          component to the Redux store.
        </p>
        <p>
          Here is an example of how you might use <b>connect</b> to connect a
          component to the store:
        </p>
        <img src={Image103} alt="" />
        <p>
          In this example, the <b>connect</b> function is used to connect the{" "}
          <b>MyComponent</b> component to the store. The <b>mapStateToProps</b>{" "}
          function is used to specify which pieces of the store's state should
          be passed to the component as props, and the <b>mapDispatchToProps</b>{" "}
          function is used to specify which actions should be passed to the
          component as props.
        </p>
        <p>
          You can also use the shorthand syntax of <b>connect</b> by passing an
          object with <b>mapStateToProps</b> and <b>mapDispatchToProps</b>{" "}
          properties.
        </p>
        <img src={Image104} alt="" />
        <p>
          Once the component is connected to the store, it will re-render any
          time the state or props change, and the component will have access to
          the data and loadData props. You can use the <b>data</b> and the{" "}
          <b>loadData</b> as props in your component and can use the loadData as
          a callback function to dispatch the loadData action.
        </p>
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
        <p>
          React and React Native are both libraries created by Facebook, but
          they are used for different purposes.
        </p>
        <p>
          React is a JavaScript library for building user interfaces on the web.
          It allows developers to build reusable UI components and manage the
          state of an application in a way that is efficient and easy to
          understand. React uses a virtual DOM (Document Object Model) to
          efficiently update the UI when the state of an application changes.
        </p>
        <p>
          React Native, on the other hand, is a framework for building mobile
          applications using React. It allows developers to use the same
          concepts and components that they use when building web applications
          with React, but it renders natively on iOS and Android platforms. With
          React Native, developers can create mobile applications that have the
          performance and look-and-feel of traditional, native mobile apps.
        </p>
        <p>
          In summary, React is used for building web applications and React
          Native is used for building mobile applications. Both use the same
          concepts and components, but React Native provides additional features
          and APIs to interact with the native capabilities of mobile devices.
        </p>
      </div>
      <div className="Box">
        <h1>What is reselect and how it works?</h1>
        <p>
          Reselect is a small library for creating memoized, composable
          selectors in JavaScript. It is commonly used in combination with Redux
          to select and transform data from the store.
        </p>
        <p>
          In summary, Reselect is a useful library for creating memoized,
          composable selectors that allows to efficiently select and transform
          data from the store. It can be used with any state management library,
          but it is commonly used with Redux.
        </p>
      </div>
      <div className="Box">
        <h1>What is Flow?</h1>
        <p>
          Flow is a programming language developed by Facebook for building user
          interfaces. It is a static type checker that helps catch errors before
          they run. Flow is built on top of JavaScript and is used to add type
          annotations to JavaScript code. This allows developers to catch type
          errors at development time, making the code more predictable and
          easier to debug. Flow is often used in conjunction with React.
        </p>
      </div>
      <div className="Box">
        <h1>What is the difference between Flow and PropTypes?</h1>
        <p>
          Flow and PropTypes are both tools that can be used to add type
          checking to JavaScript code, but they have some key differences.
        </p>
        <p>
          Flow is a static type checker that is built on top of JavaScript. It
          works by adding type annotations to the code, which are then checked
          at development time. Flow provides a more powerful type system than
          JavaScript, and it can catch a wider range of errors before the code
          runs.
        </p>
        <p>
          PropTypes is a built-in feature of React, a JavaScript library for
          building user interfaces. It works by specifying the expected types of
          component props, and it checks that the props passed to the component
          match those types at runtime. PropTypes is less powerful than Flow,
          and it can only catch a subset of the errors that Flow can catch.
        </p>
      </div>
      <div className="Box">
        <h1>How to use Polymer in React?</h1>
        <p>
          Polymer is a JavaScript library for building web components and can be
          used in a React application. However, it's important to note that
          React and Polymer are different libraries with different approaches to
          building user interfaces. React uses a virtual DOM and a declarative
          approach to building components, while Polymer uses web components and
          a imperative approach.
        </p>
        <p>
          It's also worth noting that Polymer is in a deprecation process, and
          it's not recommended to use it in new projects.
        </p>
      </div>
      <div className="Box">
        <h1>What are the advantages of React over Vue.js?</h1>
        <p>
          React and Vue.js are both popular JavaScript libraries for building
          user interfaces, but they have some key differences in terms of
          features and approach. Some advantages of React over Vue.js are:
        </p>
        <ul>
          <li>
            Large Community: React has been around for longer and has a larger
            community, which means more resources, tutorials, and libraries
            available. This can make it easier to find help or solutions to
            problems.
          </li>
          <li>
            Popularity: React is more popular among the large enterprises and
            companies, this means that React has a large number of job
            opportunities and a wide range of companies are using it.
          </li>
          <li>
            Performance: React uses a virtual DOM, which can improve the
            performance of large and complex applications by reducing the amount
            of DOM manipulation.
          </li>
          <li>
            Server-side rendering: React has built-in support for server-side
            rendering, which can improve the initial loading time of an
            application and make it more SEO-friendly.
          </li>
          <li>
            JSX: React uses JSX, a syntax extension for JavaScript, which allows
            you to write HTML-like elements directly in your JavaScript code,
            making it easier to reason about the structure of your component.
          </li>
          <li>
            Flexibility: React allows developers to use it in a variety of ways,
            such as using it with other libraries, like redux for state
            management, or using it with web components, this allows developers
            to pick and choose the libraries that work best for their project.
          </li>
          <li>
            Reusable Components: React encourages the use of reusable
            components, which allows for a more modular and maintainable
            codebase.
          </li>
          <li>
            Testing: React has a great testing ecosystem and a lot of testing
            libraries are available, like Jest, Enzyme, and others, which makes
            it easy to test the application and its components.
          </li>
        </ul>
      </div>
      <div className="Box">
        <h1>What is the difference between React and Angular?</h1>
        <p>
          React and Angular are both JavaScript libraries for building user
          interfaces. However, they have some key differences in terms of their
          design and usage.
        </p>
        <p>
          React, developed by Facebook, is a library for building reusable UI
          components. It uses a virtual DOM (Document Object Model) to improve
          performance by limiting the amount of DOM manipulation required. React
          focuses on the component-based structure of an application, making it
          easy to build and maintain large-scale applications.
        </p>
        <p>
          Angular, developed by Google, is a full-featured framework for
          building web applications. It includes a powerful template language
          and a set of built-in directives for building dynamic UI. Angular uses
          a two-way data binding mechanism, which automatically synchronizes the
          data between the model and the view. Angular is more opinionated than
          React, meaning that it provides a set of conventions and patterns for
          structuring and building applications.
        </p>
        <p>
          In summary, React is a library for building UI components, while
          Angular is a full-featured framework for building web applications.
          React is more flexible and can be integrated with other libraries or
          frameworks, while Angular has a more opinionated structure.
        </p>
      </div>
      <div className="Box">
        <h1>Why React tab is not showing up in DevTools?</h1>
        <p>
          There are a few reasons why the React tab may not be showing up in
          DevTools:
        </p>
        <p>
          #1 <b>React Developer Tools is not installed</b>: Make sure that you
          have the React Developer Tools browser extension installed. You can
          find it in the Chrome Web Store or the Firefox Add-ons Marketplace.
        </p>
        <p>
          #2 <b>React is not being used in the current page</b>: The React
          Developer Tools extension only works on pages that are using React. If
          the current page does not have React, the React tab will not appear.
        </p>
        <p>
          #3 <b>React is being used in production mode</b>: The React Developer
          Tools extension only works with development builds of React. If the
          page is using a production build, the React tab will not appear.
        </p>
        <p>
          #4 <b>Incorrect version of React Developer Tools</b>: Make sure you
          have the latest version of React Developer Tools and that it is
          compatible with the version of React that you are using.
        </p>
        <p>
          #5 <b>Incorrectly imported React</b>: If React is imported in a way
          that is not compatible with the React Developer Tools, the tab may not
          show up. Make sure you are importing React correctly.{" "}
        </p>
        <p>
          #6 <b>The DevTools are not open</b>: Make sure that you have the
          DevTools open in your browser while you are on the page that is using
          React.{" "}
        </p>
        <p>
          If none of the above solutions work, you may want to try disabling any
          browser extensions that could be interfering with the React Developer
          Tools and then restarting your browser.
        </p>
      </div>
      <div className="Box">
        <h1>What are Styled Components?</h1>
        <p>
          Styled Components are a way to create and manage CSS styles in a React
          application. They allow you to write CSS styles in JavaScript and
          apply them directly to your components. This approach can help to
          improve the modularity and reusability of your styles, making it
          easier to maintain and scale your application.
        </p>
      </div>
      <div className="Box">
        <h1>Give an example of Styled Components?</h1>
        <p>
          Here is an example of how you can use Styled Components to create a
          reusable button component in a React application:
        </p>
        <img
          onClick={() => {
            setOpen(!open);
          }}
          className={open ? "Image" : "Image_Open"}
          src={Image84}
          alt=""
        />
      </div>
      <div className="Box">
        <h1>What is Relay?</h1>
        <p>
          Relay is a JavaScript framework developed by Facebook for building
          data-driven React applications. It is used to efficiently manage the
          data required by a React application and handle the communication with
          the server.
        </p>
        <p>
          One of the main advantages of Relay is that it allows you to
          declaratively specify the data requirements of your components, which
          makes it easier to reason about the data flow in your application. It
          also helps to avoid common problems such as over-fetching or
          under-fetching of data, and makes it easier to add new features or
          make changes to the data without affecting the rest of the
          application.
        </p>
      </div>
      <div className="Box">
        <h1>How to use TypeScript in create-react-app application?</h1>
        <p>
          you can convert an existing create-react-app application to TypeScript
          by using the react-scripts-ts package, which is an alternative set of
          scripts for building React applications with TypeScript.
        </p>
        <p>You can install it by running the following command:</p>
        <img
          onClick={() => {
            setOpen(!open);
          }}
          className={open ? "Image" : "Image_Open"}
          src={Image85}
          alt=""
        />
        <p>
          Then you can replace the <b>react-scripts</b> package in your
          package.json file with <b>react-scripts-ts</b>.
        </p>
        <img
          onClick={() => {
            setOpen(!open);
          }}
          className={open ? "Image" : "Image_Open"}
          src={Image86}
          alt=""
        />
        <p>
          You should also rename your .js files to .tsx files and also you may
          need to update the file imports and types in your codebase
          accordingly.
        </p>
      </div>
      <div className="Box">
        <h1>What are the main features of Reselect library?</h1>
        <p>
          Reselect is a library for creating efficient and composable
          "selectors" in a Redux-based application. Some of the main features of
          Reselect include:
        </p>
        <p>
          #1 <b>Memoization</b>: Selectors are automatically memoized, which
          means that their results are cached and only recalculated when their
          input data (also known as "dependencies") changes. This can greatly
          improve the performance of an application by reducing the number of
          unnecessary re-renders.{" "}
        </p>
        <p>
          #2 <b>Composability</b>: Selectors can be composed together to create
          more complex selectors, allowing for modular and reusable code.{" "}
        </p>
        <p>
          #3 <b>Input selectors</b>: Selectors can be defined to extract
          specific pieces of data from the Redux store, making it easy to access
          the data needed for a particular component or action.
        </p>
        <p>
          #4 <b>Performance optimization</b>: Reselect provides a way to
          optimize the performance of your selectors, as well as providing a way
          to check the performance of your selectors.{" "}
        </p>
      </div>
      <div className="Box">
        <h1>Does the statics object work with ES6 classes in React?</h1>
        <p>
          In React, the <b>statics</b> object can be used to define{" "}
          <b>static</b> methods and properties on a component class. However,
          the statics object is not supported in ES6 classes by default.
          Instead, you would need to use the <b>Object.assign()</b> method or
          the <b>class properties</b> proposal to define static methods and
          properties on an ES6 class.
        </p>
      </div>
      <div className="Box">
        <h1>Can Redux only be used with React?</h1>
        <p>
          No, Redux can be used with any JavaScript framework or library, not
          just React. It is a standalone library that can be used to manage the
          state of your application in a predictable way. It is often used in
          conjunction with React, but it is not limited to it.
        </p>
      </div>
      <div className="Box">
        <h1>Do you need to have a particular build tool to use Redux?</h1>
        <p>
          No, you do not need to have a particular build tool to use Redux.
          Redux can be added to your project by installing it via npm or yarn
          and importing it into your JavaScript file.{" "}
        </p>
      </div>
      <div className="Box">
        <h1>Can I import an SVG file as react component?</h1>
        <p>
          Yes, you can import an SVG file as a React component. One way to do
          this is to use the <b>import</b> statement to import the SVG file, and
          then use the JSX <b>img</b> or <b>svg</b> element to include it in
          your component's render method.
        </p>
        <img
          onClick={() => {
            setOpen(!open);
          }}
          className={open ? "Image" : "Image_Open"}
          src={Image87}
          alt=""
        />
      </div>
      <div className="Box">
        <h1>Why are inline ref callbacks or functions not recommended?</h1>
        <p>
          Inline ref callbacks or functions (i.e., passing a function directly
          as the ref prop) are not recommended for a few reasons:
        </p>
        <p>
          #1 They can cause unnecessary re-renders of the component when the ref
          callback is invoked, which can negatively impact performance.
        </p>
        <p>
          #2 They can make the code harder to read and understand, as the ref
          callback is defined inline rather than in a separate method or
          variable.
        </p>
        <p>
          #3 They may be less flexible, as they can only be used to create a
          single ref per component instance.
        </p>
        <p></p>
      </div>
      <div className="Box">
        <h1>What is render hijacking in react?</h1>
        <p>
          In React, "render hijacking" refers to the practice of overriding the
          built-in render method of a component in order to change its behavior.
          This is considered an anti-pattern because it can make the code harder
          to understand and maintain.
        </p>
        <p>
          It is generally recommended to use other React features, such as
          props, state, and hooks, to control the behavior of a component. This
          makes the code more predictable and easier to understand.
        </p>
      </div>
      <div className="Box">
        <h1>What are HOC factory implementations?</h1>
        <p>
          A Higher-Order Component (HOC) is a function that takes a component as
          an argument and returns a new component that wraps the original one.
          HOCs are a powerful pattern in React that allows you to reuse
          component logic and add additional functionality to a compone
        </p>
        <p>
          HOC factory implementations are a variation of HOCs that allow you to
          pass in some arguments or options to the HOC factory function, which
          will then use them to configure the HOC before it returns it.
        </p>
        <p>Here's an example of how a HOC factory might be implemented:</p>
        <img
          onClick={() => {
            setOpen(!open);
          }}
          className={open ? "Image" : "Image_Open"}
          src={Image88}
          alt=""
        />
        <p>
          In this example, the <b>withAuth</b> function is an HOC factory that
          takes two arguments: a <b>WrappedComponent</b> and an <b>authType</b>.
          The withAuth function returns a new component that wraps the
          WrappedComponent and adds an <b>isAdmin</b> prop to it, depending on
          the value of <b>authType</b>.
        </p>
        <p>
          HOC factory implementation can be useful in situations where the HOC
          behavior needs to be configurable, or where you want to reuse HOC code
          for different components with different configurations. This can help
          you to avoid code duplication and keep your code more organized and
          maintainable.
        </p>
      </div>
      <div className="Box">
        <h1>How to pass numbers to React component?</h1>
        <p>
          In React, you can pass numbers as props to a component just like you
          would pass any other type of data.
        </p>
        <p>
          Here's an example of how you might pass a number as a prop to a
          component:
        </p>
        <img
          onClick={() => {
            setOpen(!open);
          }}
          className={open ? "Image" : "Image_Open"}
          src={Image89}
          alt=""
        />
        <p>
          In this example, the number 25 is being passed as a prop called age to
          the MyComponent component.
        </p>
        <p>You can also pass numbers as a variable like this:</p>
        <img
          onClick={() => {
            setOpen(!open);
          }}
          className={open ? "Image" : "Image_Open"}
          src={Image90}
          alt=""
        />
      </div>
      <div className="Box">
        <h1>
          Do I need to keep all my state into Redux? Should I ever use react
          internal state?
        </h1>
        <p>
          It is not necessary to keep all state in Redux, and it may not always
          be the best approach. While Redux is a powerful tool for managing
          application-wide state, it is not always the best fit for every use
          case.
        </p>
        <p>
          React's internal state can be used for local state that is specific to
          a single component and does not need to be shared with other
          components. This can include things like form input values, toggle
          states, and other small pieces of data that are only used within the
          component.
        </p>
        <p>
          When deciding whether to use React's internal state or Redux, it's
          important to consider the scope of the state and how it will be used.
          If the state is only used within a single component and does not need
          to be shared with other components, then React's internal state is
          likely the better choice. On the other hand, if the state is needed by
          multiple components or needs to be shared across different parts of
          the application, then using Redux may be more appropriate.
        </p>
        <p>
          In general, it's a good practice to start with React's internal state
          and evaluate if it's necessary to move the state to a global store
          like Redux, as the complexity of the application increases.
        </p>
      </div>
      <div className="Box">
        <h1>What is the purpose of registerServiceWorker in React?</h1>
        <p>
          In a React application, the <b>registerServiceWorker</b> function is
          used to register a service worker. A service worker is a script that
          runs in the background of a web page and can be used to improve the
          performance and offline capabilities of a React application.
        </p>
        <p>
          When a service worker is registered, it can handle network requests,
          cache assets, and provide offline functionality to the application.
          This can improve the load time of the application, as assets can be
          served from the cache instead of the network, and the application can
          continue to work even when there is no internet connection.
        </p>
        <p>
          The <b>registerServiceWorker</b> function is typically called in the{" "}
          <b>index.js</b> file of a React application. It is usually imported
          from a separate file called <b>registerServiceWorker.js</b> which is
          generated by Create React App (CRA) or other tooling that uses service
          worker.
        </p>
        <p>
          Here's an example of how the <b>registerServiceWorker</b> function
          might be used in a React application:
        </p>
        <img
          onClick={() => {
            setOpen(!open);
          }}
          className={open ? "Image" : "Image_Open"}
          src={Image91}
          alt=""
        />
      </div>
      <div className="Box">
        <h1>What is React memo function?</h1>
        <p>
          {" "}
          <b>React.memo</b> is a higher-order component (HOC) that is used to
          optimize the performance of functional components in React. It is used
          to <b>"memoize"</b> a component, which means that it will only
          re-render the component if its props have changed.
        </p>
        <p>
          By default, React will re-render a component whenever its parent
          component re-renders, even if the props have not changed. This can
          cause unnecessary re-renders and negatively impact performance,
          especially in large or complex applications.
        </p>
        <p>
          The <b>React.memo</b> function takes a functional component as an
          argument and returns a new component that is "memoized" (i.e.,
          optimized for performance). The new component will only re-render if
          its props have changed, which can significantly improve the
          performance of the application.
        </p>
        <p>
          Here's an example of how you might use <b>React.memo</b> to optimize a
          functional component:
        </p>
        <img
          onClick={() => {
            setOpen(!open);
          }}
          className={open ? "Image" : "Image_Open"}
          src={Image92}
          alt=""
        />
        <p>
          In this example, the <b>MyComponent</b> component is wrapped in a call
          to <b>React.memo</b>, which will prevent it from re-rendering unless
          its <b>name</b> or <b>age</b> props have changed.
        </p>
        <p>
          It's worth noting that <b>React.memo</b> only works with functional
          components, if you are working with class components, you can use{" "}
          <b>React.PureComponent</b> instead, which implements a shallow
          comparison of the props and state, so it will only re-render if the
          props or state have changed.
        </p>
      </div>
      <div className="Box">
        <h1>What is React lazy function?</h1>
        <p>
          React.lazy is a function that allows you to load a component lazily,
          i.e, only when it is needed. This can improve the performance of your
          application by preventing unnecessary code from being loaded at the
          initial render. It works in conjunction with the Suspense component,
          which allows you to add a fallback while the lazy component is being
          loaded.
        </p>
      </div>
      <div className="Box">
        <h1>How to prevent unnecessary updates using setState?</h1>
        <p>
          In order to prevent unnecessary updates when using <b>setState</b> in
          React, you can use the <b>shouldComponentUpdate</b> lifecycle method.
          This method allows you to compare the current props and state to the
          next props and state that will be received, and return <b>false</b> if
          the component does not need to re-render. Additionally, you can use
          the <b>React.memo</b> higher order component or the <b>useMemo</b>{" "}
          hook to memoize the component and prevent unnecessary re-renders.
        </p>
      </div>
      <div className="Box">
        <h1>
          How do you render Array, Strings and Numbers in React 16 Version?
        </h1>
        <p>
          In React 16, you can render arrays, strings, and numbers using the{" "}
          <b>map</b> method, the <b>join</b> method, and the <b>{}</b> curly
          braces, respectively.
        </p>
        <p>
          To render an array of elements, you can use the <b>map</b> method to
          iterate over the array and return a new array of JSX elements. For
          example:
        </p>
        <img
          onClick={() => {
            setOpen(!open);
          }}
          className={open ? "Image" : "Image_Open"}
          src={Image93}
          alt=""
        />
        <p>
          To render a string, you can simply use the curly braces <b>{}</b> to
          enclose the string. For example:
        </p>
        <img
          onClick={() => {
            setOpen(!open);
          }}
          className={open ? "Image" : "Image_Open"}
          src={Image94}
          alt=""
        />
        <p>
          To render a number, you can also use the curly braces <b>{}</b> to
          enclose the number. For example:
        </p>
        <img
          onClick={() => {
            setOpen(!open);
          }}
          className={open ? "Image" : "Image_Open"}
          src={Image95}
          alt=""
        />
      </div>
      <div className="Box">
        <h1>How to use class field declarations syntax in React classes?</h1>
        <p>
          In React, you can use class field declarations syntax to declare class
          fields and methods in a class-based component. This syntax allows you
          to define class fields and methods directly in the class body without
          the need to use a constructor.
        </p>
        <p>
          Here is an example of how you can use class field declarations syntax
          to declare a state field and a method in a class-based component:
        </p>
        <img
          onClick={() => {
            setOpen(!open);
          }}
          className={open ? "Image" : "Image_Open"}
          src={Image96}
          alt=""
        />
        <p>
          In this example, <b>state</b> is a class field that is initialized
          with an object containing the <b>count</b> field, and{" "}
          <b>handleClick</b> is a class method that updates the <b>count</b>{" "}
          field in the state.
        </p>
        <p>
          Please note that class field declarations syntax is not supported in
          all environments, so you may need to use a transpiler like Babel to
          transpile the code if you are not using a recent version of
          JavaScript.
        </p>
      </div>
      <div className="Box">
        <h1>What are hooks?</h1>
        <p>
          Hooks are a new feature in React that allows you to use state and
          other React features in functional components, rather than just in
          class-based components.
        </p>
        <p>There are two main types of hooks:</p>
        <p>
          #1 State hooks: <b>useState</b> is the basic hook for state management
          in a functional component. It allows you to add state to your
          functional component, and update it with <b>setState</b> -like
          functions.
        </p>
        <img
          onClick={() => {
            setOpen(!open);
          }}
          className={open ? "Image" : "Image_Open"}
          src={Image97}
          alt=""
        />
        <p>
          #2 Effect hooks: <b>useEffect</b> is the basic hook for side effects
          management in a functional component. It allows you to synchronize a
          component with an external system, and handle lifecycle events such as
          componentDidMount and componentDidUpdate.
        </p>
        <img
          onClick={() => {
            setOpen(!open);
          }}
          className={open ? "Image" : "Image_Open"}
          src={Image98}
          alt=""
        />
        <p>
          There are many other hooks like <b>useContext</b> , <b>useReducer</b>{" "}
          , <b>useCallback</b> , <b>useMemo</b> , etc.
        </p>
        <p>
          Hooks provide a way to use state and other React features in
          functional components, making your code more readable and
          maintainable. They also make it easier to share logic between
          components, and to test components in isolation.
        </p>
        <p>
          You can use hooks by calling the hook functions in your functional
          components, and providing the necessary arguments to the hook. It is
          important to note that hooks can only be called at the top level of
          your component and not inside loops, conditions or nested function.
        </p>
      </div>
      <div className="Box">
        <h1>What rules need to be followed for hooks?</h1>
        <p>
          In general, hooks in React are used to allow functional components to
          have access to state and lifecycle methods. Some rules that need to be
          followed when using hooks include:
        </p>
        <ul>
          <li>
            {" "}
            <b>Only call hooks at the top level</b>: Hooks should only be called
            at the top level of your component or custom hook, not inside loops
            or conditions.
          </li>
          <li>
            {" "}
            <b>Only call hooks from React functions</b>: Hooks should only be
            called from React functional components or other custom hooks.{" "}
          </li>
          <li>
            {" "}
            <b>Follow the order of hooks</b>: Hooks should be called in the same
            order in every component where they are used, to avoid
            inconsistencies in the component's state.{" "}
          </li>
          <li>
            {" "}
            <b>Avoid using stateful logic in loops</b>: Instead of using
            stateful logic in loops, use the useState or useReducer hooks to
            manage state.{" "}
          </li>
          <li>
            {" "}
            <b>Avoid using useEffect to create a new state variable</b>: Instead
            of creating a new state variable in useEffect, use useState or
            useReducer to manage state.{" "}
          </li>
        </ul>
      </div>
      <div className="Box">
        <h1>How to ensure hooks followed the rules in your project?</h1>
        <p>
          There are several ways to ensure that hooks are being used correctly
          in a React project:
        </p>
        <ul>
          <li>
            {" "}
            <b>Use linting</b>: Use a linter like ESLint with the
            eslint-plugin-react-hooks plugin to catch potential issues with
            hooks. This can help enforce the rules around hooks, such as only
            calling hooks at the top level and only calling hooks from React
            functions.{" "}
          </li>
          <li>
            {" "}
            <b>Use a testing framework</b>: Use a testing framework like Jest
            and Enzyme to test your components and ensure that they are using
            hooks correctly. This can help catch issues like calling hooks in
            the wrong order or using stateful logic in loops.{" "}
          </li>
          <li>
            {" "}
            <b>Code review</b>: Use code review to ensure that other developers
            in your team are following the rules around hooks. This can help
            catch issues that may not be caught by linting or testing.{" "}
          </li>
          <li>
            {" "}
            <b>Use type checking</b>: Use a type checker like TypeScript to
            catch issues with hooks. This can help catch issues like passing the
            wrong types of data to hooks and using hooks in the wrong context.{" "}
          </li>
          <li>
            {" "}
            <b>Use development tools</b>: Use development tools like React
            DevTools to debug your application and ensure that your hooks are
            working as expected.{" "}
          </li>
        </ul>
        <p>
          By following these steps, you can ensure that hooks are being used
          correctly in your project and avoid potential issues that may arise
          from improper use.
        </p>
      </div>
      <div className="Box">
        <h1>What are the differences between Flux and Redux?</h1>
        <p>
          Flux and Redux are both architectures for managing the state of a
          JavaScript application, but they have some key differences:
        </p>
        <ul>
          <li>
            <b>Flux</b> is a design pattern, whereas <b>Redux</b> is a library:{" "}
            <b>Flux</b> is a pattern for managing application state and actions,
            whereas <b>Redux</b> is a library that implements the <b>Flux</b>{" "}
            pattern.
          </li>
          <li>
            <b>Flux</b> has multiple stores, whereas <b>Redux</b> has a single
            store: In <b>Flux</b>, the application state is split into multiple
            stores, each responsible for a specific domain. In contrast,{" "}
            <b>Redux</b> uses a single store to manage the entire application
            state.{" "}
          </li>
          <li>
            <b>Flux</b> has a central dispatcher, whereas <b>Redux</b> uses
            reducers: In <b>Flux</b>, a central dispatcher is used to handle all
            actions and update the stores. In <b>Redux</b>, the state updates
            are handled by pure functions called reducers.
          </li>
          <li>
            <b>Flux</b> allows for many-to-many relationships between stores,
            while <b>Redux</b> follows one-way data flow: In <b>Flux</b>, stores
            can listen to other stores and respond to their changes, while in{" "}
            <b>Redux</b>, state changes are triggered by actions and are handled
            by reducers.
          </li>
          <li>
            <b>Redux</b> provides a way to handle middleware and async actions:{" "}
            <b>Redux</b> provides a way to handle middleware and async actions
            using middleware libraries like <b>Redux</b>-thunk and <b>Redux</b>
            -saga which enables for easier handling of async actions and side
            effects.
          </li>
        </ul>
        <p>
          Both Flux and Redux are designed to make it easier to manage the state
          of a JavaScript application, but they have different approaches and
          trade-offs. Redux is more popular because it is easier to learn and
          use, and it has better performance and developer tools.
        </p>
      </div>
      <div className="Box">
        <h1>What are the benefits of React Router V4?</h1>
        <p>
          React Router v4 is a library for client-side routing in React
          applications. Some of the benefits of using React Router v4 include:
        </p>
        <ul>
          <li>
            {" "}
            <b>Dynamic Routing</b>: Allows to define dynamic routes that can
            match any number of URL patterns, making it easy to handle complex
            routing scenarios.
          </li>
          <li>
            <b>Components-based approach</b>: Instead of using a configuration
            object, React Router v4 uses a components-based approach, which
            makes it easier to understand and reason about the routing of an
            application.
          </li>
          <li>
            {" "}
            <b>Server-side rendering support</b>: React Router v4 is designed to
            work seamlessly with server-side rendering, which makes it easy to
            build fast, high-performing applications.
          </li>
          <li>
            {" "}
            <b>Nested Routes</b>: Allows to nest routes, making it easy to
            create complex navigation structures with minimal boilerplate code.
          </li>
          <li>
            {" "}
            <b>Code splitting</b>: Allows to split the code of an application
            into smaller chunks, which can be loaded on demand, reducing the
            initial load time and improving performance.
          </li>
          <li>
            {" "}
            <b>Flexible and easy to use</b>: React Router v4 is flexible and
            easy to use, it allows developers to define and manage routes in a
            declarative and composable way.
          </li>
          <li>
            {" "}
            <b>Good documentation</b>: Has a good documentation, examples and
            community support, which helps developers to quickly learn and
            implement it in their projects.
          </li>
          <li>
            {" "}
            <b>It can work with any other libraries</b>: React Router v4 doesn't
            force you to use any specific libraries, it can work with any other
            libraries that you choose to use in your project.
          </li>
        </ul>
        <p>
          React Router v4 provides a powerful and flexible way to handle
          client-side routing in React applications, which makes it easier to
          build fast, high-performing, and well-organized applications.
        </p>
      </div>
    </div>
  );
};

export default App;
