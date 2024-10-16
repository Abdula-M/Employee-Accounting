import "./employees-list-item.css";

const EmployeesListItem = ({
  name,
  salary,
  onDelete,
  onToggleProp,
  increase,
  rise,
  onChange,
  chang,
}) => {
  let classNames = "list-group-item d-flex justify-content-between";
  if (increase) {
    classNames += " increase";
  }
  if (rise) {
    classNames += " like";
  }

  return (
    <li className={classNames}>
      <span
        className="list-group-item-label"
        onClick={onToggleProp}
        data-prop="rise"
      >
        {name}
      </span>
      <input
        type="text"
        className="list-group-item-input"
        defaultValue={salary + "$"}
        onChange={chan}
      />
      <div className="d-flex justify-content-center align-items-center">
        <button
          type="button"
          className="btn-cookie btn-sm "
          onClick={onToggleProp}
          data-prop="increase"
        >
          <i className="fas fa-cookie"></i>
        </button>

        <button type="button" className="btn-trash btn-sm" onClick={onDelete}>
          <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-star"></i>
      </div>
    </li>
  );
};

export default EmployeesListItem;
