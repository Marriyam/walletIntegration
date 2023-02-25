import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import * as React from "react";
import image from "./../../src/image.jpg";

export default function Document() {
  const data = [{ Doc: 1 }, { Doc: 2 }, { Doc: 3 }, { Doc: 4 }];
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card>
        <Card
          sx={{
            align: "center",
            border: 1,
            borderColor: "secondary.main",
            borderRadius: "1",
          }}
        >
          <Grid
            container
            spacing={2}
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
          >
            {data.map((elem) => (
              <Grid item xs={12} sm={6} md={3} key={data.indexOf(elem)}>
                <Card>
                <CardMedia
                    sx={{ height: 140, width: 180 }}
                    component="img"
                    image={image}
                    component="img"
                    title="UNANI"
                  />
                  <CardHeader
                    sx={{
                      spacing: 2,
                      direction: "row",
                      justify: "flex-start",
                      alignItems: "flex-start",
                    }}
                    subheader={`Doc : ${elem.Doc}`}
                  />
                  
                </Card>
              </Grid>
            ))}
          </Grid>
        </Card>{" "}
      </Card>
    </div>
  );
}
