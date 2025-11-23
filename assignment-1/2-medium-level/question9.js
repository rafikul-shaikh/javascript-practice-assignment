// Q.9) Write a program that simulates sending an OTP 
// and then verifying it using callbacks.

function sendOTP(callback) {
  const otp = Math.floor(1000 + Math.random() * 9000); // Generate 4-digit OTP
  console.log("OTP Sent:", otp);
  callback(otp); // pass OTP to next callback
}

function verifyOTP(sentOTP, callback) {
  const userInput = sentOTP; // simulation: user enters correct OTP
  console.log("User Entered OTP:", userInput);

  if (userInput === sentOTP) {
    callback("OTP Verified Successfully!");
  } else {
    callback("OTP Verification Failed!");
  }
}

// Usage:
sendOTP((otp) => {
  verifyOTP(otp, (result) => {
    console.log(result);
  });
});
