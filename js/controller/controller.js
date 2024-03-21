let editingIndex = -1;
const getStudentInfo = () => {
    let id = document.getElementById("student-id").value;
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let spanish = document.getElementById("spanish").value;
    let chinese = document.getElementById("chinese").value;
    let english = document.getElementById("english").value;

    let newStudent = new Student(id, name, email, spanish, chinese, english);
    return newStudent;
}
const editStudent = (index) => {
    editingIndex = index;
    let students = getStudentsFormLocalStorage();
    let student = students[index];
    document.getElementById("student-id").value = student.id;
    document.getElementById("name").value = student.name;
    document.getElementById("email").value = student.email;
    document.getElementById("spanish").value = student.spanish;
    document.getElementById("chinese").value = student.chinese;
    document.getElementById("english").value = student.english;
}
const deleteStudent = (delStudent) => {
    let students = getStudentsFormLocalStorage();
    students.splice(delStudent, 1);
    setStudentsToLocalStorage(students);
    renderStudent(students);
}
const renderStudent = (students) => {
    let contentHTML = "";
    for(let i = 0; i < students.length; i++){
        let currentStudent = students[i];
        let contentTr = `
            <tr>
                <td>${currentStudent.id}</td>
                <td>${currentStudent.name}</td>
                <td>${currentStudent.email}</td>
                <td>
                    ${(Number(currentStudent.spanish)+Number(currentStudent.chinese)+Number(currentStudent.english))/3}
                </td>
                <td>
                    <button onClick="deleteStudent(${i})" style="background-color: red;">
                        Delete
                    </button>
                    <button onClick="editStudent(${i})" style="background-color: yellow;">
                        Edit
                    </button>
                </td>
            </tr>
        `
        contentHTML += contentTr;
    }
    document.getElementById("table-body").innerHTML = contentHTML
}

const setStudentsToLocalStorage = (students) => {
    let jsonStudents = JSON.stringify(students);
    localStorage.setItem('students',jsonStudents);
}
const getStudentsFormLocalStorage = () => {
    let jsonStudents = localStorage.getItem("students");
    return JSON.parse(jsonStudents);
}