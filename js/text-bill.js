// get a reference to the textbox where the bill type is to be entered

//get a reference to the add button

//create a variable that will keep track of the total bill

//add an event listener for when the add button is pressed

let textInput = new Vue ({
    el: '.textInputBill',
    data: {
        callTotal : 0,
        smsTotal : 0,
        billType : ''
    },
    computed : {
        grandTotal: function(){
            let grandTotal= this.callTotal + this.smsTotal;
            return grandTotal.toFixed(2);
        }
    },
    methods : {
            add : function (textBill){
                 textBill = this.billType;
                if(textBill === 'call') {
                    this.callTotal += 2.75;
                } else if (textBill === 'sms') {
                    this.smsTotal += 1.50;
                }
            } 
    }
});

//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
