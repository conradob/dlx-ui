import {
    Avatar,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    IconButton,
    Typography,
} from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import format from 'date-format';
import React from 'react';



import { IPostInfo } from '../../interfaces';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        avatar: {
            backgroundColor: red[500],
        },
        button: {
            margin: theme.spacing(1),
        },
        expand: {
            marginLeft: 'auto',
            transform: 'rotate(0deg)',
            transition: theme.transitions.create('transform', {
                duration: theme.transitions.duration.shortest,
            }),
        },
        expandOpen: {
            transform: 'rotate(180deg)',
        },
        media: {
            height: 0,
            paddingTop: '56.25%', // 16:9
        },
        root: {
            maxWidth: 345,
        },
    }),
);
interface IContentPostProps {
    content: IPostInfo;
    onClick: (value: string) => void;
}
export default function ContentPost(props: IContentPostProps) {
    const classes = useStyles();

    const sendToMeetupId = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        props.onClick(props.content._id);
        event.preventDefault();
    };


    return (
        <div style={{ margin: '50px' }} onClick={sendToMeetupId}>
            <Card className={classes.root}>
                <CardHeader
                    avatar={
                        <Avatar
                            aria-label="recipe"
                            className={classes.avatar}
                        >
                            {props.content.author.substr(0, 2)}
                        </Avatar>
                    }
                    title={props.content.title}
                    subheader={format('MM dd, yyyy - hh:mm', new Date(props.content.date * 1000))}
                />
                {props.content.coverImage && <CardMedia
                    className={classes.media}
                    image={props.content.coverImage}
                    title={props.content.title}
                />}
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.content.content}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing={true}>
                    <IconButton aria-label="open">
                        <NavigateNextIcon />
                    </IconButton>
                </CardActions>
            </Card>
        </div>
    );
}
