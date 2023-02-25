import Card from "@mui/material/Card";
import Typography from '@mui/material/Typography';
import * as React from "react";


export default function Mint() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card>
        <Card
          sx={{
            backgroundColor: "#4a0f66",
            align: "center",
            border: 1,
            borderColor: "secondary.main",
            borderRadius: "1",
          }}
        >
          <Typography gutterBottom variant="h6" component="div" sx={{color: "#fff", width:200}}>
            Mint
          </Typography>
        </Card>{" "}
      </Card>
    </div>
  );
}
