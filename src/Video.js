import Container from "@material-ui/core/Container";
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
  container: { width: "100%", paddingLeft: 0, paddingRight: 0 },
  video: { width: "100%" },
  empty: { height: 150 }
});

const Video = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="xl" className={classes.container}>
      <div className={classes.empty} />
      <video
        src="vid/gadna-oketz-video.mp4"
        className={classes.video}
        controls
        autoPlay
        muted
      >
        <source type="video/mp4" />
        הדפדפן שלך אינו תומך בהצגת תוכן וידאו.
      </video>
    </Container>
  );
};

export default Video;
