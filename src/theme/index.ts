import { Inter } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const inter = Inter({
    subsets: ["latin"]
});

const theme = createTheme({
    palette: {
        primary: {
            main: "#D3F36B"
        },
        secondary: {
            main: "#000000"
        },
        grey: {
            "200": "#ECECEC",
            "900": "#231F20"
        }
    },
    typography: {
        ...inter.style
    },
    shape: {
        borderRadius: 50
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                ...inter.style
            }
        },
        MuiButton: {
            defaultProps: {
                disableElevation: true,
                disableRipple: true,
                variant: "contained",
                color: "secondary"
            },
            styleOverrides: {
                root: {
                    textTransform: "none",
                    fontSize: "15px",
                    fontStyle: "normal",
                    fontWeight: 600,
                    lineHeight: "24px",
                    height: "46px",
                    padding: "0 22px",
                    "&:focus-visible": {
                        boxShadow: "0px 0px 0px 4px rgba(0, 113, 227, 0.20)"
                    }
                },
                containedSecondary: ({ theme }) => ({
                    "&:hover": {
                        background: theme.palette.grey[900]
                    },
                    "&:active": {
                        background: theme.palette.primary.main
                    },
                    "&.Mui-disabled": {
                        backgroundColor: "#1D1D1F0A",
                        color: "#1D1D1F"
                    }
                }),
                outlinedSecondary: ({ theme }) => ({
                    border: `1px solid ${theme.palette.grey[200]} !important`,
                    "&:hover": {
                        boxShadow: "0px 0px 0px 4px rgba(0, 113, 227, 0.20)",
                        background: "none"
                    },
                    "&:active": {
                        boxShadow: "none"
                    }
                })
            }
        }
    }
});

export default theme;
