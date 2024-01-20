import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styles from './style';
import { 
  Billing, Business, CardDeal, Clients, CTA, 
  Footer, Navbar, Stats, Testimonials, Hero,
  ContactForm // Import your ContactForm component here
} from './components';

const App = () => (
  <Router>
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <Routes>
        {/* Route for the main page */}
        <Route path="/" element={
          <>
            <div className={`bg-primary ${styles.flexStart}`}>
              <div className={`${styles.boxWidth}`}>
                <Hero />
              </div>
            </div>
            <div className={`${styles.paragraph} ${styles.flexCenter} flex-row pb-4 center flex-wrap mt-5 bg-opacity-70 bg-gray-800 p-6 rounded-lg`}>
              Trust us to optimize your financial workflows and contribute to your enduring success.
            </div>
            <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
              <div className={`${styles.boxWidth}`}>
                <Stats />
                <Business />
                <Billing />
                <CardDeal />
                <Testimonials />
                <Clients />
                <CTA />
                <Footer />
              </div>
            </div>
          </>
        }/>

        {/* New Route for Contact Form */}
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
    </div>
  </Router>
);

export default App;
