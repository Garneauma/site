module.exports = function(grunt) {
	
	require('load-grunt-tasks')(grunt);
	
	grunt.initConfig({
  		
		
		jshint: {
			all: ['assets/js/*.js', '!assets/js/site.min.js']
		},
		
		uglify: {
			options: {
				mangle: false
			},
			dist: {
				files: {
					'assets/js/site.min.js': ['assets/js/site.js']
				}
			}
		},
		
		cssmin: {
			target: {
				files: {
					'assets/css/style.min.css': ['assets/css/style.css']
				}
			}
		},
		
		less: {
			development: {
				options: {
			  		paths: ['assets/less']
				},
				files: {
			  		'assets/css/style.css': 'assets/less/style.less'
				}
			}
		},
		
		autoprefixer: {
			options: {
				browsers: ['last 2 versions', 'ie 11']
			},
			target: {
				'assets/css/trimark.css': 'assets/css/trimark.css',
				'assets/css/pcna.css': 'assets/css/pcna.css',
				'assets/css/pcnaTools.css': 'assets/css/pcnaTools.css'
			},
		},
		
		sprite:{
			all: {
				src: 'assets/img/sprite/*',
				dest: 'assets/img/sprite.png',
				destCss: 'assets/css/sprites.css'
			}
		},
		
		watch: {
			styles: {
				files: ['assets/less/*.less'], // which files to watch
				tasks: ['less', 'autoprefixer'],
				options: {
					nospawn: true
				}
			},
			scripts: {
				files: ['assets/js/site.js'], // which files to watch
				tasks: ['jshint', 'uglify'],
				options: {
					nospawn: true
				}
			}
		}
		
	});
	
	grunt.registerTask('default', ['jshint', 'uglify', 'less', 'cssmin', 'autoprefixer', 'sprite', 'watch']);
	
}