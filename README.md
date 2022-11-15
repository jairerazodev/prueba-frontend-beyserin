# **Documentación Prueba técnica**
> Este es un documento de referencia  rápida de como inicializar este proyecto al clonar el mismo para su validación, támbien describe como se preparo la base personalizada de React sobre la que se basa el desarrollo de la prueba.

___

## **Inicializar entorno de desarrollo**

## **Git**
    git clone https://github.com/jairerazodev/prueba-frontend-beyserin.git

## **npm**
    npm install
    npm run start
    
___

## **Configuración nuevo entorno de desarrollo**
>Esta sección describe la configuración desde cero y comodamente se puede utilizar como punto de partida para construir este mismo o un proyecto nuevo.

## **Git**
    git init

## **npm**
    npm init
    npm install react react-dom

## **Estructura de carpetas**
    my-project/
    ├── node_modules/
    ├── public/
    │   └── index.html
    ├── src/
    │   └── index.js
    ├── components/
    │   ├── App.jsx
    │   │   └── main.js
    │   └── scss/
    │       └── styles.scss
    ├── LICENSE
    ├── package.json
    ├── package-lock.json
    ├── .gitignore
    ├── .babelrc
    └── webpack.config.js

## **Babel:**
    npm install @babel/core @babel/preset-env @babel/preset-react 

## **Webpack:**
    npm install webpack webpack-cli webpack-dev-server 

## **HTML plugin:**
    npm install babel-loader html-loader html-webpack-plugin
___

## **Archivos de configuración**

### **"webpack.config.js"**
    const path = require('path');
    const HtmlWebpackPlugin = require('html-webpack-plugin');
    const MiniCssExtractPlugin = require('mini-css-extract-plugin');
    
    module.exports = {
    	entry: './src/index.js',
    	output: {
    		path: path.resolve(__dirname, 'dist'),
    		filename: 'bundle.js',
    	},
    	mode: 'development',
    	resolve: {
    		extensions: ['.js', '.jsx'],
    	},
    	module: {
    		rules: [
    			{
    				test: /\.(js|jsx)$/,
    				exclude: /node_modules/,
    				use: {
    					loader: 'babel-loader'
    				}
    			},
    			{
    				test: /\.html$/,
    				use: [
    					{
    						loader: 'html-loader'
    					}
    				]
    			},
    			{
    				test: /\.s[ac]ss$/i,
    				use: [
    					"style-loader",
    					"css-loader",
    					"sass-loader",
    				],
    			}
    		]
    	},
    	plugins: [
    		new HtmlWebpackPlugin({
    			template: './public/index.html',
    			filename: './index.html'
    		}),
    		new MiniCssExtractPlugin({
    			filename: '[name].css'
    		}),
    	],
    }
    
### **".gitignore"**
    node_modules
    
### **".babelrc"**
    {
      "presets": [
        "@babel/preset-env",
        "@babel/preset-react"
      ]
    }
### **"package.json"**
    {
      "name": "prueba-frontend-beyserin",
      "version": "1.0.0",
      "description": "Prueba de desarrollo frontend para beyserin Consulting",
      "main": "src/index.js",
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "start": "webpack serve --open",
        "build": "webpack --mode production"
      },
      "keywords": [
        "react",
        "javascript"
      ],
      "author": "Jair Erazo <jair.erazo.dev@proton.me>",
      "license": "MIT",
      "bugs": {
        "url": "https://github.com/jairerazodev/prueba-frontend-beyserin/issues"
      },
      "homepage": "https://github.com/jairerazodev/prueba-frontend-beyserin#readme",
      "dependencies": {
        "@babel/core": "^7.15.0",
        "@babel/preset-env": "^7.15.0",
        "@babel/preset-react": "^7.14.5",
        "babel-loader": "^8.2.2",
        "html-loader": "^2.1.2",
        "html-webpack-plugin": "^5.3.2",
        "react": "^17.0.2",
        "react-dom": "^17.0.2",
        "webpack": "^5.50.0",
        "webpack-cli": "^4.8.0",
        "webpack-dev-server": "^4.0.0"
      },
      "devDependencies": {
        "css-loader": "^6.2.0",
        "mini-css-extract-plugin": "^2.2.0",
        "sass": "^1.38.0",
        "sass-loader": "^12.1.0",
        "style-loader": "^3.2.1"
      }
    }

## **Archivos base del proyecto**

### **"./public/index.html"**
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <div id="app"></div>
    </body>
    </html>    

### **"./src/index.js"**
    import React from 'react';
    import ReactDOM from 'react-dom';
    import App from '../components/App';
    
    ReactDOM.render(<App />, document.getElementById('app'));   

### **"./components/App.jsx"**
    import React from 'react';
    
    const App = () => {
        return(
          <h1>
            Hey
          </h1>
        );
    }
    
    export default App; 
___

## **Inicializar entorno de desarrollo**
    npm i
    npm run start