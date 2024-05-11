# Every Day Webpack Features

This project serves as a comprehensive guide for using webpack effectively in web development. It covers essential features and provides practical insights and examples to help developers optimize their workflow and boost application performance

## This project inlcude how to:

1) Connect the **environment variables**
2) Make **different build scenarios**: for production and development 
3) Connect **HTML** to the application using webpack, configure **dynamic file names** in order to prevent client side files from being cashed
4) Add **plugins** to webpack
5) Add **Typescript support** and other **loaders** 
6) Properly migrate **webpack config to Typescript** and use **global.d.ts** file 
7) Use **dev server**, **watch mode** for better development experience and why do we need the **source map**
8) Connect **react and jsx** 
9) Support **CSS styles** and use **SCSS preprocessor** 
10) Properly **decompose** the large **webpack config** and make **reusable components**
11) Isolate styles with **CSS modules**
12) Implement **routing**, **lazy components**, decrease a size of the bundle
13) Create **aliases**, module resolving
14) Work with **assets** (images, icons and more)
15) Properly work with **global variables** and what is **tree shaking**
16) Speed up build proccess by extracting **type checking** to **separate process**
17) Stop reloading page after changing the code with **HMR (Hot Module Replacemenet)**
18) Use **favicon** and copy any other files to final build with **copy plugin**
19) Use **Babel** and create **own plugins** with it
    
### Git clone the repo 
```bash
$ git clone https://github.com/sssshefer/webpack.git
```

### 1) How to run the project 
```bash
$ npm run start
```

### 2) How to make development build
```bash
$ npm run build:dev
```

### 3) How to make production build
```bash
$ npm run build:prod
```


### 4) How to do typechecking
```bash
$ npm run typecheck
```
