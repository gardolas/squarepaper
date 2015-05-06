module.exports = function (grunt) {
    grunt.initConfig({
        autoprefixer: {
			core: {
				src: 'build/core/1.0/css/core.css',
				dest: 'build/core/1.0/css/core.css'
			},
			youcan: {
				src: 'build/youcan/1.0/css/youcan.css',
				dest: 'build/youcan/1.0/css/youcan.css'
			}
        },
		concat: {
			/** core **/
			css: {
				src: ['src/core/1.0/css/*.css'],
				dest: 'build/core/1.0/css/core.css'
			},
			css_no_r: {
				src: ['src/core/1.0/css/*.css', '!src/core/1.0/css/*.responsive.css'],
				dest: 'build/core/1.0/css/core-non-responsive.css'
			},
			js : {
				src: ['src/core/1.0/js/*.js'],
				dest: 'build/core/1.0/js/core.js'
			},
			/** youcan **/
			youcan_css: {
				src: ['src/youcan/1.0/css/*.css'],
				dest: 'build/youcan/1.0/css/youcan.css'
			},
			youcan_js : {
				src: ['src/youcan/1.0/js/*.js'],
				dest: 'build/youcan/1.0/js/youcan.js'
			}
		},
		cssmin: {
			core: {
				files: [{
					expand: true,
					cwd: 'build/core/1.0/css',
					src: ['*.css', '!*.min.css'],
					dest: 'build/core/1.0/css',
					ext: '.min.css'
				}]
			},
			youcan: {
				files: [{
					expand: true,
					cwd: 'build/youcan/1.0/css',
					src: ['*.css', '!*.min.css'],
					dest: 'build/youcan/1.0/css',
					ext: '.min.css'
				}]
			}
		},
		uglify: {
			core: {
				files: {
					'build/core/1.0/js/core.min.js': ['build/core/1.0/js/core.js']
				}
			},
			youcan: {
				files: {
					'build/youcan/1.0/js/youcan.min.js': ['build/youcan/1.0/js/youcan.js']
				}
			}
		},
        watch: {
            core: {
				files: ['src/core/1.0/css/*.css', 'src/core/1.0/js/*.js'],
                tasks: ['build']
            },
			youcan: {
				files: ['src/youcan/1.0/css/*.css', 'src/youcan/1.0/js/*.js'],
                tasks: ['build']
            }
        }
    });

	grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask(
		'build',
		'builds the project.',
		[ 'concat', 'autoprefixer', 'cssmin', 'uglify' ]
	);
};