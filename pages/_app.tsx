import type { AppProps } from "next/app";
import { ChakraProvider, Image } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/layout";
import theme from "../styles/theme";
import Router from "next/router";
import Head from "next/head";
import { useState } from "react";
import NProgress from "nprogress";

import "@fontsource/poppins";
import "../styles/animatedText.css";
import "../styles/global.css";
import ColorModeManager from "../components/ColorModeManager";

NProgress.configure({ showSpinner: false });

function MyApp({ Component, pageProps }: AppProps) {
	const [isLoading, setLoading] = useState(false);

	Router.events.on("routeChangeStart", () => {
		NProgress.start();
		setLoading(true);
	});

	Router.events.on("routeChangeComplete", () => {
		NProgress.done();
		setLoading(false);
	});

	return (
		<ChakraProvider resetCSS theme={theme}>
			<Head>
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
					integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ=="
					crossOrigin="anonymous"
					referrerPolicy="no-referrer"
				/>
				<meta property="og:url" content="https://examples.bytestobits.dev" />
				<meta property="og:title" content="Code Examples | BytesToBits" />
				<meta property="og:description" content="Short code snippets" />
				<meta property="og:image" content="/Logo.png" />

				<meta property="url" content="https://examples.bytestobits.dev" />
				<meta property="title" content="Code Examples | BytesToBits" />
				<meta name="description" content="Short code snippets" />
				<meta property="image" content="/Logo.png" />

				<meta property="twitter:url" content="https://examples.bytestobits.dev" />
				<meta property="twitter:title" content="Code Examples | BytesToBits" />
				<meta property="twitter:description" content="Short code snippets" />
				<meta property="twitter:image" content="/Logo.png" />
			</Head>
			{isLoading && <Image alt="loading" src="/loading.svg" boxSize="50px" position="fixed" bottom="5px" right="5px" draggable="false" />}
			<Flex flexDirection="column" minH="100vh">
				<Component {...pageProps} />

				<ColorModeManager />
			</Flex>
		</ChakraProvider>
	);
}

export default MyApp;
