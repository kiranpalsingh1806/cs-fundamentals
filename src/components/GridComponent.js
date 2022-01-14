import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    fontFamily: 'monospace',
    fontSize: '15px',
    paddingTop: '20px',
    color: "#fff",
    backgroundColor: "dodgerblue",
    height: '100px',
    marginTop: '5px',
}));

function GridComponent() {
    return (
        <Box sx={{ flexGrow: 1 }} style={{ margin: '10px 50px' }}>
            <Grid container spacing={3}>
                <Grid item xs={4}>
                    <Item>
                        Kiranpal Singh
                        <br></br>
                        Bachelors of Technology <br></br>
                        LPU
                    </Item>
                </Grid>
                <Grid item xs={4}>
                    <Item>xs=4</Item>
                </Grid>
                <Grid item xs={4}>
                    <Item>
                        Kiranpal Singh
                        <br></br>
                        Bachelors of Technology <br></br>
                        LPU
                    </Item>
                </Grid>
                <Grid item xs={4}>
                    <Item>xs=4</Item>
                </Grid>
                <Grid item xs={4}>
                    <Item>xs=4</Item>
                </Grid>
                <Grid item xs={4}>
                    <Item>xs=4</Item>
                </Grid>
                <Grid item xs={4}>
                    <Item>xs=4</Item>
                </Grid>
                <Grid item xs={4}>
                    <Item>xs=4</Item>
                </Grid>
                <Grid item xs={4}>
                    <Item>xs=4</Item>
                </Grid>
                <Grid item xs={4}>
                    <Item>xs=4</Item>
                </Grid>
                <Grid item xs={4}>
                    <Item>xs=4</Item>
                </Grid>
                <Grid item xs={4}>
                    <Item>xs=4</Item>
                </Grid>
                <Grid item xs={4}>
                    <Item>xs=4</Item>
                </Grid>
                <Grid item xs={4}>
                    <Item>xs=4</Item>
                </Grid>
                <Grid item xs={4}>
                    <Item>xs=4</Item>
                </Grid>
                <Grid item xs={4}>
                    <Item>xs=4</Item>
                </Grid>
            </Grid>
        </Box >
    );
}

export default GridComponent;
