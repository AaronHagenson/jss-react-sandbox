/*
  Component Scaffolding Script
  This is a script that enables scaffolding a new JSS component using `jss scaffold <componentname>`.
  Edit this script if you wish to use your own conventions for component storage in your JSS app.
*/

/* eslint-disable no-throw-literal,no-console */

const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

/*
  SCAFFOLDING SCRIPT
*/
// const componentName = process.argv[2];
let componentPath = process.argv[2];
let componentName = componentPath.split('/').pop();

console.log('componentPath: ' + componentPath);
console.log('componentName: ' + componentName);

// TEST
const args = process.argv;
console.log({ args });

if (!componentPath.includes('/')) {
  throw `Please pass a path for the new component. The path should be relative to the src/components folder.
For example: jss scaffold account/AccountMenu.  This will create a new AccountMenu component in the folder 
src/components/account`;
}

if (!componentName) {
  throw 'Component name was not passed.';
}

if (!/^[A-Z][A-Za-z0-9-]+$/.test(componentName)) {
  throw `Component name should start with an uppercase letter and contain only letters and numbers. 
  Do not include the file extension (i.e. ".js" or ".jsx). Ex: jss scaffold mysubfolder/MyComponentName`;
}

if (componentPath.includes('C:/')) {
  throw `Path should not begin with a special character (such as "/" or "\"). To scaffold a new component the 
  command should look like this: jss scaffold mysubfolder/MyComponentName`;
}

const componentManifestDefinitionsPath = 'sitecore/definitions/components';
const componentRootPath = 'src/components';

let manifestOutputPath = null;

if (fs.existsSync(componentManifestDefinitionsPath)) {
  manifestOutputPath = scaffoldManifest();
} else {
  console.log(
    `Not scaffolding manifest because ${componentManifestDefinitionsPath} did not exist. This is normal for Sitecore-first workflow.`
  );
}

const componentOutputPath = scaffoldComponent();

console.log();
console.log(chalk.green(`Component ${componentName} has been scaffolded.`));
console.log(chalk.green('Next steps:'));
if (manifestOutputPath) {
  console.log(`* Define the component's data in ${chalk.green(manifestOutputPath)}`);
} else {
  console.log(
    `* Scaffold the component in Sitecore using '${chalk.green(
      `jss deploy component ${componentName} --allowedPlaceholders placeholder-for-component`
    )}, or create the rendering item and datasource template yourself.`
  );
}
console.log(`* Implement the React component in ${chalk.green(componentOutputPath)}`);
if (manifestOutputPath) {
  console.log(
    `* Add the component to a route layout (/data/routes) and test it with ${chalk.green(
      'jss start'
    )}`
  );
} else {
  console.log(
    `* Deploy your app with the new component to Sitecore (${chalk.green(
      'jss deploy:watch'
    )} or ${chalk.green('jss deploy files')})`
  );
  console.log('* Add the component to a route using Sitecore Experience Editor, and test it.');
}

/*
  TEMPLATING FUNCTIONS
*/

/**
 * Force to use `crlf` line endings, we are using `crlf` across the project.
 * Replace: `lf` (\n), `cr` (\r)
 * @param {string} content
 */
function editLineEndings(content) {
  return content.replace(/\r|\n/gm, '\r\n');
}

function scaffoldComponent() {
  const exportVarName = componentName.replace(/[^\w]+/g, '');

  const componentTemplate = `import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const ${exportVarName} = (props) => (
  <div>
    <p>${componentName} Component</p>
    <Text field={props.fields.heading} />
  </div>
);

export default ${exportVarName};
`;

  // const outputDirectoryPath = path.join(componentRootPath, componentName);
  const outputDirectoryPath = path.join(componentRootPath, componentPath);
  console.log('outputDirectoryPath: ' + outputDirectoryPath);

  const subFolderPath = outputDirectoryPath.split('\\').slice(0, -1).join('\\');
  console.log('subFolderPath: ' + subFolderPath);

  if (!fs.existsSync(subFolderPath)) {
    console.log('creating component directory. . .');
    fs.mkdirSync(subFolderPath);
  }

  if (fs.existsSync(outputDirectoryPath)) {
    throw `Component path ${outputDirectoryPath} already existed. Not creating component.`;
  }

  fs.mkdirSync(outputDirectoryPath);

  const outputFilePath = path.join(outputDirectoryPath, 'index.js');

  fs.writeFileSync(outputFilePath, editLineEndings(componentTemplate), 'utf8');

  return outputFilePath;
}

function scaffoldManifest() {
  const manifestTemplate = `// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-manifest';

/**
 * Adds the ${componentName} component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.js) when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function (manifest) {
  manifest.addComponent({
    name: '${componentName}',
    icon: SitecoreIcon.DocumentTag,
    fields: [{ name: 'heading', type: CommonFieldTypes.SingleLineText }],
    /*
    If the component implementation uses <Placeholder> or withPlaceholder to expose a placeholder,
    register it here, or components added to that placeholder will not be returned by Sitecore:
    placeholders: ['exposed-placeholder-name']
    */
  });
}
`;

  const outputFilePath = path.join(
    componentManifestDefinitionsPath,
    `${componentPath}.sitecore.js`
  );

  // test
  const componentPathArray = componentPath.split('/');
  console.log('componentPathArray: ' + componentPathArray);
  const componentDirectory = componentPathArray.slice(0, -1).join('/');
  console.log('componentDirectory: ' + componentDirectory);
  const manifestDirectoryPath = path.join(componentManifestDefinitionsPath, componentDirectory);
  console.log('manifestDirectoryPath: ' + manifestDirectoryPath);

  if (!fs.existsSync(manifestDirectoryPath)) {
    console.log('creating directory. . .');
    fs.mkdirSync(manifestDirectoryPath);
  }

  if (fs.existsSync(outputFilePath)) {
    throw `Manifest definition path ${outputFilePath} already exists. Not creating manifest definition.`;
  }

  console.log('writing file ' + outputFilePath);
  fs.writeFileSync(outputFilePath, editLineEndings(manifestTemplate), 'utf8');

  return outputFilePath;
}
