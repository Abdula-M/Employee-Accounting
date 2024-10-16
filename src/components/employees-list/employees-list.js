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
    let { data, onDelete, onToggleProp} = this.props;
    let { salary } = this.state;
    const elements = data.map((item) => {
      const { id, ...itemProps } = item;

      return (
        <EmployeesListItem
          onToggleProp={(e) =>
            onToggleProp(id, e.currentTarget.getAttribute("data-prop"))
          }
          onDelete={() => onDelete(id)}
          key={id}
          {...itemProps}
        />
      );
    });

    return <ul className="app-list list-group">{elements}</ul>;
  }
}

export default EmployeesList;
