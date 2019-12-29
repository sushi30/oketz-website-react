import React, { useState } from "react";
import Title from "./sections/Title";
import DescriptionSection from "./sections/Description";
import Dates from "./sections/Dates";
import QuestionsAndAnswers from "./sections/QuestionsAndAnswers";
import Form from "./sections/Form";
import BackgroundCarousel from "./CarouselBackground";
import Portfolio from "./sections/Portfolio/Portfolio";
import Video from "./Video";
import Scroller, { Element } from "react-scroll";
import * as API from "./API";
import IntroDialog from "./dialogs/IntroDialog";
import SubmitSuccessDialog from "./dialogs/SubmitSuccessDialog";
import ErrorDialog from "./dialogs/ErrorDialog";
import ThankYou from "./sections/ThankYou";
import ComingSoon from "./sections/Form/ComingSoon";

const callToAction = () =>
  Scroller.scroller.scrollTo("form", {
    duration: 1000,
    delay: 50,
    smooth: true
  });

const Body = () => {
  const [introDialogOpen, setIntroDialogOpen] = useState(false);
  const [successDialogOpen, setSuccessDialogOpen] = useState(false);
  const [errorDialogOpen, setErrorDialogOpen] = useState(false);
  const [hideForm, setHideForm] = useState(false);

  const handleSubmitSuccess = () => {
    setSuccessDialogOpen(true);
    setHideForm(true);
  };
  const handleSubmitError = () => setErrorDialogOpen(true);

  return (
    <div style={{ textAlign: "center" }}>
      <SubmitSuccessDialog
        open={successDialogOpen}
        handleClose={() => setSuccessDialogOpen(false)}
      />
      <ErrorDialog
        open={errorDialogOpen}
        handleClose={() => setErrorDialogOpen(false)}
      />
      <BackgroundCarousel />
      <Video />
      <Title action={callToAction} />
      <DescriptionSection even={true} action={callToAction} />
      <Dates even={false} />
      <QuestionsAndAnswers even={true} />
      <Portfolio even={true} />
      <Element name="form">
        <ComingSoon even={true} />
      </Element>
    </div>
  );
};

export default Body;
