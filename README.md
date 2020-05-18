# Crypto-Coin
CLI Based app to show the price of Crypto Currency

Coindex CLI
Command line interface written in Node.js to check cryptocurrency prices

Register an API key at https://nomics.com
![Screenshot](https://github.com/devil-cyber/Coindex/blob/master/Screenshot%20(52).png)
# Step to follow to used this app:
npm install
npm link<br>
Get you Api Key from https://nomics.com<br>
coindex key set <br>
coindex check price <br>

# Help & Commands
coindex -h

# Version
coindex -V

# API Key Commands
coindex key set<br>
coindex key show<br>
coindex key remove

# Crypto Check Commands
coindex check price

# (default-coin:'BTC,ETH,XRP,USDT,BCH,BSV,LTC,EOS,BNB,XTZ')

# Check Specific Coins 
coindex check --coin=BTC,ETH

# Choose Currency (Default: USD)
coindex check --cur=EUR
Version

1.0.0

License
MIT
