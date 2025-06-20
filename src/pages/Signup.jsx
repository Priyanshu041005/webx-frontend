import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [bio, setBio] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    login({ name, age, email, password, description: bio });
    navigate('/dashboard');
  };

  return (
    <form onSubmit={handleSignup} className="max-w-md mx-auto mt-20 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl">
      <h2 className="text-3xl font-bold mb-6 text-center text-primary dark:text-yellow-300">Signup</h2>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        required
        className="w-full mb-4 p-2 border rounded"
      />
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        placeholder="Age"
        required
        className="w-full mb-4 p-2 border rounded"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
        className="w-full mb-4 p-2 border rounded"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
        className="w-full mb-4 p-2 border rounded"
      />
      <textarea
        value={bio}
        onChange={(e) => setBio(e.target.value)}
        placeholder="Bio"
        required
        className="w-full mb-4 p-2 border rounded"
      />
      <button type="submit" className="w-full bg-primary text-white py-2 rounded hover:bg-blue-600 transition">
        Sign Up
      </button>
    </form>
  );
}

export default Signup;
