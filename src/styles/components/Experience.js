import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.down('md')]: {
            marginTop: '10px',
        },
        '& h2': {
            color: 'black',
            opacity: '75%',
        },
        '& p': {
            color: 'gray',
            fontSize: '13px',
            fontWeight: 'normal',
        },
    },
}));

export default styles