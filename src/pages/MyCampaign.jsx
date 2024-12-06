import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';

const MyCampaign = () => {
  const { user } = useContext(AuthContext);
  const [campaigns, setCampaigns] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5000/userCampaigns/${user.email}`)
      .then(response => response.json())
      .then(data => setCampaigns(data))
      .catch(error => console.error('Error fetching campaigns:', error));
  }, [user.email]);

  const handleUpdate = (id) => {
    navigate(`/updateCampaign/${id}`);
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/deleteCampaign/${id}`, {
          method: 'DELETE',
        })
          .then(response => response.json())
          .then(data => {
            if (data.success) {
              setCampaigns(campaigns.filter(campaign => campaign._id !== id));
              Swal.fire('Deleted!', 'Campaign has been deleted.', 'success');
            }
          })
          .catch(error => {
            console.error('Error deleting campaign:', error);
            Swal.fire('Error!', 'Failed to delete campaign.', 'error');
          });
      }
    });
  };

  return (
    <div className="container mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">My Campaigns</h2>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Title</th>
            <th className="py-2 px-4 border-b">Type</th>
            <th className="py-2 px-4 border-b">Description</th>
            <th className="py-2 px-4 border-b">Minimum Donation</th>
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
              <td className="py-2 px-4 border-b">
                <button
                  onClick={() => handleUpdate(campaign._id)}
                  className="bg-blue-500 text-white py-1 px-3 rounded mr-2"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDelete(campaign._id)}
                  className="bg-red-500 text-white py-1 px-3 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyCampaign;
