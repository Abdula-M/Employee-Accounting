import EmployeesListItem from "../employees-list-item/employees-list-item";
import { Component } from "react";

import "./employees-list.css";

class EmployeesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      salary: "",
    };
  }
  render() {
    let { data, onDelete, onToggleProp, onChange } = this.props;
    let { salary } = this.state;
    const chang = (salary) => {
      this.setState({
        salary: salary,
      });
    };
    const elements = data.map((item) => {
      const { id, ...itemProps } = item;

      return (
        <EmployeesListItem
          onToggleProp={(e) =>
            onToggleProp(id, e.currentTarget.getAttribute("data-prop"))
          }
          onChange={(() => id, salary)}
          onDelete={() => onDelete(id)}
          chang={chang}
          key={id}
          {...itemProps}
        />
      );
    });
    console.log(elements);

    return <ul className="app-list list-group">{elements}</ul>;
  }
}

export default EmployeesList;
