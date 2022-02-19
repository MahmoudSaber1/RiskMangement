/* eslint-disable no-unused-expressions */
import { InfoOutlineIcon } from "@chakra-ui/icons";
import {
	Box,
	Container,
	FormControl,
	FormLabel,
	Input,
	InputGroup,
	InputLeftElement,
	Popover,
	PopoverArrow,
	PopoverBody,
	PopoverContent,
	PopoverTrigger,
	Stat,
	StatLabel,
	StatNumber,
	Tag,
	Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { newTitle } from "../GeneralFunc";
import VideoImbade from "../Components/VideoImbade";

const RiskMangment = () => {
	const [title, setTitle] = useState("");
	const [value, setValue] = useState("");
	const [lose, setLose] = useState("");
	const [target, setTarget] = useState("");
	const [note, setNote] = useState("");

	const Exprision = (title * value) / lose;
	const x = lose / target;

	const handleTitle = (e) => {
		const valueNum = e.target.value.replace(/\D/g, "");
		setTitle(`${valueNum}`);
	};

	const handleValue = (e) => {
		setNote("");
		const valueVal = e.target.value.replace(/\D/g, "");
		if (valueVal > 100) {
			setNote("يرجي كتابة قيمة اقل من 100");
		} else if (valueVal > 10) {
			setNote("ينصج بتقليل قيمة المخاطرة لاقل من 10%");
		} else {
			setValue(valueVal);
			setNote("");
		}
	};

	const handleLose = (e) => {
		setNote("");
		const valueLo = e.target.value.replace(/\D/g, "");
		if (valueLo >= 100) {
			setNote("يرجي كتابة قيمة اقل من 100");
		} else {
			setLose(valueLo);
		}
	};

	const handleTarget = (e) => {
		setNote("");
		const valueTar = e.target.value.replace(/\D/g, "");
		if (valueTar >= 100) {
			setNote("يرجي كتابة قيمة اقل من 100");
		} else {
			setTarget(valueTar);
		}
	};

	newTitle("Risk Mangement Tools");
	return (
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
					flexDirection="column"
					w={{ md: "full", base: "full" }}
				>
					<FormControl>
						<FormLabel htmlFor="head" color="#F2A900">
							رأس المال
							<Popover>
								<PopoverTrigger>
									<InfoOutlineIcon mr="2" color="white" />
								</PopoverTrigger>
								<PopoverContent>
									<PopoverBody color="#F2A900">
										راس المال الكلي في حسابك
									</PopoverBody>
									<PopoverArrow />
								</PopoverContent>
							</Popover>
						</FormLabel>
						<InputGroup>
							<Input
								id="head"
								type="text"
								color={"white"}
								onChange={handleTitle}
							/>
							<InputLeftElement></InputLeftElement>
						</InputGroup>
					</FormControl>
					<FormControl>
						<FormLabel htmlFor="value" color="#F2A900">
							قيمة المخاطرة
							<Popover>
								<PopoverTrigger>
									<InfoOutlineIcon mr="2" color="white" />
								</PopoverTrigger>
								<PopoverContent>
									<PopoverBody color="#F2A900">
										النسبه المئوية المراد المخاطره بها من اجمالي راس المال
									</PopoverBody>
									<PopoverArrow />
								</PopoverContent>
							</Popover>
						</FormLabel>
						<InputGroup>
							<Input
								id="value"
								color={"white"}
								type="text"
								onChange={handleValue}
							/>
							<InputLeftElement>
								<Tag>%</Tag>
							</InputLeftElement>
						</InputGroup>
					</FormControl>
					<FormControl>
						<FormLabel htmlFor="lose" color="#F2A900">
							النسبة المئوية لوقف الخاسرة
							<Popover>
								<PopoverTrigger>
									<InfoOutlineIcon mr="2" color="white" />
								</PopoverTrigger>
								<PopoverContent>
									<PopoverBody color="#F2A900">
										النسبه المؤيه للفرق بين سعر دخول و سعر مستوى وقف الخساره
									</PopoverBody>
									<PopoverArrow />
								</PopoverContent>
							</Popover>
						</FormLabel>
						<InputGroup>
							<Input
								id="lose"
								type="text"
								color={"white"}
								value={lose}
								onChange={handleLose}
							/>
							<InputLeftElement>
								<Tag>%</Tag>
							</InputLeftElement>
						</InputGroup>
					</FormControl>
					<FormControl>
						<FormLabel htmlFor="target" color="#F2A900">
							النسبة المئوية للهدف
							<Popover>
								<PopoverTrigger>
									<InfoOutlineIcon mr="2" color="white" />
								</PopoverTrigger>
								<PopoverContent>
									<PopoverBody color="#F2A900">
										النسبه المؤيه للفرق بين سعر دخول و سعر الهدف
									</PopoverBody>
									<PopoverArrow />
								</PopoverContent>
							</Popover>
						</FormLabel>
						<InputGroup>
							<Input
								id="target"
								type="text"
								value={target}
								color={"white"}
								onChange={handleTarget}
							/>
							<InputLeftElement>
								<Tag>%</Tag>
							</InputLeftElement>
						</InputGroup>
					</FormControl>
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
						<StatLabel color="#F2A900" fontSize={{ md: "20px", base: "14px" }}>
							حجم الصفقة
						</StatLabel>
						<StatNumber color={"white"}>
							{isNaN(Exprision) || Exprision === Infinity ? 0 : Exprision}{" "}
						</StatNumber>
					</Stat>
					<Stat>
						<StatLabel color="#F2A900" fontSize={{ md: "20px", base: "14px" }}>
							ملاحظات
						</StatLabel>
						<StatNumber color={"white"}>
							{note}
							{lose > target ? (
								<Text>
									ينصح بعدم دخول الصفقة نظرا لان نسبة المخاطرة مع المكسب هي
									<Box
										display="flex"
										justifyContent="center"
										flexDirection="row"
									>
										<Text color="red">
											{x === Infinity ? "" : x.toString().slice(0, 4)}
										</Text>
										<Text mr={"5"} ml="5">
											:
										</Text>
										<Text color="green"> 1 </Text>
									</Box>
								</Text>
							) : (
								""
							)}
						</StatNumber>
					</Stat>
				</Box>
			</Box>
			<VideoImbade />
		</Container>
	);
};

export default RiskMangment;
