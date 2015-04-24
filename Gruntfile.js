/* Tasks I want to accomplish
 *  1) Shrink images to appropriate size
 *  2) compile Sass to CSS
 *  3) copy HTML files and directories to production
 */

module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        copy: {
            html: {
                expand: true,
                src: '**.html',
                dest: 'production/'
            }
        },
        image_resize: {
            buttons: {
                options: {
                    width: 300
                },
                src: 'images/buttons/**.png',
                dest: 'production/images/buttons/'
            },
            views: {
                options: {
                    width: 960
                },
                src: 'images/views/**.png',
                dest: 'production/images/views/'
            }
            
        },
        sass: {
            production: {
                files: {
                    'production/css/style.css': 'sass/main.scss'
                }
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-image-resize');
    grunt.loadNpmTasks('grunt-contrib-sass');
    
    grunt.registerTask('buttons', ['image_resize:buttons']);
    grunt.registerTask('views', ['image_resize:views']);
    grunt.registerTask('default', ['copy', 'sass']);
}