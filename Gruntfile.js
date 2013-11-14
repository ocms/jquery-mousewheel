module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: ['*.js']
        },
        uglify: {
            options: {
                compress: true,
                mangle: true,
                preserveComments: 'some',
                report: 'gzip'
            },
            build: {
                src: 'jquery.mousewheel.js',
                dest: 'build/jquery.mousewheel.min.js'
            }
        },
        connect: {
          server: {
            options: {
              hostname: '*',
              directory: '.',
              keepalive: true
            }
          }
        }
    });

    // Load the plugin that provides the 'uglify' task.
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-connect');

    // Default task(s).
    grunt.registerTask('default', ['jshint', 'uglify']);

};
