import { createBrowserRouter } from 'react-router-dom';
import Home from '../../screens/Home/Home';
import MainLayout from '../../layouts/MainLayout';
import ProtectedRouts from "./ProtectedRouts" 
import Services from '../../screens/SERVICES/Services';
import CountactUs from '../../screens/CountactUs/CountactUs';
import GiftCard from '../../screens/GiftCard/GiftCard';
import MemberShip from '../../screens/MemberShip/MemberShip';
import Favorites from '../../screens/Favorites/Favorites';
import AboutUs from '../../screens/AboutUs';

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />, // Wraps all routes with MainLayout
    children: [
      {
        path: "/",
        element:<Home/>,
      },
      {
        path: "/about-us",
        element: <ProtectedRouts component={<AboutUs />} />,
      },
      {
        path: "/services",
        element: <ProtectedRouts component={<Services />}/> ,
      },
      {
        path: "/countact-us",
        element: <ProtectedRouts component={<CountactUs />}/> ,
      },
      {
        path: "/giftcard",
        element: <ProtectedRouts component={<GiftCard />}/> ,
      },
      {
        path: "/membership",
        element: <ProtectedRouts component={<MemberShip />}/> ,
      },
      {
        path: "/favorites",
        element: <ProtectedRouts component={<Favorites />}/> ,
      },
    ],
  },
]);
