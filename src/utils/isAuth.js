export function isAuth() {
  const user = localStorage.getItem("user");

  if (user == undefined) {
    return false;
  }

  return true;
}
