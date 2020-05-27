const axios=require("axios");
const colors=require("colors");




class CtyptoApi{
    constructor(apiKey){
        this.apiKey=apiKey;
        this.baseUrl="https://api.nomics.com/v1/currencies/ticker";

    }
    async getPriceData(coinOption,curOption){
        try{
       const res=await axios.get(`${this.baseUrl}?key=${this.apiKey}&ids=${coinOption}&convert=${curOption}`);
       let output='';
       res.data.forEach(coin=>{
           output +=` ${coin.rank.green}.[Coin:${coin.symbol.yellow}(${coin.name.yellow}) -- Price:${coin.price.green} -- Rank:${coin.rank.blue}]\n`;
       });
       return output;
        }catch(err){
console.error(err);
        }
    }
}
module.exports=CtyptoApi;