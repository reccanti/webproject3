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
            },
            projects: {
                /*
                expand: true,
                src: 'projects/**.html',
                dest: 'production/'
                */
                files: [
                    {
                        expand: true, 
                        src: 'projects/**.html', 
                        dest: 'production/'
                    },
                    {
                        expand: true, 
                        src: 'projects/**.shtml', 
                        dest: 'production/'
                    }
                ]
            },
            notes: {                
                expand: true,
                src: 'notes/**',
                dest: 'production/'
            },
            SSI: {   
                /*
                expand: true,
                src: 'SSI/**.html',
                dest: 'production/'
                */
                files: [
                    {
                        expand: true, 
                        src: 'SSI/**.html', 
                        dest: 'production/'
                    },
                    {
                        expand: true, 
                        src: 'SSI/**.shtml', 
                        dest: 'production/'
                    }
                ]
            },
            vendors: {
                files: [
                    {
                        expand: true, 
                        flatten: true,
                        src: 'bower_components/jquery/dist/jquery.min.js', 
                        dest: 'production/scripts/vendors/jquery/'
                    }
                ]
            }
        },
        image_resize: {
            buttons: {
                options: {
                    width: 480
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
        },
        bowercopy: {
            options: {
                srcPrefix: './bower_components'
            },
            vendors: {
                options: {
                    destPrefix: 'production/scripts/vendors'
                },
                files: {
                    'jquery/dist/jquery.min.js': 'jquery/jquery.min.js'
                }
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-image-resize');
    grunt.loadNpmTasks('grunt-contrib-sass');
    //grunt.loadNpmTasks('grunt-bowercopy');
    
    grunt.registerTask('buttons', ['image_resize:buttons']);
    grunt.registerTask('views', ['image_resize:views']);
    grunt.registerTask('default', ['copy', 'sass']);
}