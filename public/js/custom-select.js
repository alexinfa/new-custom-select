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
        let containerCustomSelect = document.createElement("ul");
        let containerCustomSelectList = document.createElement("li");
        let customOptions = "";
        buttonCustomSelect.className = "btn custom-select-button";
        buttonCustomSelect.ariaLabel = "seleziona un'opzione";
        containerCustomSelect.className = "custom-select-list-options";

        for (listOptions = 0; listOptions < element.length; listOptions++) {
            customOptions = customOptions + "\n" + element.options[listOptions].value;
        }
        

        element.parentElement.parentElement.append(buttonCustomSelect);
        element.parentElement.parentElement.append(containerCustomSelect);

        containerCustomSelect.append(customOptions);

    });

});