import React from "react"
import {Link} from "react-router-dom"
import {makeStyles,createStyles,Theme} from "@material-ui/core/styles"
import {Box, Typography} from "@material-ui/core"

const useStyles = makeStyles((theme:Theme) => createStyles({
    root:{
    },
    footerContainer:{
        backgroundColor:theme.palette.secondary.main,
        padding:theme.spacing(7,12),
        height:"25rem",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        "& p,a":{
            color:"#FFFFEE",
            textDecoration:"none",
            fontFamily:"Kilk",
            fontSize:"1.125rem",
            lineHeight:"40px",
            fontWeight:500
        },
        "& > p":{
            textAlign:"center"
        },
        "& > div":{
            display:"flex",
            justifyContent:"space-between",
            alignItems:"flex-start",
            "& > div":{
                maxWidth:"25rem",
                display:"flex",
                flexDirection:"column",
                alignItems:"flex-start",
                "& p:first-child":{
                    fontWeight:700
                }
            }
        }
    }
}))







const Footer = () => {
    const classes = useStyles()

    return(
        <Box className={classes.footerContainer}>
        <Box>
        <Box>
            <Typography>
                SOLVE MATCH
            </Typography>
            <Typography>
                Solve Match is an interactive gaming platform that allows students
                to compete and win prizes for their knowledge.
            </Typography>
        </Box>
        <Box>
            <Link to="/">
                Home
            </Link>
            <Link to="/">
                Challenge
            </Link>
            <Link to="/">
                Eligibility
            </Link>
        </Box>
        <Box>
            <Link to="/" >
                Sponsorship
            </Link>
            <Link to="/" >
                About us
            </Link>
            <Link to="/" >
                FAQ
            </Link>
        </Box>
        <Box>
            <Typography>
                Contact us
            </Typography>
            <Link to="/" >
                +234 902 499 2444
            </Link>
            <Link to="/" >
                +234 906 732 4063
            </Link>
            <Link to="/" >
                info@solvematch.com
            </Link>
        </Box>
        </Box>
        <Typography>
            Copyright (c) 2021. Solve Match
        </Typography>
    </Box>

    )
}

export default Footer