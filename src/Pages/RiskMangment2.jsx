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
	const [expr1, setExpr1] = useState(0);
	const [expr2, setExpr2] = useState(0);
	const [finall, setFinall] = useState(0);

	const handelChangeInput = (index, event) => {
		const values = [...inputFields];
		values[index][event.target.name] = event.target.value.replace(/\D/g, "");
		setInputFields(values);

		const sumVal = parseInt(
			(values[index][event.target.usdt] = event.target.value)
		);

		const sumVal1 = parseInt(
			(values[index][event.target.usdt] = event.target.value)
		);

		const sumVal2 = parseInt(
			(values[index][event.target.income] = event.target.value)
		);

		setExpr1(expr1 + sumVal);

		setExpr2(sumVal1 / sumVal2);

		setFinall(expr1 / (expr2 + expr2));
	};

	const handelAddInputs = () => {
		setInputFields([...inputFields, { usdt: "", income: "" }]);
	};

	const handelRemoveInputs = (index) => {
		const values = [...inputFields];
		values.splice(index, 1);
		setInputFields(values);
		console.log(values);
	};

	newTitle("Average income");
	return (
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
									سعر الدخل
								</Heading>
							</Box>
						</Box>
						{inputFields.map((inputField, index) => (
							<Box
								key={index}
								display="flex"
								justifyContent="space-between"
								gap="5"
							>
								<FormControl mb="5">
									<Input
										name="usdt"
										type="text"
										value={inputField.usdt}
										onChange={(event) => handelChangeInput(index, event)}
									/>
								</FormControl>
								<FormControl mb="5">
									<Input
										name="income"
										type="text"
										value={inputField.income}
										onChange={(event) => handelChangeInput(index, event)}
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
								color="#ee7171"
								fontSize={{ md: "20px", base: "14px" }}
								onClick={() => handelRemoveInputs()}
							>
								حذف حقل
							</Button>
						</Box>
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
							<StatNumber color={"white"}>{finall}</StatNumber>
						</Stat>
					</Box>
				</Box>
			</Container>
		</>
	);
};

export default RiskMangment;
