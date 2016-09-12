module.exports = function(grunt) {

  grunt.initConfig({
    less: {
      main: {
        options: {
          paths: ["my_css"]
        },
        files: {
          "tmp/build/main.css": "my_css/main.less"
        }
      }
    },
    watch: {
      styles: {
        files: ["**/*.less"],
        tasks: ["less"]
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-less");
  grunt.loadNpmTasks("grunt-contrib-watch");

  grunt.registerTask("default", ["less"]);
}