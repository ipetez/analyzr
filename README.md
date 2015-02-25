# analyzr

An angularJS + nodeJS Admin dashboard that comprises of all the essential features you would want such as graphing visuals, account/profie settings, task manager and more.  It includes a lot of rich interactions and can be integrated with almost any platform.

### Prerequisite

+ You need node v0.8 or higher to run this program. Follow this [Node Installation Instruction](https://www.npmjs.org/doc/README.html).
+ Install Grunt's command line interface (CLI) globally
```sh
$ npm install -g grunt-cli
```
+ Instalsl Bower to manage this template dependencies(plugin, library etc)
```sh
$ npm install -g bower
```
+ **cd** to the analyzr folder and run this 2 command:
```sh
$ npm install
```
```sh
$ bower install
```
+ Then you can run the Command Line Instruction available in analyzr. Just make sure that you **cd** to the analyzr folder.


### Command Line Instruction

+ Build temporary web server and enable auto reload. Good for development purpose
```sh
$ grunt serve
```
+ Run documentation
```sh
$ grunt docs
```
+ copy all the needed files and folders to **dist** folder.
```sh
$ grunt dist
```
+ copy all the needed files and folders to **dist** folder and minify all javascript, stysheet, html and images.
```sh
$ grunt dist --min
```
