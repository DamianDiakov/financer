const mix = require('laravel-mix');
const path = require('path');


/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */
 mix.alias({
    ziggy: path.resolve('vendor/tightenco/ziggy/dist/vue'), 
});
mix.webpackConfig({
    resolve: {
        alias: {
            ziggy: path.resolve('vendor/tightenco/ziggy/dist'),
        },
    },
});
mix.js('resources/js/app.js', 'public/js')
    .vue(3)
    .postCss('resources/css/app.css', 'public/css', [
        require("tailwindcss"),
    ])
    .version();
