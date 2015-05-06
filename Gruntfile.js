module.exports = function (grunt) {
    grunt.initConfig({
        autoprefixer: {
            all: [{
                expand: true,
                flatten: true,
                src: 'src/css/*.css',
                dest: 'build/css/' 
            }]
        },
		concat: {
			css: {
				src: ['src/css/*.css'],
				dest: 'src/css/squarepaper.css'
			},
			css_no_r: {
				src: ['src/css/*.css', '!src/css/*.responsive.css'],
				dest: 'src/css/squarepaper-non-responsive.css'
			},
			js : {
				src: ['src/js/*.js'],
				dest: 'src/js/squarepaper.js'
			}
		},
		cssmin: {
			all: {
				files: [{
					expand: true,
					cwd: 'build/css',
					src: ['*.css', '!*.min.css'],
					dest: 'build/css',
					ext: '.min.css'
				}]
			}
		},
		uglify: {
			core: {
				files: {
					'build/js/squarepaper.min.js': ['src/js/squarepaper.js']
				}
			}
		},
        watch: {
            core: {
				files: ['src/css/*.css', 'src/js/*.js'],
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