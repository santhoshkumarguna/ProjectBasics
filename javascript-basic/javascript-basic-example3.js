let values = {
    branchStudent: [
        { id: 1, branchId: 1, studentId: 1 },
        { id: 2, branchId: 2, studentId: 2 },
        { id: 3, branchId: 2, studentId: 1 },
        { id: 4, branchId: 1, studentId: 3 }
    ],
    branch: [
        { id: 1, name: "CSE" },
        { id: 2, name: "IT" }
    ],
    student: [
        { id: 1, name: "Jay" },
        { id: 2, name: "Sanjay" },
        { id: 3, name: "Rajesh" }
    ]
}

for (let key in values){
   let arr= values[key].map((item,key)=>{
       return {
           ...item,
           branchName:values.branch[item.branchId-1].name,
           studentName:values.student[item.studentId-1].name
        }
    })
   
    console.log({branchStudentMap:arr})

    break;
}


