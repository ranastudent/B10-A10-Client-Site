import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';

const CampaignDetails = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [campaign, setCampaign] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://b10-a10-n3.vercel.app/campaign/${id}`)
      .then(response => response.json())
      .then(data => setCampaign(data))
      .catch(error => console.error('Error fetching campaign details:', error));
  }, [id]);

  const handleDonate = () => {
    const currentDate = new Date();
    const deadlineDate = new Date(campaign.deadline);

    if (currentDate > deadlineDate) {
      Swal.fire('Error!', 'The campaign deadline has passed. You cannot donate to this campaign.', 'error');
      return;
    }

    const donationData = {
      campaignId: id,
      userEmail: user.email,
      userName: user.displayName,
      donationTime: currentDate.toISOString()
    };

    fetch('https://b10-a10-n3.vercel.app/donate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(donationData),
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          Swal.fire('Success!', 'Donation successful.', 'success');
          navigate('/donation');
        }
      })
      .catch(error => {
        console.error('Error making donation:', error);
        Swal.fire('Error!', 'Failed to make donation.', 'error');
      });
  };

  if (!campaign) {
    return <div>Loading...</div>;
  }

  return (
    <div className="">
      <div className='w-full'>
        <img className='w-full h-72' src={campaign.image} alt="" />
      </div>
      <div className=' mx-auto  p-6 bg-[#FFC0CB] rounded-lg shadow-md'>
        <h2 className="text-2xl font-bold mb-6">{campaign.title}</h2>
        <p><strong>Type:</strong> {campaign.type}</p>
        <p><strong>Description:</strong> {campaign.description}</p>
        <p><strong>Minimum Donation:</strong> {campaign.minDonation}</p>
        <p><strong>Deadline:</strong> {campaign.deadline}</p>
        <p><strong>User Email:</strong> {campaign.userEmail}</p>
        <button onClick={handleDonate} className="btn btn-primary mt-4">Donate</button>
      </div>
    </div>
  );
};

export default CampaignDetails;
