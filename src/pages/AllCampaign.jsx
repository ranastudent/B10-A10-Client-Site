import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AllCampaigns = () => {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/campaigns')
      .then(response => response.json())
      .then(data => setCampaigns(data))
      .catch(error => console.error('Error fetching campaigns:', error));
  }, []);

  return (
    <div className="container mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">All Campaigns</h2>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Title</th>
            <th className="py-2 px-4 border-b">Type</th>
            <th className="py-2 px-4 border-b">Description</th>
            <th className="py-2 px-4 border-b">Minimum Donation</th>
            <th className="py-2 px-4 border-b">Deadline</th>
            <th className="py-2 px-4 border-b">User Email</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {campaigns.map((campaign) => (
            <tr key={campaign._id}>
              <td className="py-2 px-4 border-b">{campaign.title}</td>
              <td className="py-2 px-4 border-b">{campaign.type}</td>
              <td className="py-2 px-4 border-b">{campaign.description}</td>
              <td className="py-2 px-4 border-b">{campaign.minDonation}</td>
              <td className="py-2 px-4 border-b">{campaign.deadline}</td>
              <td className="py-2 px-4 border-b">{campaign.userEmail}</td>
              <td className="py-2 px-4 border-b">
                <Link to={`/campaign/${campaign._id}`} className="btn btn-primary">See More</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllCampaigns;
