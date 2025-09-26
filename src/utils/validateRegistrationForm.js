import DOMPurify from "dompurify";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function sanitizeInput(input) {
  return DOMPurify.sanitize(input.trim());
}

export function validateRegistrationForm(form) {
  let errors = {};

  // Sanitize first
  const sanitized = {
    name: sanitizeInput(form.name),
    email: sanitizeInput(form.email),
    password: form.password.trim(),
    confirmPassword: form.confirmPassword.trim(),
  };

  // Validation rules
  if (!sanitized.name) errors.name = "Name is required";
  if (!sanitized.email || !emailRegex.test(sanitized.email)) {
    errors.email = "Enter a valid email";
  }
  if (sanitized.password.length < 6) errors.password = "Password must be at least 6 characters";
  if (sanitized.password !== sanitized.confirmPassword)
    errors.confirmPassword = "Passwords do not match";

  return { sanitized, errors };
}
