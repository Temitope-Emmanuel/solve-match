import React from "react"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import { Header, VStack } from "components"
import { Box, Typography, Button, CardMedia } from "@material-ui/core"
import {
    Ellipse0, Ellipse2, Ellipse3, Ellipse4,
    Ellipse5, Ellipse7, Ellipse8, Ellipse9,
    Group2, Group3, Group4, Group6
} from 'assets/images'


const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
    },
    absoluteContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FFFFEE",
        position: "relative",
        height: "75vh",
        "& > div": {
            minWidth: "100px",
            minHeight: "100px",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            "& p": {
                maxWidth: "24rem",
                margin: theme.spacing(6),
                opacity: .85
            }
        },
        "& button": {
            backgroundColor: theme.palette.secondary.dark,
            color: theme.palette.primary.dark,
            padding: theme.spacing(5),
            // fontFamily:"KilkBold",
            fontSize: "1.5rem",
            textTransform: "none"
        }
    },
    imageContainer: {
        height: "30px",
        width: "30px",
        top:0,
        position:"absolute",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundImage: `url($})`,
    }
}))




const Home = () => {
    const classes = useStyles()


    return (
        <VStack className={classes.root}>
            <Header />
            <Box className={classes.absoluteContainer}>
                <div className={classes.imageContainer} style={{
                    backgroundImage: `url(${Group2})`
                }}>
                </div>
                <div className={classes.imageContainer} style={{
                    backgroundImage: `url(${Group3})`
                }}>
                </div>
                <div className={classes.imageContainer} style={{
                    backgroundImage: `url(${Group4})`
                }}>
                </div>
                {/* <div  image={Group2}  />
                <div  image={Group3}  />
                <div  image={Group4}  /> */}
                <Box>
                    <Typography variant="h3" >
                        Earn While You Learn
                    </Typography>
                    <Typography variant="body1">
                        With Solve Match you can earn from your
                        knowledge while you learn
                    </Typography>
                    <Button>
                        Take the Challenge
                    </Button>
                </Box>
            </Box>
        </VStack>
    )
}

export default Home