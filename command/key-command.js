const inquirer=require("inquirer");
const colors=require("colors");
const keyManager=require("../lib/KeyManager")
const {isRequired}=require("../util/validation")

const key={
    async set(){
         const key_manager=new keyManager();
         const input= await inquirer.prompt([
             {
                 type:"input",
                 name:"key",
                 message:"Enter Api Key ".green + 'https://nomics.com',
                 validate:isRequired
             }
         ]);
         const key=key_manager.setKey(input.key);
         if(key){
             console.log('API key set'.blue);
         }
    },
    show(){
        try{
            const key_manager=new keyManager();
            const key=key_manager.getKey();
            console.log("Current API Key:",key.yellow);
            return key;

        }catch(err){
         console.error(err.message.red);
        }
    },
    remove(){
        try{
            const key_manager=new keyManager();
            key_manager.deleteKey();
            console.log('key Removed'.blue);
            return;
        }catch(err){
            console.error(err.message.red);
        }
    }
};
module.exports=key;