1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans: getElementById: This method select element by id. If the id match then it's return only one element object but return null if id don't match.
getElementsByClassName: This method select element by class name. It select all the element which are named by same class name. it's return a HTML collection.
querySelector: This method select the first element that matches with the CSS selector. it's return a single element.
querySelectorAll: This method select all the element that matches with the CSS selector. it's return a nede list of the element.


2.How do you create and insert a new element into the DOM?

Ans: At first we creat a element by ".createElement("tagName")". we call it chield element. Then we have to set content or attribute. After that we have to find parent element. At last we have to append the chield element to the parent element. By this we can create and insert a new element into the DOM.


3.What is Event Bubbling and how does it work?

Ans: Event bubbling means when an event happens on an element, it first runs on that element and then goes up to its parent, then the parent’s parent, and so on until the top of the document. For example, if you click a button inside a div, the click will trigger on the button first, then on the div, and then keep going up unless you stop it with something like stopPropagation().


4.What is Event Delegation in JavaScript? Why is it useful?

Ans: Event Delegation in JavaScript is a technique where instead of adding event listeners to multiple child elements, we attach the listener to a common parent element. When an event occurs on any of the children, it bubbles up to the parent, and the parent handles it based on which child triggered the event.
It useful because,
->The number of event listeners in the DOM is reduce and performance will be improve.
->You don’t need to re-attach listeners when new elements are added because It works like dynamic content.
->It makes the code more cleaner and easier to maintain for a beginer.


5.What is the difference between preventDefault() and stopPropagation() methods?

Ans: preventDefault() and stopPropagation() are both used with events but they do different things.
Here the difference between them,
-> preventDefault() stops the default action of an element. For example, By calling this method if you click on a link it won’t take you to the URL.
-> stopPropagation() need to stops the event from bubbling up to parent elements. So the event will only run on the element you clicked, not on it's parents.
