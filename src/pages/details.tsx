import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import USERS from '../data/users.json';
import { IExperience, ILinkedInUser } from '../interface/user';
import { Button } from '../components/ui/button';
import FloatingButton from '../components/floating-button';
import Chat from '../components/chat';

const Details: React.FC = () => {
  const [user, setUser] = useState<ILinkedInUser | undefined>(undefined);
  const [isChatOpen, setIsChatOpen] = useState<boolean>(false);
  const { id } = useParams<{ id: string }>();
  const history = useNavigate();

  useEffect(() => {
    const userFound = USERS.find((u: ILinkedInUser) => u.id === parseInt(id || '', 10))
    setUser(userFound);
  }, [id])

  if (!user) {
    return <p>User not found.</p>;
  }

  const goBack = () => {
    history('/');
  }

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  }

  return (
    <div className='p-4'>
      <Button onClick={goBack} color='blue' size='sm'>
        Go Back
      </Button>
      <div className='bg-gray-100 p-4 rounded'>
        <div className='flex flex-col items-center mb-4'>
          <img
            src={user.profilePicture}
            alt={`${user.firstName} picture`}
            className='w-42 h-42 rounded-full mb-10'
          />

          <div className='flex flex-col items-center justify-center'>
            <h2 className='text-3xl'>{`${user.firstName} ${user.lastName}`}</h2>
            <p className='text-lg text-gray-600'>{user.headline}</p>
            <p className='text-sm text-gray-500'>{user.location}</p>
          </div>

          <div className='mt-12 min-w-full'>
            <h2 className='text-2xl mb-2'>Summary</h2>
            <p className='text-lg'>{user.summary}</p>
          </div>

          <div className='mt-12 min-w-full'>
            <h2 className='text-2xl mb-2'>Experience</h2>
            {
              user.experience.map((exp: IExperience, idx: number) => (
                <div key={idx} className='mb-4'>
                  <h3 className='text-lg'>{exp.role}</h3>
                  <p className='text-gray-600'>{exp.company}</p>
                  <p className='text-sm text-gray-500'>{exp.duration}</p>
                </div>
              ))
            }
          </div>
        </div>
      </div>

      {
        isChatOpen ? (
          <Chat />
        ) : null
      }

      <FloatingButton onClick={toggleChat}/>
    </div>
  );
};

export default Details;