
var Sdk = window.Sdk || {};
(function () {

    // Function to handle the save event and display an alert with the first name

    this.FormType = function (executionContext) {
        Helper.DoTutorial();
         //Function included from Global Helper//
        var formContext = executionContext.getFormContext();
        var TypeValue = formContext.ui.getFormType();

        if (TypeValue == 0) {
            formContext.ui.setFormNotification("User is Creating Account", "INFO", "1");
        }

        else if (TypeValue == 1) {
            formContext.ui.setFormNotification("User is Opening Existing Account", "INFO", "2");
        }

        else if (TypeValue == 2) {
            formContext.ui.setFormNotification("User is Reading Existing Account", "ERROR", "3");
        }

    }
    this.formOnSave = function (executionContext) {
        var formContext = executionContext.getFormContext();
        var firstName = formContext.getAttribute("firstname").getValue();
        alert("Hello World " + firstName);
    };

    // Function to validate the phone number field and show notifications
    this.MainPhoneonChange = function (executionContext) {
        var formContext = executionContext.getFormContext();
        var phoneNumber = formContext.getAttribute("telephone1").getValue();

        // Regular expression for US phone number format
        var expression = /^\(?([0-9]{3})\)?[-.●]?([0-9]{3})[-.●]?([0-9]{4})$/;

        if (phoneNumber && !expression.test(phoneNumber)) {
            // Set field notification
            formContext.getControl("telephone1").setNotification("Enter phone number in US format.", "telephonemessage");

            // Set form notification
            formContext.ui.setFormNotification("Please correct the phone number format.", "ERROR", "infomessage");
        } else {
            // Clear notifications if the phone number is correct
            formContext.getControl("telephone1").clearNotification("telephonemessage");
            formContext.ui.clearFormNotification("infomessage");
        }
    };

    // Function to disable the Freight Terms field when the shipping method is FedEx
    this.OptionSetOnChange = function (executionContext) {
        var formContext = executionContext.getFormContext();
        var optionSetValue = formContext.getAttribute("address1_shippingmethodcode").getText();

        if (optionSetValue === "FedEx") {
            formContext.getControl("address1_freighttermscode").setDisabled(true);
            console.log("Freight Terms field has been disabled because FedEx was selected.");
        } else {
            formContext.getControl("address1_freighttermscode").setDisabled(false);
            console.log("Freight Terms field has been enabled.");
        }
    };

}).call(Sdk);

