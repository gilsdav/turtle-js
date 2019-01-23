console.log "Building with Grunt"
module.exports = (grunt) ->
  require('load-grunt-tasks')(grunt)
  grunt.loadNpmTasks('grunt-contrib-copy');
  webDir = "public"
  outDir = "output"

  grunt.initConfig {
    requirejs: {
      compile: {
        options: {
          baseUrl: webDir + "/script",
          mainConfigFile: webDir + "/script/main.js",
          name: "main",
          out: outDir + "/turtleroy.js"
        }
      }
    },
    copy: {
      main: {
        files: [
          {expand: true, cwd: 'public/', src: ['index.html', 'css/*', 'images/*'], dest: 'output/'},
          {expand: true, cwd: 'node_modules/codemirror/', src: ['**'], dest: 'output/codemirror/'},
          {expand: true, cwd: 'bower_components', src: ['**'], dest: 'output/components/'}
        ],
      },
    },
    watch: {
      js: {
        files: [webDir + "/script/**", webDir + "/lib/**"],
        tasks: 'requirejs'
      }
    }
  }

  grunt.registerTask 'build', ['requirejs', 'copy']
  grunt.registerTask 'default', [ 'build', 'watch' ]
