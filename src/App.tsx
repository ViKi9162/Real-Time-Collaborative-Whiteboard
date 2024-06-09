import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthProvider } from './context/AuthContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Whiteboard from './components/Whiteboard';
// import './styles/App.css';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="d-flex flex-column vh-100">
          <Header />
          <main className="flex-grow-1">
            <Switch>
              <Route path="/whiteboard" component={Whiteboard} />
              <Redirect to="/whiteboard" />
            </Switch>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
