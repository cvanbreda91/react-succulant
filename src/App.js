import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import ContactForm from './components/Contact';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';

function App() {
  const [categories] = useState([
    {
      name: 'commercial',
      description: 'Photos of grocery stores, food trucks, and other commercial projects',
    },
    { name: 'portraits', description: 'Portraits of people in my life' },
    { name: 'food', description: 'Delicious delicacies' },
    { name: 'landscape', description: 'Fields, farmhouses, waterfalls, and the beauty of nature' },
  ]);
  const [aboutSelected] = useState(false);
  const [contactFormSelected] = useState(false);
  const [resumeSelected] = useState(false);
  const [portfolioSelected] = useState(false);

  return (
    <div>
      <Header
      categories={categories}
      aboutSelected={aboutSelected}
      contactFormSelected={contactFormSelected}
      resumeSelected={resumeSelected}
      portfolioSelected={portfolioSelected}
      ></Header>
      <main>
        {!aboutSelected ? (
          <>
          </>
        ) : (
          
          <About></About>
          
        )}
        {!contactFormSelected ? (
          <>
          </>
        ) : (
          <>
          <ContactForm></ContactForm>
          </>
        )}
        {!resumeSelected ? (
          <>
          </>
        ) : (
          <>
            <Resume></Resume>
          </>
        )}
        {!portfolioSelected ? (
          <>
          </>
        ) : (
          <>
            <Portfolio></Portfolio>
          </>
        )}
      </main>
    </div>
  );
}

export default App;
