// TODO: Create a function that returns a license badge based on which license is passed in


// If there is no license, return an empty string
function renderLicenseBadge(license) {

  let renderbadge = "";

  if (license == 'MIT'){

    renderbadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  }
  else if (license == 'GPLV3'){
    renderbadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  }
  else if (license == 'GPLV2'){
    renderbadge = "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)"
  }
  else {
    renderbadge = "No License Badge!"
  }

  return renderbadge;

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  let renderlicense = "";

  if (license == 'MIT'){
    renderlicense = "https://choosealicense.com/licenses/mit/";
  }
  else if (license == 'GPLV2'){
    renderlicense = "https://www.gnu.org/licenses/old-licenses/gpl-2.0.html"
  }
  else if (license == 'GPLV3'){
    renderlicense = "https://www.gnu.org/licenses/gpl-3.0.html";
  }
  else {
    renderlicense = "No License Link!"
  }

  return renderlicense

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  const badge = renderLicenseBadge(license);

  
  const link = renderLicenseLink(license);


  const renderlisencesection = 
  `> * Badge:${badge}
   > * License Description:${link}`

  return renderlisencesection;

}


// TODO: Create a function to generate markdown for README
function generateMarkdown(license) {

  return renderLicenseSection(license);

}

exports.testlicense = generateMarkdown;
