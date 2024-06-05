import { Box, IconButton, Typography } from "@mui/material";
import {RoomImage } from "../styled/RoomImage.styled";
import roomPicture from '../../assets/images/room.png'
import { BadgedBox, IconsBox, LayerBox, RoomName } from "../styled/RoomBoxStyle";
import { Favorite, Visibility } from "@mui/icons-material";



export default function ADSRoom() {

    return (
        <Box sx={{position:'relative',
        borderRadius:'15px',
        width:'fit-content',
        cursor: 'pointer'}}>
            <RoomImage src={roomPicture} alt="RoomPicture"/>
            <BadgedBox>
            $856 per night
            </BadgedBox>
            <RoomName>
                <Typography variant="h6">
                Ocean Land
                </Typography>
                <Typography>
                Bandung, Indonesia
                </Typography>
            </RoomName>
            <LayerBox>
                <IconsBox>
                    <IconButton sx={{color:'#FFFFFF'}}>
                        <Favorite/>
                    </IconButton>
                    <IconButton sx={{color:'#FFFFFF'}}>
                        <Visibility/>
                    </IconButton>
                </IconsBox>
            </LayerBox>
        </Box>
    );
}