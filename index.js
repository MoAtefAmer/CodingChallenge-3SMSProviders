// This is a common interview coding challenge
// The question is : given 3 otp service providers with 60% success rate, write a simple algorithm where I can utitlize all three providers


const providerA = {
  sendOtp: (phoneNumber, otp) => {
    // Simulate sending OTP with provider A
   
    return new Promise((resolve) => {
      // Simulate a 60% success rate

      setTimeout(() => resolve(Math.random()< 0.6), 1000);
    });
  },
};

const providerB = {
  sendOtp: (phoneNumber, otp) => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(Math.random() < 0.6), 1000);
    });
  },
};
const providerC = {
  sendOtp: (phoneNumber, otp) => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(Math.random() < 0.6), 1000);
    });
  },
};

const providers = [providerA, providerB, providerC];


async function sendOtpWithCallback(phone,otp) {

    for(let i=0;i<providers.length;i++){

        const success = await providers[i].sendOtp(phone,otp);
        console.log("success",success)

        if(success){
           console.log(`OTP sent successfully using provider ${i + 1}`);
           return true
        }else{
            console.log(`Provider ${i + 1} failed to send OTP`);
        }

      
      
    }
    console.log('All providers failed to send OTP');
    return false;


}



const phoneNumber = '1234567890';
const otp = '123456';

sendOtpWithCallback(phoneNumber, otp).then(success => {
  if (success) {
    console.log('OTP sent successfully');
  } else {
    console.log('Failed to send OTP');
  }
});