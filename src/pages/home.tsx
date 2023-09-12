import { UserCard } from '../components/user-card';
import USERS from '../data/users.json';
import { ILinkedInUser } from '../interface/user';

const Home: React.FC = () => {
  return (
    <div className='p-4'>
      <h1 className='text-3xl mb-4'>Linkedin Users</h1>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {
          USERS.map((user: ILinkedInUser) => (
            <UserCard key={user.id} userData={user} />
          ))
        }
      </div>
    </div>
  );
};

export default Home;