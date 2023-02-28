document.addEventListener("DOMContentLoaded", function () {

    // create list from options
    var customSelect = document.querySelectorAll('.js-custom-select');
    customSelect.forEach((element) => {
        let buttonCustomSelect = document.createElement("button");
        let listCustomSelect = document.createElement("ul");
        let customOptions = "";
        // parameter
        listCustomSelect.className = "custom-select-options-list";
        listCustomSelect.role = "listbox";
        buttonCustomSelect.className = "custom-select-button"; // aggiungere alla classe "custom-select-button"" eventuali classi di bootstrap nel caso fosse necessario.
        //buttonCustomSelect.ariaLabel = "seleziona un'opzione";

        for (listOptions = 0; listOptions < element.length; listOptions++) {
            customOptions = customOptions + "<li>" + "<a href='#' class='custom-select-options-list--item' role='option'>" + element.options[listOptions].text + "</a>" + "</li>";
        }

        element.parentElement.parentElement.append(buttonCustomSelect);
        element.parentElement.parentElement.append(listCustomSelect);

        listCustomSelect.innerHTML = customOptions;
        //console.log(customOptions)
    });

    // hide and show div with options
    var showHideListButton = document.querySelectorAll(".custom-select-button");
    showHideListButton.forEach(element => {
        element.addEventListener("click", () => {
            element.parentElement.classList.toggle("open");

            if (element.parentElement.classList.contains("open")) {
                console.log('aperto');
            }
        });
    });

    // create text button from label and options and add action to link
    var customSelectGroup = document.querySelectorAll('.custom-select-group');
    customSelectGroup.forEach(element => {
        let labelSelect = element.querySelectorAll(".custom-select-label");
        let customButton = element.querySelector(".custom-select-button");
        let linkList = element.querySelectorAll(".custom-select-options-list--item");

        for (var i = 0; i < labelSelect.length; i++) {
            var thisLabelSelect = labelSelect[i].innerText;
            //console.log(thisLsbelSelect);
            //console.log(customButton);
            customButton.textContent = thisLabelSelect;
        }

        for (var i = 0; i < linkList.length; i++) {
            linkList[i].addEventListener("click", function () {
                (element.querySelector('.active')) ? element.querySelector('.active').classList.remove('active') : '';
                this.classList.add('active');
                this.parentElement.parentElement.parentElement.classList.remove('open');
                customButton.textContent = element.querySelector('.active').innerText;
            });
        }
    });

});