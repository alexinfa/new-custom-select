document.addEventListener("DOMContentLoaded", function () {

    // creazione lista dalle option della select (creation list from options)
    var customSelect = document.querySelectorAll('.js-custom-select');
    customSelect.forEach((element) => {
        let buttonCustomSelect = document.createElement("button");
        let containerOptionList = document.createElement("div");
        let listCustomSelect = document.createElement("ul");
        let customOptions = "";
        // parametri
        containerOptionList.className = "custom-select-list-container"
        listCustomSelect.className = "custom-select-options-list";
        listCustomSelect.role = "listbox";
        buttonCustomSelect.className = "custom-select-button"; // aggiungere alla classe "custom-select-button" eventuali classi di bootstrap nel caso fosse necessario. (add bootstrap  classes to "custom-select-button" if necessary)
        //buttonCustomSelect.ariaLabel = "seleziona un'opzione";

        for (listOptions = 0; listOptions < element.length; listOptions++) {
            customOptions = customOptions + "<li class='custom-select-options-list-items'>" + "<a href='#' class='custom-select-options-list--item' role='option'>" + element.options[listOptions].text + "</a>" + "</li>";
        }

        element.parentElement.parentElement.append(buttonCustomSelect);
        element.parentElement.parentElement.append(containerOptionList);
        element.parentElement.parentElement.append(listCustomSelect);
        containerOptionList.append(listCustomSelect);

        listCustomSelect.innerHTML = customOptions;
        //console.log(customOptions)


        if (element.parentElement.parentElement.classList.contains('livesearch')) {
            let inputWrapper = document.createElement("div");
            let inputLiveSearch = document.createElement("input");
            let labelInput = document.createElement("label");

            inputWrapper.className = "livesearch-container";
            inputLiveSearch.type = "text";
            inputLiveSearch.id = element.id + "-" + "livesearch-input";
            inputLiveSearch.className = "livesearch-input";
            inputLiveSearch.placeholder = "Filtra tra le opzioni";
            labelInput.innerHTML = "Filtra tra le opzioni";
            labelInput.htmlFor = element.id + "-" + "livesearch-input";
            labelInput.className = "livesearch-label";

            listCustomSelect.parentElement.prepend(inputWrapper);
            inputWrapper.append(labelInput);
            inputWrapper.append(inputLiveSearch);
        }

    });

    // mostra e nascondi dropdown (hide and show dropdown)
    var showHideListButton = document.querySelectorAll(".custom-select-button");
    showHideListButton.forEach(element => {
        element.addEventListener("click", () => {
            element.parentElement.classList.toggle("open");
        });
    });

    // creazione testo all'interno del bottone dalla label e assegnazione azioni ai link presenti nella lista (create text button from label and options and add action to link)
    var customSelectGroup = document.querySelectorAll('.custom-select-group');
    customSelectGroup.forEach(element => {
        let labelSelect = element.querySelectorAll(".custom-select-label");
        let listOptionContainer = element.querySelectorAll(".custom-select-list-container");
        let listOptionContainerUl = element.querySelector(".custom-select-options-list");
        let customButton = element.querySelector(".custom-select-button");
        let linkList = element.querySelectorAll(".custom-select-options-list--item");

        for (var i = 0; i < labelSelect.length; i++) {
            var thisLabelSelect = labelSelect[i].innerText;
            //console.log(customButton);
            customButton.textContent = thisLabelSelect;
        }

        if (!element.classList.contains('custom-multiselect')) {
            for (var i = 0; i < linkList.length; i++) {
                linkList[i].addEventListener("click", function () {
                    (element.querySelector('.active')) ? element.querySelector('.active').classList.remove('active') : '';
                    this.classList.add('active');
                    customButton.textContent = element.querySelector('.active').innerText;
                    this.parentElement.parentElement.parentElement.parentElement.classList.remove('open');
                });
            }
        } else {
            // impostazioni per multiselect
            for (var i = 0; i < linkList.length; i++) {
                let linkListActive = element.getElementsByClassName("active");

                //let multiLabel = linkList[i].innerHTML;
                linkList[i].addEventListener("click", function (e) {
                    this.classList.toggle('active');
                    if (element.querySelectorAll('.active') == null) {
                        customButton.textContent = thisLabelSelect;

                    } else {
                        //customButton.textContent += element.querySelector('.active').innerText;
                        customButton.textContent = "";
                        //console.log(linkListActive.length)
                        customButton.innerText = (linkListActive.length) + (" ") + ("elementi selezionati");
                        if (linkListActive.length == "0") {
                            customButton.textContent = thisLabelSelect;
                        }
                        if (linkListActive.length == "1") {
                            customButton.textContent = (linkListActive.length) + (" ") + ("elemento selezionato");
                        }
                    }
                });
            }
        }
    });

    // funzione per il livesearch (livesearch function)
    var inputLiveSearch = document.querySelectorAll(".livesearch-input");
    inputLiveSearch.forEach(element => {
        // console.log(li.length)

        element.addEventListener('keydown', evt => {
            let input, filter, ul, li, a, i, txtValue;
            input = element;
            filter = input.value.toUpperCase();
            ul = element.parentElement.nextElementSibling;
            li = element.parentElement.nextElementSibling.getElementsByTagName("li");

            let spanNoresult = this.createElement("span");

            for (i = 0; i < li.length; i++) {
                a = li[i].getElementsByTagName("a")[0];
                txtValue = a.textContent || a.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    li[i].style.display = "";
                } else {
                    li[i].style.display = "none";
                }
            }
        });

    });

    // chiusura dropdown cliccando fuori dall'elemento (close dropdown when click outside div)
    document.addEventListener('click', function handleClickOutsideBox(event) {
        var box = document.querySelectorAll('.custom-select-group');
        box.forEach(element => {
            if (!element.contains(event.target)) {
                element.classList.remove('open');
            }
        });
    });

    // chiusura dropdown con il tasto esci (close dropdown with escape button)
    var listCustomSelectWrapper = document.querySelectorAll('.custom-select-wrapper');
    listCustomSelectWrapper.forEach(element => {
        document.addEventListener('keydown', evt => {
            if (evt.key === 'Escape') {
                if (element.parentElement.classList.contains("open")) {
                    element.parentElement.classList.remove("open");
                }
            }
        });
    });


});




