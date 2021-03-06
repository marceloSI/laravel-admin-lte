let mix = require('laravel-mix');

mix.js('resources/assets/js/auth.js', 'public/js')
   .sass('resources/assets/sass/auth.scss', 'public/css');
mix.js('resources/assets/js/admin-lte.js', 'public/js')
   .sass('resources/assets/sass/admin-lte.scss', 'public/css');

mix.autoload({
    jquery: [ '$', 'jQuery', 'jquery'],
});
mix.extract([
    'lodash', 'jquery', 'bootstrap-sass',
    'fastclick', 'jquery-slimscroll', 'admin-lte',
    'vue', 'axios'
], 'public/js/vendor.js');
mix.version();
mix.setPublicPath('public');
