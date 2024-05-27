import { DefaultTheme } from "styled-components";

const size = {
  mini: "376px",
  xs: "430px",
  sm: "576px",
  md: "768px",
  lg: "1199px",
  xl: "1200px",
};
export const darkTheme: DefaultTheme = {
  bgColor: "#3f8cf2",
  boardColor: "#dadfe9",
  cardColor: "#fff",
  mini: `(max-width: ${size.mini})`,
  xs: `(max-width: ${size.xs})`,
  sm: `(max-width: ${size.sm})`,
  md: `(max-width: ${size.md})`,
  lg: `(max-width: ${size.lg})`,
  xl: `(min-width: ${size.xl})`,
};
