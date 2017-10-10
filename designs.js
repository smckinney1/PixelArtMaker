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


	function getColor() {
		//obtain hex value
		let color = $('#colorPicker').val();
		return color;
	}

	$('#sizePicker').submit(makeGrid);
	$('#colorPicker').change(getColor);

	//TODO: Function for actually drawing on the canvas - call getColor
});
