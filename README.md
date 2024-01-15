# module-federation-react
Implementation of Module Federation using React and Vite

# Prerequisits
## Install NodeJS
Download and install [NodeJS](https://nodejs.org/en/download). or you can install it using [NVM](https://github.com/coreybutler/nvm-windows/releases)

## Install Yarn
```
npm install -g yarn
```

## Install Project dependancies
```
yarn install
```

# How to run this repository
## Build `host` project 
```
yarn host:dev
```
or
```
yarn host:build
```
and then
```
yarn host:preview
```


## Build and Run all remote projects (header, list)
```
yarn remotes:run
```
