// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

$(function () {
	let submitCounter = 0;

	//If a grid already exists, warn user before allowing them to submit a new grid size.
	function proceedWithSubmission() {
		if (submitCounter > 0) {
			let confirmation = confirm('Warning: Submitting new grid size will erase your current drawing. Continue?');
			if (confirmation === true) {
				return true;
			} else {
				return false;
			}
		} else {
			return true;
		}
	}

	function makeGrid(e) {
		//Prevent page reload
		e.preventDefault();
		
		let proceed = proceedWithSubmission();
		if (proceed == true) {
			$('tr').remove();

			let rows = Number($('#input_height').val());
			let columns = Number($('#input_width').val());
			let canvas = $('#pixel_canvas');
			let colHTML = '';

			for (var i = 0; i < rows; i++) {
				canvas.append('<tr></tr>');
			}

			for (var i = 0; i < columns; i++) {
				colHTML += '<td></td>';
			}

			$(colHTML).appendTo('tr');
			submitCounter++;
		}
		
	}

	function draw(e) {
		//TODO: if current color of the cell is other than white, change back to white upon new click
		//TODO: issue with certain kinds of clicking...it'll change the whole row or whole table to the current color
		let color = $('#colorPicker').val();
		$(e.target).css('background-color', color);
	}

	$('#sizePicker').submit(makeGrid);
	$('#pixel_canvas').click('td', draw);

});


















