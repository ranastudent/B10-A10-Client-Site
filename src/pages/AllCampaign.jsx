import React, { useEffect, useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';

const AllCampaigns = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    fetch('https://b10-a10-n3.vercel.app/campaigns')
      .then(response => response.json())
      .then(data => setCampaigns(data))
      .catch(error => console.error('Error fetching campaigns:', error));
  }, []);

  const sortCampaigns = () => {
    const sortedCampaigns = [...campaigns].sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.minDonation - b.minDonation;
      } else {
        return b.minDonation - a.minDonation;
      }
    });
    setCampaigns(sortedCampaigns);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  return (
    <div className="container mx-auto mt-10 p-6 bg-[#FFC0CB] rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">All Campaigns</h2>
      <button
        onClick={sortCampaigns}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Sort by Minimum Donation ({sortOrder === 'asc' ? 'Ascending' : 'Descending'})
      </button>
      <div className="overflow-x-auto">
        <Fade>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {campaigns.map((campaign) => (
              <div key={campaign._id} className="card bg-white shadow-md rounded-lg overflow-hidden">
                <img src={campaign.image} alt={campaign.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">{campaign.title}</h3>
                  <p className="text-gray-700 mb-2">User: {campaign.userName}</p>
                  <p className="text-gray-700 mb-2">Email: {campaign.userEmail}</p>
                  <p className="text-gray-700 mb-2">Minimum Donation: {campaign.minDonation}</p>
                  <Link to={`/campaign/${campaign._id}`} className="btn btn-primary">See More</Link>
                </div>
              </div>
            ))}
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default AllCampaigns;
