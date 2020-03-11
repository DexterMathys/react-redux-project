import React, { Fragment } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import CircularProgress from '@material-ui/core/CircularProgress';
import AppBar from '../appBar';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import './style.css';

function Page(props) {
    const {
        goTo,
        currentItem,
    } = props;

    return (
        <Fragment>
            <CssBaseline />

            <AppBar />

            <div className="details-page">
                <Paper
                    elevation={1}
                    className="paper-container"
                >
                    {currentItem ?
                        <Fragment>

                            <div
                                className="item-image"
                                style={{
                                    backgroundImage: `url(${currentItem.image})`,
                                }}
                            />
                            <Typography gutterBottom variant="h5" component="h2" align="center">
                                {currentItem.title}
                            </Typography>

                            <Typography gutterBottom component="p" className="content">
                                {currentItem.content}
                            </Typography>
                        </Fragment>
                        :
                        <CircularProgress className="item-loader" />
                    }

                    <IconButton
                        color="primary"
                        onClick={() => goTo('/results')}
                        variant="contained"
                    >
                        <ArrowBackIosIcon />
                        Back
                    </IconButton>
                </Paper>
            </div>
        </Fragment>
    );
}

export default Page;