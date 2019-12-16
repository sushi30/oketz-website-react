import Container from "@material-ui/core/Container";
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
  container: { width: "100%", paddingLeft: 0, paddingRight: 0 },
  video: { width: "100%" }
});

const Video = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="xl" className={classes.container}>
      <video
        src={"vid/gadna-oketz-video.mp4"}
        autoPlay
        muted
        controls
        className={classes.video}
      />
    </Container>
  );
};

export default Video;