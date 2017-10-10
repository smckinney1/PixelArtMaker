// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()



$(function () {
	function makeGrid(e) {
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


	// function makeColor() {
	// 	//obtain hex value
	// 	let color = $('#colorPicker').val();
	// }

	$('#sizePicker').submit(makeGrid);
	//$('#colorPicker').change(makeColor);

	//TODO: Function for actually drawing on the canvas - call makeColor
});
