import employeesList from './11-createEmployeesObject'

export default function createReportObject(employeesList) {
    let obj = {
    	...employeesList
    }
	const getNumberOfDepartments = Object.keys(obj);

	return `${obj} \n ${getNumberOfDepartments}`
}
