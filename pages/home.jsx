import React from 'react';
import {Firstcompont} from '../components.jsx/firstcompont';
import {Introdaction} from '../components.jsx/introdaction';
import {SmallFooter} from '../components.jsx/small_footer';
import {Acadmics} from '../components.jsx/acadmics';
import {Activites} from '../components.jsx/activites';
import {Contact} from '../components.jsx/contact';
import {Footer} from '../components.jsx/footer';    

const Home = () => {
  return (
    <div>
      {/* <SmallFooter /> */}
      
      <Firstcompont />
      <Introdaction />
      <Acadmics />
      <Activites />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
