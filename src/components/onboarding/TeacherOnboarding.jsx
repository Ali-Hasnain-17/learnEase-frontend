import { useState } from "react";

function TeacherOnboarding({ user }) {
  const [teacherData, setTeacherData] = useState({
    qualification: "",
    experience: 1,
    about: "",
    subject: "Web Development",
    city: "Lahore",
  });

  const [error, setError] = useState({
    qualification: "",
    experience: "",
    about: "",
  });

  async function onboardTeacher(e) {
    e.preventDefault();

    setError({
      qualification: "",
      experience: "",
      about: "",
    });

    if (teacherData.qualification === "") {
      setError((prev) => ({
        ...prev,
        qualification: "Qualification is required",
      }));
      return;
    }

    if (teacherData.experience === "") {
      setError((prev) => ({ ...prev, experience: "Experience is required" }));
      return;
    }

    if (teacherData.about === "") {
      setError((prev) => ({ ...prev, about: "About is required" }));
      return;
    }
  }

  return (
    <div className="form">
      <h1>Welcome {user.name}</h1>
      <h2>Please onboard with us a Teacher</h2>
      <form onSubmit={onboardTeacher}>
        <div className="field">
          <label>Qualification</label>
          <input
            type="text"
            className={`${error.qualification && "error"}`}
            value={teacherData.qualification}
            onChange={(e) =>
              setTeacherData((prev) => ({
                ...prev,
                qualification: e.target.value,
              }))
            }
          />
          {error.qualification && <small>{error.qualification}</small>}
        </div>
        <div className="field">
          <label>Experience</label>
          <input
            type="number"
            min={1}
            step={0.5}
            value={teacherData.experience}
            onChange={(e) =>
              setTeacherData((prev) => ({
                ...prev,
                experience: e.target.value,
              }))
            }
          />
          {error.experience && <small>{error.experience}</small>}
        </div>
        <div className="field">
          <label>Subject</label>
          <select
            value={teacherData.subject}
            onChange={(e) =>
              setTeacherData((prev) => ({
                ...prev,
                subject: e.target.value,
              }))
            }
          >
            <option value="Web Development">Web Development</option>
            <option value="Object-Oriented Programming">
              Object-Oriented Programming (OOP)
            </option>
            <option value="Database Management">Database Management</option>
            <option value="Data Structures and Algorithms">
              Data Structures and Algorithms
            </option>
            <option value="Mobile App Development">
              Mobile App Development
            </option>
            <option value="Software Engineering">Software Engineering</option>
            <option value="Cybersecurity">Cybersecurity</option>
            <option value="Networking">Networking</option>
            <option value="Cloud Computing">Cloud Computing</option>
            <option value="Machine Learning">Machine Learning</option>
            <option value="Artificial Intelligence">
              Artificial Intelligence
            </option>
            <option value="Computer Graphics">Computer Graphics</option>
            <option value="Game Development">Game Development</option>
            <option value="Operating Systems">Operating Systems</option>
            <option value="UI/UX Design">UI/UX Design</option>
            <option value="Embedded Systems">Embedded Systems</option>
            <option value="Digital Marketing">Digital Marketing</option>
            <option value="Blockchain">Blockchain</option>
            <option value="Big Data">Big Data</option>
            <option value="DevOps">DevOps</option>
            <option value="IoT (Internet of Things)">
              IoT (Internet of Things)
            </option>
            <option value="Quantum Computing">Quantum Computing</option>
          </select>
        </div>

        <div className="field">
          <label>City</label>
          <select
            value={teacherData.city}
            onChange={(e) =>
              setTeacherData((prev) => ({
                ...prev,
                city: e.target.value,
              }))
            }
          >
            <option value="Lahore">Lahore</option>
            <option value="Karachi">Karachi</option>
            <option value="Islamabad">Islamabad</option>
            <option value="Rawalpindi">Rawalpindi</option>
            <option value="Faisalabad">Faisalabad</option>
            <option value="Multan">Multan</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Peshawar">Peshawar</option>
            <option value="Quetta">Quetta</option>
            <option value="Gujranwala">Gujranwala</option>
            <option value="Sialkot">Sialkot</option>
            <option value="Bahawalpur">Bahawalpur</option>
            <option value="Sargodha">Sargodha</option>
            <option value="Abbottabad">Abbottabad</option>
            <option value="Sukkur">Sukkur</option>
            <option value="Larkana">Larkana</option>
            <option value="Gujrat">Gujrat</option>
            <option value="Mardan">Mardan</option>
            <option value="Kohat">Kohat</option>
            <option value="Malakand">Malakand</option>
          </select>
        </div>
        <div className="field">
          <label>About</label>
          <textarea
            className={`${error.about && "error"}`}
            value={teacherData.about}
            onChange={(e) =>
              setTeacherData((prev) => ({ ...prev, about: e.target.value }))
            }
            rows={10}
          ></textarea>
          {error.about && <small>{error.about}</small>}
        </div>
        <button type="submit">Onboard Teacher</button>
      </form>
    </div>
  );
}

export default TeacherOnboarding;
