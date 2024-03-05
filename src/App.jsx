import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import '@radix-ui/themes/styles.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';
import Home from './Pages/Home';
import AppLayout from './Layout/AppLayout';
import Error from './ui/Error';
import Dashboard from './Pages/Dashboard';
import DashboardLayout from './Layout/DashboardLayout';
import AdminForm from './Pages/AdminForm';
import Ticket from './Features/Ticket';
import Contact from './Pages/Contact';
import EditForm from './Pages/EditForm';
import Login from './Pages/Login';
import ProtectedRoute from './ui/ProtectedRoute';
import HomeTicket from './Features/HomeTicket';
import ChatMessages from './Pages/ChatMessages';
import AllMsg from './Pages/AllMsg';
import AdminMap from './Pages/AdminMap';
import UserMap from './ui/UserMap';





const route = createBrowserRouter([
  {
    errorElement: <Error />,
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/:alphaCode',
        element: <HomeTicket />
      },
      {
        path: '/customer/:alphaCode',
        element: <UserMap />
      },

    ]
  },
  {
    errorElement: <Error />,
    element:
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>,
    children: [
      {
        path: '/dashboard',
        element: <Dashboard />
      },
      {
        path: '/dashboard/messages',
        element: <ChatMessages />
      },
      {
        path: '/dashboard/messages/:chatId',
        element: <AllMsg />
      },
      {
        path: '/form',
        element: <AdminForm />
      },
      {
        path: '/form/:formId',
        element: <EditForm />
      },
      {
        path: '/ticket/:ticketId',
        element: <Ticket />
      },
      {
        path: '/ticket/adminMap/:ticketId',
        element: <AdminMap />
      },
      {
        path: '/mail/:id',
        element: <Contact />
      },

    ]
  },
  {
    errorElement: <Error />,
    element: <Login />,
    path: '/login',
  },
]);

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 0 } }
});

function App() {



  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <RouterProvider router={route} />
      <Toaster position="top-center"
        gutter={12}
        containerStyle={{ margin: '8px' }}
        toastOptions={{
          success: {
            duration: 3000
          },
          error: {
            duration: 5000
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "#18212f",
            color: "#e5e7eb",
          }
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
