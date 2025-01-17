import { Box } from "@chakra-ui/layout";
import { useBreakpointValue } from "@chakra-ui/media-query";
import Head from "next/head";
import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";

type BaseLayoutProps = {
	pageTitle?: string
	snippets: string[]
	children?: any
	padding?: boolean
}

export default function BaseLayout({ pageTitle, snippets, children, padding = true }: BaseLayoutProps) {
	const isMobile = useBreakpointValue({
		base: true,
		md: false
	});

	return (
		<>
			<Head>
				<title>{pageTitle} - Code Examples</title>
			</Head>

			{isMobile && <MobileNavigation snippets={snippets} />}
			{!isMobile && <Navigation snippets={snippets} />}

			<Box py={padding ? 2 : 0}>
				<main>{children}</main>
			</Box>
		</>
	);
}
