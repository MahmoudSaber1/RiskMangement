import { AspectRatio, Box, Text } from "@chakra-ui/react";
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
		>
			<Text>طريقة الاستخدام</Text>
			<AspectRatio maxW="560px" ratio={1}>
				<iframe
					src="https://www.youtube.com/embed/3HNyXCPDQ7Q"
					title="YouTube video player"
					allowFullScreen
				></iframe>
			</AspectRatio>
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
