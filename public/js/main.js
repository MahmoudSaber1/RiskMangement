/* eslint-disable no-undef */
$(document).ready(function () {
	var counter = 2;

	$("#addButton").click(function () {
		if (counter > 10) {
			alert("Only 10 textboxes allow");
			return false;
		}

		var newInputs = $(document.createElement("div")).attr(
			"id",
			"newInput" + counter
		);

		newInputs.after().html(`
        <div class="row">
            <div class="col-lg-6 col-sm-6 col-xs-6" id="usdt">
                <div class="input-group mb-3">
                    <input
                    id="usdt${counter}"
                    type="text"
                    name="title[]"
                    class="form-control m-input"
                    placeholder="Enter USDT"
                    autocomplete="off"
                    />
                </div>
            </div>
            <div class="col-lg-6 col-sm-6 col-xs-6" id="income">
                <div class="input-group mb-3">
                    <input
                    id="income${counter}"
                    type="text"
                    name="title[]"
                    class="form-control m-input"
                    placeholder="Enter income"
                    autocomplete="off"
                    />
                </div>
            </div>
        </div>
       `);

		newInputs.appendTo("#TextBoxesGroupUsdt");

		counter++;
	});

	$("#removeButton").click(function () {
		if (counter === 1) {
			alert("No more textbox to remove");
			return false;
		}

		counter--;

		$("#newInput" + counter).remove();
	});

	$("#getButtonValue").click(function () {
		let sumAllUsdt = 0;
		let sumUsdtOnIncome = 0;
		let finallyAvarage = 0;

		for (i = 1; i < counter; i++) {
			// Get All Value
			let usdtQ = parseFloat($("#usdt" + i).val());
			let icomeQ = parseFloat($("#income" + i).val());
			//   Sum All Usdt
			sumAllUsdt += usdtQ;

			//   All Usdt / income
			let avarage = usdtQ / icomeQ;
			sumUsdtOnIncome += avarage;

			//   Finall Result
			finallyAvarage = sumAllUsdt / sumUsdtOnIncome;
		}

		$("#output").empty();
		$("#output").append(finallyAvarage.toString().slice(0, 7));
	});
});
