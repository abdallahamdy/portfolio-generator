const profileDataArgs = process.argv.slice(2, process.argv.length);

// same as var printProfileData = function(profileDataArr) {...}
const printProfileData = profileDataArr => {
    // This...
    // for (let i = 0; i < profileDataArr.length; i += 1) {
    //   console.log(profileDataArr[i]);
    // }
    // Is the same as this...
    // profileDataArr.forEach((profileItem) => {
    //   console.log(profileItem)
    // });

    profileDataArr.forEach(profileItem => console.log(profileItem));
    
  };
  
printProfileData(profileDataArgs);