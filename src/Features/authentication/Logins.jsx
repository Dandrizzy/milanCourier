import { FaUser, } from 'react-icons/fa6';
import { Box, Dialog, Tabs, } from '@radix-ui/themes';

import { useUser } from './useUser';
import Login from './Login';
import Register from './Register';

function Logins() {

  const { user, isAuthenticated } = useUser();

  return (
    <>
      {isAuthenticated ? <p className=' text-blue-900 text-sm'>{user?.user_metadata?.fullName}</p> :

        <Dialog.Root>
          <Dialog.Trigger>
            <FaUser />
          </Dialog.Trigger>

          <Dialog.Content style={{ maxWidth: 450 }}>
            <Tabs.Root defaultValue="signIn">
              <Tabs.List>
                <Tabs.Trigger value="signIn">Sign Up</Tabs.Trigger>
                <Tabs.Trigger value="sign Up">Sign In</Tabs.Trigger>
              </Tabs.List>

              <Box px="4" pt="3" pb="2">
                <Tabs.Content value="signIn">

                  <Dialog.Title>Sign up</Dialog.Title>
                  <Register />
                </Tabs.Content>

                <Tabs.Content value="sign Up">
                  <Login />
                </Tabs.Content>
              </Box>
            </Tabs.Root>


          </Dialog.Content>


        </Dialog.Root>


      }
    </>
  );
}

export default Logins;
