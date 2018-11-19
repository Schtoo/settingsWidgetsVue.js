// get a reference to the sms or call radio buttons

// get refences to all the settings fields

//get a reference to the add button

//get a reference to the 'Update settings' button

// create a variables that will keep track of all the settings

// create a variables that will keep track of all three totals.

//add an event listener for when the 'Update settings' button is pressed

let settingsBill = new Vue ({
    el : '.billWithSetting',
    data : {
        callCost : 0.00,
        smsCost : 0.00,
        warningLvl : 0.00,
        criticalLvl : 0.00,
        callTotal : 0.00,
        smsTotal : 0.00,
        billSettings : ''
    },
    computed : {
        totalSettings : function () {
            let settingsTotal = this.callTotal + this.smsTotal;
            return settingsTotal.toFixed(2);
        }
    },
    methods : {
        settingsBill : function (costs) {
            costs = this.billSettings;
            if(costs === 'call') {
                callTotal += callCost;
            } else if (costs === 'sms') {
                smsTotal += smsCost;
            }
        }
    }
})

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
