const program=require("commander");
const key=require("../command/key-command");
program
.command('set')
.description("set API key --Get at https://nomics.com")
.action(key.set);
program
.command('show')
.description("show api key")
.action(key.show)
program
.command('remove')
.description("remove api key")
.action(key.remove);

program.parse(process.argv);