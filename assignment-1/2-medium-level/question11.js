// Q.11) Write a function that uses multiple nested setTimeout calls 
//      to print numbers 1–10 with a 1-second delay between each print.

function printNumbers() {
  setTimeout(() => {
    console.log(1);

    setTimeout(() => {
      console.log(2);

      setTimeout(() => {
        console.log(3);

        setTimeout(() => {
          console.log(4);

          setTimeout(() => {
            console.log(5);

            setTimeout(() => {
              console.log(6);

              setTimeout(() => {
                console.log(7);

                setTimeout(() => {
                  console.log(8);

                  setTimeout(() => {
                    console.log(9);

                    setTimeout(() => {
                      console.log(10);
                    }, 1000);

                  }, 1000);

                }, 1000);

              }, 1000);

            }, 1000);

          }, 1000);

        }, 1000);

      }, 1000);

    }, 1000);

  }, 1000);
}

printNumbers();
