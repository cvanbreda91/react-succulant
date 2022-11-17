import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
  const {
    categories = [],
    aboutSelected,
    currentCategory,
    setAboutSelected,
    contactFormSelected,
    setContactFormSelected,
    portfolioSelected,
    setPortfolioSelected,
    resumeSelected,
    setResumeSelected,
    setCurrentCategory,
  } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
  }, [currentCategory]);

  return (
    <nav>
      <ul className="flex-row">
        <li className={`mx-2 ${aboutSelected && 'navActive'}`}>
          <span onClick={() => setAboutSelected(true)}>About Me</span>
        </li>
        {categories.map((category) => (
          <li
            className={`mx-1 ${currentCategory.name === category.name && !aboutSelected && 'navActive'
              }`}
            key={category.name}
          >
            <span
              onClick={() => {
                setCurrentCategory(category);
                setAboutSelected(false);
              }}
            >
              {capitalizeFirstLetter(category.name)}
            </span>
          </li>
        ))}
        <li className={`mx-2 ${contactFormSelected && 'navActive'}`}>
          <span onClick={() => setContactFormSelected(true)}>Contact</span>
        </li>
        {categories.map((category) => (
          <li
            className={`mx-1 ${currentCategory.name === category.name && !contactFormSelected && 'navActive'
              }`}
            key={category.name}
          >
            <span
              onClick={() => {
                setCurrentCategory(category);
                setContactFormSelected(false);
              }}
            >
              {capitalizeFirstLetter(category.name)}
            </span>
          </li>
        ))}
        <li className={`mx-2 ${portfolioSelected && 'navActive'}`}>
          <span onClick={() => setPortfolioSelected(true)}>Portfolio</span>
        </li>
        {categories.map((category) => (
          <li
            className={`mx-1 ${currentCategory.name === category.name && !portfolioSelected && 'navActive'
              }`}
            key={category.name}
          >
            <span
              onClick={() => {
                setCurrentCategory(category);
                setPortfolioSelected(false);
              }}
            >
              {capitalizeFirstLetter(category.name)}
            </span>
          </li>
        ))}
        <li className={`mx-2 ${resumeSelected && 'navActive'}`}>
          <span onClick={() => setResumeSelected(true)}>Resume</span>
        </li>
        {categories.map((category) => (
          <li
            className={`mx-1 ${currentCategory.name === category.name && !resumeSelected && 'navActive'
              }`}
            key={category.name}
          >
            <span
              onClick={() => {
                setCurrentCategory(category);
                setResumeSelected(false);
              }}
            >
              {capitalizeFirstLetter(category.name)}
            </span>
          </li>
        ))}

      </ul>
    </nav>
  );
}

export default Nav;
