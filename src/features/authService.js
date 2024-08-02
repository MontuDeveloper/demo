const usersDatabase = [{ email: " ", password: " " }];
console.log(usersDatabase);

const login = async (user) => {
  const existingUser = usersDatabase.find(
    (u) => u.email === user.email && u.password === user.password
  );
  if (existingUser) {
    return { email: existingUser.email };
  } else {
    throw new Error("Invalid credentials");
  }
};

const register = async (user) => {
  usersDatabase.push({ email: user.email, password: user.password });
  return { email: user.email };
};

const authService = {
  login,
  register,
};

export default authService;
