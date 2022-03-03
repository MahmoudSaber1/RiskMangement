/* eslint-disable no-unused-vars */
import React from "react";
import "./RiskMangement2.css";

import { newTitle } from "../GeneralFunc";

const RiskMangment = () => {
	newTitle("متوسط الدخول");
	return (
		// UI Design
		<>
			<section class="avarage">
				<div class="container">
					<div class="row">
						<div class="col-lg-8 col-md-12 mb-5">
							<div class="box">
								<div class="headers">
									<h2>USDT</h2>
									<h2>سعر الدخول</h2>
								</div>
								<div id="TextBoxesGroupUsdt">
									<div id="newInput1">
										<div class="row">
											<div class="col-lg-6 col-sm-6 col-xs-6" id="usdt">
												<div class="input-group mb-3">
													<input
														id="usdt1"
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
														id="income1"
														type="text"
														name="title[]"
														class="form-control m-input"
														placeholder="Enter icome"
														autocomplete="off"
													/>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="headers">
									<button type="button" class="btn btn-success" id="addButton">
										اضافة حقل
									</button>
									<button
										type="button"
										class="btn btn-danger"
										id="removeButton"
									>
										حذف حقل
									</button>
								</div>
								<button
									id="getButtonValue"
									type="button"
									class="btn btn-secondary w-100 calc"
								>
									الناتج
								</button>
							</div>
						</div>
						<div class="col-lg-4 col-md-12">
							<div class="box">
								<h2>متوسط دخولك</h2>
								<span id="output">0</span>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default React.memo(RiskMangment);
