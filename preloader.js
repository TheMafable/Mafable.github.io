    var
        images              = document.images,
        images_total_count  = images.length,
        images_loaded_count = 0,
        perc_display = document.getElementById('perc');

for (var i = 0; i < images_total_count; i++) {
    image_clone = new Image();
    image_clone.onload = image_loaded;
    image_clone.onerror = image_loaded;
    image_clone.src = images[i].src;
}
console.log(perc_display)
console.log(images_total_count);
console.log(images_loaded_count);

function image_loaded() {
 images_loaded_count++;
perc_display.innerHTML = ( (100 / images_total_count * images_loaded_count) << 0) + '%';

document.body.onload = function() {
    setTimeout(function() {
        var preloader = document.getElementById('page-preloader');
        if ( !preloader.classList.contains('done') ) 
        {
            preloader.classList.add('done');
        }
    }, 0 );
}
}
