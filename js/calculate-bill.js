//get a reference to the calculate button

//get a reference to the billTotal element

//get a reference to the billString

//create the function that will be called when the calculate button is pressed

let calculateBill = new Vue({
    el: '.calculateBill',
    data : {
      // remove this
    //   billTotal : 0.00,      
      billString: ''
    },
    computed : {
      // add this
      billTotal : function () {
        let billParts = this.billString.split(', ');
        let totalBill = 0;
        // calculate the totalBill
        for (let i = 0; i < billParts.length; i++) {
            let bills = billParts[i];
                if(bills === 'call'){
                    totalBill += 2.75;
                } else if (bills === 'sms'){
                    totalBill += 1.50;
                }
            }
        // return the total bill on the screen by setting the total value to billTotal
        return totalBill.toFixed(2);
      }
    },
    
    methods : {
      // remove this
      // calculate : function() {
        // calculate logic moves into - billTotal
      // }
    }
  });
  
//  * this function should read the string value entered - split it on a comma.
//  * loop over all the entries in the the resulting list
//  * check if it is a call or an sms and add the right amount to the overall total
//  * once done looping over all the entries - display the total onto the screen in the billTotal element

//link the function to a click event on the calculate button
