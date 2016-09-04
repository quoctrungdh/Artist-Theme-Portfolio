Starter build template for Ekino F-E Development

###Tools
- Based on HTML5 Boilerplate v4.3
- Package Manager: Bower
- Task runner: Gulp
- CSS Compilator: Sass
- CSS: Bootstrap

###Install
####Node/npm
1.  git clone repo
2.  `npm install`
3.  `bower install`

####Project
customize site with the following source files:
    - `src/**/*.html` for main pages. But these pages will be compiled to insert the partials. And will end in app/
    - `src/tmpl/*.tmpl` for the html templates that will be included in html files
    - `src/assets/sass/*.scss`
    - `src/assets/js/*.js`
    - `test/spec/*.js` Describe Jasmine's Unit tests

####Preprocessor
Sass tasks have been integrated in the boilerplate.

####Bower
Bower dependencies goes to the folder `./vendor`. The full directory will be copied to dist directoy when packaging.

####Gulp
Multiple gulp tasks have been registered to help you start quickly:
1. `Gulp`: default task for development. Lauch a httpserver on `localhost:3000`. Then launch the watcher to auto-compile sass files and include/replace the partials in html files.
2. `Gulp validate`: validate JS and CSS sources using jshint an csslint. Validate W3C compliance using html validation plugin. Execute Jasmine Unit Test using phantomJS
3. `Gulp build`: build everything in the build dir + 1 + 2 (without watcher)
4. `Gulp compile`: 3 + concate, minify files in the compile directoy
5. `Gulp delivery`: 4 + create a zip for delivery

####HTTP server (browser-sync)
The `Gulp` default task launch a http server on `localhost:3000` pointing to `build/`. When you stop the watch task, the server stops.
