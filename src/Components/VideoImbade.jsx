import { Box, Container, Text } from "@chakra-ui/react";
import React from "react";

const VideoImbade = () => {
	return (
		<Box
			mt={{ md: "30px", base: "130px" }}
			mb="100"
			textAlign="center"
			display="flex"
			alignItems="center"
			justifyContent="center"
			flexDirection="column"
		>
			<Text mb={"10"}>طريقة الاستخدام</Text>
			<Container maxW="full">
				<iframe
					id="ANyPxKoUKZAdIRPxzqD2r9cAQn5QOTVqwH2kT-p19aDFKU8JsJFtFXyV0YDvhve_oUM6NoexjpftC3Odv8aHy0wO9ZwrBtu_Pg"
					width="100%"
					height="415"
					src="https://www.youtube.com/embed/GXGvypCr8Ug"
					title="YouTube video player"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
				></iframe>
			</Container>
		</Box>
	);
};

<iframe
	width="560"
	height="315"
	src="https://www.youtube.com/embed/iiprZVkiFLs"
	title="YouTube video player"
	frameborder="0"
	allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
	allowfullscreen
></iframe>;
export default VideoImbade;
