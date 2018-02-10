// use blanqx instead of $ 
// blanqx is my name , so I remember it easily :-)

var blanqx = jQuery.noConflict() 


var currentTheme = localStorage.getItem('currentTheme');

// cache DOM
var inputArea = blanqx('#inputNum') //input field
var flag = blanqx('#flags') //show 
var themeChanger = blanqx('#changeTheme')//change theme button


var app = {
    input: function(number) {

        var min_num = 0

        var range = new Array()

        while (number > min_num) {

            range.push(number)
            number--
        }
        range = range.reverse()
        range.forEach(function(x) {
            if ((x % 3 == 0) && (x % 5 == 0) && (x % 15 == 0)) {
                
                if(currentTheme == 'purplePink'){
                    flag.append(`<br>pingpong`)
                }else{
                    flag.append(`<li>pingpong</li>`)
                }
            } else if (x % 3 == 0) {

                if(currentTheme == 'purplePink'){

                    flag.append(`<br>ping`)
                }else{

                    flag.append(`<li>ping</li>`)
                }
            } else if (x % 5 == 0) {

                if(currentTheme == 'purplePink'){

                    flag.append(`<br>pong`)

                }else{
                    
                    flag.append(`<li>pong</li>`)
                }
            } else {

                if(currentTheme == 'purplePink'){
                
                    flag.append(`<br>${x}`)

                }else{
                    flag.append(`<li>${x}</li>`)
                }
            }
        })

    },
    executeCore: function() {

        if (this.isEmpty(this.getInput())) {

            flag.text(' ')

        } else if (isNaN(this.getInput())) {

            flag.text(' ')
            flag.text('Warning : You have not entered a number')

        } else {

            flag.text(' ')
            app.input(this.getInput())
            this.update_store(parseInt(this.getInput()))

        }

    },
    isEmpty: function(in_put) {
        //check if an input is empty
        if (in_put.length < 1) {
            return true
        } else {
            return false
        }
    },
    getInput: function() {

        //Get input - then trim it and return it
        return inputArea.val().trim()
    },
    update_store: function(value) {

        //Store this in browser so I can be able to know when data changes using comparison and equality
        localStorage.setItem('firstValue', this.getInput())
    },
    isChanging: function(value) {
        
        // format value to an integer

        value = parseInt(value)
        var firstValue = parseInt(localStorage.getItem('firstValue'))

        if (value !== firstValue) {
            return true
        } else {
            return false
        }
    },
    changeTheme:function(){
        var theme = ['brownGreen','purplePink'];

        if (currentTheme == theme[0]) {
            window.location.href = '/pingpong/theme2';
        }else if(currentTheme == theme[1]){
            window.location.href = '/pingpong';
        }else{
            console.warn('unknown theme');
        }
    }

}




//////////////////////////////////
///////  ENTRY POINT      ///////
////////////////////////////////

// listen for keyboard entries

inputArea.keyup(function() {
    if (app.isChanging()) {
        flag.text(' ');
        app.executeCore()
    } else {
        //flag.val('')
        app.executeCore();
    }
});

themeChanger.click(function(){
    app.changeTheme()
})
