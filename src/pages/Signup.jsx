// src/pages/Signup.jsx
import React, { useState } from "react";
import googleLogo from "../assets/google-logo.svg";
import facebookLogo from "../assets/facebook-logo.svg";
import appleLogo from "../assets/apple-logo.svg";
import peopleWorking from "../assets/people-working.jpg";
import peopleWorking2 from "../assets/people-working2.jpg";
import {
    TextField,
    Button,
    IconButton,
    InputAdornment,
    OutlinedInput,
    FormControl,
    InputLabel,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export default function Signup() {
    const [form, setForm] = useState({
        username: "",
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form data:", form);
    };

    const handleMouseDownPassword = (event) => {
        // Prevent focus loss when clicking the icon
        event.preventDefault();
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-bgLight dark:bg-bgDark">
            <div className=" md:w-2/5 rounded-sm h-screen flex flex-col py-2 justify-center items-center relative">
                <div className="w-full px-6 absolute top-[0px]">
                    <span>Collabify</span>
                </div>
                <form
                    onSubmit={handleSubmit}
                    className="p-8 w-full max-w-md"
                >
                    <h3 className="text-sm text-textSecondaryLight dark:text-textSecondaryDark">Become more productive.</h3>
                    <h2 className="text-2xl font-bold text-textPrimaryLight dark:text-textPrimaryDark">Create Account</h2>

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
                                borderRadius: "5px", // adjust the radius here
                            }
                        }}

                    />

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
                                borderRadius: "5px", // adjust the radius here
                            }
                        }}

                    />

                    {/* Password using FormControl + OutlinedInput */}
                    <FormControl
                        fullWidth
                        margin="normal"
                        sx={{
                            "& .MuiOutlinedInput-root": {
                                borderRadius: "5px", // adjust the radius here
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

                    {/* Confirm Password using FormControl + OutlinedInput */}
                    <FormControl
                        fullWidth
                        margin="normal"
                        sx={{
                            "& .MuiOutlinedInput-root": {
                                borderRadius: "5px", // adjust the radius here
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
                        Sign Up
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


                    <p className="text-sm text-center mt-4">
                        Already have an account?{" "}
                        <a href="/login" className="text-blue-500 hover:underline">
                            Login
                        </a>
                    </p>
                </form>
            </div>
            <div
                className="bg-bgDark w-3/5 h-screen hidden sm:block bg-cover bg-center relative"
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
