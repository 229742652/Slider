module.exports = function(grunt) {

    // Project configuration.
   // var mozjpeg = require('imagemin-mozjpeg');
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat:{
        xuexi: { //�ϲ�
            files: {
                'zepto-touch.js': ["zepto-touch.js", "slider.js"]
            }
        }
    },
    uglify: {//ѹ��
        xuexi: {
            files: {
                "zepto-touch.min.js": ["zepto-touch.js"]
            }
        }
    },
    watch: {
        xuexi: {
            files: ['Gruntfile.js', '**/*.js'],
            dateFormat: function (time) {
                grunt.log.writeln('The watch finished in ' + time + 'ms at' + (new Date()).toString());
                grunt.log.writeln('Waiting for more changes...');
            } 
        }
    },
    cssmin: {
        combine: {
            files: {
                '../css/index.min.css': ['../css/index.css'],
                '../css/animation.min.css': ['../css/animation.css']
            }
        }
    },
    concat_css: {//�ϲ�css�����
        options: {
           // assetBaseUrl: 'static/assets',
            //baseDir: 'src/(styles|assets)'
        },
        files: {
            //'static/styles.css': ['src/styles/**/*.css', 'src/assets/**/*.css']
        }
    },
    imagemin: {
        /* ѹ��ͼƬ��С */
        dist: {
            files: {                         // Dictionary of files
                //'../images/1.jpg': '../images/1.jpg', // 'destination': 'source'
                //'../images/1.png': '../images/1.png',
                //'../images/2.jpg': '../images/2.jpg'
                //'dist/img3.png': '../images/3.png'
            }
        }
    }
  });
    //���ز��
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
  //  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
   grunt.loadNpmTasks('grunt-contrib-imagemin');
    // Default task(s).
    //���ò��
   grunt.registerTask('default', ["concat", "uglify"]);
   /// watch �����cssmin�������ͬʱʹ�ã��������⡣��ѡһ
};