const students = [
    {
        Name : "John",
        RegNo : 1,
        Courses : ['Maths','Physics','Chemistry']
    },
    {
        Name : "Mathew",
        RegNo : 2,
        Courses : ['Biology','Physics','Chemistry']
    },
    {
        Name : "Perry",
        RegNo : 3,
        Courses : ['Computer','Physics','Chemistry']
    }
]

const studentsDiv = document.getElementById('students-div');
for(var i=0; i<students.length; i++){
    const mainDiv = document.createElement('div');
    mainDiv.classList.add('card', 'my-3', 'p-3', 'bg-light');
    const nameTitle = document.createElement('h2');
    const nameElem = document.createElement('h3');
    const regNo = document.createElement('h3')
    const courses = students[i].Courses;
    const ulElem = document.createElement('ul');

    nameTitle.innerText = 'Name :';
    nameElem.innerText = students[i].Name;
    regNo.textContent = students[i].RegNo;
    
    studentsDiv.appendChild(mainDiv);
    mainDiv.appendChild(nameTitle);
    mainDiv.appendChild(nameElem);
    mainDiv.appendChild(regNo);
    mainDiv.appendChild(ulElem);

    for(var j=0; j<courses.length; j++){
        const liElem = document.createElement('li');
        liElem.textContent = courses[j];
        ulElem.appendChild(liElem);
    }
}