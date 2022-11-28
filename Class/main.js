function selectFilter(clicked_element){
    $(clicked_element).addClass("selected").siblings().removeClass("selected");
    $("img").hide().filter("."+clicked_element.innerHTML).show();
}

/*function selectFilter(clicked_element){
    console.log(clicked_element.innerHTML);

    var selected_items = document.getElementsByClassName("selected");
    for(var i = 0; i < selected_items.length; i++){
        selected_items[i].classList.remove("selected");
    }

    clicked_element.classList.add("selected");

    filterImages(clicked_element.innerHTML);
}

function filterImages(category){
    // hide all images
    var images = document.getElementsByTagName("img");
    for(var i=0; i<images.length; i++){
        images[i].style.display = "none";
    }
    // display images of selcted category
    var category_images = document.getElementsByClassName(category);
    for(var i=0; i<category_images.length; i++){
        category_images[i].style.display = "block";
    }
}*/