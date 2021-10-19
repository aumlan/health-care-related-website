import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Navbarcopy from './components/Navbar/Navbarcopy';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';
import AboutUsScreen from './screens/InstructorScreen';
import ContactScreen from './screens/ContactScreen';
import ErrorScreen from './screens/ErrorScreen';
import ServiceDetailScreencopy from './screens/ServiceDetailScreencopy';
import HomeScreen from './screens/HomeScreen';
import ServicesScreen from './screens/ServicesScreen';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>


          <Navbarcopy />
          <Switch>
            <Route exact path="/"><HomeScreen /></Route>
            <Route exact path="/home"><HomeScreen /></Route>
            <PublicRoute exact path="/signin"><SignInScreen /></PublicRoute>
            <ContactScreen exact path="/contact"><ContactScreen /></ContactScreen>
            <ServicesScreen exact path="/services"><ServicesScreen /></ServicesScreen>
            <AboutUsScreen exact path="/instructors"><AboutUsScreen /></AboutUsScreen>
            <PublicRoute exact path="/signup"><SignUpScreen /></PublicRoute>
            <PrivateRoute exact path="/services/:title"><ServiceDetailScreencopy /></PrivateRoute>
      
          
            <Route  path="*"><ErrorScreen /></Route>
          </Switch>
          <Footer />


      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
