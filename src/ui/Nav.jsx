import { MdHome, MdMail } from 'react-icons/md';
import { scrollToSection } from '../Hooks/ScrollToSection';
import { FaLocationPin } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import Logout from '../Features/authentication/Logout';
import Logins from '../Features/authentication/Logins';
import { useUser } from '../Features/authentication/useUser';
import { DashboardIcon } from '@radix-ui/react-icons';
import SpinnerMini from './SpinnerMini';


const Nav = () => {
  const { isAuthenticated, user, isLoading } = useUser();

  const navigate = useNavigate();

  if (isLoading) return <SpinnerMini />;

  return (
    <div className=" hidden items-center md:grid grid-cols-2 p-4 bg-blue-700 text-slate-100">
      <img onClick={() => navigate('/')} src='/ve.png' alt='Logo' className=' h-12 bg-zinc-100 rounded-full' />

      <ul className=" lg:text-lg [&>*]:cursor-pointer flex justify-between">
        <li className=' hover:bg-neutral-200/20 transition-all duration-300 rounded-full px-2 py-0 flex items-center justify-center gap-1' onClick={() => navigate('/')}><MdHome />Home</li>

        <li className=' flex items-center justify-center gap-1 hover:bg-neutral-200/20 transition-all duration-300 rounded-full px-2 py-0' onClick={() => scrollToSection('contact')}><MdMail />Contact</li>

        <li className=' flex items-center justify-center gap-1 hover:bg-neutral-200/20 transition-all duration-300 rounded-full px-2 py-0' ><FaLocationPin />Track</li>

        {user?.id === '80f7635b-8fc6-4a97-8a1e-3514518378de' && <li className=' flex items-center justify-center gap-1 hover:bg-neutral-200/20 transition-all duration-300 rounded-full px-2 py-0' onClick={() => {

          navigate('/dashboard');
        }}><DashboardIcon />Admin</li>}

        <li className=' flex items-center justify-center gap-1 hover:bg-neutral-200/20 transition-all duration-300 rounded-full px-2 py-0' >
          {isAuthenticated ? <Logout /> :
            <Logins />}
        </li>
      </ul>
    </div>
  );
};

export default Nav;