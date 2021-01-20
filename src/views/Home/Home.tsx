import React from "react"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import { VStack } from "components"
import { Box, Typography, Button, Grid } from "@material-ui/core"
import {
    Ellipse3, Ellipse2,Ellipse7, Eligibility,Ellipse1,Ellipse11,
    Group2, Group3, Group4, Group6,Group7,Challenge,Challenge2, Ellipse13
} from 'assets/images'


const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        "& button": {
            backgroundColor: theme.palette.secondary.dark,
            color: theme.palette.primary.dark,
            fontSize: "1.5rem",
            textTransform: "none",
            // fontWeight:"bold"
        },
        "& h3":{
            // marginTop:theme.spacing(7),
            margin:theme.spacing(10,0)
        }
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
        "& > :not(img)":{
            position:"relative"
        },
        "& button": {
            padding: theme.spacing(4,6)
        },
        "& img":{
            position:"absolute"
        },
        "& h3":{
            margin:theme.spacing(5,0)
        }
    },
    imageContainer: {
        display:"flex",
        "& img":{
            maxWidth:"50%",
        },
        "& img:last-child":{
            marginTop:"-5rem"
        }
    },
    challengeContainer: {
        backgroundColor: "#FFFFE0",
        padding: theme.spacing(7),
        position:"relative",
        "& button": {
            padding: theme.spacing(2),
            marginTop: theme.spacing(4)
        },
        "& > div": {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            "& > div": {
                width: "100%",
                marginTop: "2rem",
                "& > div": {
                    width: "50%",
                    alignItems: "flex-start",
                    "& p": {
                        maxWidth: "30rem"
                    }
                }
            }
        },
        "& > img":{
            position:"absolute",
            maxWidth:"100%",
            top:"0"
        }
    },
    girlStudyContainer: {
        backgroundColor: "#FFFFE0",
        padding: theme.spacing(7),
        position:"relative",
        "& button": {
            padding: theme.spacing(2),
            marginTop: theme.spacing(4)
        },
        "& img":{
            marginLeft:"-3rem"
        },
        "& > div":{
            alignItems:"flex-start !important",
            flexDirection:"row" ,
            "& div:last-child":{
                alignSelf:"flex-end",
                marginLeft:"4rem"
            }
        }
    },
    anotherChallengeContainer: {
        "& p:first-child": {
            color: theme.palette.primary.dark
        }
    },
    examinationContainer: {
        backgroundColor: "#FFFFEE",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height:"55rem",
        position:"relative",
        "& > img":{
            position:"absolute",
            maxWidth:"100%",
            top:"0"
        },
        // "& h3":{
        //     margin:theme.spacing(7.5,0)
        // },
        "& p:last-child":{
            color:"#FF5470"
        },
        "& > div": {
            padding: theme.spacing(2, 3),
            width: "85%",
            height: "25rem",
            display: "flex",
            position:"relative",
            "& > div": {
                display: "flex",
                width: "100%",
                alignItems: "flex-start",
                justifyContent: "center",
                flexDirection: "column",
                height: "fit-content",
                padding: theme.spacing(5),
                margin: theme.spacing(3),
                "& p": {
                    maxWidth: "25rem",
                    color: theme.palette.primary.dark,
                    margin: theme.spacing(3, 0)
                },
                "& button": {
                    padding:theme.spacing(1,5)
                },
                "& p:first-child": {
                    fontFamily:"KilkBold",
                },
            },
            "& > div:first-child": {
                backgroundColor: "#FFF9D7",
                "& button": {
                    backgroundColor: "#FDE24F !important",
                },
            },
            "& > div:nth-child(2)": {
                backgroundColor: "#FFE4E9",
                "& button": {
                    backgroundColor: "#FF5470 !important",
                    color:"white"
                },
            },
        }
    },
    lastChallengeContainer:{
        backgroundColor:"#FFFFE0",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column",
        position:"relative",
        "& img":{
            position:"absolute",
            top:"0",
            maxWidth:"100%"
        },
        // "& h3":{
        //     margin:theme.spacing(7.5,0)
        // },
        "& > div":{
            justifyContent:"center",
            "& > div":{
                display:"flex",
                margin:theme.spacing(2),
                maxWidth:"40rem"
            }
        }
    },
    numberingContainer:{
        "& > div":{
            borderRadius:"50%",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            width:"2rem",
            margin:theme.spacing(2),
            marginTop:"0",
            height:"2rem",
            border:"2px solid black",
            borderColor:theme.palette.primary.dark
        
        }
    },
    rewardContainer:{
        backgroundColor:"#FFFFE0",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",
        padding:theme.spacing(3),
        height:"45rem",
        position:"relative",
        "& > img":{
            position:"absolute"
        },
        "& p":{
            color:theme.palette.primary.dark,
            textAlign:"center",
            maxWidth:"63rem",
            margin:theme.spacing(.5)
        },
        "& p:nth-child(3)":{
            fontSize:"6rem",
            color:theme.palette.secondary.main,
            fontWeight:"bolder",
            margin:theme.spacing(2,0),
            lineHeight:"119.62px"
        },
        "& p:nth-child(4)":{
            color:theme.palette.secondary.main,
           fontSize:"1.125rem" 
        },
        "& button":{
            padding:theme.spacing(1.75,5.5),
            margin:theme.spacing(2)
        },
        "& :not:(img)":{
            position:"relative"
        }
    }
}))





const challengeContainer = [
    "If you are eligible to participate in the challenge, Register now!",
    `Upon closure of the registration, you
    will hear from us in 2 weeks as regards
    the next phase of the challenge via your
    phone number & email.
    `,
    `You will receive a pin that can be used
    to log on for your challenge at the due time.
    `,
    `The competition will be in 3 phases and would
    feature questions across different subjects
    within your class section.
    `,
    `Other subjects except the English Language
    would be given  20 seconds for answers. While
    the English Language would be for 10 seconds.
    `,
    `Winners would be automatically decided by our
    assessment system by the number of correct
    answers answered within the fastest time.
    `,
    `Winners for each phase would be announced
    publicly on our social media channel:
    Facebook, Twitter, Instagram.`,
    `Winners for each phase would be announced
    publicly on our social media channel:
    Facebook, Twitter, Instagram.`
]

const Home = () => {
    const classes = useStyles()

    return (
        <VStack className={classes.root}>
            <Box className={classes.absoluteContainer}>
                <img src={Ellipse13} style={{
                    height:"1rem",
                    top:"17%",
                    left:"40%"
                }} />
                <img src={Group3} style={{
                    height:"7rem",
                    top:"10%"
                }} />
                <img src={Ellipse2} style={{
                    height:"1rem",
                    left:"15%",
                    top:"15%"
                }} />
                <img src={Group4} style={{
                    height:"5rem",
                    left:"15%",
                    bottom:"45%"
                }} />
                <img src={Group2} style={{
                    height:"5rem",
                    right:"15%",
                    bottom:"5%"
                }} />
                <img src={Ellipse2} style={{
                    height:"3rem",
                    left:"15%",
                    bottom:"10%"
                }} />
                <img src={Ellipse7} style={{
                    height:"8rem",
                    left:"0",
                    bottom:"0%"
                }} />
                <img src={Ellipse3} style={{
                    height:"1.5rem",
                    right:"20%",
                    top:"20%"
                }} />
                <img src={Ellipse1} style={{
                    height:"4rem",
                    right:"10%",
                    top:"30%"
                }} />
                <img src={Ellipse2} style={{
                    height:"3rem",
                    right:"12%",
                    top:"65%"
                }} />
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
            <Box className={classes.challengeContainer}>
                <img src={Challenge} />
                <Box>
                    <Typography variant="h3" >
                        About the Challenge
                    </Typography>
                    <Box className={classes.imageContainer}>
                        <Box>
                            <Typography variant="body1" >
                                Globally, 2020 created an indelible footprint in the lives and minds of people, as the world
                                experienced a major shift that history books couldn't exactly prescribe a solution for.
                                Education for several children was greatly affected and it was said that over 60% of Nigerian
                                children alone had no contact with learning.
                                While Feeding was a major problem, a financial limitation that has led to an inability to keep up
                                with school fees payment has now become a bigger obstacle to a lot of parents who were greatly
                                affected by the pandemic.
                            </Typography>
                            <Button>
                                Take the Challenge
                            </Button>
                        </Box>
                        <img src={Group6} />
                    </Box>
                </Box>
            </Box>
            <Box className={classes.girlStudyContainer}>
                <Box className={classes.imageContainer}>
                    <img src={Group7} />
                    <Box>
                        <Box>
                            {/* <Typography variant="body1">
                                Globally, 2020 created an indelible footprint in the lives and minds of people, as the world
                                experienced a major shift that history books couldn't exactly prescribe a solution for.
                                Education for several children was greatly affected and it was said that over 60% of Nigerian
                            </Typography>
                            <Typography variant="body1" >
                                Globally, 2020 created an indelible footprint in the lives and minds of people, as the world
                                experienced a major shift that history books couldn't exactly prescribe a solution for.
                                Education for several children was greatly affected and it was said that over 60% of Nigerian
                                children alone had no contact with learning.
                                While Feeding was a major problem, a financial limitation that has led to an inability to keep up
                                with school fees payment has now become a bigger obstacle to a lot of parents who were greatly
                                affected by the pandemic.
                        </Typography> */}
                        </Box>
                            <Button>
                                Take the Challenge
                        </Button>
                    </Box>
                </Box>
            </Box>
            <Box className={classes.examinationContainer}>
                <img src={Eligibility} />

                <img src={Ellipse13} style={{
                    height:"1.25rem",
                    top:"7.5%",
                    left:"10%"
                }} />
                <img src={Ellipse11} style={{
                    height:"10rem",
                    top:"-5rem",
                    right:"0"
                }} />
                <Typography variant="h3">
                    Eligibility
                </Typography>
                <Box>
                    {[1, 2].map((item, idx) => (
                        <Box>
                            <Typography>
                                SSCE Candidates
                        </Typography>
                            <Typography>
                                Students preparing for examination like
                                WAEC NECO & JAMB <b>SSS2 - SSS3</b>
                        </Typography>
                            <Button>
                                Register
                        </Button>
                        </Box>
                    ))}
                </Box>
                <Typography>
                    The Solve Match Fund Challenge is open to only students within this category
                    </Typography>
            </Box>
            <Box className={classes.lastChallengeContainer}>
                <img src={Challenge2} />
                <img src={Ellipse13} style={{
                    height:"1.5rem",
                    top:"7%",
                    left:"4%"
                }} />
                <img src={Ellipse2} style={{
                    height:"1.5rem",
                    top:"24%",
                    right:"4%"
                }} />
                <Typography variant="h3" >How the Challenge Works</Typography>
                <Grid container spacing={2} >
                    {challengeContainer.map((item,idx) => (
                        <Grid item >
                            <Box className={classes.numberingContainer}>
                                <Box>
                                    {idx+1}
                                </Box>
                            </Box>
                            <Box key={idx} >
                               <Typography variant="body1" >
                                {item+1}
                               </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <Box className={classes.rewardContainer}>    
                <Typography variant="h3">
                    Reward
                </Typography>
                <Typography>
                    Students will be competing for a bounty of
                </Typography>
                <Typography>
                    #2,000,000
                </Typography>
                <Typography>
                    This could go higher based on funds raised
                </Typography>
                <Typography variant="body1">
                    The bounty will be equally shared amongst all students that win at the final stage.
                    So this means, if we have 100 winners, that's #20,000 each or 10 winners, that's #200,000 each.
                    <br/>
                    Get set to win!
                </Typography>
                <Button>
                    Register
                </Button>
                <img src={Ellipse13} style={{
                    height:"1rem",
                    top:"17%",
                    left:"40%"
                }} />
                <img src={Ellipse2} style={{
                    height:"1rem",
                    left:"15%",
                    top:"15%"
                }} />
                <img src={Ellipse2} style={{
                    height:"3rem",
                    left:"15%",
                    bottom:"10%"
                }} />
                <img src={Ellipse3} style={{
                    height:"1.5rem",
                    right:"20%",
                    top:"20%"
                }} />
                <img src={Ellipse1} style={{
                    height:"4rem",
                    right:"10%",
                    top:"30%"
                }} />
                <img src={Ellipse2} style={{
                    height:"3rem",
                    right:"12%",
                    top:"65%"
                }} />
            
            </Box>
        </VStack>
    )
}

export default Home