# module-federation-react
Implementation of Module Federation using React and Vite. This repository contains a workspace of three projects, Host, Header and List.
Host is the Main(client) application which renders components from Remote Apps (Header and List).
This repository demonstrates how to create monorepo using `yarn` and develop and integrate micro-frontends in main(client) application.

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
