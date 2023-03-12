import Icon from "@chakra-ui/icon";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { Box, Link, Text } from "@chakra-ui/layout";
import { Popover, PopoverBody, PopoverContent, PopoverTrigger } from "@chakra-ui/popover";
import _ from "lodash";
import { useRouter } from "next/router";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import searchEngine from "../lib/search";
import { Darken } from "../lib/utils";
import theme from "../styles/theme";

type SearchItemProps = {
	data: string
}

function SearchItem({ data }: SearchItemProps) {
	const [language, name] = data.split(" / ");

	let ghLink;

	if (name.endsWith("ISDIR")) ghLink = `https://github.com/BytesToBits/code-examples/tree/main/codes/${language}/${name.replace(" ISDIR", "")}`;

	return (
		<Link href={ghLink ?? `/s/${language}/${name}`}>
			<Box p={2} border="1px solid aqua" rounded="md" bg={Darken("brandGray", 1)(theme)} my={2}>
				<Text>{data.replace(" ISDIR", "")}</Text>
			</Box>
		</Link>
	);
};

type SearchBarProps = {
	snippets: string[]
}

export default function SearchBar({ snippets }: SearchBarProps) {
	const [options, setOptions] = useState<any[]>([]);
	const router = useRouter();

	return (
		<>
			<Popover isOpen={!_.isEmpty(options)} placement="bottom-start" autoFocus={false}>
				<PopoverTrigger>
					<InputGroup>
						<Input
							placeholder="Search..."
							onClick={() => {
								if (!snippets) {
									router.push("/");
								}
							}}
							onChange={(e) => {
								if (e.target.value.length == 0) return setOptions([]);
								const newData = searchEngine<any>(e.target.value, [], snippets);
								setOptions(newData);
							}}
						/>
						<InputRightElement>
							<Icon as={FaSearch} />
						</InputRightElement>
					</InputGroup>
				</PopoverTrigger>
				<PopoverContent>
					<PopoverBody maxH="500px" overflowY="scroll">
						{options.map((option) => (
							<SearchItem data={option} key={option} />
						))}
					</PopoverBody>
				</PopoverContent>
			</Popover>
		</>
	);
}
