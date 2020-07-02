const keyManager=require("../lib/KeyManager");
const crypto_api=require("../lib/crypto_api");
const colors=require("colors");
const pkg=require("../package.json");
const check={
   async price(cmd){
        try{
         key_manager=new keyManager();
         const key=key_manager.getKey();
         const s="Devloped by:Manikant Kumar";
         const l="Github:https://github.com/devil-cyber";
         const email="Email:mani2474695@gmail.com";
         const heading = "Crypto-Coin";
         const title = "Welcome to the project!"

         const api=new crypto_api(key);
         const priceOutputData=await api.getPriceData(cmd.coin,cmd.cur);
         console.log("\n\n\n\n\n\n\n");
         console.log("\t\t\t\t\t\t\t\t\t\t\t",heading.white)
         console.log("\t\t\t\t\t\t\t\t\t\t",title.white)
         console.log("\n");
         console.log("\t\t\t\t\t",s.green,l.yellow,email.red)
         console.log("\n");
         console.log(priceOutputData);
         console.log("\n\n\n\n\n\n\n\n\n\n");
        }catch(err){
            consol.error(err.message.red);
        }
    }
};
module.exports=check;