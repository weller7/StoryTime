module.exports = {

        //remove the html tags form the story in the cards
        stripTags: function (input) {
            return input.replace(/<(?:.|\n)*?>/gm, '')
          },

}