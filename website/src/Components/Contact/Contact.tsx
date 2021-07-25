import React from 'react';
import { Box, makeStyles, Typography } from '@material-ui/core';
import styled from 'styled-components'
import PhoneIcon from '@material-ui/icons/Phone';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import { useForm } from '@formspree/react';

import { ContactForm } from './ContactForm';

export default function Contact () {

    const classes = useStyles();

    const [state, handleSubmit] = useForm("mjvjeqje");
    
    return (
        <Container>

            <Box className={classes.contactBox}>

                <Typography variant='h3' className={classes.contact}>Contact <span className={classes.me}>Me</span></Typography>
                
            </Box>

            <Box className={classes.mainCont}>


                <Box>

                    {
                        !state.succeeded &&

                        <Box className={classes.details}>

                            <Typography className={classes.contactDetails} style={{marginLeft: 0}}>

                                <PhoneIcon className={classes.icons} />

                                8607050509

                            </Typography>

                            <Typography className={classes.contactDetails}>

                                <AlternateEmailIcon className={classes.icons} />

                                contact@kartikyadav.in

                            </Typography>

                        </Box>
                    }
                    
                </Box>
                    
                <ContactForm state={state} handleSubmit={handleSubmit} />

            </Box>

        </Container>
    )
}

const Container = styled.div`
    position: relative;
    height: 100%;
    min-height: 100%;
    background: #222222;
    position: relative;
    color: #fff;
`;

const useStyles = makeStyles(theme=>({
    mainCont: {
        width: '70%',
        height: '650px',
        margin: 'auto',
        display: 'flex',
        flexDirection: 'column',
        paddingBottom: theme.spacing(10),
        paddingTop: 40,
        alignItems: 'center',
        justifyContent: 'center',

        [theme.breakpoints.down(500)]: {
            height: 650
        }
    },

    contactBox: {
        width: '70%',
        height: '120px',
        borderBottom: '1px solid #424242',
        marginBottom: 30,
        margin: 'auto',
        paddingTop: 40
    },

    contact: {
        color: '#fff',
        marginBottom: 20,
        fontFamily: 'Tangerine, cursive',
        fontSize: 60,

        [theme.breakpoints.down(500)]: {
            textAlign: 'left'
        }
    },

    me: {
        color: '#58ba9d'
    },

    heading: {
        textAlign: 'center'
    },

    details: {
        display: 'flex',
        margin: theme.spacing(2),
        
        [theme.breakpoints.down(500)]: {
            flexDirection: 'column',
            alignItems: 'center'
        }
    },

    contactDetails: {
        fontSize: 20,
        marginLeft: 40,

        [theme.breakpoints.down(500)]: {
            display: 'flex',
            marginLeft: 0
        }
    },

    icons: {
        color: '#58ba9d',
        marginRight: 10,
        position: 'relative',
        top: 5
    }
}));