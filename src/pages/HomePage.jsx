import axios from "axios";
import { useState } from "react";
import TeacherCard from "../components/TeacherCard";

function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchTeachers, setSearchTeachers] = useState([]);

  async function searchTeacher() {
    const teachers = await axios.get(
      `http://localhost:5000/profile/search?q=${searchQuery}`,
      { withCredentials: true }
    );
    setSearchTeachers(teachers.data.teachers);
  }

  return (
    <div>
      <div>
        <input
          type="text"
          onChange={(e) => setSearchQuery(e.target.value)}
          value={searchQuery}
        />
        <button onClick={searchTeacher}>Search</button>
      </div>
      {searchTeachers.length > 0 &&
        searchTeachers?.map((t) => {
          return <TeacherCard teacher={t} />;
        })}
    </div>
  );
}

export default HomePage;
