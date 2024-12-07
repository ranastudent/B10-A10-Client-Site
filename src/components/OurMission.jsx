import React from 'react';
import { Fade } from 'react-awesome-reveal';

const OurMission = () => {
      return (
            <div className="container mx-auto mt-10 p-6 bg-[#FFC0CB] rounded-lg shadow-md">
                  <h2 className="text-2xl font-bold mb-6">Our Mission</h2>
                  <Fade>
                        <p>
                              At [Your Crowdfunding Website Name], our mission is to empower individuals and communities to bring their dreams to life. We believe that everyone has the potential to make a difference, and we are here to provide the platform and support needed to turn ideas into reality.
                        </p>
                        <h3 className="text-xl font-bold mt-6 mb-4">What We Do</h3>
                        <p>
                              We connect creators, innovators, and dreamers with a global community of supporters. Whether you're looking to fund a personal project, a startup, a business venture, or a creative idea, our platform provides the tools and resources to help you succeed.
                        </p>
                        <h3 className="text-xl font-bold mt-6 mb-4">Our Values</h3>
                        <ul className="list-disc list-inside">
                              <li><strong>Empowerment:</strong> We empower individuals to take control of their future by providing a platform to raise funds and gain support for their projects.</li>
                              <li><strong>Community:</strong> We foster a supportive and inclusive community where backers and creators can connect and collaborate.</li>
                              <li><strong>Transparency:</strong> We ensure transparency in all our processes, providing clear and honest communication between creators and backers.</li>
                              <li><strong>Innovation:</strong> We encourage innovation and creativity, supporting projects that push boundaries and bring new ideas to life.</li>
                        </ul>
                        <h3 className="text-xl font-bold mt-6 mb-4">How It Works</h3>
                        <ol className="list-decimal list-inside">
                              <li><strong>Create a Campaign:</strong> Start by creating a campaign on our platform. Share your story, set your funding goal, and let the world know why your project matters.</li>
                              <li><strong>Share Your Campaign:</strong> Use social media, email, and other channels to share your campaign with friends, family, and potential backers.</li>
                              <li><strong>Receive Support:</strong> Watch as backers from around the world contribute to your campaign. Keep them updated with your progress and show your appreciation for their support.</li>
                              <li><strong>Bring Your Project to Life:</strong> Once you reach your funding goal, use the funds to bring your project to life. Keep your backers informed every step of the way.</li>
                        </ol>
                        <h3 className="text-xl font-bold mt-6 mb-4">Join Us</h3>
                        <p>
                              Join us in our mission to make dreams come true. Whether you're a creator looking to fund your next big idea or a backer wanting to support innovative projects, [Your Crowdfunding Website Name] is the place for you.
                        </p>
                  </Fade>

            </div>
      );
};

export default OurMission;
