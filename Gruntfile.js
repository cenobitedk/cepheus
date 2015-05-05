module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      files: ['Gruntfile.js', 'js/main.js'],
      options: {
        globals: {
          // jQuery: true
        }
      }
    },
    uglify: {
      release: {
        options: {
          compress: true,
          sourceMap: true,
          sourceMapName: 'js/main.min.map'
        },
        files: {
          'js/main.min.js': ['js/main.js']
        }
      }
    },
    cssmin: {
      options: {
        processImport: false
      },
      target: {
        files: [{
          expand: true,
          cwd: 'styles',
          src: ['*.css', '!*.min.css'],
          dest: 'styles',
          ext: '.min.css'
        }]
      }
    },
    watch: {
      files: ['<%= jshint.files %>', 'styles/*.css', '!styles/*.min.css'],
      tasks: ['default']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['jshint', 'uglify', 'cssmin']);
  grunt.registerTask('dev', ['default', 'watch']);

};