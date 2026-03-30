1.What is JSX, and why is it used?

Ans: JSX (JavaScript XML) হল JavaScript এর একটি syntax extension যার মাধ্যমে JavaScript এর ভিতরে HTML-like code লেখা যায়। এটা use করা হয় কারন এটি code কে  more readable করে তোলে এবং লেখা ও সহজ । এর মাধ্যমে একই place এ logic এবং UI লেখা যায়।


2.What is the difference between State and Props?
Ans : State হল একটা component এর Internal data , এটা Mutable মানে change করা যায় । আর dynamic data এর ক্ষেত্রে use করা হয়।
Props হল সেই Data যেটা parent থেকে child এ passed করা হয় । এটা Immutable মানে change করা যায় না । components এর মধ্যে data pass করার জন্য Use করা হয়।


3.What is the useState hook, and how does it work?
Ans: useState is a React Hook that allows you to add state to functional components.

const [state, setState] = useState([]);

state - current value
setState - function to update the value
[] - initialValue

Updating state triggers a re-render

4.How can you share state between components in React?
Ans:1.Lifting State Up - Move state to a common parent component and pass it down via props
2.Context API - Share state globally without prop drilling
3.State Management Libraries -  Redux, Zustand etc.



5.How is event handling done in React?
Ans:React handles events using camelCase syntax and functions.
1.Use camelCase (onClick, onChange)
2.Pass functions
3.We can use inline arrow functions also.

Example:
function handleClick() {
  alert("Button clicked!");
}

<button onClick={handleClick}>Click Me</button>
