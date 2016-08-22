module.exports = function(grunt) {
    grunt.initConfig({
     uglify: 
            {
                build:
                    {
                        files: 
                            {
                        'app/assets/build/build.min.js':['app/assets/build/build.js']
                            }
                    }
            }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify'); // load the given tasks
    grunt.registerTask('default', ['uglify']); // Default grunt tasks maps to grunt
  };