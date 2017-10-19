/**
 * Created by Jared on 10/18/2017.
 */

function sectionSelect( sectionNumber ) {
    $(".innerContainer p").text("hello");
    $(".decadeButton:nth-of-type("+ sectionNumber + ")").css({"color": "#8299ED",
        "border":"1px solid white","border-left":"35px solid #8299ED"});
    advancePBar( sectionNumber );
}
function advancePBar( era ){
    for (i = era; i <= (era + 1); i++){
        $(".year:nth-of-type(" + i + ")").css({"background-color":"green"});
    }
}