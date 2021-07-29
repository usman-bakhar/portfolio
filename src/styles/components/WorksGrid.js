import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
    root: {
        // minHeight: '1000px',
        // height: '1000px',
        // width: '1000px',
        // backgroundColor: 'red',
    },

    grid: {
        display: 'grid',
        gridTemplate: '150px 150px 150px/ auto 150px 150px 150px',
        gridGap: '10px',
        margin: '3rem 0rem',
        gridTemplateAreas: 
        `'A A B C'
         'A A D E'
         'F F G H'`,
         [theme.breakpoints.down('xs')]: {
            gridTemplate: '150px 150px 150px 150px 150px 150px 150px 150px/ 10px',
            gridGap: '10px',
            margin: '3rem 0rem',
            gridTemplateAreas: 
            `'A A A A'
             'B B B B'
             'C C C C'
             'D D D D'
             'E E E E'
             'F F F F'
             'G G G G'
             'H H H H'`,
         },

        '& div:nth-child(1)': {
            gridArea: 'A',
            '& img': {
                width: '100%',
                height: '100%',
                display: 'block',
            },
        },
        '& div:nth-child(2)': {
            gridArea: 'B',
            '& img': {
                width: '100%',
                height: '100%',
                display: 'block',
            },
        },
        '& div:nth-child(3)': {
            gridArea: 'C',
            '& img': {
                width: '100%',
                height: '100%',
                display: 'block',
            },
        },
        '& div:nth-child(4)': {
            gridArea: 'D',
            '& img': {
                width: '100%',
                height: '100%',
                display: 'block',
            },
        },
        '& div:nth-child(5)': {
            gridArea: 'E',
            '& img': {
                width: '100%',
                height: '100%',
                display: 'block',
            },
        },
        '& div:nth-child(6)': {
            gridArea: 'F',
            '& img': {
                width: '100%',
                height: '100%',
                display: 'block',
            },
        },
        '& div:nth-child(7)': {
            gridArea: 'G',
            '& img': {
                width: '100%',
                height: '100%',
                display: 'block',
            },
        },
        '& div:nth-child(8)': {
            gridArea: 'H',
            '& img': {
                width: '100%',
                height: '100%',
                display: 'block',
            },
        },
    },
    
    // grid: {
    //     '& div': {
    //     /* height: 150px;
    //     width: 160px; */
    //     border: '1px solid black',
    //     },
    //     
    // },
    
    // grid {div:nth-child(1) {
    //     grid-area: A;}
    // }
    // .grid div:nth-child(2) {
    //     grid-area: B;
    // }
    // .grid div:nth-child(3) {
    //     grid-area: C;
    // }
    // .grid div:nth-child(4) {
    //     grid-area: D;
    // }
    // .grid div:nth-child(5) {
    //     grid-area: E;
    // }
    // .grid div:nth-child(6) {
    //     grid-area: F;
    // }
    // .grid div:nth-child(7) {
    //     grid-area: G;
    // }
    // .grid div:nth-child(8) {
    //     grid-area: H;
    // }
    
}));

export default styles;