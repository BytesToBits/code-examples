import { useColorMode } from "@chakra-ui/react";
import { useState } from "react";

export default function ColorModeManager() {
    const { toggleColorMode, colorMode } = useColorMode()

    useState(() => {
        if(colorMode == "light") toggleColorMode()
    })
}