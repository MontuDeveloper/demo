const login = async (user) => {
  // Mock login service
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const existingUser = users.find(
    (u) => u.email === user.email && u.password === user.password
  );
  if (existingUser) {
    localStorage.setItem("user", JSON.stringify(existingUser));
    return existingUser;
  } else {
    throw new Error("Invalid credentials");
  }
};

const register = async (user) => {
  // Mock register service
  let users = JSON.parse(localStorage.getItem("users")) || [];
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
  localStorage.setItem("user", JSON.stringify(user));
  return user;
};

const authService = {
  login,
  register,
};

export default authService;
