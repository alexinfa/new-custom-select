## Custom Select in Javascript puro
Select custom personalizzabile.
Aggiungere al proprio progetto il file css custom-select.css e il file js custom-select.js.

La struttura è quella della classica select HTML alla quale è possibile assegnare o meno le classi di bootstrap "form group" e "form-control" o eventuali classi al button (come scritto nel file javascript).
L'accessibilità è garantita dalla struttura iniziale pulita presente nel file html.

Per la custom select bisogna includere select e label all'interno di due div contenitori "custom-select-wrapper" e "custom-select-group". Al custom-select-group eventualmente è possibile assegnare il "form-group" di bootstrap.
Alla Label bisogna dare la classe "custom-select-label" mentre alla select (alla quale eventualmente è possibile assegnare la classe "form-control") bisogna aggiungere "js-custom-select" come nell'esempio sottostante:

    <div class="custom-select-group">
        <div class="custom-select-wrapper">
        <label for="customSelect-1" class="custom-select-label">Testo label</label>
            <select class="js-custom-select" id="customSelect-1">
                <option>Opzione 1</option>
                <option>Opzione 2</option>
                <option>Opzione 3</option>
                <option>Opzione 4</option>
                <option>Opzione 5</option>
            </select>
        </div>
    </div>

Per il multiselect aggiungere multiple al select e la classe "custom-multiselect" a "custom-select-group" come nell'esempio sottostante:

    <div class="custom-select-group custom-multiselect">
        <div class="custom-select-wrapper">
        <label for="customSelect-1" class="custom-select-label">Testo label</label>
            <select class="js-custom-select" id="customSelect-1" multiple>
                <option>Opzione 1</option>
                <option>Opzione 2</option>
                <option>Opzione 3</option>
                <option>Opzione 4</option>
                <option>Opzione 5</option>
            </select>
        </div>
    </div>

Per aggiungere la funzione di filtro live search aggiungere la classe "livesearch"  a "custom-select-group" (funzione valida sia per la select semplice che per la multiselect).

    <div class="custom-select-group custom-multiselect livesearch">
        <div class="custom-select-wrapper">
        <label for="customSelect-1" class="custom-select-label">Testo label</label>
            <select class="js-custom-select" id="customSelect-1" multiple>
                <option>Opzione 1</option>
                <option>Opzione 2</option>
                <option>Opzione 3</option>
                <option>Opzione 4</option>
                <option>Opzione 5</option>
            </select>
        </div>
    </div>




