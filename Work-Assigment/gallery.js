/* filter gallery img */
function selectFilter(clicked_element) {
    $(clicked_element).addClass("selected").siblings().removeClass("selected");
    $("img").hide().filter("." + clicked_element.innerHTML).show();
}

/* search bar */
function searchFilter() {
    // Get the search input value
    const searchValue = document.querySelector('input[name="search"]').value.toLowerCase();

    // Filter the images
    const filteredImages = Array.from(document.querySelectorAll('.gallery img')).filter(img => {
        const imgClass = img.getAttribute('class').toLowerCase();
        return imgClass.includes(searchValue);
    });

    // Hide all images
    document.querySelectorAll('.gallery img').forEach(img => img.style.display = 'none');

    // Show the filtered images
    filteredImages.forEach(img => img.style.display = 'block');
}

$(document).ready(function() {
    const searchInput = $('input[name="search"]');
    searchInput.on('keyup', searchFilter);
});
