import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        minHeight: '50vh',
        backgroundColor: '#ffc34d',
        textAlign: 'center',
    },

    top: {
        '& h1': {
            marginTop: '2rem',
            textAlign: 'center',
            fontSize: '32px',
            fontWeight: 700,
            opacity: '85%',
            color: 'white',
            marginBottom: '1.5rem',
        },
        '& hr': {
            border: '1px solid white',
            width: '5rem',
            marginBottom: '1.5rem',
        },
        '& button': {
            height: '3rem',
            width: '10rem',
            border: 'none',
            borderRadius: '3px',
            outline: 'none',
            cursor: 'pointer',
            color: '#ffc34d',
            fontSize: '15px',
            fontWeight: 'bold',
        },
    },
}));
 
export default styles;