import React from 'react'
import { Link } from 'react-router-dom';

import { Card, CardHeader } from './ui/card';
import { ILinkedInUser } from '../interface/user';

export const UserCard: React.FC<{ userData: ILinkedInUser }> = ({
  userData
}) => {
  return (
    <Link to={`/details/${userData.id}`}>
      <Card className='bg-white rounded hover:shadow-xl cursor-pointer'>
        <CardHeader className='p-4'>
          <div className='flex flex-col items-center justify-center'>
            <img
              src={userData.profilePicture}
              alt={`${userData.firstName} picture`}
              className='w-24 h-24 rounded-full mb-4'
            />

            <div className='flex flex-col items-center justify-center'>
              <h2 className='text-xl'>{userData.firstName}</h2>
              <h3 className='text-sm'>{userData.lastName}</h3>
              <p className='text-sm text-gray-500'>{userData.headline}</p>
            </div>
          </div>
        </CardHeader>
      </Card>
    </Link>
  );
};
