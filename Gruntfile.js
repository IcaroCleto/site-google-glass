module.exports = function( grunt ) {

  grunt.initConfig({

    uglify : {
      options : {
        mangle : false
      },

      my_target : {
        files : {
          'MAIN.MIN.JS' : [ 'MAIN.JS' ]
        }
      }
    }, // uglify
  
	cssmin: {
	  target: {
	    files: [{
	      expand: true,
	      cwd: 'css/',
	      src: ['*.css', '!*.min.css'],
	      dest: 'css/',
	      ext: '.min.css'
	    }]
	  }
	},//CSSMIN

  concat: {
    options: {
      separator: ';',
    },
    dist: {
      src: ['JQUERY.JS', 'MAIN.JS'],
      dest: 'main_concat.js',
    },
  }

  });

  // Plugins do Grunt
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-concat');


  // Tarefas que serão executadas
  grunt.registerTask( 'default', [ 'uglify' ], ['cssmin']);

};
