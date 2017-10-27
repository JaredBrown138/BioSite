/**
 * Created by Jared on 10/18/2017.
 */
var eraJean = 0;

function sectionSelect( sectionNumber ) {
    $(".innerContainer h1").text(sectionHeader[sectionNumber])
    $(".innerContainer p").html(sectionText[sectionNumber]);
    $(".decadeButton:nth-of-type("+ sectionNumber + ")").css({"color": palette[sectionNumber],
        "border":"1px solid " + palette[sectionNumber],"border-left":"35px solid" + palette[sectionNumber]});
    clearBar();
    advancePBar( sectionNumber );
}

function advancePBar( era ){
    for (var i = 1; i <= era; i++){
        $("#year" + i ).css({"background-color":palette[i]});
        if ( era != 1){
            $("." + i ).css({"background-color":palette[i]});
        }
    }
}

function seekEra( directionFlag ){
    if (directionFlag == 1){
        eraJean += 1;
        sectionSelect( eraJean )
    }else{
        eraJean -= 1;
        if ( eraJean == 0){
            location.reload();
        }
        sectionSelect( eraJean )
    }


}

function clearBar(){
    $(".year").css({"background-color":palette[7]});
    $(".segment").css({"background-color":palette[7]});
}

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

function main(){
    asideHover();
    console.log("hello");
}
