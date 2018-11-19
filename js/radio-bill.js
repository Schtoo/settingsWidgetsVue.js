// get a reference to the sms or call radio buttons

//get a reference to the add button

//create a variable that will keep track of the total bill

//add an event listener for when the add button is pressed

let radioBillWidget = new Vue ({
    el : '.radioBill',
    data : {
        callTotal : 0.00,
        smsTotal : 0.00,
        billItemTypeRadio : ''
    },
    computed : {
        totalBill : function () {
            let total = this.callTotal + this.smsTotal;
            return total.toFixed(2);
        }
    },
    methods : {
        addCalculation : function (radioBtn) {
            radioBtn = this.billItemTypeRadio;
            if(radioBtn === 'call'){
                this.callTotal += 2.75;
            } else if (radioBtn === 'sms') {
                this.smsTotal += 1.50;
            }
        }
    }
});

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
