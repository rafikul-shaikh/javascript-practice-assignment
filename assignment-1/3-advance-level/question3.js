// Q.3) Write a program that simulates a multi-step user registration: 
// validateEmail → sendOTP → verifyOTP → createAccount using callbacks.

function validateEmail(email, callback) {
  console.log("Validating email:", email);

  if (email.includes("@")) {
    console.log("Email validation successful!");
    callback(null, email); // no error
  } else {
    callback("Invalid Email!", null); // error
  }
}

function sendOTP(email, callback) {
  console.log("Sending OTP to:", email);

  const otp = Math.floor(1000 + Math.random() * 9000);
  console.log("OTP Sent:", otp);

  callback(null, otp);
}

function verifyOTP(sentOTP, callback) {
  console.log("Verifying OTP...");

  const userInput = sentOTP; // simulation (correct OTP)
  console.log("User entered OTP:", userInput);

  if (userInput === sentOTP) {
    console.log("OTP Verified!");
    callback(null, true);
  } else {
    callback("OTP Verification Failed!", null);
  }
}

function createAccount(callback) {
  console.log("Creating user account...");
  callback("Account created successfully!");
}

// Usage (Callback Hell Simulation)
validateEmail("user@example.com", (err, email) => {
  if (err) return console.log(err);

  sendOTP(email, (err, otp) => {
    if (err) return console.log(err);

    verifyOTP(otp, (err, success) => {
      if (err) return console.log(err);

      createAccount((msg) => {
        console.log(msg);
      });
    });
  });
});
