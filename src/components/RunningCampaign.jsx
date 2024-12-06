import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const RunningCampaign = () => {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/runningCampaigns')
      .then(response => response.json())
      .then(data => setCampaigns(data))
      .catch(error => console.error('Error fetching running campaigns:', error));
  }, []);

  return (
    <div className="container mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Running Campaigns</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {campaigns.map((campaign) => (
          <div key={campaign._id} className="bg-white p-4 rounded-lg shadow-md">
            <img src={campaign.image} alt={campaign.title} className="w-full h-48 object-cover rounded-t-lg mb-4" />
            <h3 className="text-xl font-bold mb-2">{campaign.title}</h3>
            <p className="text-gray-700 mb-2"><strong>Type:</strong> {campaign.type}</p>
            <p className="text-gray-700 mb-2"><strong>Minimum Donation:</strong> {campaign.minDonation}</p>
            <p className="text-gray-700 mb-2"><strong>Deadline:</strong> {new Date(campaign.deadline).toLocaleDateString()}</p>
            <Link to={`/campaign/${campaign._id}`} className="btn btn-primary mt-4">See More</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RunningCampaign;
