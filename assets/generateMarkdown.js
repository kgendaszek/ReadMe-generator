function renderLicenseBadge(license) {
  if (license === 'Apache 2.0'){
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  }
  else if (license === 'BSD3'){
    return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Claus';
  }
  else if (license === 'MIT'){
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  }
  else {
    return " ";
  }
}

function renderLicenseLink(license) {
  if (license === 'Apache 2.0'){
    return '[Apache license](https://opensource.org/licenses/Apache-2.0)';
  }
  else if (license === 'BSD3'){
    return '[BSD3 license](https://opensource.org/licenses/BSD-3-Claus';
  }
  else if (license === 'MIT'){
    return '[MIT license](https://opensource.org/licenses/MIT)';
  }
  else {
    return " ";
}}

function generateMarkdown(data) {
  return `# ${data.title}
  ## **Table of Contents**
* [Description](#Description)
* [Installation](#Installation)
* [Usage](#Usage)
* [Contributing](#Contributing)
* [Questions](#Questions)
* [Tests](#Tests)
* [Website](#Website)
* [License](#License)

## **Description**
${data.description}

## **Installation**
${data.installation}

## **Usage**
${data.usage}

## **Contributing**
${data.contributing}

[Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)]


## **Questions**
Please contact me at ${data.questions} with any questions.

Vist my gitHub page at ${data.gitHub}!

## **Tests**
${data.tests}

## **Website**
${data.website}


## **License**
### ${renderLicenseBadge(data.license)}

${renderLicenseLink(data.license)}

`;
}

module.exports = generateMarkdown;