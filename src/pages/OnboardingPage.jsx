import React from "react";
import { useSearchParams } from "react-router-dom";
import StudentOnboarding from "../components/onboarding/StudentOnboarding";
import TeacherOnboarding from "../components/onboarding/TeacherOnboarding";

function OnboardingPage() {
  const [searchParams, _] = useSearchParams();
  if (searchParams.get("type") === "Student") {
    return <StudentOnboarding />;
  } else {
    return <TeacherOnboarding />;
  }
}

export default OnboardingPage;
