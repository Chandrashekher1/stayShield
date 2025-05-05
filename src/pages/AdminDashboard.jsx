import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const [landlord, setLandlord] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate()
  
  const token = localStorage.getItem('token')
  console.log(token);
  

  const Logout = () => {
    // localStorage.removeItem('user')
    navigate('/')
  }

  useEffect(() => {
    const fetchLandlord = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/tenant', {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `${token}`
          }
        });
        // const data1 = await res.json()
        // console.log(data1);
        
        if (!res.ok) {
          const err = await res.json();
          throw new Error(err.message || 'Failed to fetch Admin Data');
        }

        const data = await res.json();
        setLandlord(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchLandlord();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-red-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-md text-center">
        {loading ? (
          <p className="text-lg text-gray-600">Loading...</p>
        ) : error ? (
          <p className="text-red-600">{error}</p>
        ) : (
          <>
            <img
              src="https://c8.alamy.com/comp/MR0G79/random-pictures-MR0G79.jpg"
              alt="Admin"
              className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-red-500 mb-4"
            />
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-gray-800">{landlord.name}</h1>
              <h2 className="text-sm text-gray-500">{landlord.email}</h2>
            </div>
            <div>
              <p className="text-gray-600 mb-4">Upload your KYC Documents:</p>
              <button className="px-5 py-2 bg-red-600 hover:bg-red-700 transition-colors text-white font-semibold rounded-lg shadow">
                Upload Documents
              </button>
            </div>
            <div>
              <button className='my-16 px-6 py-2 rounded-lg bg-red-600 text-white cursor-pointer' onClick={Logout}>Logout</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
