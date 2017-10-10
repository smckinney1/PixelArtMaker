// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()



$(function () {
	function makeGrid(e) {

		//TODO: Allow multiple submissions by clearing out the columns also - just testing rows to start with

		e.preventDefault();

		let rows = Number($('#input_height').val());
		let columns = $('#input_width').val();
		let canvas = $('#pixel_canvas');

		$('.art-row').remove();

		//TODO: get color

		for (var i = 0; i < rows; i++) {
			canvas.append('<tr class="art-row"><td></td></tr>');
		}

	}

//set separately so color can be changed after form submission 
	// function getColor() {
	// 	let color = $('#colorPicker').val();
	// 	//change color of grid
	// }

	$('#sizePicker').submit(makeGrid);
	//$('#colorPicker').change(getColor);
});