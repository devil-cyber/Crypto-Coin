const program=require("commander");
const check=require("../command/check");

program
 .command('price')
 .description('Check price of coins')
 .option('--coin <type>','Add specific coin types in CSV format','BTC,ETH,XRP,USDT,BCH,BSV,LTC,EOS,BNB,XTZ,')
 .option('--cur <currency>','Change the currency','USD')
 .action((cmd)=>check.price(cmd));


 program.parse(process.argv);
