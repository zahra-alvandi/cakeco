import { useState } from "react";
import { motion } from "framer-motion";
import {
  EnvelopeIcon,
  LockClosedIcon,
  EyeIcon,
  EyeSlashIcon,
} from "@heroicons/react/24/outline";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!form.email.includes("@")) {
      newErrors.email = "Email is not valid";
    }

    if (form.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    await new Promise((res) => setTimeout(res, 1500));

    setLoading(false);

    alert("Logged in successfully 🚀");
  };

  return (
    <div className="min-h-screen overflow-hidden flex items-center justify-center bg-gradient-to-br from-pink-50 via-white to-pink-100 px-4">

      <div className="w-full max-w-4xl grid md:grid-cols-2 gap-6 items-stretch h-[600px]">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="relative flex flex-col items-center justify-center bg-pink-500/10 backdrop-blur-md rounded-2xl p-10 bg-[url('/images/loginBg.png')] bg-cover overflow-hidden"
        >

          {/* 🔥 overlay (added) */}
          <div className="absolute inset-0 bg-pink-500/30 backdrop-blur-[2px]"></div>

          <h2 className="text-pink-700 text-2xl md:text-4xl font-semibold mt-4 relative z-10">
            Cake & Co.
          </h2>

          <p className="text-pink-600 text-sm md:text-md mt-2 text-center relative z-10">
            Sweet moments start here.
          </p>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white/60 backdrop-blur-xl border border-white/40 shadow-2xl rounded-2xl p-8"
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">

            <h3 className="text-2xl font-bold text-center text-gray-800">
              Welcome Back
            </h3>

            {/* EMAIL */}
            <div>
              <div className="flex items-center border border-gray-400 rounded-xl px-3 py-3 bg-white/70">
                <EnvelopeIcon className="w-5 h-5 text-gray-500 mr-2" />

                <input
                  className="w-full outline-none bg-transparent"
                  type="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>

              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            {/* PASSWORD */}
            <div>
              <div className="flex items-center border border-gray-400 rounded-xl px-3 py-3 bg-white/70">
                <LockClosedIcon className="w-5 h-5 text-gray-500 mr-2" />

                <input
                  className="w-full outline-none bg-transparent"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={form.password}
                  onChange={(e) =>
                    setForm({ ...form, password: e.target.value })
                  }
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeSlashIcon className="w-5 h-5 text-gray-500" />
                  ) : (
                    <EyeIcon className="w-5 h-5 text-gray-500" />
                  )}
                </button>
              </div>

              {errors.password && (
                <p className="text-red-500 text-xs mt-1">{errors.password}</p>
              )}
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="bg-pink-500 text-white py-3 rounded-xl hover:bg-pink-600 transition flex items-center justify-center"
            >
              {loading ? "Loading..." : "Login"}
            </button>

            <p className="text-sm text-center text-gray-500">
              Forgot password?
            </p>

          </form>
        </motion.div>

      </div>
    </div>
  );
}