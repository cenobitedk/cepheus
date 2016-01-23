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
    sass: {
      options: {
        sourceMap: true,
        outputStyle: 'expanded'
      },
      dist: {
        files: {
          'styles/style.css' : 'styles/style.scss'
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
      css: {
        files: ['styles/*.scss'],
        tasks: ['sass', 'cssmin']
      },
      js: {
        files: ['<%= jshint.files %>'],
        tasks: ['jshint', 'uglify']
      }
    },
  	realFavicon: {
  		favicons: {
  			src: 'img/D-2-1000x1000.jpg',
  			dest: 'icons/',
  			options: {
  				iconsPath: '/',
  				html: [ 'index.php', 'm/index.php' ],
  				design: {
  					ios: {
  						pictureAspect: 'noChange'
  					},
  					desktopBrowser: {},
  					windows: {
  						pictureAspect: 'noChange',
  						backgroundColor: '#190f0f',
  						onConflict: 'override'
  					},
  					androidChrome: {
  						pictureAspect: 'noChange',
  						themeColor: '#190f0f',
  						manifest: {
  							name: 'DYNATRON',
  							display: 'browser',
  							orientation: 'notSet',
  							onConflict: 'override',
  							declared: true
  						}
  					},
  					safariPinnedTab: {
  						masterPicture: {
  							type: 'inline',
  							content: 'PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4yIiBiYXNlUHJvZmlsZT0idGlueSIgaWQ9IkxheWVyXzFfY29weSINCgkgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSI2MDEuNDdweCINCgkgaGVpZ2h0PSI2MDEuNDY5cHgiIHZpZXdCb3g9IjAgMCA2MDEuNDcgNjAxLjQ2OSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8cG9seWdvbiBwb2ludHM9IjE0OS40NDIsMzYzLjQwMiAxNDkuNDQyLDIzOC4wNjcgMTgzLjkyLDIwMy41ODkgMTgzLjkyLDUyLjg2MSA0Mi44NjEsMTkzLjkyIDQyLjg2MSw0MDcuNTUgMTgzLjkyLDU0OC42MDkgDQoJCTE4My45MiwzOTcuODggCSIvPg0KCTxwb2x5Z29uIHBvaW50cz0iNDA3LjU1LDQyLjg2MSAzMDAuNzM1LDQyLjg2MSAxOTMuOTIsNDIuODYxIDE5My45Miw1NTguNjA5IDMwMC43MzUsNTU4LjYwOSAzMDAuNzM1LDE0OS40NDIgMzYzLjQwMSwxNDkuNDQyIA0KCQk0NTIuMDI4LDIzOC4wNjcgNDUyLjAyOCwzNjMuNDAyIDM2My40MDEsNDUyLjAyNyAzMTAuNzM1LDQ1Mi4wMjcgMzEwLjczNSw1NTguNjA5IDQwNy41NSw1NTguNjA5IDU1OC42MDgsNDA3LjU1IDU1OC42MDgsMTkzLjkyIAkNCgkJIi8+DQo8L2c+DQo8L3N2Zz4NCg=='
  						},
  						pictureAspect: 'silhouette',
  						themeColor: '#190f0f'
  					}
  				},
  				settings: {
  					compression: 4,
  					scalingAlgorithm: 'Mitchell',
  					errorOnImageTooSmall: false
  				}
  			}
  		}
  	}
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-real-favicon');

  grunt.registerTask('default', ['jshint', 'uglify', 'sass', 'cssmin']);
  grunt.registerTask('dev', ['default', 'watch']);
};
