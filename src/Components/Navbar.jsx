import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Container } from "@chakra-ui/react";

const Navbar = () => {
	return (
		<Box boxShadow="dark-lg">
			<Container maxW="full">
				<Box
					display="flex"
					justifyContent={{ sm: "space-between", base: "center" }}
					alignItems="center"
					h="72px"
					flexWrap="wrap"
				>
					<Link to="/">
						<Button variant="ghost" color="#F2A900">
							ادارة المخاطر
						</Button>
					</Link>
					<Link to="/risk">
						<Button variant="ghost" color="#F2A900">
							وسط الدخول
						</Button>
					</Link>
				</Box>
			</Container>
		</Box>
	);
};

export default Navbar;
