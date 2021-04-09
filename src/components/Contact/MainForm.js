import { Button, Grid, Snackbar, Typography } from "@material-ui/core";
import axios from "axios";
import React, { useState } from "react";
import { ModTextField } from "./ModTextField";
import Alert from "@material-ui/lab/Alert";
const MainForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [msg, setMsg] = useState("");
    const [open, setOpen] = useState(false);
    const [alertMsg, setAlertMsg] = useState("");
    const [alertDetail, setalertDetail] = useState(false);
    const resetForm = () => {
        setName("");
        setEmail("");
        setSubject("");
        setMsg("");
    };
    const handleName = (e) => {
        setName(e.target.value);
    };
    const handleEmail = (e) => {
        setEmail(e.target.value);
    };
    const handleSubject = (e) => {
        setSubject(e.target.value);
    };
    const handleMsg = (e) => {
        setMsg(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        axios({
            method: "POST",
            url: "http://test.reidnax.com/testmail.php",
            data: { name: name, email: email, subject: subject, message: msg }
        }).then((response) => {
            console.log(response);
            if (response.data.status === "success") {
                setAlertMsg("Message Sent.");
                setalertDetail(true);
                resetForm();
            } else if (response.data.status === "fail") {
                setAlertMsg(
                    `Message failed to send. ${response.data.error[0]}`
                );
                setalertDetail(false);
            }
            setOpen(true);
        });
        console.log(e);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Grid container direction="column" spacing={2}>
                    <Grid item>
                        <ModTextField
                            label="Name"
                            value={name}
                            onChange={handleName}
                        />
                    </Grid>
                    <Grid item>
                        <ModTextField
                            label="Email"
                            value={email}
                            onChange={handleEmail}
                        />
                    </Grid>
                    <Grid item>
                        <ModTextField
                            label="Subject"
                            value={subject}
                            onChange={handleSubject}
                        />
                    </Grid>
                    <Grid item>
                        <ModTextField
                            label="Message"
                            multiline
                            rows={5}
                            value={msg}
                            onChange={handleMsg}
                        />
                    </Grid>
                    <Grid item>
                        <Button
                            variant="contained"
                            color="secondary"
                            type="submit"
                        >
                            <Typography color="primary">Send</Typography>
                        </Button>
                    </Grid>
                </Grid>
            </form>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert
                    elevation={6}
                    variant="filled"
                    onClose={handleClose}
                    severity={alertDetail ? "success" : "error"}
                >
                    {alertMsg}
                </Alert>
            </Snackbar>
        </div>
    );
};

export default MainForm;
