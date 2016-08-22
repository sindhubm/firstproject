module.exports = function(grunt) {
    grunt.initConfig({
     uglify:
            {
                build:
                    {
                        files:
                            {
                            'build/build.min.js':['app/assets/js/src.js']
                            }
                    }
            }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify'); // load the given tasks
    grunt.registerTask('default', ['uglify']); // Default grunt tasks maps to grunt
  };
