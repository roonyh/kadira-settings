var fs = require('fs');

let allSettings = {};
let settings = {};

export const _setup = file => {
  const content = fs.readFileSync(file, 'utf8'); // eslint-disable-line no-sync
  return JSON.parse(content);
};

export const _setClientSideGlobal = (varName, obj) => (
  `window.${varName} = ${JSON.stringify(obj)};`
);

export const get = name => {
  return allSettings[name];
};

export const load = (app, options = {}) => {
  const {
    file = './settings.json',
    clientPath = '/ProjectSettings.js',
    globalVarName = 'ProjectSettings'
  } = options;

  settings = _setup(file);
  allSettings = { ...settings.public, ...settings };

  app.get(clientPath, function (req, res) {
    res.setHeader('Content-Type', 'text/javascript');
    res.end(_setClientSideGlobal(globalVarName, settings.public || {}));
  });
};
