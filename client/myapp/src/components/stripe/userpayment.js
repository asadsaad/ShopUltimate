import { Box,Button, Card } from "@mui/material";
import { CardElement,Elements,useStripe,useElements } from "@stripe/react-stripe-js";
import React from "react";


export default function UserPayment({createorder,setpaymentid}) {
 const stripe = useStripe()
 const elements = useElements()
  const handleorder = async(e)=>{
e.preventDefault()
try {
const paymentMethod = await stripe.createPaymentMethod({type:"card",card:elements.getElement(CardElement)})
console.log(paymentMethod.paymentMethod.id)
setpaymentid(paymentMethod.paymentMethod.id)
createorder()
  
} catch (error) {
  console.log(error)
}
  }
  return (
    // <Elements stripe={stripep}>
      <form onSubmit={handleorder}>
        <Box sx={{
border:"1px solid #009f7f",padding:"10px 5px",borderRadius:"5px"
      }}>
        <CardElement/>
        </Box>
         <Box>
                <Button
                type="submit"
                  // onClick={createorder}
                  variant="contained"
                  fullWidth
                  sx={{ mt: 1,background:"#009f7f","&:hover":{background:"#009f7f"} }}
                >
                  Place Order
                </Button>
              </Box>
      </form>
    // </Elements>
  );
}
