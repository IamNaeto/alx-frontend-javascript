export default function createReportObject(employeesList) {
  const allEmployees = {
    ...employeesList,
  };

  const getNumberOfDepartments = () => {
    return Object.keys(allEmployees).length;
  };

  return {
    allEmployees,
    getNumberOfDepartments,
  };
}
