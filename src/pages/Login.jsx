import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { FaEye, FaEyeSlash, FaUserAlt, FaLock } from 'react-icons/fa';
import ThemeToggle from '../components/ThemeToggle';

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    login({
      name: "Guest",
      email,
      password,
      age: 20,
      description: "Logged in as guest"
    });
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-6xl flex shadow-2xl rounded-xl overflow-hidden bg-white dark:bg-gray-800">
        
        {/* Left Graphic Section */}
        <div className="hidden md:flex md:flex-col justify-center items-center w-1/2 bg-gradient-to-tr from-indigo-700 to-purple-700 text-white px-10 py-20">
          <h2 className="text-4xl font-bold mb-4">Welcome back!</h2>
          <p className="text-lg">You can sign in to access your account.</p>
        </div>

        {/* Right Login Form */}
        <div className="w-full md:w-1/2 px-8 py-16 relative">
          <div className="absolute top-4 right-4">
            <ThemeToggle />
          </div>
          <h2 className="text-3xl font-bold text-gray-700 dark:text-white mb-8">Sign In</h2>
          <form onSubmit={handleLogin} className="space-y-6">
            
            {/* Email Input */}
            <div className="relative">
              <span className="absolute left-3 top-3 text-gray-400">
                <FaUserAlt />
              </span>
              <input
                type="email"
                required
                placeholder="Username or email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border rounded-full text-black"
              />
            </div>

            {/* Password Input */}
            <div className="relative">
              <span className="absolute left-3 top-3 text-gray-400">
                <FaLock />
              </span>
              <input
                type={showPassword ? "text" : "password"}
                required
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-10 py-2 border rounded-full text-black"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 cursor-pointer text-gray-500"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-full"
            >
              Sign In
            </button>

            
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
