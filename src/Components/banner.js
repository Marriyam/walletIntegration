import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import * as React from "react";
import image from "./../../src/image.jpg";

export default function gif() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card>
        <Card
          sx={{
            maxWidth: 800,
            align: "center",
            border: 1,
            borderColor: "secondary.main",
            borderRadius: "16px",
          }}
        >
          <CardMedia
            sx={{ height: 190, width: 800 }}
            image={image}
            component="img"
            title="UNANI"
          />
        </Card>{" "}
      </Card>
    </div>
  );
}
