const commadList = require("./list");

const processArgv = process.argv.slice(2);

const options = {};

// Options
for (const command of commadList.filter(e => !e.withValues)) {
  options[command.value.replace(/-/g, "")] = processArgv.includes(command.value);
}

// Options with values
for (const commad of commadList.filter(e => e.withValues)) {
  let flagValue = processArgv.find((e) => e.startsWith(commad.value));
  if (flagValue) {
    flagValue = flagValue.split('=')[1];
  }
  options[commad.value.replace(/[-=]/g, "")] = flagValue ? flagValue.split(',') : [];
}

// Set default operation to generate
if (!processArgv.length || !Object.values(options).includes(true)) {
  options.help = true;
}

module.exports = options;
