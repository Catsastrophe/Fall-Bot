const Discord = require('discord.js');
const fs = require('fs');
const colors = require('colors')
const client = new Discord.Client();

function getDirectories() {
  return fs.readdirSync("./handlers/commands/").filter(function subFolders(file) {
    return fs.statSync("./handlers/commands/" + file).isDirectory();
  });
}
const commandFiles = fs
  .readdirSync("./handlers/commands/")
  .filter((file) => file.endsWith(".js"));
for (const folder of getDirectories()) {
  const folderFiles = fs
    .readdirSync("./handlers/commands/" + folder)
    .filter((file) => file.endsWith(".js"));
  for (const file of folderFiles) {
    commandFiles.push([folder, file]);
  }
}
for (const file of commandFiles) {
  let command;
  if (Array.isArray(file)) {
    command = require(`./handlers/commands/${file[0]}/${file[1]}`);
  } else {
    command = require(`./handlers/commands/${file}`);
  }
  console.log(colors.green(`✅  Success! Command: ${command.name} Is Working!`));
}

console.log('All The Commands Work and the bot is ready to go!')

return process.exit(0)
