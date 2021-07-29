import { makeStyles } from '@material-ui/core/styles';

import Capture1 from '../../images/Capture1.png';

const styles = makeStyles((theme) => ({

    content: {
        // backgroundColor: 'red',
        backgroundImage: `url(${Capture1})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        minWidth: '275px',
        height: '200px',
        // padding: '1rem 2rem',
        // '& h1': {
        //     fontSize: '18px',
        //     fontWeight: 'bold',
        // },
    },
}));

export default styles;