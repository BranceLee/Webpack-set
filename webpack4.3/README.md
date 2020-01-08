# Webpack Note

## webpack-md5-hash

`webpack-md5-hash` is the plugin for when only change the hashId of the css file and will igonre the .js file name.

## PostCSS

provides with auto prefixer and ...

## CleanWebpackPlugin

`clean-webpack-plugin` is the plugin for clean ./dist folder before that regenerate files.

The loader uses plugins from end to the beginning.

## webpack-dev-server

`webpack-dev-server` is the tool for hot module replacement, source map and so on.

## eslint-plugin-prettier

`eslint-plugin-prettier` is the pulgin for running prettier as an ESLint rule and reports differences as individual ESLint issues. As Container

- `eslint-config-prettier` is the config as it's rules

## Prettier Format

- Reffer to the link to config `prettier.config.js` info http://eslint.org/docs/user-guide/configuring#example-configuration

## eslint-loader

- `eslint-loader` is the pipeline for webpack to config `.eslintrc.js`.

## postcss-loader && autoprefixer

- `postcss-loader && autoprefixer` is css autoprefix to support different browser. There are two ways to config the `autoprefixer`. _ Create a `postcss.config.js` file and add xxx. _ Add it to webpack.config directly.

## devServer hot loader

- To speed up the reload time, set hot loader in webpack, but there is an conflict output, so change `[chunckhash]` to `[hash]`.

## babel-loader

- The babel-loader will translate the ES6/7/8 to the ES5, but some new grammar like (promise, generator, Set, Maps, Proxy) will not be dealt and some browsers are not support these grammar, so we can use the babel/pollyfill enable these grammars.
