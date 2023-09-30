const validateFormData = (email, password, name, isSignInForm) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/.test(password);

  if (!isEmailValid) return "Email ID is not valid";
  if (!isPasswordValid) return "Password is not valid";

  return isSignInForm ? null : validateName(name);
};

const validateName = (name) => {
  if (name.length < 1) return "Name cannot be empty";
  if (name.length > 50) return "Name cannot be more than 50 characters";
  if (!/^[A-Za-z\s]+$/.test(name))
    return "Name can have only uppercase, lowercase and spaces";
  return null;
};

export default validateFormData;
