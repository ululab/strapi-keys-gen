module.exports = [
    {
      value: "--help",
      description: "List all available commands",
      default: true,
    },
    {
      value: "--refresh",
      description: "Forcefully overwrite all keys",
    },
    {
      value: "--generate",
      description: "Generate keys where missing",
    },
    {
      value: "--clear",
      description: "Clear values of keys",
    },
    {
      value: "--dryrun",
      description:
        "Print involved variables based on the launched command",
    },
    {
      value: "--print",
      description: "Print newly generated variables to the console",
    },
    {
      value: "--status",
      description:
        "Print the status of keys: check keys",
    },
  ];
  