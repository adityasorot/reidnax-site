import { Button, Grid, Typography } from "@material-ui/core";
import React from "react";
import { ModTextField } from "./ModTextField";

const MainForm = () => {
    return (
        <div>
            <Grid container direction="column" spacing={2}>
                <Grid item>
                    <ModTextField label="Name" />
                </Grid>
                <Grid item>
                    <ModTextField label="Email" />
                </Grid>
                <Grid item>
                    <ModTextField label="Subject" />
                </Grid>
                <Grid item>
                    <ModTextField label="Message" multiline rows={5} />
                </Grid>
                <Grid item>
                    <Button variant="contained" color="secondary">
                        <Typography color="primary">Send</Typography>
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
};

export default MainForm;
