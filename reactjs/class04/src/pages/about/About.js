import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import top100Films from '../../constant/top100Films';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import ReactPlayer from 'react-player'
import styles from "./aboutStyle"

import Button from "../../components/button/Button";

export default function About() {
    return (
        <Box>
            <Grid container spacing={2}>
                <Grid sx={{ backgroundColor: 'red' }} size={8}>

                    <ReactPlayer playing={true} url='https://www.youtube.com/watch?v=LXb3EKWsInQ' />

                </Grid>
                <Grid size={4}>
                    size=4
                </Grid>
                <Grid size={4}>
                    size=4
                </Grid>
                <Grid size={8}>
                    size=8
                </Grid>
            </Grid>
        </Box>
    )
}