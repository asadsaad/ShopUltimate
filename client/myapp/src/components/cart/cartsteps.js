// import React, { useState } from "react";
// import {
//   Stepper,
//   Step,
//   StepLabel,
//   Button,
//   Typography,
//   Container,
//   Box,
//   CircularProgress,
// } from "@mui/material";
// import BasicTable from "./cartItemlisting";
// import Shipping from "../user/shipping";
// import Initorder from "../order/initorder";
// import Nav from "../layouts/nav";

// const steps = ["Cart", "Review and Checkout", "Payment"];

// export default function CheckoutPage() {
//   const [activeStep, setActiveStep] = useState(0);
//   const isLastStep = activeStep === steps.length - 1;

//   function _handleBack() {
//     setActiveStep(activeStep - 1);
//   }
//   const handleNext = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };
//   function _renderStepContent(step) {
//     switch (step) {
//       case 0:
//         return <BasicTable next={handleNext} />;
//       case 1:
//         return <Shipping next={handleNext} />;
//       case 2:
//         return <Initorder next={handleNext} />;
//       default:
//         return;
//     }
//   }
//   return (
//     <React.Fragment>
//       <Nav />
//       <Container sx={{ mt: 3 }}>
//         <Stepper activeStep={activeStep}>
//           {steps.map((label) => (
//             <Step key={label}>
//               <StepLabel>{label}</StepLabel>
//             </Step>
//           ))}
//         </Stepper>
//         {_renderStepContent(activeStep)}
//         {/* {activeStep === steps.length ? (
//           <React.Fragment>
//             <Typography sx={{ mt: 2, mb: 1 }}>
//               All steps completed - you&apos;re finished
//             </Typography>
//           </React.Fragment>
//         ) : (
//           <React.Fragment>
//             <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
//               <Button
//                 color="inherit"
//                 disabled={activeStep === 0}
//                 onClick={handleBack}
//                 sx={{ mr: 1 }}
//               >
//                 Back
//               </Button>
//               <Box sx={{ flex: "1 1 auto" }} />

//               <Button onClick={handleNext}>
//                 {activeStep === steps.length - 1 ? "Finish" : "Next"}
//               </Button>
//             </Box>
//           </React.Fragment>
//         )} */}
//       </Container>
//     </React.Fragment>
//   );
// }
