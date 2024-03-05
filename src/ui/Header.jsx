import { useState } from 'react';
import { FaLocationPin } from 'react-icons/fa6';
import { MdClose, MdHome, MdMail, MdMenu } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { scrollToSection } from '../Hooks/ScrollToSection';
import Logout from '../Features/authentication/Logout';
import Logins from '../Features/authentication/Logins';
import { useUser } from '../Features/authentication/useUser';
import { DashboardIcon } from '@radix-ui/react-icons';
import SpinnerMini from './SpinnerMini';

const Header = () => {
  const { isAuthenticated, user, isLoading } = useUser();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  if (isLoading) return <SpinnerMini />;
  return (
    <div className=' md:hidden block'>
      <div className=" items-center flex justify-between p-4 bg-blue-700 text-slate-100">

        <img onClick={() => navigate('/')} src='/ve.png' alt='Logo' className=' h-12 bg-zinc-100 rounded-full' />

        <div className=" flex items-center gap-2">
          {isAuthenticated ? <Logout /> :
            <Logins />}
          <div className=" text-2xl" onClick={() => setOpen(isOpen => !isOpen)}>

            {open ? <MdClose /> : <MdMenu />}</div>
        </div>
      </div>

      {open && <ul className=" px-4 bg-blue-600  text-slate-100 grid divide-y [&>*]:cursor-pointer ">

        <li className='flex items-center gap-1 hover:bg-blue-400 rounded-sm py-8 hover:px-4 transition-all duration-500 hover:gap-2' onClick={() => {
          setOpen(isOpen => !isOpen);
          navigate('/');
        }}><MdHome />Home</li>

        <li className=' flex items-center gap-1 hover:bg-blue-400 rounded-sm py-8 hover:px-4 transition-all duration-500 hover:gap-2 ' onClick={() => {
          setOpen(isOpen => !isOpen);
          scrollToSection('contact');
        }}><MdMail />Contact</li>

        <li className=' flex items-center gap-1 hover:bg-blue-400 rounded-sm py-8 hover:px-4 transition-all duration-500 hover:gap-2' onClick={() => {
          setOpen(isOpen => !isOpen);
        }}><FaLocationPin />Track</li>

        {user?.id === '80f7635b-8fc6-4a97-8a1e-3514518378de' && <li className=' flex items-center gap-1 hover:bg-blue-400 rounded-sm py-8 hover:px-4 transition-all duration-500 hover:gap-2' onClick={() => {
          setOpen(isOpen => !isOpen);
          navigate('/dashboard');
        }}><DashboardIcon />Admin Dashboard</li>}

      </ul>}
    </div>
  );
};

export default Header;