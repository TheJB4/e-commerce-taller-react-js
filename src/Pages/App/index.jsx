import Home from '../Home'
import MyOrders from '../MyOrders'
import MyOrder from '../MyOrder'
import MyOccount from '../MyOccount'
import SignIn from '../SignIn'
import NotFound from '../NotFound'

import NavBar from '../../Components/NavBar'

import './App.css'
import { useRoutes,BrowserRouter } from 'react-router-dom'
import {EcommerceProvider} from '../../Context/index'
import OrderOfList from '../../Components/OrderOfList'

function AppRoutes(){
  let routes = useRoutes([
    {path:'/',element:<Home/>},
    {path:'/:category',element:<Home/>},
    {path:'/myorders',element:<MyOrders/>},
    {path:'/myorders/:id',element:<OrderOfList/>},
    {path:'/myorders/last',element:<MyOrder/>},
    {path:'/myorder',element:<MyOrder/>},
    {path:'/myoccount',element:<MyOccount/>},
    {path:'/sigin',element:<SignIn/>},
    {path:'*',element:<NotFound/>},
  ])
  
  console.log(routes)
  return routes
}

function App() {
  return (
      <BrowserRouter>
       <EcommerceProvider>
        <NavBar/>
        <AppRoutes/>
       </EcommerceProvider>
      </BrowserRouter>
  )
}

export default App
