let students = getStudentsFormLocalStorage() || [];
renderStudent(students);

const updateStudents = () => {
    let students = getStudentsFormLocalStorage();
    let newStudent = getStudentInfo();
    
    if (editingIndex === -1) {
        students.push(newStudent);
    } else {
        students[editingIndex] = newStudent;
        editingIndex = -1;
    }
    
    setStudentsToLocalStorage(students);
    renderStudent(students);
}

const addNewStudent = () => {
    let newStudent = getStudentInfo();
    console.log(newStudent);
    students.push(newStudent);
    console.log(students);
    setStudentsToLocalStorage(students);
    renderStudent(students);
    //document.getElementById("control-student").reset();
}

const resetStudents = () =>{
    students=[];
    localStorage.removeItem("students");
    renderStudent(students);
}