import palette from "./palette"



export default {
    fontFamilyRegular:"Kilk",
    fontFamilyMedium:"KilkMedium",
    fontFamilyBold:"KilkBold",
    fontType:{
        regular:"Kilk",
        medium:"KilkMedium",
        semiBold:"KilkBold",
        bold:"KilkBold",
        
    },
    h6:{
        color:palette.primary.dark,
        fontWeight:"bold",
        fontSize:"1.5rem",
        lineHeight:"29.9px"
    },
    h3:{
        color:palette.primary.dark,
        fontFamily:"KilkBold",
        fontWeight:"bold",
        fontSize:"4.5rem",
        lineHeight:"89.71px"
    },
    body1:{
        fontFamily:"Kilk",
        color:palette.primary.dark,
        fontWeight:"lighter",
        fontSize:"1.5rem",
        lineHeight:"29.35px",
        opacity:.9
    }
} as any