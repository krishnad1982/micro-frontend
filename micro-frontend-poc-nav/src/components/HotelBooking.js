import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import { Hotel, KingBed } from '@material-ui/icons';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
    cardaction: {
        justifyContent: "center"
    },
    media: {
        height: 230,
        width: '100%',
        objectFit: 'cover'
      }
}));

export default function HotelBooking() {
    const classes = useStyles();

    return (
        <div>
            <Grid className={classes.root}>
                <Grid item xs={12}>
                    <Card>
                        <CardActionArea>
                            <CardMedia className={classes.media}
                                component="img"
                                alt="Flight"
                                height="140"
                                image="./src/assets/hotel.jpg"
                                title="Flight"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Hotel Booking</Typography>
                                <Grid container spacing={1}>
                                    <Grid item xs={12}>
                                        <FormControl className={classes.margin}>
                                            <InputLabel htmlFor="input-with-icon-adornment">From</InputLabel>
                                            <Input
                                                id="input-with-icon-fromadornment"
                                                startAdornment={
                                                    <InputAdornment position="start">
                                                        <Hotel />
                                                    </InputAdornment>
                                                }
                                            />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <FormControl>
                                            <InputLabel htmlFor="input-with-icon-adornment">To</InputLabel>
                                            <Input
                                                id="input-with-icon-toadornment"
                                                startAdornment={
                                                    <InputAdornment position="start">
                                                        <KingBed />
                                                    </InputAdornment>
                                                }
                                            />
                                        </FormControl>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </CardActionArea>
                        <CardActions className={classes.cardaction}>
                            <Button size="small" color="primary">
                                Search</Button>
                            <Button size="small" color="secondary">
                                Cancel</Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
}
