<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

function selectFilter(clicked_element){
    $(clicked_element).addClass("selected").siblings().removeClass("selected");
    $("img").hide().filter("."+clicked_element.innerHTML).show();
}

function move() {
    var elem = document.getElementById("bar");   
    var width = 20;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++; 
            elem.style.width = width + '%'; 
            elem.innerHTML = width * 1  + '%';
        }
    }
}

/* image slider*/
var counter = 1;
setInterval(function(){
	document.getElementById('radio' + counter).checked = true;
	counter++;
  	if(counter > 4){
    	counter = 1;
  	}
}, 5000);


/*progress bar*/
document.querySelector('.progress-checkbox').addEventListener('change', function() {
    if (this.checked) {
      document.querySelector('.progress').style.width = '100%';
    } else {
      document.querySelector('.progress').style.width = '0%';
    }
  });

const checkboxes = document.querySelectorAll('input[type="checkbox"]');

checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', () => {
        updateProgressBar();
    });
});

function updateProgressBar() {
    // get all the checkboxes
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    let totalValue = 0;
  
    // iterate over the checkboxes and add their values if they are checked
    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            totalValue += Number(checkbox.dataset.value)*2;
        }
    });
  
    // set the width of the progress bar based on the sum of the values
    document.querySelector('.progress').style.width = `${totalValue}%`;
}

window.onload = () => {
    updateProgressBar();
}