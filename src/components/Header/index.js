import React, { useState } from 'react';
import Nav from '../Nav';

function Header() {
  const [categories] = useState([
    {
      name: 'commercial',
      description: 'Photos of grocery stores, food trucks, and other commercial projects',
    },
    { name: 'portraits', description: 'Portraits of people in my life' },
    { name: 'food', description: 'Delicious delicacies' },
    { name: 'landscape', description: 'Fields, farmhouses, waterfalls, and the beauty of nature' },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [aboutSelected, setAboutSelected] = useState(false);
  const [contactFormSelected, setContactFormSelected] = useState(false);
  const [resumeSelected, setResumeSelected] = useState(false);
  const [portfolioSelected, setPortfolioSelected] = useState(false);
  return (
<header className="flex-row px-1">
<h2>
        <a data-testid="link" href="/">
          Courtney Van Breda
        </a>
      </h2>
<Nav category={currentCategory.name}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        aboutSelected={aboutSelected}
        setAboutSelected={setAboutSelected}
        contactFormSelected={contactFormSelected}
        setContactFormSelected={setContactFormSelected}
        resumeSelected={resumeSelected}
        setResumeSelected={setResumeSelected}
        portfolioSelected={portfolioSelected}
        setPortfolioSelected={setPortfolioSelected}
      ></Nav>
</header>
  );
}

export default Header;
