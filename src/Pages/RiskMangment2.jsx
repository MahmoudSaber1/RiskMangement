import React, { Component } from "react";
import "./RiskMangement2.css";
import $ from "jquery";

import { newTitle } from "../GeneralFunc";
newTitle("متوسط الدخول");

class RiskMangment extends Component {
	componentDidMount() {
		let counter = 2;

		$("#addButton").on("click", function () {
			if (counter > 10) {
				alert("Only 10 textboxes allow");
				return false;
			}

			let newInputs = $(document.createElement("div")).attr(
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

		$("#removeButton").on("click", function () {
			if (counter === 1) {
				alert("No more textbox to remove");
				return false;
			}

			counter--;

			$("#newInput" + counter).remove();
		});

		$("#getButtonValue").on("click", function () {
			let sumAllUsdt = 0;
			let sumUsdtOnIncome = 0;
			let finallyAvarage = 0;

			for (let i = 1; i < counter; i++) {
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
			if (isNaN(finallyAvarage)) {
				$("#output").append("0");
			} else {
				$("#output").append(finallyAvarage.toString().slice(0, 7));
			}
		});
	}

	render() {
		return (
			// UI Design
			<>
				<section className="avarage">
					<div className="container">
						<div className="row">
							<div className="col-lg-8 col-md-12 mb-5">
								<div className="box">
									<div className="headers">
										<h2>USDT</h2>
										<h2>سعر الدخول</h2>
									</div>
									<div id="TextBoxesGroupUsdt">
										<div id="newInput1">
											<div className="row">
												<div className="col-lg-6 col-sm-6 col-xs-6" id="usdt">
													<div className="input-group mb-3">
														<input
															id="usdt1"
															type="text"
															name="title[]"
															className="form-control m-input"
															placeholder="Enter USDT"
															autoComplete="off"
														/>
													</div>
												</div>
												<div className="col-lg-6 col-sm-6 col-xs-6" id="income">
													<div className="input-group mb-3">
														<input
															id="income1"
															type="text"
															name="title[]"
															className="form-control m-input"
															placeholder="Enter icome"
															autoComplete="off"
														/>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="headers">
										<button
											type="button"
											className="btn btn-success"
											id="addButton"
										>
											اضافة حقل
										</button>
										<button
											type="button"
											className="btn btn-danger"
											id="removeButton"
										>
											حذف حقل
										</button>
									</div>
									<button
										id="getButtonValue"
										type="button"
										className="btn btn-secondary w-100 calc"
									>
										الناتج
									</button>
								</div>
							</div>
							<div className="col-lg-4 col-md-12">
								<div className="box">
									<h2>متوسط دخولك</h2>
									<span id="output">0</span>
								</div>
							</div>
						</div>
					</div>
				</section>
			</>
		);
	}
}

export default RiskMangment;
