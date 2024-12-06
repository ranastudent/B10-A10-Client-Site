import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const MyDonation = () => {
  const { user } = useContext(AuthContext);
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/donations/${user.email}`)
      .then(response => response.json())
      .then(data => setDonations(data))
      .catch(error => console.error('Error fetching donations:', error));
  }, [user.email]);

  return (
    <div className="container mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">My Donations</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {donations.map((donation) => (
          <div key={donation._id} className="bg-white p-4 rounded-lg shadow-md">
            <img src={user.photoURL} alt="User" className="w-16 h-16 rounded-full mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">{donation.userName}</h3>
            <p className="text-gray-700"><strong>Campaign ID:</strong> {donation.campaignId}</p>
            <p className="text-gray-700"><strong>User Email:</strong> {donation.userEmail}</p>
            <p className="text-gray-700"><strong>Donation Time:</strong> {new Date(donation.donationTime).toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyDonation;
