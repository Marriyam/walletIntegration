import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import * as React from "react";
import {SocialIcon} from "react-social-icons";

export default function Social() {
  return (
    <div style={{ backfaceVisibility:"hidden", display: "flex", justifyContent: "center" }}>
      <Card >
        <Card
          sx={{
            align: "center",
            backgroundColor: "#4a0f66"
          }}
        >
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <SocialIcon url="https://twitter.com/jaketrent" />
            </IconButton>
            <IconButton aria-label="share">
              <SocialIcon url="https://www.facebook.com/jaketrent" />
            </IconButton>
            <IconButton aria-label="share">
              <SocialIcon url="https://www.instagram.com/jaketrent/" />
            </IconButton>
            <IconButton aria-label="share">
              <SocialIcon url="https://www.linkedin.com/in/jaketrent/" />
            </IconButton>
          </CardActions>
        </Card>{" "}
      </Card>
    </div>
  );
}
