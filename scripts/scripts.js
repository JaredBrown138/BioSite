/**
 * Created by Jared on 10/18/2017.
 *
 * Contains JS to change the content of the page
 * as the user navigates from era to era. This
 * script utilizes the JQuery library
 *
 */

var eraJean = 0; //Keeps track of era
var imageObjects = [];

/**
 * The sectionSelect() function changes the content on the
 * page based on which era (sectionNumber) is provided. This
 * function grabs data out of the objects located in the
 * content.js file based on the era index number (sectionNumber).
 * This function also calls the clearBar() and advanceBar()
 * functions.
 *
 * @params sectionNumber
 * @returns void
 */
function sectionSelect( sectionNumber ) {
    $(".innerContainer h1").text(sectionHeader[sectionNumber])
    $(".innerContainer p").html(sectionText[sectionNumber]);
    $(".decadeButton:nth-of-type("+ sectionNumber + ")").css({"color": palette[sectionNumber],
        "border":"1px solid " + palette[sectionNumber],"border-left":"35px solid" + palette[sectionNumber]});
    clearBar();
    advancePBar( sectionNumber );
}

/**
 * The clearBar() function clears the era bar by setting
 * the background-color to the gray specified in the
 * palette.
 *
 * @params none
 * @returns void
 */
function clearBar(){
    $(".year").css({"background-color":palette[7]});
    $(".segment").css({"background-color":palette[7]});
}

/**
 * The advancePBar() function advances the bar by looping
 * through all relevant eras and setting the respective
 * background colors as specified by the era's entry in
 * the palette object.
 *
 * @params era
 * @returns void
 */
function advancePBar( era ){
    for (var i = 1; i <= era; i++){
        $("#year" + i ).css({"background-color":palette[i]});
        if ( era != 1){
            $("." + i ).css({"background-color":palette[i]});
        }
    }
}

/**
 * The seekEra() function either advances the era or regresses
 * the era based on the directionFlag parameter. If the user
 * clicks on the next button the function is called with a
 * parameter of 1, which increments the era by one. The function
 * then calls sectionSelect() to make the appropriate changes
 * to the page. If the back button is pressed, this function
 * is called with a 0, regressing an era.
 *
 * @params directionFlag
 * @returns void
 */
function seekEra( directionFlag ){
    if (directionFlag == 1){
        eraJean += 1;
        sectionSelect( eraJean )
    }else{
        eraJean -= 1;
        /**
         * If the user presses the back button while on the first era, the
         * page reloads bringing the user back to the "Meet Jean Brown"
         * content. Ideally, this content should be included in the era
         * object, making it unnecessary to reload the page. This is a
         * future TODO.
         */
        if ( eraJean == 0){
            location.reload();
        }
        sectionSelect( eraJean )
    }
}

/**
 * The asideHover() function changes styling in the left aside when the user hovers
 * over it. This function use the onmouseenter and onmouseleave html events. asideHover( true )
 * is called when onmouseenter is triggered and a parameter of false is passed when onmouseleave is
 * triggered.
 *
 * @params bool
 * @returns void
 */
function asideHover( bool ){
    if ( bool == true ){
        $(".asideMenu").hover( function () {
            $(".profilePhoto").css({"filter":"none"})
        });
    }else{
        $(".profilePhoto").css({"filter":"grayscale(100%)"})
    }

    if ( bool == true ){
        for ( var i = 1; i <7; i++){
            var sectionNumber = i;
            $(".decadeButton:nth-of-type("+ sectionNumber + ")").css({"color": palette[sectionNumber],
                "border":"1px solid " + palette[sectionNumber],"border-left":"35px solid" + palette[sectionNumber]});
        }
    }else{
        for ( var i = 1; i <7; i++){
            var sectionNumber = i;
            $(".decadeButton:nth-of-type("+ sectionNumber + ")").css({"color": "white",
                "border":"1px solid white","border-left":"35px solid white"});
        }
    }
}

/**
 * The preloadImages() function preloads all images not initially loaded when visiting
 * the site. This is important as many of the images aren't loaded in the DOM until
 * the user clicks on the next era. This means that another request must be sent for
 * the image. Instead, this function loads all of these images when this function
 * is called. It does this by creating image objects for each of the images. This
 * function should be deferred until all other content for the landing page
 * is loaded.
 *
 * @param imageContainer
 * @returns void
 */
function preloadImages( imageContainer ){
    var i = 0;
    for ( var key in imageContainer){
        if (imageContainer.hasOwnProperty(key)){
            imageObjects[i] = new Image();
            imageObjects[i].src = imageContainer[key];
            console.log(imageContainer[key]);
        }
    }
}


