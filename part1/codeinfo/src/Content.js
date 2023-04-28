import Part from "./Part";

const Content = (props) => (
  <>
    <Part part={props.p1} exercises={props.ex1} />
    <Part part={props.p2} exercises={props.ex2} />
    <Part part={props.p3} exercises={props.ex3} />
  </>
);

export default Content;
