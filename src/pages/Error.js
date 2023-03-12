import * as React from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";

const Error = () => {
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        Ups, parece que esa ruta es incorrecta... — <strong>404</strong>
      </Alert>
    </Stack>
  );
}; 

export default Error;
