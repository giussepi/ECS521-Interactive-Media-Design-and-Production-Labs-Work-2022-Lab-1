window.addEventListener('load', function() {
    var svg = document.getElementById('stick_figure');

    if (svg==null){
	return 0;
    }

    var x = parseFloat(svg.getAttributeNS(null, 'x'));
    // Add some code here

    function setSelectedColour(evt) {
	var target = evt.target;
	target.setAttributeNS(null, 'fill', 'orange');
    }

    function setUnselectedColour(evt) {
	var target = evt.target;
	target.setAttributeNS(null, 'fill', 'blue');
    }

    function move(evt) {
	console.log('Key code: ' + evt.keyCode);

	// Move to the right. Insert the correct key code
	if (evt.keyCode == 0) {
	    x += 20;
	}

	// Move to the left. Insert the correct key code
	else if (evt.keyCode == 0) {
	    x -= 20;
	}

	// Add some code heree

	// You need to modify the following line to make it work with the y axis too
	svg.setAttributeNS(null, 'transform', 'translate(' + x + ', 0)');
    }

    svg.addEventListener('mouseover', setSelectedColour, false);
    svg.addEventListener('mouseout', setUnselectedColour, false);
    window.addEventListener("keydown", move, false);

    return 1;
});
