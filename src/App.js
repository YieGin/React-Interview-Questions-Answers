import React from "react";
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

const App = () => {
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
        <img src={Image6} alt="" />
        <p>Here's an example of a class-based component:</p>
        <img src={Image7} alt="" />
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
        <img src={Image8} alt="" />
        <p>
          Alternatively, you can use an <b>arrow function</b> in the callback to
          ensure that the correct this value is used:
        </p>
        <img src={Image9} alt="" />
      </div>
      <div className="Box">
        <h1>How to pass a parameter to an event handler or callback?</h1>
        <p>
          There are several ways to pass a parameter to an event handler or
          callback in JavaScript. Here are three common approaches:
        </p>
        <p>Using an anonymous function:</p>
        <img src={Image10} alt="" />
        <p>Using an arrow function:</p>
        <img src={Image11} alt="" />
        <p>Using the bind method:</p>
        <img src={Image12} alt="" />
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
        <img src={Image14} alt="" />
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
        <img src={Image13} alt="" />
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
        <img className="Image1" src={Image1} alt="" />
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
        <img src={Image2} alt="" />
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
          The purpose of using render method of the react-dom is to render a
          React element into the DOM in the specified container. It takes two
          arguments: the <b>React element</b> that you want to render, and the{" "}
          <b> DOM element</b> where you want to render it.
        </p>
      </div>
      <div className="Box">
        <h1>What is ReactDOMServer?</h1>
        <p>
          <b>ReactDOMServer</b> is a part of the react-dom package in the React
          library. It provides methods for rendering React components to static
          HTML markup. This can be useful for <b>server-side</b> rendering, for
          example, to generate HTML that can be sent to the client to improve
          the performance.
        </p>
        <p>
          The most commonly used method in ReactDOMServer is{" "}
          <b>renderToString</b>, which takes a React element as an argument and
          returns a string of HTML markup representing the element.
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
        <img src={Image3} alt="" />
        <p>
          In this example, the <b>html</b> prop of <b>MyComponent</b> is
          expected to contain a string of HTML, which will be set as the inner
          HTML of the <b>div</b>
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
        <img src={Image4} alt="" />
        <p>
          #2 <b>CSS classes</b>: You can apply CSS classes to a React element
          using the className prop. This prop takes a string with the{" "}
          <b>class names </b>
          separated by spaces. For example:
        </p>
        <img src={Image5} alt="" />
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
          If you use <b>props in the initial state</b> of a React component, the
          component will use the props to initialize its state. This is a way to
          set the initial state of a component based on the props that are
          passed to it. But If you need to update the state of a component based
          on its props, you should use the <b>useEffect hook</b>.
        </p>
      </div>
      <div className="Box">
        <h1>How do you conditionally render components?</h1>
        <p>There are a few ways to conditionally render components in React:</p>
        <p>
          #1 Using an if statement: You can use an <b>if</b> statement inside
          the render method to conditionally render a component.
        </p>
        <p>
          #2 Using a ternary operator: You can use a ternary operator
          <b> (? :)</b>
          inside the render method to conditionally render a component.
        </p>
        <p>
          #3 Using a short-circuit operator: You can use a short-circuit
          operator <b>(&&)</b> to conditionally render a component. If the
          condition before the <b>&&</b> operator is true, the component after{" "}
          <b>&&</b> will be rendered.{" "}
        </p>
      </div>
      <div className="Box">
        <h1>Why we need to be careful when spreading props on DOM elements?</h1>
        <p>
          #1 one potential issue is that you may accidentally overwrite
          important attributes of the DOM element. For example, if you spread an
          object that has a class property onto a DOM element, it will overwrite
          the element's className attribute, which could cause unexpected
          behavior in your application.
        </p>
        <p>
          #2 Another issue is that you may spread unnecessary or potentially
          harmful props onto the element. For example, if you spread an object
          that includes sensitive data such as passwords or personal
          information, that data could be exposed in the HTML of your
          application, which could be a security risk.
        </p>
      </div>
      <div className="Box">
        <h1>How you use decorators in React?</h1>
        <p>
          a decorator is a function that takes a component and returns a new,
          modified component. Decorators are often used to add additional
          functionality to a component, such as binding action creators to a
          dispatch function or adding additional props to a component.
        </p>
      </div>
      <div className="Box">
        <h1>How do you memoize a component?</h1>
        <p>
          To memoize a component, you can use the React.memo higher-order
          component. This component will only re-render the wrapped component if
          one of props has changed.
        </p>
        <p>
          React.memo only works for functional components and not class-based
          components. If you need to memoize a class-based component, you can
          use the shouldComponentUpdate lifecycle method and implement your own
          comparison logic.
        </p>
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
          React is a JavaScript library for building user interfaces. It was
          developed by Facebook, and is often used for building single-page
          applications and mobile applications.
        </p>
      </div>
      <div className="Box">
        <h1>What is the recommended way for naming components?</h1>
        <p>
          React is a JavaScript library for building user interfaces. It was
          developed by Facebook, and is often used for building single-page
          applications and mobile applications.
        </p>
      </div>
      <div className="Box">
        <h1>What is the recommended ordering of methods in component class?</h1>
        <p>
          React is a JavaScript library for building user interfaces. It was
          developed by Facebook, and is often used for building single-page
          applications and mobile applications.
        </p>
      </div>
      <div className="Box">
        <h1>What is a switching component?</h1>
        <p>
          React is a JavaScript library for building user interfaces. It was
          developed by Facebook, and is often used for building single-page
          applications and mobile applications.
        </p>
      </div>
      <div className="Box">
        <h1>Why we need to pass a function to setState()?</h1>
        <p>
          React is a JavaScript library for building user interfaces. It was
          developed by Facebook, and is often used for building single-page
          applications and mobile applications.
        </p>
      </div>
      <div className="Box">
        <h1>What is strict mode in React?</h1>
        <p>
          React is a JavaScript library for building user interfaces. It was
          developed by Facebook, and is often used for building single-page
          applications and mobile applications.
        </p>
      </div>
      <div className="Box">
        <h1>What is strict mode in React?</h1>
        <p>
          React is a JavaScript library for building user interfaces. It was
          developed by Facebook, and is often used for building single-page
          applications and mobile applications.
        </p>
      </div>
      <div className="Box">
        <h1>
          Why is isMounted() an anti-pattern and what is the proper solution?
        </h1>
        <p>
          React is a JavaScript library for building user interfaces. It was
          developed by Facebook, and is often used for building single-page
          applications and mobile applications.
        </p>
      </div>
      <div className="Box">
        <h1>What are the Pointer Events supported in React? </h1>
        <p>
          React is a JavaScript library for building user interfaces. It was
          developed by Facebook, and is often used for building single-page
          applications and mobile applications.
        </p>
      </div>
      <div className="Box">
        <h1>Why should component names start with capital letter?</h1>
        <p>
          React is a JavaScript library for building user interfaces. It was
          developed by Facebook, and is often used for building single-page
          applications and mobile applications.
        </p>
      </div>
      <div className="Box">
        <h1>Are custom DOM attributes supported in React v16? </h1>
        <p>
          React is a JavaScript library for building user interfaces. It was
          developed by Facebook, and is often used for building single-page
          applications and mobile applications.
        </p>
      </div>
      <div className="Box">
        <h1>What is the difference between constructor and getInitialState?</h1>
        <p>
          React is a JavaScript library for building user interfaces. It was
          developed by Facebook, and is often used for building single-page
          applications and mobile applications.
        </p>
      </div>
      <div className="Box">
        <h1>
          Can you force a component to re-render without calling setState?
        </h1>
        <p>
          React is a JavaScript library for building user interfaces. It was
          developed by Facebook, and is often used for building single-page
          applications and mobile applications.
        </p>
      </div>
      <div className="Box">
        <h1>
          What is the difference between super() and super(props) in React using
          ES6 classes?
        </h1>
        <p>
          React is a JavaScript library for building user interfaces. It was
          developed by Facebook, and is often used for building single-page
          applications and mobile applications.
        </p>
      </div>
      <div className="Box">
        <h1>How to loop inside JSX?</h1>
        <p>
          React is a JavaScript library for building user interfaces. It was
          developed by Facebook, and is often used for building single-page
          applications and mobile applications.
        </p>
      </div>
      <div className="Box">
        <h1>How do you access props in attribute quotes?</h1>
        <p>
          React is a JavaScript library for building user interfaces. It was
          developed by Facebook, and is often used for building single-page
          applications and mobile applications.
        </p>
      </div>
      <div className="Box">
        <h1>What is React proptype array with shape?</h1>
        <p>
          React is a JavaScript library for building user interfaces. It was
          developed by Facebook, and is often used for building single-page
          applications and mobile applications.
        </p>
      </div>
      <div className="Box">
        <h1>How to conditionally apply class attributes?</h1>
        <p>
          React is a JavaScript library for building user interfaces. It was
          developed by Facebook, and is often used for building single-page
          applications and mobile applications.
        </p>
      </div>
      <div className="Box">
        <h1>What is the difference between React and ReactDOM?</h1>
        <p>
          React is a JavaScript library for building user interfaces. It was
          developed by Facebook, and is often used for building single-page
          applications and mobile applications.
        </p>
      </div>
      <div className="Box">
        <h1>Why ReactDOM is separated from React?</h1>
        <p>
          React is a JavaScript library for building user interfaces. It was
          developed by Facebook, and is often used for building single-page
          applications and mobile applications.
        </p>
      </div>
      <div className="Box">
        <h1>How to use React label element?</h1>
        <p>
          React is a JavaScript library for building user interfaces. It was
          developed by Facebook, and is often used for building single-page
          applications and mobile applications.
        </p>
      </div>
      <div className="Box">
        <h1>How to combine multiple inline style objects?</h1>
        <p>
          React is a JavaScript library for building user interfaces. It was
          developed by Facebook, and is often used for building single-page
          applications and mobile applications.
        </p>
      </div>
      <div className="Box">
        <h1>How to re-render the view when the browser is resized?</h1>
        <p>
          React is a JavaScript library for building user interfaces. It was
          developed by Facebook, and is often used for building single-page
          applications and mobile applications.
        </p>
      </div>
      <div className="Box">
        <h1>
          What is the difference between setState() and replaceState() methods?
        </h1>
        <p>
          React is a JavaScript library for building user interfaces. It was
          developed by Facebook, and is often used for building single-page
          applications and mobile applications.
        </p>
      </div>
      <div className="Box">
        <h1>How to listen to state changes? </h1>
        <p>
          React is a JavaScript library for building user interfaces. It was
          developed by Facebook, and is often used for building single-page
          applications and mobile applications.
        </p>
      </div>
      <div className="Box">
        <h1>
          What is the recommended approach of removing an array element in React
          state?
        </h1>
        <p>
          React is a JavaScript library for building user interfaces. It was
          developed by Facebook, and is often used for building single-page
          applications and mobile applications.
        </p>
      </div>
      <div className="Box">
        <h1>Is it possible to use React without rendering HTML?</h1>
        <p>
          React is a JavaScript library for building user interfaces. It was
          developed by Facebook, and is often used for building single-page
          applications and mobile applications.
        </p>
      </div>
      <div className="Box">
        <h1>How to pretty print JSON with React?</h1>
        <p>
          React is a JavaScript library for building user interfaces. It was
          developed by Facebook, and is often used for building single-page
          applications and mobile applications.
        </p>
      </div>
      <div className="Box">
        <h1>Why you can't update props in React?</h1>
        <p>
          React is a JavaScript library for building user interfaces. It was
          developed by Facebook, and is often used for building single-page
          applications and mobile applications.
        </p>
      </div>
      <div className="Box">
        <h1>How to focus an input element on page load?</h1>
        <p>
          React is a JavaScript library for building user interfaces. It was
          developed by Facebook, and is often used for building single-page
          applications and mobile applications.
        </p>
      </div>
      <div className="Box">
        <h1>What are the possible ways of updating objects in state?</h1>
        <p>
          React is a JavaScript library for building user interfaces. It was
          developed by Facebook, and is often used for building single-page
          applications and mobile applications.
        </p>
      </div>
      <div className="Box">
        <h1>How can we find the version of React at runtime in the browser?</h1>
        <p>
          React is a JavaScript library for building user interfaces. It was
          developed by Facebook, and is often used for building single-page
          applications and mobile applications.
        </p>
      </div>
      <div className="Box">
        <h1>
          What are the approaches to include polyfills in your create-react-app?
        </h1>
        <p>
          React is a JavaScript library for building user interfaces. It was
          developed by Facebook, and is often used for building single-page
          applications and mobile applications.
        </p>
      </div>
      <div className="Box">
        <h1>How to use https instead of http in create-react-app?</h1>
        <p>
          React is a JavaScript library for building user interfaces. It was
          developed by Facebook, and is often used for building single-page
          applications and mobile applications.
        </p>
      </div>
    </div>
  );
};

export default App;
