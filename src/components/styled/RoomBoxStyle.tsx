import { styled } from '@mui/system';
import { Box } from '@mui/material';


export const BadgedBox = styled(Box)({
    backgroundColor: '#FF498B',
    position:'absolute',
    padding:'1rem',
    top: '0',
    right:'0',
    color:'#FFFFFF',
    minWidth:'40%',
    textAlign:'center',
    borderRadius: '0px 15px',
    height:'40px',
    display: 'flex',
    justifyContent:'center',
    alignItems: 'center',
    fontSize:'clamp(.5rem, 3.4vw, 1rem)'
    });

export const RoomName = styled(Box)({
    position:'absolute',
    padding:'1.5rem',
    bottom: '5px',
    left:'0',
    color:'#FFFFFF',
    minWidth:'40%',
    fontSize:'clamp(.5rem, 3.4vw, 1rem)'
    });

    export const LayerBox = styled(Box)({
        width: '100%',
        height:'97%',
        backgroundColor: 'rgba(32, 63, 199, 0.21)',
        position:'absolute',
        top: '0',
        right:'0',
        color:'#FFFFFF',
        textAlign:'center',
        borderRadius: '15px',
        opacity:'0',
        transform:'translateY(10px)',
        transition:'all 0.5s',
        '&:hover': {
            opacity:'1',
            transform:'translateY(0)',
        },
        });

    export const IconsBox = styled(Box)({
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            gap:'5px',
            height:'100%',
        });

