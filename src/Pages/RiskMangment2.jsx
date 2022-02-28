/* eslint-disable no-unused-vars */
import {
	Box,
	Button,
	Container,
	FormControl,
	Heading,
	Input,
	Stat,
	StatLabel,
	StatNumber,
} from "@chakra-ui/react";
import React, { useState } from "react";

import { newTitle } from "../GeneralFunc";

const RiskMangment = () => {
	const [inputFields, setInputFields] = useState([
		{ usdt: "", income: "" },
		{ usdt: "", income: "" },
	]);

	const [inputsUsdt, setInputsUsdt] = useState([]);

	const [inputsIncom, setInputsIncom] = useState([]);

	const [sum, setSum] = useState(0);
	const [stored, setStored] = useState(0);
	const [finall, setFinall] = useState(0);

	// Get Input Value and Make All Exprisions
	const handelChangeInput1 = (index, e) => {
		const values = [...inputFields];

		values[index][e.target.name] = e.target.value;
		setInputFields(values);

		const targVal = parseFloat((values[index][e.target.usdt] = e.target.value));

		setInputsUsdt(targVal);

		// Sum All USDT
		setSum(inputsUsdt + targVal);
	};

	// Get Input Value and Make All Exprisions
	const handelChangeInput2 = (index, e) => {
		const values = [...inputFields];

		values[index][e.target.name] = e.target.value;
		setInputFields(values);

		const ValUsdt = inputsUsdt;

		const targVal = parseFloat(
			(values[index][e.target.income] = e.target.value)
		);

		setInputsIncom(targVal);

		// Get Value From USDT And Enter And Make That Algorithm (usdt / enter)
		const sumAll = ValUsdt / inputsIncom;

		// Storege Data to Expr2
		setStored(sumAll);
	};

	// Handel Add Input Fields
	const handelAddInputs = () => {
		setInputFields([...inputFields, { usdt: "", income: "" }]);
	};

	// Handel Remove Input Fields
	const handelRemoveInputs = (index) => {
		const values = [...inputFields];
		values.splice(index, 1);
		setInputFields(values);
	};

	// Handel Clac Button , Get All outPut and Make a Exprision Or Algorithme
	const handelCalcInputs = () => {
		setFinall(inputsUsdt / stored);
	};

	newTitle("متوسط الدخول");
	return (
		// UI Design
		<>
			<Container maxW="full">
				<Box
					display="flex"
					justifyContent="space-around"
					alignItems="center"
					h="100vh"
					gap="5"
					flexDirection={{ md: "row", base: "column" }}
					mt={{ md: "0px", base: "130px" }}
				>
					<Box
						boxShadow="dark-lg"
						p="10"
						gap="5"
						display="flex"
						justifyContent="space-between"
						flexDirection="column"
						w={{ md: "full", base: "full" }}
					>
						<Box
							display="flex"
							justifyContent="space-around"
							flexDirection="row"
							gap="5"
						>
							<Box>
								<Heading
									fontSize={{ md: "20px", base: "14px" }}
									color="#F2A900"
									mb="6"
									textAlign="center"
								>
									USDT
								</Heading>
							</Box>
							<Box>
								<Heading
									fontSize={{ md: "20px", base: "14px" }}
									color="#F2A900"
									mb="6"
									textAlign="center"
								>
									سعر الدخول
								</Heading>
							</Box>
						</Box>
						{inputFields.map((inputField, index) => (
							<Box
								key={index}
								display="flex"
								justifyContent="space-between"
								gap={{ sm: "5", base: "1" }}
							>
								<FormControl mb="5">
									<Input
										name="usdt"
										type="text"
										color={"white"}
										value={inputField.usdt}
										onChange={(e) => handelChangeInput1(index, e)}
									/>
								</FormControl>
								<FormControl mb="5">
									<Input
										name="income"
										type="text"
										color={"white"}
										value={inputField.income}
										onChange={(e) => handelChangeInput2(index, e)}
									/>
								</FormControl>
							</Box>
						))}

						<Box display="flex" justifyContent="space-around" gap="10">
							<Button
								variant="solid"
								color="#F2A900"
								fontSize={{ md: "20px", base: "14px" }}
								onClick={() => handelAddInputs()}
							>
								اضافة حقل
							</Button>
							<Button
								variant="solid"
								color="#F2A900"
								fontSize={{ md: "20px", base: "14px" }}
								onClick={() => handelRemoveInputs()}
							>
								حذف حقل
							</Button>
						</Box>
						<Button
							variant="solid"
							color="#F2A900"
							fontSize={{ md: "20px", base: "14px" }}
							onClick={() => handelCalcInputs()}
						>
							الناتج
						</Button>
					</Box>
					<Box
						boxShadow="dark-lg"
						p="10"
						gap="5"
						display="flex"
						flexDirection="column"
						w={{ md: "full", base: "full" }}
					>
						<Stat mb="10">
							<StatLabel
								color="#F2A900"
								fontSize={{ md: "20px", base: "14px" }}
							>
								متوسط دخولك
							</StatLabel>
							<StatNumber color={"white"}>
								{isNaN(finall) ? 0 : finall.toString().slice(0, 7)}
							</StatNumber>
						</Stat>
					</Box>
				</Box>
			</Container>
		</>
	);
};

export default React.memo(RiskMangment);
