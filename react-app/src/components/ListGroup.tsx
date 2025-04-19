import { Fragment, useState } from "react";
//import { MouseEvent } from "react"; // to call the event in a function out side xml format code

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}
function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  // Hook
  const [selectedIndex, setSelectedIndex] = useState(-1); //to tell react that my data might change the selected index
  const getMessage = () => {
    return items.length === 0 ? <p>No items found</p> : null;
  };
  //event handler
  //const handleClick = (event: MouseEvent) => console.log(event); //we scpecified the type of parameter we pass so that we can see more options relarted to it by the courtesy of typescript
  return (
    <Fragment>
      <h1>List</h1>
      {getMessage()}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </Fragment> //rather than using an extra div in the dom we use fragment
  );
}

export default ListGroup;
