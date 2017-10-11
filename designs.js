$(function () {
	let submitCounter = 0;

	//If a grid already exists, warn user before allowing them to submit a new grid size.
	function proceedWithSubmission() {
		return (submitCounter === 0 || confirm('Warning: Submitting new grid size will erase your current drawing. Continue?'));
	}

	function makeGrid(e) {
		//Prevent page reload
		e.preventDefault();

		let proceed = proceedWithSubmission();

		if (proceed) {

			let rows, columns, canvas, colHTML;
			rows = Number($('#input_height').val());
			columns = Number($('#input_width').val());
			canvas = $('#pixel_canvas');
			colHTML = '';

			//Remove current grid
			$('tr').remove();

			//Create new grid
			for (let i = 0; i < rows; i++) {
				canvas.append('<tr></tr>');
			}

			for (let i = 0; i < columns; i++) {
				colHTML += '<td></td>';
			}

			$(colHTML).appendTo('tr');
			submitCounter++;
		}
		
	}

	function draw(e) {
		let color = $('#colorPicker').val();
		$(e.target).css('background-color', color);
	}

	$('#sizePicker').submit(makeGrid);
	$('#pixel_canvas').mousedown('td', draw);

});


















