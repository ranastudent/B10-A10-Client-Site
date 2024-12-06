import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AllCampaigns = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    fetch('http://localhost:5000/campaigns')
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
    <div className="container mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">All Campaigns</h2>
      <button
        onClick={sortCampaigns}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Sort by Minimum Donation ({sortOrder === 'asc' ? 'Ascending' : 'Descending'})
      </button>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Campaign Name</th>
              <th className="py-2 px-4 border-b">User Name</th>
              <th className="py-2 px-4 border-b">User Email</th>
              <th className="py-2 px-4 border-b">Minimum Donation</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {campaigns.map((campaign) => (
              <tr key={campaign._id}>
                <td className="py-2 px-4 border-b">{campaign.title}</td>
                <td className="py-2 px-4 border-b">{campaign.userName}</td>
                <td className="py-2 px-4 border-b">{campaign.userEmail}</td>
                <td className="py-2 px-4 border-b">{campaign.minDonation}</td>
                <td className="py-2 px-4 border-b">
                  <Link to={`/campaign/${campaign._id}`} className="btn btn-primary">See More</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllCampaigns;
