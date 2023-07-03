export default function getListStudentIds(students){
        if(!Array.isArray(students)){
            return []
        }
        
        let studentIds = students.map((student) => student.id)
        return studentIds
}