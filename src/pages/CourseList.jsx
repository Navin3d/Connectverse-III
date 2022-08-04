import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

import CourseCard from "../components/course/Card";
import "../styles/pages/course-list.css";

import Data from "../data/index.json";


const CourseList = () => {

    const [courses, setCourses] = useState(Data.Courses);

    useEffect(() => {
        setCourses(Data.Courses);
    }, []);

    return (
        <div>
            <Container>
                <Row>
                    {
                        courses.map(course => (
                            <Col className="course-card">
                                <CourseCard id={course.id} imageUrl={course.imageUrl} name={course.tittle} jobsCanBeApplied={course.jobsCanBeApplied} />
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </div>
    );
};

export default CourseList;
