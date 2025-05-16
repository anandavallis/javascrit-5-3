
    <h2>Find the Student Name</h2>

        function findStudentByName(Students, name) {
            return Students.find(Student => Student.name === name);
        }
        const students = [
            { name: 'Alice', age: 21 },
            { name: 'Bob', age: 25 },
            { name: 'Charlie', age: 23 }
        ];

        const student = findStudentByName(students, 'Bob');
        console.log(student);

   
