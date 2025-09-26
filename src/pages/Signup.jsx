import React, { useEffect, useState } from "react";
import googleLogo from "../assets/google-logo.svg";
import facebookLogo from "../assets/facebook-logo.svg";
import appleLogo from "../assets/apple-logo.svg";
import peopleWorking2 from "../assets/people-working2.jpg";
import { TextField, Button, IconButton, InputAdornment, OutlinedInput, FormControl, InputLabel } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import authService from "../services/authService";
import { validateRegistrationForm } from "../utils/validateRegistrationForm";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function Signup() {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [ errors, setErrors ] = useState({});
    const [ isSubmiting, setIsSubmiting ] = useState(false);

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsSubmiting(true);
        setErrors({});

        // Sanitize and validate input 
        const { sanitized, errors } = validateRegistrationForm(form);
        if (Object.keys(errors).length > 0) {
            setErrors(errors);
            setIsSubmiting(false);
            return;
        }

        try {
            const response = await authService.register(sanitized);
            localStorage.setItem('user', JSON.stringify(response.data.user));
            setIsSubmiting(false);
            toast.success("Registration successful!");
            navigate("/dashboard");
        } catch (err) {
            console.error("Registration error:", err);
            setIsSubmiting(false);
        }

    };

    const handleMouseDownPassword = (event) => {
        // Prevent focus loss when clicking the icon
        event.preventDefault();
    };

    return (
        <div className="flex justify-center items-center h-screen min-h-[500px]">
            <div className=" md:w-2/5 rounded-sm h-screen min-h-[500px] flex flex-col py-2 justify-center items-center relative">
                <div className="w-full px-6 absolute top-[0px]">
                    <span>Collabify</span>
                </div>
                <form
                    onSubmit={handleSubmit}
                    className="p-8 w-full max-w-md"
                >
                    <h3 className="text-sm text-textSecondaryLight dark:text-textSecondaryDark">Become more productive.</h3>
                    <h2 className="text-2xl font-bold">Create Account</h2>

                    <TextField
                        label="Full Name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                        required
                        size="small"
                        sx={{
                            "& .MuiOutlinedInput-root": {
                                borderRadius: "5px",
                            }
                        }}

                    />
                    {errors.name && <p className="text-sm text-red-700">{errors.name}</p>}

                    <TextField
                        label="Email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                        required
                        size="small"
                        sx={{
                            "& .MuiOutlinedInput-root": {
                                borderRadius: "5px",
                            }
                        }}

                    />
                    {errors.email && <p className="text-sm text-red-700">{errors.email}</p>}

                    
                    <FormControl
                        fullWidth
                        margin="normal"
                        sx={{
                            "& .MuiOutlinedInput-root": {
                                borderRadius: "5px",
                            }
                        }}
                        size="small"
                    >
                        <InputLabel htmlFor="password-outlined">Password</InputLabel>
                        <OutlinedInput
                            id="password-outlined"
                            name="password"
                            type={showPassword ? "text" : "password"}
                            value={form.password}
                            onChange={handleChange}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label={showPassword ? "Hide password" : "Show password"}
                                        onClick={() => setShowPassword((s) => !s)}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password"

                        />
                    </FormControl>
                    {errors.password && <p className="text-sm text-red-700">{errors.password}</p>}

                    <FormControl
                        fullWidth
                        margin="normal"
                        sx={{
                            "& .MuiOutlinedInput-root": {
                                borderRadius: "5px",
                            }
                        }}
                        size="small"
                    >
                        <InputLabel htmlFor="confirm-password-outlined">Confirm Password</InputLabel>
                        <OutlinedInput
                            id="confirm-password-outlined"
                            name="confirmPassword"
                            type={showConfirmPassword ? "text" : "password"}
                            value={form.confirmPassword}
                            onChange={handleChange}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                                        onClick={() => setShowConfirmPassword((s) => !s)}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Confirm Password"


                        />
                    </FormControl>
                    {errors.confirmPassword && <p className="text-sm text-red-700">{errors.confirmPassword}</p>}

                    <Button
                        type="submit"
                        variant="contained"
                        className="bg-primary"
                        fullWidth
                        size="normal"
                        sx={{
                            mt: 2,
                            borderRadius: "5px"
                        }}
                    >
                        {isSubmiting ? "Creating Account..." : "Create Account"}
                    </Button>

                    {/* Divider */}
                    <div className="flex items-center my-4">
                        <hr className="flex-grow border-gray-300" />
                        <span className="px-2 text-gray-500 text-sm">or sign up with</span>
                        <hr className="flex-grow border-gray-300" />
                    </div>

                    {/* Social Buttons */}
                    <div className="flex justify-center gap-4 mt-4">
                        <Button
                            variant="outlined"
                            sx={{
                                borderRadius: "10px",
                                textTransform: "none",
                                padding: "10px 20px",
                                minWidth: "80px",
                                borderColor: "#e0e0e0"
                            }}
                        >
                            <img
                                src={facebookLogo}
                                alt="Facebook"
                                className="w-6 h-6"
                            />
                        </Button>
                        <Button
                            variant="outlined"
                            sx={{
                                borderRadius: "10px",
                                textTransform: "none",
                                padding: "10px 20px",
                                minWidth: "80px",
                                borderColor: "#e0e0e0"
                            }}
                        >
                            <img
                                src={googleLogo}
                                alt="Google"
                                className="w-6 h-6"
                            />
                        </Button>
                        <Button
                            variant="outlined"
                            sx={{
                                borderRadius: "10px",
                                textTransform: "none",
                                padding: "10px 20px",
                                minWidth: "80px",
                                borderColor: "#e0e0e0"
                            }}
                        >
                            <img
                                src={appleLogo}
                                alt="Apple"
                                className="w-6 h-6"
                            />
                        </Button>
                    </div>


                    <p className="text-sm text-sm text-center mt-4">
                        Already have an account?{" "}
                        <a href="/login" className="text-blue-500 hover:underline">
                            Login
                        </a>
                    </p>
                </form>
            </div>
            <div
                className="bg-bgDark w-3/5 h-screen min-h-[500px] hidden sm:block bg-cover bg-center relative"
                style={{ backgroundImage: `url(${peopleWorking2})` }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black opacity-25"></div>

                {/* Content goes here */}
                <div className="relative z-10 flex justify-center items-center h-full">
                    <h2 className="text-white text-3xl font-bold">Welcome to Collabify</h2>
                </div>
            </div>

        </div>
    );
}
