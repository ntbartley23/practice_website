var indexer = 0;
var animateInterval;

function animate(){
        if(indexer == 0){
            $("#background-slideshow > #music-image").fadeOut(2000);
            $("#background-slideshow > #video-image").fadeIn(2000);
        }
        else if(indexer == 1){
            $("#background-slideshow > #video-image").fadeOut(2000);
            $("#background-slideshow > #web-image").fadeIn(2000);
        }
        else if(indexer == 2){
            $("#background-slideshow > #web-image").fadeOut(2000);
            $("#background-slideshow > #community-image").fadeIn(2000);
        }
        else if(indexer == 3){
            $("#background-slideshow > #community-image").fadeOut(2000);
            $("#background-slideshow > #music-image").fadeIn(2000);
        }

        if(indexer == 3) indexer = 0;
        else indexer++;
    }

    animateInterval = setInterval(animate, 10000);
    animate();