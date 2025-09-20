/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperByMap() {
  //Write your code here , just console.log
  arr.map((employee) => {
    if (employee.profession === "developer") {
      console.log(employee);
    }
  });
}

function PrintDeveloperByForEach() {
  //Write your code here , just console.log
  arr.forEach((employee) => {
    if (employee.profession === "developer") {
      console.log(employee);
    }
  });
}

function addData() {
  //Write your code here, just console.log
  let newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };
  arr.push(newEmployee);
  console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  let filteredArray = arr.filter((employee) => employee.profession !== "admin");
  console.log(filteredArray);
}

function concatenateArray() {
  //Write your code here, just console.log
  let arr2 = [
    { id: 5, name: "vishal", age: "28", profession: "mechanical engineer" },
    { id: 6, name: "rahul", age: "23", profession: "electronic engineer" },
    { id: 7, name: "soniya", age: "20", profession: "civil engineer" },
  ];

  let result = arr.concat(arr2);
  console.log(result);
}
