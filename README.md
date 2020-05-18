# Coindex
CLI Based app to show the price of Crypto Currency

Coindex CLI
Command line interface written in Node.js to check cryptocurrency prices

Register an API key at https://nomics.com
![Screenshot](https://github.com/devil-cyber/Coindex/blob/master/Screenshot%20(52).png)
Usage
npm install

npm link
Commands
# Help & Commands
coindex -h

# Version
coindex -V

# API Key Commands
coindex key set
coindex key show
coindex key remove

# Crypto Check Commands
coindex check price

# Check Specific Coins (default: BTN,ETH,XRP)
coindex check --coin=BTC,ETH

# Choose Currency (Default: USD)
coindex check --cur=EUR
Version

1.0.0

License
MIT
