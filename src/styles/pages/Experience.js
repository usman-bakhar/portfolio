import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#FAFAFA',
        paddingBottom: '4rem',
    },

    top: {
        '& h1': {
            marginTop: '2rem',
            textAlign: 'center',
            fontSize: '28px',
            fontWeight: 900,
            opacity: '85%',
            marginBottom: '5px',
        },
        '& hr': {
            border: '1px solid orange',
            width: '5rem',
        },
        '& p': {
            textAlign: 'center',
            margin: '2rem 0rem 4rem 0rem',
            color: 'gray',
            fontSize: '14px',
            fontWeight: 'lighter',
        },
    },
}));

export default styles;