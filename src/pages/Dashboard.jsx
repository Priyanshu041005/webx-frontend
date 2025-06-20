import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import ThemeToggle from '../components/ThemeToggle';
import {
  FaUserAlt, FaVenusMars, FaMapMarkerAlt, FaBirthdayCake, FaInfoCircle,
  FaGlobe, FaGithub, FaLinkedin, FaBriefcase, FaBuilding, FaGraduationCap, FaTools
} from 'react-icons/fa';

function Dashboard() {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen w-full px-4 py-12 bg-gradient-to-tr from-indigo-700 to-purple-700 text-white">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 text-black dark:text-white p-8 rounded-xl shadow-2xl">

        {/* Header */}
        <div className="flex flex-col items-center mb-8">
          <h2 className="text-3xl font-bold">Welcome, {user?.name}!</h2>
          <ThemeToggle />
        </div>

        {/* Profile Fields */}
        <div className="space-y-4 text-lg">
          <Field icon={<FaUserAlt />} label="Name" value={user?.name} />
          <Field icon={<FaVenusMars />} label="Gender" value={user?.gender || 'Not specified'} />
          <Field icon={<FaMapMarkerAlt />} label="Location" value={user?.location || 'Not specified'} />
          <Field icon={<FaBirthdayCake />} label="Birthday" value={user?.birthday || 'Not specified'} />
          <Field icon={<FaInfoCircle />} label="Summary" value={user?.description || 'Not provided'} />
          <Field icon={<FaGlobe />} label="Website" value={user?.website || 'N/A'} />
          <Field icon={<FaGithub />} label="Github" value={user?.github || 'N/A'} />
          <Field icon={<FaLinkedin />} label="LinkedIn" value={user?.linkedin || 'N/A'} />
          <Field icon={<FaBriefcase />} label="Experience" value={user?.experience || 'Not specified'} />
          <Field icon={<FaBuilding />} label="Work" value={user?.work || 'Not specified'} />
          <Field icon={<FaGraduationCap />} label="Education" value={user?.education || 'Not specified'} />
          <Field icon={<FaTools />} label="Skills" value={user?.skills || 'Not specified'} />
        </div>

        {/* Actions */}
        <div className="mt-10 flex justify-between">
          <Link to="/edit-profile" className="text-indigo-600 dark:text-indigo-400 hover:underline">
            ✏️ Edit Profile
          </Link>
          <button onClick={logout} className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

// Reusable field renderer
function Field({ icon, label, value }) {
  return (
    <div className="flex items-center gap-4 bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow">
      <div className="text-indigo-600 dark:text-indigo-300">{icon}</div>
      <span className="font-semibold">{label}:</span>
      <span className="ml-auto">{value}</span>
    </div>
  );
}

export default Dashboard;
