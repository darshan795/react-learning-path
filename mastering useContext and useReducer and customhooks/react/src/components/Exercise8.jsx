import { useState } from "react";
import { useForm } from "react-hook-form";

function Signup() {
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    getValues,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      gender: "",
      skills: [],
      country: "",
      terms: false,
    },
  });

  // Watch values
  const passwordValue = watch("password");
  const selectedSkills = watch("skills");
  const currentName = watch("name");

  // Form submission
  const onSubmit = async (data) => {
    setSuccess(false);

    // Simulate a request
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Submitted Data:", data);

    setSuccess(true);
  };

  // Get current form values
  const showCurrentData = () => {
    console.log(getValues());
  };

  // Set a value manually
  const fillName = () => {
    setValue("name", "Darshan", {
      shouldValidate: true,
      shouldDirty: true,
    });
  };

  // Reset form
  const clearForm = () => {
    reset();
    setSuccess(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-5">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-xl p-6">

        <h1 className="text-2xl font-bold text-center mb-6">
          Create Account
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">

          {/* Name */}
          <div>
            <label className="block mb-1 font-medium">Full Name</label>

            <input
              type="text"
              placeholder="Enter your name"
              {...register("name", {
                required: "Name is required",
                minLength: {
                  value: 3,
                  message: "Name must contain at least 3 characters",
                },
                maxLength: {
                  value: 30,
                  message: "Name cannot exceed 30 characters",
                },
              })}
              className="w-full border rounded-lg p-2 outline-none focus:border-blue-500"
            />

            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 font-medium">Email</label>

            <input
              type="email"
              placeholder="Enter your email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email",
                },
              })}
              className="w-full border rounded-lg p-2 outline-none focus:border-blue-500"
            />

            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1 font-medium">Password</label>

            <input
              type="password"
              placeholder="Enter your password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must contain at least 8 characters",
                },
              })}
              className="w-full border rounded-lg p-2 outline-none focus:border-blue-500"
            />

            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block mb-1 font-medium">Confirm Password</label>

            <input
              type="password"
              placeholder="Confirm your password"
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: (value) =>
                  value === passwordValue || "Passwords do not match",
              })}
              className="w-full border rounded-lg p-2 outline-none focus:border-blue-500"
            />

            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          {/* Gender */}
          <div>
            <label className="block mb-2 font-medium">Gender</label>

            <div className="flex gap-4">
              <label className="flex gap-2 items-center">
                <input
                  type="radio"
                  value="Male"
                  {...register("gender", {
                    required: "Please select your gender",
                  })}
                />
                Male
              </label>

              <label className="flex gap-2 items-center">
                <input
                  type="radio"
                  value="Female"
                  {...register("gender", {
                    required: "Please select your gender",
                  })}
                />
                Female
              </label>

              <label className="flex gap-2 items-center">
                <input
                  type="radio"
                  value="Other"
                  {...register("gender", {
                    required: "Please select your gender",
                  })}
                />
                Other
              </label>
            </div>

            {errors.gender && (
              <p className="text-red-500 text-sm">{errors.gender.message}</p>
            )}
          </div>

          {/* Skills */}
          <div>
            <label className="block mb-2 font-medium">Skills</label>

            <div className="flex gap-4 flex-wrap">
              <label className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  value="React"
                  {...register("skills", {
                    validate: (value) =>
                      value.length > 0 || "Select at least one skill",
                  })}
                />
                React
              </label>

              <label className="flex gap-2 items-center">
                <input type="checkbox" value="Java" {...register("skills")} />
                Java
              </label>

              <label className="flex gap-2 items-center">
                <input type="checkbox" value="Node.js" {...register("skills")} />
                Node.js
              </label>
            </div>

            {errors.skills && (
              <p className="text-red-500 text-sm">{errors.skills.message}</p>
            )}
          </div>

          {/* Country */}
          <div>
            <label className="block mb-1 font-medium">Country</label>

            <select
              {...register("country", {
                required: "Please select your country",
              })}
              className="w-full border rounded-lg p-2 outline-none focus:border-blue-500"
            >
              <option value="">Select Country</option>
              <option value="India">India</option>
              <option value="USA">USA</option>
              <option value="Canada">Canada</option>
              <option value="UK">UK</option>
            </select>

            {errors.country && (
              <p className="text-red-500 text-sm">{errors.country.message}</p>
            )}
          </div>

          {/* Terms */}
          <div>
            <label className="flex gap-2 items-center">
              <input
                type="checkbox"
                {...register("terms", {
                  required: "You must accept the terms",
                })}
              />
              I accept the terms and conditions
            </label>

            {errors.terms && (
              <p className="text-red-500 text-sm">{errors.terms.message}</p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white p-2 rounded-lg font-medium"
          >
            {isSubmitting ? "Creating Account..." : "Sign Up"}
          </button>

          {/* Reset */}
          <button
            type="button"
            onClick={clearForm}
            className="border border-gray-300 hover:bg-gray-100 p-2 rounded-lg"
          >
            Reset Form
          </button>

        </form>

        {/* Extra RHF features */}
        <div className="mt-5 border-t pt-4 space-y-3 text-sm">

          <p>
            <strong>Live name:</strong> {currentName || "Not entered"}
          </p>

          <p>
            <strong>Selected skills:</strong>{" "}
            {selectedSkills?.length > 0 ? selectedSkills.join(", ") : "None"}
          </p>

          <p>
            <strong>Password length:</strong> {passwordValue?.length || 0}
          </p>

          <button
            type="button"
            onClick={showCurrentData}
            className="bg-gray-800 text-white px-3 py-2 rounded"
          >
            Get Current Values (Console)
          </button>

          <button
            type="button"
            onClick={fillName}
            className="bg-gray-500 text-white px-3 py-2 rounded ml-2"
          >
            Set Name to Darshan
          </button>

        </div>

        {success && (
          <p className="text-green-600 font-medium mt-4 text-center">
            Account created successfully!
          </p>
        )}

      </div>
    </div>
  );
}

export default Signup;