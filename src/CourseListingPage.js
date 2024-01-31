import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

function CourseListingPage() {
  const [data, setData] = useState([]);
  let searchRef = useRef();
  // const [searchData, setSearchData]=useState("");
  useEffect(() => {
    axios
      .get("http://localhost:3000/courseModel")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <label>
        <input
          ref={searchRef}
          placeholder="Enter Course name or Instructor Name"
        />
      </label>
      <button onClick={() => console.log(searchRef.current.value)}>
        Search
      </button>
      <table className="courseList">
        <thead>
          <tr>
            <th>ID</th>
            <th>Course Name</th>
            <th>Instructor Name</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d, i) => {
            return (
              <tr key={i}>
                <td>{d.id}</td>
                <td>{d.name}</td>
                <td>{d.instructor}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default CourseListingPage;
