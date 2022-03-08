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
			setNote("ينصح بتقليل قيمة المخاطرة لاقل من 10%");
		} else {
			setValue(valueVal);
		}
	};

	const handleLose = (e) => {
		const valueLo = e.target.value.replace(/\D/g, "");
		if (valueLo >= 100) {
			setNote("يرجي كتابة قيمة اقل من 100");
		} else {
			setLose(valueLo);
		}
	};

	const handleTarget = (e) => {
		const valueTar = e.target.value.replace(/\D/g, "");
		if (valueTar >= 100) {
			setNote("يرجي كتابة قيمة اقل من 100");
		} else {
			setTarget(valueTar);
		}
	};

	newTitle("ادارة المخاطر");
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
						<FormLabel htmlFor="head" color="#000">
							رأس المال
							<Popover>
								<PopoverTrigger>
									<InfoOutlineIcon mr="2" color="black" />
								</PopoverTrigger>
								<PopoverContent>
									<PopoverBody color="#000">
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
								color={"black"}
								onChange={handleTitle}
							/>
							<InputLeftElement></InputLeftElement>
						</InputGroup>
					</FormControl>
					<FormControl>
						<FormLabel htmlFor="value" color="#000">
							قيمة المخاطرة
							<Popover>
								<PopoverTrigger>
									<InfoOutlineIcon mr="2" color="black" />
								</PopoverTrigger>
								<PopoverContent>
									<PopoverBody color="#000">
										النسبه المئوية المراد المخاطره بها من اجمالي راس المال
									</PopoverBody>
									<PopoverArrow />
								</PopoverContent>
							</Popover>
						</FormLabel>
						<InputGroup>
							<Input
								id="value"
								color={"black"}
								type="text"
								onChange={handleValue}
							/>
							<InputLeftElement>
								<Tag>%</Tag>
							</InputLeftElement>
						</InputGroup>
					</FormControl>
					<FormControl>
						<FormLabel htmlFor="lose" color="#000">
							النسبة المئوية لوقف الخاسرة
							<Popover>
								<PopoverTrigger>
									<InfoOutlineIcon mr="2" color="black" />
								</PopoverTrigger>
								<PopoverContent>
									<PopoverBody color="#000">
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
								color={"black"}
								value={lose}
								onChange={handleLose}
							/>
							<InputLeftElement>
								<Tag>%</Tag>
							</InputLeftElement>
						</InputGroup>
					</FormControl>
					<FormControl>
						<FormLabel htmlFor="target" color="#000">
							النسبة المئوية للهدف
							<Popover>
								<PopoverTrigger>
									<InfoOutlineIcon mr="2" color="black" />
								</PopoverTrigger>
								<PopoverContent>
									<PopoverBody color="#000">
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
								color={"black"}
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
						<StatLabel color="#000" fontSize={{ md: "20px", base: "14px" }}>
							حجم الصفقة
						</StatLabel>
						<StatNumber color={"black"}>
							{isNaN(Exprision) || Exprision === Infinity ? 0 : Exprision}{" "}
						</StatNumber>
					</Stat>
					<Stat>
						<StatLabel color="#000" fontSize={{ md: "20px", base: "14px" }}>
							ملاحظات
						</StatLabel>
						<StatNumber color={"black"}>
							<Text pb="3">{note}</Text>
							{lose > target ? (
								<Text borderTop="1px solid #efefef42" pt="3">
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
