import React, { Fragment, useEffect, useState } from "react";
import { Content } from "../Components/Content";
import { Button, Breadcrumb } from "react-bootstrap";
import { NavLink, useLocation, useSearchParams} from "react-router-dom";
import ReactPlayer from "react-player";
import fileIcon from "../img/fileIcon.svg";
import axios from "axios";
import { propTypes } from "react-bootstrap/esm/Image";

function LecturerCourseDetail () {
    const [state, setState] = useState({
        courseName: '',
        lecturerName: '',
        lessonName: '',
        lessonDescription: '',
        lessonVideoPath: '',
        lessonsList: []
    });
    useEffect(() =>{
        axios.get('/Lecturer/CourseDetail', { params: { userId: 4, courseId: 'CSC101', lessonName: 'Lesson 01' } }).then(result => {
            setState({
                courseName: result.data.courseDetail.coursename,
                lecturerName: result.data.courseDetail.fullname,
                lessonName: result.data.courseDetail.lessonname,
                lessonDescription: result.data.courseDetail.lessondescription,
                lessonVideoPath: result.data.courseDetail.linkvideo,
                lessonsList: result.data.lessons
            })
        });
    },[5]);
    const resLessons = [];
    for (let i = 0;i < state.lessonsList.length; i++){
        resLessons.push(
            <NavLink to="/LecturerCourseDetail">
                <li className="lesson mb-3">
                    <p className="lessonName mb-1" style={{ fontWeight: "600" }}>{state.lessonsList[i].lessonname.split("-")[1]}</p>
                    <div className="lessonDetail d-flex align-items-center" style={{ fontSize: "0.8rem", opacity: "0.7" }}>
                        <p className="lessonNum" >{state.lessonsList[i].lessonname.split("-")[0]}</p>
                        {/* <p className="mx-2">&#183;</p>
                        <p className="lessonLength">10 mins</p> */}
                    </div>
                </li>
            </NavLink>
        )
    }
    const search = useLocation(); // could be '?foo=bar'
    //const params = new URLSearchParams(search);
    console.log(search.pathname.split("/")[3]);
    return (
        <Fragment>
            <Content>
                <div id="lecturerCourseDetail" className="d-flex" style={{ padding: "2rem" }}>
                    <div className="courseSection" style={{ width: "70%" }}>
                        <h3 className="mt-4" style={{ fontWeight: "600" }}>Intro To Software Engineering</h3>
                        <Breadcrumb className="breadcrumb mb-0">
                            <Breadcrumb.Item href="/LecturerDashboard">Dashboard</Breadcrumb.Item>
                            <Breadcrumb.Item href="/LecturerMyCourses">My Courses</Breadcrumb.Item>
                            <Breadcrumb.Item href="/LecturerCourseDetail">{state.courseName}</Breadcrumb.Item>
                        </Breadcrumb>
                        <ReactPlayer url={state.lessonVideoPath} width="90%" height="70%" style={{ borderRadius: "32px"}} controls></ReactPlayer>
                        <div className="currentLessonDetail">
                            <h4 className="currentLessonName mt-4 mb-2" style={{ fontWeight: "600" }}>{state.lessonName}</h4>
                            <p className="lecturerName" style={{ fontWeight: "600" }}>{state.lecturerName}</p>
                            <p className="currentLessonDesc" style={{ width: "90%", fontSize: "0.8rem", textAlign: "justify" }}>
                                {state.lessonDescription}
                                {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus sit amet nisi et congue. Aliquam viverra
                                interdum rutrum. Curabitur lobortis dui metus. Fusce a arcu mauris. Praesent feugiat bibendum tincidunt.
                                Nam eu malesuada nisl. Vestibulum posuere imperdiet volutpat. Donec metus massa, hendrerit sit amet ante quis,
                                mollis dictum risus. Vivamus auctor nibh tellus, eget sollicitudin tortor sollicitudin ac. Nulla facilisi.
                                Sed tincidunt mattis feugiat. Donec porttitor ante ac magna viverra lacinia. */}
                            </p>
                        </div>
                    </div>
                    <div className="lessonSection" style={{ width: "30%" }}>
                        <div className="lessonTitleGroup pt-4 pb-5 d-flex justify-content-between align-items-center">
                            <h4 className="mb-0 ps-3 d-flex align-items-center" style={{ fontWeight: "600" }}>Lessons</h4>
                            <Button className="d-flex justify-content-center align-items-center" style={{ height: "36px" }}>New Lesson</Button>
                        </div>
                        <ul className="lessonList ps-3" style={{ height: "404px" }}>
                            {resLessons}
                            {/* <NavLink to="/LecturerCourseDetail">
                                <li className="lesson mb-3">
                                    <p className="lessonName mb-1" style={{ fontWeight: "600" }}>Lesson Name</p>
                                    <div className="lessonDetail d-flex align-items-center" style={{ fontSize: "0.8rem", opacity: "0.7" }}>
                                        <p className="lessonNum" >Lesson 1</p>
                                        <p className="mx-2">&#183;</p>
                                        <p className="lessonLength">10 mins</p>
                                    </div>
                                </li>
                            </NavLink>
                            <NavLink to="/LecturerCourseDetail">
                                <li className="lesson mb-3">
                                    <p className="lessonName mb-1" style={{ fontWeight: "600" }}>Lesson Name</p>
                                    <div className="lessonDetail d-flex align-items-center" style={{ fontSize: "0.8rem", opacity: "0.7" }}>
                                        <p className="lessonNum" >Lesson 1</p>
                                        <p className="mx-2">&#183;</p>
                                        <p className="lessonLength">10 mins</p>
                                    </div>
                                </li>
                            </NavLink>
                            <NavLink to="/LecturerCourseDetail">
                                <li className="lesson mb-3">
                                    <p className="lessonName mb-1" style={{ fontWeight: "600" }}>Lesson Name</p>
                                    <div className="lessonDetail d-flex align-items-center" style={{ fontSize: "0.8rem", opacity: "0.7" }}>
                                        <p className="lessonNum" >Lesson 1</p>
                                        <p className="mx-2">&#183;</p>
                                        <p className="lessonLength">10 mins</p>
                                    </div>
                                </li>
                            </NavLink>
                            <NavLink to="/LecturerCourseDetail">
                                <li className="lesson mb-3">
                                    <p className="lessonName mb-1" style={{ fontWeight: "600" }}>Lesson Name</p>
                                    <div className="lessonDetail d-flex align-items-center" style={{ fontSize: "0.8rem", opacity: "0.7" }}>
                                        <p className="lessonNum" >Lesson 1</p>
                                        <p className="mx-2">&#183;</p>
                                        <p className="lessonLength">10 mins</p>
                                    </div>
                                </li>
                            </NavLink>
                            <NavLink to="/LecturerCourseDetail">
                                <li className="lesson mb-3">
                                    <p className="lessonName mb-1" style={{ fontWeight: "600" }}>Lesson Name</p>
                                    <div className="lessonDetail d-flex align-items-center" style={{ fontSize: "0.8rem", opacity: "0.7" }}>
                                        <p className="lessonNum" >Lesson 1</p>
                                        <p className="mx-2">&#183;</p>
                                        <p className="lessonLength">10 mins</p>
                                    </div>
                                </li>
                            </NavLink> */}
                        </ul>
                        <div className="courseElementBtns pt-5 d-flex flex-column align-items-center">
                            <Button href="/LecturerCourseAssignments" className="assignmentsBtn w-50 mb-4 d-flex justify-content-center align-items-center" style={{ height: "44px" }}><img className="me-2" src={fileIcon} alt="fileIcon"></img>Assignments</Button>
                            <Button href="/LecturerCourseMaterials" className="materialsBtn w-50 d-flex justify-content-center align-items-center" style={{ height: "44px" }}><img className="me-2" src={fileIcon} alt="fileIcon"></img>Materials</Button>
                        </div>
                    </div>
                </div>
            </Content>
        </Fragment>
    );
}
export default LecturerCourseDetail;