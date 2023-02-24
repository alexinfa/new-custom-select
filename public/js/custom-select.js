document.addEventListener("DOMContentLoaded", function () {

    /*
    var customSelect = document.querySelector('.js-custom-select');
    var customOptions = "";
    var listOptions;
    for (listOptions = 0; listOptions < customSelect.length; listOptions++) {
        customOptions = customOptions + "\n" + customSelect.options[listOptions].value;
    }

    console.log(customOptions);
    */

    var customSelect = document.querySelectorAll('.js-custom-select');

    customSelect.forEach((element) => {
        let buttonCustomSelect = document.createElement("button");
        let containerCustomSelect = document.createElement("div");
        let thisCustomSelect = document.querySelector('.js-custom-select');
        let customOptions = "";

        for (listOptions = 0; listOptions < thisCustomSelect.length; listOptions++) {
            customOptions = customOptions + "\n" + thisCustomSelect.options[listOptions].value;
        }

        element.parentElement.parentElement.append(buttonCustomSelect);
        element.parentElement.parentElement.append(containerCustomSelect);

        containerCustomSelect.append(customOptions);

    });

});