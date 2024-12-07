import React, { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../provider/AuthProvider';

const AddNewCampaign = () => {
  const { user } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    image: '',
    title: '',
    type: 'personal',
    description: '',
    minDonation: '',
    deadline: '',
    userEmail: user.email,
    userName: user.displayName,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('https://b10-a10-server-kappa.vercel.app/addNewCampaign', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          Swal.fire('Success!', 'Campaign added successfully.', 'success');
          setFormData({
            image: '',
            title: '',
            type: 'personal',
            description: '',
            minDonation: '',
            deadline: '',
            userEmail: user.email,
            userName: user.displayName,
          });
        }
      })
      .catch((error) => {
        console.error('Error adding campaign:', error);
        Swal.fire('Error!', 'Failed to add campaign.', 'error');
      });
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-[#FFC0CB] rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Add New Campaign</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Image/Thumbnail (URL)</label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Campaign Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Campaign Type</label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          >
            <option value="personal">Personal Issue</option>
            <option value="startup">Startup</option>
            <option value="business">Business</option>
            <option value="creative">Creative Ideas</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Minimum Donation Amount</label>
          <input
            type="number"
            name="minDonation"
            value={formData.minDonation}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Deadline</label>
          <input
            type="date"
            name="deadline"
            value={formData.deadline}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">User Email</label>
          <input
            type="email"
            name="userEmail"
            value={formData.userEmail}
            className="w-full px-3 py-2 border rounded bg-gray-200"
            readOnly
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">User Name</label>
          <input
            type="text"
            name="userName"
            value={formData.userName}
            className="w-full px-3 py-2 border rounded bg-gray-200"
            readOnly
            required
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddNewCampaign;
