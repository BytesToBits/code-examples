import { Avatar } from "@chakra-ui/avatar";
import { Box, Flex } from "@chakra-ui/layout";
import SearchBar from "./SearchBar";

type MobileNavigationProps = {
	snippets: string[]
}

export default function MobileNavigation({ snippets }: MobileNavigationProps) {

	return (
		<>
			<Flex minH="60px" p={2} bg={"#202938"} justifyContent="center">
				<Avatar name="Code Examples" src="/Logo.png" userSelect="none" />
				<Box m={2}>
					<SearchBar snippets={snippets} />
				</Box>
			</Flex>
		</>
	);
}
