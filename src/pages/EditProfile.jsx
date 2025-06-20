import { useAuth } from '../context/AuthContext';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function EditProfile() {
  const { user, login } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState(user?.name || '');
  const [age, setAge] = useState(user?.age || '');
  const [email, setEmail] = useState(user?.email || '');
  const [password, setPassword] = useState(user?.password || '');
  const [bio, setBio] = useState(user?.description || '');
  const [gender, setGender] = useState(user?.gender || '');
  const [location, setLocation] = useState(user?.location || '');
  const [birthday, setBirthday] = useState(user?.birthday || '');
  const [website, setWebsite] = useState(user?.website || '');
  const [github, setGithub] = useState(user?.github || '');
  const [linkedin, setLinkedin] = useState(user?.linkedin || '');
  const [experience, setExperience] = useState(user?.experience || '');
  const [work, setWork] = useState(user?.work || '');
  const [education, setEducation] = useState(user?.education || '');
  const [skills, setSkills] = useState(user?.skills || '');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      toast.error('Name, email, and password are required!');
      return;
    }

    login({
      name, age, email, password,
      description: bio,
      gender, location, birthday,
      website, github, linkedin,
      experience, work, education, skills,
    });

    toast.success('Profile updated!');
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-indigo-700 to-purple-700 flex items-center justify-center px-4">
      <form onSubmit={handleSubmit} className="max-w-2xl w-full bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl text-black dark:text-white">
        <h2 className="text-3xl font-bold mb-6 text-center text-indigo-700 dark:text-indigo-300">Edit Profile</h2>

        <div className="space-y-4">
          <input className="w-full border p-2 rounded text-black" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
          <input className="w-full border p-2 rounded text-black" placeholder="Age" type="number" value={age} onChange={(e) => setAge(e.target.value)} />
          <input className="w-full border p-2 rounded text-black" placeholder="Gender" value={gender} onChange={(e) => setGender(e.target.value)} />
          <input className="w-full border p-2 rounded text-black" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} />
          <input className="w-full border p-2 rounded text-black" placeholder="Birthday" value={birthday} onChange={(e) => setBirthday(e.target.value)} />
          <input className="w-full border p-2 rounded text-black" placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

          <div className="relative">
            <input
              className="w-full border p-2 rounded text-black"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-gray-600 dark:text-gray-300"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          <input className="w-full border p-2 rounded text-black" placeholder="Website" value={website} onChange={(e) => setWebsite(e.target.value)} />
          <input className="w-full border p-2 rounded text-black" placeholder="Github URL" value={github} onChange={(e) => setGithub(e.target.value)} />
          <input className="w-full border p-2 rounded text-black" placeholder="LinkedIn URL" value={linkedin} onChange={(e) => setLinkedin(e.target.value)} />
          <textarea className="w-full border p-2 rounded text-black" rows="2" placeholder="Summary" value={bio} onChange={(e) => setBio(e.target.value)} />
          <textarea className="w-full border p-2 rounded text-black" rows="2" placeholder="Experience" value={experience} onChange={(e) => setExperience(e.target.value)} />
          <textarea className="w-full border p-2 rounded text-black" rows="2" placeholder="Work" value={work} onChange={(e) => setWork(e.target.value)} />
          <textarea className="w-full border p-2 rounded text-black" rows="2" placeholder="Education" value={education} onChange={(e) => setEducation(e.target.value)} />
          <textarea className="w-full border p-2 rounded text-black" rows="2" placeholder="Skills (comma separated)" value={skills} onChange={(e) => setSkills(e.target.value)} />
        </div>

        <button type="submit" className="w-full mt-6 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded">
          Save
        </button>
      </form>
    </div>
  );
}

export default EditProfile;
