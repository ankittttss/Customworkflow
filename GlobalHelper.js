// JavaScript source code


var Helper = window.Helper || {};
(function () {

    this.DoTutorial = function (executionContext) {
        alert("Hi");
        //This is my Global and Required Function//
    }

 
    this.formOnSave = function (executionContext) {
        var formContext = executionContext.getFormContext();
        var firstName = formContext.getAttribute("firstname").getValue();
        alert("Hello World " + firstName);
    };

    // Function to validate the phone number field and show notifications
  

 

}).call(Helper);

