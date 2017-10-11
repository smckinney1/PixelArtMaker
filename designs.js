// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()



$(function () {
	function makeGrid(e) {
		//TODO: Add logic to allow user to cancel submission. Warn that submitting will clear the grid.

		//Prevent page reload
		e.preventDefault();

		//Remove table data so that new one can be built
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


















