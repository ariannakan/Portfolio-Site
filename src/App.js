import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { Container, Navbar, Nav, NavbarBrand } from 'react-bootstrap';

import Footer from './components/Footer'

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      title:'Arianna Kan',
      headerLinks: [
        { title: 'Home', path: '/'},
        { title: 'About', path: '/about'},
        { title: 'Contact', path: '/contact'}
      ],
      home: {
        title: 'Title',
        subTitle: 'subtitle',
        text: 'Checkout my projects below'
      },
      about: {
        title: 'About Me'
      },
      contact: {
        title: 'Let\'s Talk'
      }
    }
  }

  render(){
    return (
      <Router>
        <Container className='p-0' fluid={true}>
          
          <Navbar className='border-bottom' bg='transparent' expand='lg'>
            <Navbar.Brand> Arianna Kan</Navbar.Brand>

            <Navbar.Toggle className='border-0' aria-controls='Navbar-toggle'/>
            <Navbar.Collapse id='Navbar-toggle'>
              <Nav className='ml-auto'>
                <Link className='nav-link' to='/'>Home</Link>
                <Link className='nav-link' to='/about'>About</Link>
                <Link className='nav-link' to='/contact'>Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Footer />

        </Container>

      </Router>
  );
}


  
}

export default App;
