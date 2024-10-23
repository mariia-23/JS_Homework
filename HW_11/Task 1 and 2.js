// 1. Создайте класс Employee с полями:
//   firstName — имя сотрудника (строка).
//   lastName — фамилия сотрудника (строка).
//   profession — профессия сотрудника (строка).
//   Приватное поле salary — зарплата сотрудника (число).
// 2. Реализуйте геттеры и сеттеры для всех полей, включая приватное поле salary.
// 3. Реализуйте метод getFullName() — возвращающий полное имя сотрудника.
// 4. Проверьте корректную работу класса, создав несколько экземпляров и протестировав геттеры и сеттеры:
//     const emp1 = new Employee("John", "Doe", "Developer", 3000);
//     console.log(emp1.firstName); // "John"
//     emp1.salary = 3100;
//     console.log(emp1.age); // 3100
// 5. Создайте класс Company с полями:
//     title — название компании (строка).
//     phone — телефон компании (число).
//     address — адрес компании (строка).
//     Приватное поле employees — массив сотрудников (пустой массив на старте).
// 6. Реализуйте геттеры для полей title, phone, и address.
// 7. Добавьте методы:
//     addEmployee(employee) — добавляет сотрудника в массив employees с проверкой, что переданный объект является экземпляром класса Employee. (instanceOf)
//     getEmployees() - возвращает массив всех сотрудников.
// 8. Проверьте корректную работу:
//     const company = new Company("Tech Corp", "123-456", "Main Street");
//     const emp1 = new Employee("John", "Doe", "Developer", 3000);
//     const emp2 = new Employee("Barbara", "Johnson", "QA", 2500);
//     company.addEmployee(emp1);
//     company.addEmployee(emp2);
//     console.log(company.getEmployees()); // [Employee, Employee]
// 9. Добавьте в класс Company метод getInfo(), который возвращает строку с информацией о компании вида (перенос строки сделать с \n):
// Компания: 
// Адрес:
// Количество сотрудников:




class Employee {
    #salary;
    constructor(firstName, lastName, profession, salary) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._profession = profession;
        this.#salary = salary;
    }
    getFullName() {
        return this.firstName + " " + this.lastName;
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(firstName) {
        if (!(firstName.length >= 2 && firstName.length <= 50) && !isLatinOnly(firstName)) {
            throw new Error("Invalid first name");
        }
        this._firstName = firstName;

    }
    get lastName() {
        return this._lastName;
    }
    set lastName(lastName) {
        if (!(lastName.length >= 2 && firstName.length <= 50) && !isLatinOnly(lastName)) {
            throw new Error("Invalid last name");
        }
        this._lastName = val;
    }
    get profession() {
        return this._profession;
    }
    set profession(profession) {
        if (!(profession.length > 0 && isLatinAndSpacesOnly(profession))) {
            throw new Error("Invalid profession");
        }
        this._profession = profession;
    }
    get salary() {
        return this.#salary;
    }
    set salary(val) {
        if (!val.length > 0 && val.length < 1000) {
            throw new Error("Invalid salary");
        }
        this.#salary = val;
    }
}
const emp1 = new Employee("John", "Doe", "Developer", 3000);
console.log(emp1.firstName);
emp1.salary = 3100;
console.log(emp1.salary);

const emp2 = new Employee("Maria", "K", "QA", 2300);
console.log(emp2.getFullName());

class Company {
    #employees;
    constructor(title, phone, address) {
        this._title = title;
        this._phone = phone;
        this._address = address;
        this.#employees = [];
    }
    getInfo() {
        console.log(`Компания: ${this.title}\nАдрес: ${this.address}\nКоличество сотрудников: ${this.#employees.length}`);
    }
    // Пункт 1 из Task 2
    findEmployeeByName(firstName) {
        return this.#employees.find((emp) => emp.firstName === firstName);
    }
    // Пункт 2 из Task 2
    removeEmployee(firstName) {
        this.#employees.splice(this.getEmployeeIndex(firstName), 1);
    }
    getEmployeeIndex(firstName) {
        const index = this.#employees.findIndex((emp) => emp.firstName === firstName);
        return index;
    }
    // Пункт 3 из Task 2
    getTotalSalary() {
        const sumOfSalaries = this.#employees.reduce((total, employee) => total + employee.salary, 0);
        return sumOfSalaries;
    }
    get title() {
        return this._title;
    }
    get phone() {
        return this._phone;
    }
    get address() {
        return this._address;
    }
    addEmployee(employee) {
        if (employee instanceof Employee) {
            this.#employees.push(employee);
        }
    }
    getEmployees() {
        return this.#employees;
    }
}
// функции для task 2 пункт 4
function isLatinOnly(str) {
    return /^[A-Za-z]+$/.test(str);
}
function isLatinAndSpacesOnly(str) {
    return /^[A-Za-z\s]+$/.test(str);
}


const company = new Company("Tech Corp", "123-456", "Main Street");
const emp11 = new Employee("John", "Doe", "Developer", 3000);
const emp22 = new Employee("Barbara", "Johnson", "QA", 2500);
company.addEmployee(emp11);
company.addEmployee(emp22);
console.log(company.getEmployees());
company.getInfo();
const foundEmployee = company.findEmployeeByName("John");
console.log(foundEmployee);
company.removeEmployee("John");
console.log(company.getEmployees());
console.log(company.getTotalSalary());

const emp5 = new Employee("John", "Doe", "Developer", 3000);
const emp6 = new Employee("Jane", "Smith", "Manager", 5000);
const emp7 = new Employee("Mark", "Brown", "Designer", 4000);

const company1 = new Company("Tech Corp", "123-456", "Main Street");
company.addEmployee(emp5);
company.addEmployee(emp6);
company.addEmployee(emp7);

console.log(company.getTotalSalary());
console.log(company.findEmployeeByName("Jane"));
company.removeEmployee("John");
console.log(company.getEmployees());


