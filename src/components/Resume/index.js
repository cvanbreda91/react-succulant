import React from 'react';
function Resume() {
    // Function will execute on click of button
    const onButtonClick = () => {
      // using Java Script method to get PDF file
      fetch('Resume - Courtney Van Breda.pdf').then(response => {
          response.blob().then(blob => {
              // Creating new object of PDF file
              const fileURL = window.URL.createObjectURL(blob);
              // Setting various property values
              let alink = document.createElement('a');
              alink.href = fileURL;
              alink.download = 'Resume - Courtney Van Breda.pdf';
              alink.click();
          })
      })
  }
  return (
      <>
          <section className="my-5">
      <h1 id="resume">Resume</h1>
      <div className="my-2">
        <p>
        Think Courtney would make a good addition to your team? Please download a copy of her resume!
        </p>
      </div>
    </section>
              <button onClick={onButtonClick}>
                  Download PDF
              </button>
      </>
  );
}

export default Resume;
