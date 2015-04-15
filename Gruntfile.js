module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
		mangle: true
      },
      build: {
        files:{
			'build/<%= pkg.name %>.min.js':['src/*.js']
		} 
      }
    },
	copy: {
      build: {
        cwd: 'src',
        src: [ '**' ],
        dest: 'build/temp',
        expand: true
      },
    },
	clean: {
	  build: {
		src: [ 'build/temp' ]
	  }
	},
	watch: {
		files: 'src/*.js',
		tasks: ['uglify']	  
	}
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);

};