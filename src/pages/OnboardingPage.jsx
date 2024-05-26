import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import StudentOnboarding from "../components/onboarding/StudentOnboarding";
import TeacherOnboarding from "../components/onboarding/TeacherOnboarding";
import { isAuth } from "../utils/isAuth";

function OnboardingPage() {
  const [user, setUser] = useState();
  const navigate = useNavigate();

  if (!isAuth()) {
    return navigate("/login");
  }

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user);
    setUser(user);
  }, []);

  if (!user) {
    return;
  }

  if (user.type === "Student") {
    return <StudentOnboarding />;
  } else {
    return <TeacherOnboarding user={user} />;
  }
}

export default OnboardingPage;
