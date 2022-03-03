/* eslint-disable no-unused-vars */
import React from "react";
import "./RiskMangement2.css";

import { newTitle } from "../GeneralFunc";

const RiskMangment = () => {
	newTitle("متوسط الدخول");
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
};

export default React.memo(RiskMangment);
