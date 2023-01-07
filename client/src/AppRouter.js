import React from 'react';
import { Route, Routes} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import EmptyPage from "./Pages/EmptyPage";
import DashboardStudent from "./Pages/Student/DashboardStudent";
import LoginPage from "./Pages/LoginPage";
import Dashboard from "./Pages/Admin/Dashboard";
import StudentManagement from "./Pages/Admin/StudentManagment";
import Test from "./Pages/Test";
import AddNewStudent from "./Pages/Admin/AddNewStudent";
import CourseAdmin from "./Pages/Admin/CourseManagement";
import EditStudent from "./Pages/Admin/EditStudent";
import LectureManagement from "./Pages/Admin/LectureManagment";
import AddNewLecture from "./Pages/Admin/AddNewLecture";
import EditLecture from "./Pages/Admin/EditLecture";
import DashboardLecturer from './Pages/LecturerDashboard';
import LecturerCourses from './Pages/LecturerMyCourses';
import LecturerCourseDetail from './Pages/LecturerCourseDetail';
import LecturerCourseAssignments from './Pages/LecturerCourseAssignments';
import LecturerCourseMaterials from './Pages/LecturerCourseMaterials';
import LecturerAssignmentDetail from './Pages/LecturerAssignmentDetail';
import LecturerAddLesson from './Pages/LecturerAddLesson';
export default function AppRouter(){
    return (
        <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/EmptyPage' element={<EmptyPage/>} />
                <Route path='/DashboardStudent' element={<DashboardStudent/>}/>
                <Route path='/Login' element={<LoginPage/>}/>
                <Route path='/Student' element={<DashboardStudent/>}/>
                <Route path='/Admin' element={<Dashboard/>}/>
                <Route path='/Admin/StudentManagement' element={<StudentManagement/>}/>
                <Route path='/Admin/LectureManagement' element={<LectureManagement/>}/>
                <Route path='/Admin/CourseManagement' element={<CourseAdmin/>}/>

                <Route path='/Admin/EditStudent/:id' element={<EditStudent />}/>
                <Route path='/Admin/EditLecture/:id' element={<EditLecture />}/>

                <Route path='/Admin/AddNewStudent' element={<AddNewStudent/>}/>
                <Route path='/Admin/AddNewLecture' element={<AddNewLecture/>}/>

                <Route path='/Admin/DeleteStudent/:id' element={<StudentManagement/>}/>

                <Route path='/Lecturer' element={<DashboardLecturer/>}/>
                <Route path='/Lecturer/Courses' element={<LecturerCourses/>}/>
                <Route path='/Lecturer/Courses/:courseid' element={<LecturerCourseDetail/>}/>
                <Route path='/Lecturer/Courses/:courseid/:lessonNth' element={<LecturerCourseDetail/>}/>
                <Route path='/Lecturer/Courses/:courseid/Assignments' element={<LecturerCourseAssignments/>}/>
                <Route path='/Lecturer/Courses/:courseid/Materials' element={<LecturerCourseMaterials/>}/>
                <Route path='/Lecturer/Courses/:courseid/Assignments/:assignmentname' element={<LecturerAssignmentDetail/>}/>
                <Route path='/Lecturer/Courses/:courseid/AddLesson' element={<LecturerAddLesson/>}/>
                
                <Route path="/Test" element = {<Test/>}/>
        </Routes>
    )
}