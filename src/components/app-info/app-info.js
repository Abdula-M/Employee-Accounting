import "./app-info.css";

const AppInfo = ({ increased, employees, data }) => {
  let sum = 0;
  data.forEach((item) => {
    sum += +item.salary;
  });

  return (
    <div className="app-info">
      <h1>Учет сотрудников в компании N</h1>
      <h2>Общее число сотрудников: {employees}</h2>
      <h2>Премию получат: {increased}</h2>
      <h3>Общая З/П сотрудников: {sum}</h3>
    </div>
  );
};

export default AppInfo;
