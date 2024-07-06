import * as React from "react";
import {
    Box, Button, Checkbox, Container,
    CssBaseline,
    FormControl,
    FormControlLabel,
    FormLabel, Grid,
    InputLabel, Link,
    TextField,
    Typography
} from "@mui/material";
import {useDispatch} from "react-redux";
import {AppDispatch} from "./storage/store/store";
import {postUser} from "./storage/storage";
import {IUser} from "./interface/interface";


const Authorization : React.FC = () => {

    const dispatch = useDispatch<AppDispatch>();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const user : IUser = {
            username: data.get('username'),
            password: data.get('password'),
        }
        console.log(user)
        dispatch(postUser(user))
    };
    return (
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="username"
                            label="Username"
                            name="username"
                            autoComplete="username"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                            // onClick={() => console.log(1)}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>
                    </Box>
                </Box>
            </Container>
    )
}

export default Authorization;