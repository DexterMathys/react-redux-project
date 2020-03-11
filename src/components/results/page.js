import React, { Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Card, CardActionArea, CardContent, CardMedia, Grid } from '@material-ui/core'
import AppBar from '../appBar';
import { Typography } from '@material-ui/core';
import './style.css';

function Page(props) {
    const {
        results,
        goTo
    } = props;

    const isEmpty = results.length === 0;

    return (
        <Fragment>
            <CssBaseline />
            <AppBar />

            <Grid container direction="row" justify="center" className="result-page">
                {isEmpty ?
                    <Typography variant="h5" component="h3" className="page-message">
                        There are no results
                    </Typography>
                    :
                    results.map(item =>
                        <Grid 
                            item
                            xs={3}
                            key={item.id}
                            className="card-container"
                        >
                            <Card
                                className="card"
                                onClick={() => goTo(`/details/${item.id}`)}
                            >
                                <CardActionArea>
                                    <CardMedia
                                        className="card-media"
                                        image={item.image}
                                        title={item.title}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {item.title}
                                        </Typography>
                                        <Typography component="p">
                                            {item.content}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>    
                    )
                }
            </Grid>
        </Fragment>
    );
}

export default Page;