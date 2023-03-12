import { useColorModeValue } from "@chakra-ui/color-mode";
import { useBreakpointValue } from "@chakra-ui/media-query";
import { darken } from "@chakra-ui/theme-tools";
import theme from "../styles/theme"

export const ColorMode = (light: string, dark: string) => useColorModeValue(light, dark);

export function Lighten(hexValue: string, amount = 0.2) {
    // Convert hex value to RGB
    let r = parseInt(hexValue.slice(1, 3), 16);
    let g = parseInt(hexValue.slice(3, 5), 16);
    let b = parseInt(hexValue.slice(5, 7), 16);
  
    // Calculate new lightened RGB values
    r = Math.floor(r + (255 - r) * amount);
    g = Math.floor(g + (255 - g) * amount);
    b = Math.floor(b + (255 - b) * amount);
  
    // Convert new RGB values back to hex
    const newHex = `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
  
    return newHex;
  }

export function Darken(color: string, amount: number) {
    return darken(color, amount);
}

export const BreakPoint = (values: any) => useBreakpointValue(values);
