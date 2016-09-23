jQuery(document).ready( function() {

	//Set variables.
	var tableBody = jQuery('tbody');
	var tableHead = jQuery('th');
	var tableRows = jQuery('tbody tr');
	var tableCells = jQuery('td');
	var sort = 0; //to control the sort order

	//Compare function for ascending
	function compareNumbersAsc(a, b) {
  		return a - b;
	}
	//Compare function for descending
	function compareNumbersDesc(a, b) {
  		return b - a;
	}

	tableHead.click( function() {

		var tempArray = []; //Placeholder array for sorting.

		//Capture index of the table header when clicked.
		var index = tableHead.index(this);

		//Sort each row
		tableRows.each( function() {
			//Find all table cells in the same column as the table header clicked.
			var childrenCells = jQuery(this).find('td');
			childrenCells.each( function() {
				//Add to temporary array for sorting
				if (childrenCells.index(this) == index) {
					cellNumber = parseInt(jQuery(this).text());
					if (cellNumber) {
						tempArray.push(cellNumber);
					}
				}

				//Sort the array
				if (sort == 0) {
					tempArray.sort(compareNumbersAsc);
				}
				else {
					tempArray.sort(compareNumbersDesc);
				}
				
			});
		});

		//Place the sorted temp array back into the table cells.
		tableRows.each( function() {
			rowIndex = tableRows.index(this);
			for (i = 0; i < tempArray.length; i++) {
				if (rowIndex == i) {
					childrenCells = jQuery(this).find('td');
					childrenCells.each( function() {
						if (childrenCells.index(this) == index) {
							jQuery(this).text(tempArray[i]);
						}
					});
				}
			}
		});

		//Control whether sort is ascending or descending
		if (sort == 0) {
			sort = 1;
		}
		else {
			sort = 0;
		}

	});


});

