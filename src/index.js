var fs = require('fs');

let allSettings;
let settings;

export const setup = file => {
  return JSON.parse(fs.readFileSync(file, 'utf8'));
};

export const setClientSideGlobal = (varName, obj) => (
  `window.${varName} = ${JSON.stringify(obj)};`
);

export const get = () => {
  return allSettings;
};

export const load = (app, options={}) => {
  const {
    file = './settings.json',
    clientPath = '/ProjectSettings.js',
    globalVarName = 'ProjectSettings'
  } = options;

  settings = setup(file);
  allSettings = { ...settings.public, ...settings };

  app.get(clientPath, function (req, res) {
    res.setHeader('Content-Type', 'text/javascript');
    res.end(setClientSideGlobal(globalVarName, settings.public || {}));
  });
};
