import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        width: 320,
        height: 315,
        textAlign: "left",
        backgroundColor: '#151823',
        paddingLeft: "2%",
        paddingRight: "1%",
        paddingBottom: '2%',
        border: "2px solid #31364B",
        marginBottom: '5%'
    },
    title: {
        fontSize: 18,
        margin: 0,
        textAlign: "center",
        fontWeight: "normal",
    },
    itemsContainer: {
        overflowY: 'scroll',
        height: 225,
        paddingRight: 10,
        '& .contentGrid': {
            '& .gridLeft': {
                textAlign: 'left',
            },
            '& .gridRight': {
                textAlign: 'right',
            }
        }
    }
});

export default useStyles;