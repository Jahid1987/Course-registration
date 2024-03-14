import { useState } from "react";
import Card from "../Card/Card";
import { useEffect } from "react";

const Courses = (props) => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("/courses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  //   console.log(courses);

  return (
    <div className=" grid grid-cols-3 gap-4">
      {courses.map((course) => (
        <Card {...props} key={course.id} course={course}></Card>
      ))}
    </div>
  );
};

export default Courses;
