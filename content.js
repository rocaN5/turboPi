console.log("Работает код")
// Массивы с идентификаторами
const groupA = [
    "LOT-PRESORT0_10001687230", "LOT-PRESORT0_10001774098", "LOT-PRESORT0_10001773532",
    "LOT-PRESORT0_10001687155", "LOT-PRESORT0_10001789628", "LOT-PRESORT0_10028639986",
    "LOT-PRESORT0_10001687109", "LOT-PRESORT0_10027183323", "LOT-PRESORT0_10026596340",
    "LOT-PRESORT0_10024809874", "LOT-PRESORT0_10025088072", "LOT-PRESORT0_10028564820",
    "LOT-PRESORT0_10001771708", "LOT-PRESORT0_10001771709", "LOT-PRESORT0_10001775401",
    "LOT-PRESORT0_10019971935", "LOT-PRESORT0_10001777872", "LOT-PRESORT0_10001779432",
    "LOT-PRESORT0_10001781121", "LOT-PRESORT0_10001781684", "LOT-PRESORT0_10001781702",
    "LOT-PRESORT0_10001789593", "LOT-PRESORT0_10001789626", "LOT-PRESORT0_10023658183",
    "LOT-PRESORT0_10007716466", "LOT-PRESORT0_10008588292", "LOT-PRESORT0_10008743088",
    "LOT-PRESORT0_10008918643", "LOT-PRESORT0_10009118649", "LOT-PRESORT0_10027169431",
    "LOT-PRESORT0_10009531618", "LOT-PRESORT0_10010275145", "LOT-PRESORT0_10010837939",
    "LOT-PRESORT0_10010837944", "LOT-PRESORT0_10022071520", "LOT-PRESORT0_10011536615",
    "LOT-PRESORT0_10012206738", "LOT-PRESORT0_10024453470", "LOT-PRESORT0_10020112514",
    "LOT-PRESORT0_10015196680", "LOT-PRESORT0_10029104324", "LOT-PRESORT0_10020227389",
    "LOT-PRESORT0_10015288146", "LOT-PRESORT0_10026834849", "LOT-PRESORT0_10016875594",
    "LOT-PRESORT0_10017863009", "LOT-PRESORT0_10025119141", "LOT-PRESORT0_10020925538",
    "LOT-PRESORT0_10019317740", "LOT-PRESORT0_10011266046", "LOT-PRESORT0_10017668444",
    "LOT-PRESORT0_10021746518", "LOT-PRESORT0_10018687212", "LOT-PRESORT0_10013177800",
    "LOT-PRESORT0_10017581334", "LOT-PRESORT0_10018687186", "LOT-PRESORT0_10015608914",
    "LOT-PRESORT0_10014397117", "LOT-PRESORT0_10015608926", "LOT-PRESORT0_10016294975",
    "LOT-PRESORT0_10011266035", "LOT-PRESORT0_10013176628", "LOT-PRESORT0_10022708547",
    "LOT-PRESORT0_10013726089", "LOT-PRESORT0_10013773236", "LOT-PRESORT0_10018832178",
    "LOT-PRESORT0_10026817425", "LOT-PRESORT0_10019593216", "LOT-PRESORT0_10019971937",
    "LOT-PRESORT0_10028536193", "LOT-PRESORT0_10029180091", "LOT-PRESORT0_10019088501"
];

const groupB = [
    "LOT-PRESORT0_10017668474", "LOT-PRESORT0_10012752621", "LOT-PRESORT0_10010837943",
    "LOT-PRESORT0_10014213172", "LOT-PRESORT0_10021746508", "LOT-PRESORT0_10017215509",
    "LOT-PRESORT0_10028310892", "LOT-PRESORT0_10017924934", "LOT-PRESORT0_10021020222",
    "LOT-PRESORT0_10022843623", "LOT-PRESORT0_10013177046", "LOT-PRESORT0_10019753260",
    "LOT-PRESORT0_10017781534", "LOT-PRESORT0_10015168091", "LOT-PRESORT0_10020148889",
    "LOT-PRESORT0_10015209859", "LOT-PRESORT0_10019284999", "LOT-PRESORT0_10021476201",
    "LOT-PRESORT0_10019216758", "LOT-PRESORT0_10014901577", "LOT-PRESORT0_10017781535",
    "LOT-PRESORT0_10017902730", "LOT-PRESORT0_10014314341", "LOT-PRESORT0_10025088075",
    "LOT-PRESORT0_10020781191", "LOT-PRESORT0_10005613183", "LOT-PRESORT0_10026542877",
    "LOT-PRESORT0_10025088077", "LOT-PRESORT0_10019909717", "LOT-PRESORT0_10021396698",
    "LOT-PRESORT0_10016301199", "LOT-PRESORT0_10019909311", "LOT-PRESORT0_10020046241",
    "LOT-PRESORT0_10019424504", "LOT-PRESORT0_10020113561", "LOT-PRESORT0_10021000211",
    "LOT-PRESORT0_10021495904", "LOT-PRESORT0_10020252622", "LOT-PRESORT0_10021014572",
    "LOT-PRESORT0_10019992901", "LOT-PRESORT0_10019659528", "LOT-PRESORT0_10019659525",
    "LOT-PRESORT0_10018235130", "LOT-PRESORT0_10019984897", "LOT-PRESORT0_10019284987",
    "LOT-PRESORT0_10017780723", "LOT-PRESORT0_10020714959", "LOT-PRESORT0_10025396239",
    "LOT-PRESORT0_10020010334", "LOT-PRESORT0_10019400674", "LOT-PRESORT0_10019779709",
    "LOT-PRESORT0_10028814498", "LOT-PRESORT0_10020216409", "LOT-PRESORT0_10023004761",
    "LOT-PRESORT0_10015998153", "LOT-PRESORT0_10020113567", "LOT-PRESORT0_10016975226",
    "LOT-PRESORT0_10020139837", "LOT-PRESORT0_10001698136", "LOT-PRESORT0_10026630300",
    "LOT-PRESORT0_10009501259", "LOT-PRESORT0_10020925836", "LOT-PRESORT0_10028605382",
    "LOT-PRESORT0_10028658212", "LOT-PRESORT0_10029180089", "LOT-PRESORT0_10029090149",
    "LOT-PRESORT0_10029165704", "LOT-PRESORT0_10029180090", "LOT-PRESORT0_10028915707",
    "LOT-PRESORT0_10028976448", "LOT-PRESORT0_10014101470", "LOT-PRESORT0_10020061789"
];

const groupC = [
    "LOT-PRESORT0_10015209856", "LOT-PRESORT0_10001789635", "LOT-PRESORT0_10001778289",
    "LOT-PRESORT0_10009457395", "LOT-PRESORT0_10006786298", "LOT-PRESORT0_10015246139",
    "LOT-PRESORT0_10015059432", "LOT-PRESORT0_10001698623", "LOT-PRESORT0_10014767898",
    "LOT-PRESORT0_10018726753", "LOT-PRESORT0_10010469199", "LOT-PRESORT0_10001695247",
    "LOT-PRESORT0_10011742355", "LOT-PRESORT0_10011890646", "LOT-PRESORT0_10012058065",
    "LOT-PRESORT0_10012902366", "LOT-PRESORT0_10013066617", "LOT-PRESORT0_10013176341",
    "LOT-PRESORT0_10013596730", "LOT-PRESORT0_10014160166", "LOT-PRESORT0_10014172575",
    "LOT-PRESORT0_10014197155", "LOT-PRESORT0_10014346387", "LOT-PRESORT0_10014397141",
    "LOT-PRESORT0_10020846840", "LOT-PRESORT0_10019971945", "LOT-PRESORT0_10015008256",
    "LOT-PRESORT0_10028463471", "LOT-PRESORT0_10019009494", "LOT-PRESORT0_10015555496",
    "LOT-PRESORT0_10015946503", "LOT-PRESORT0_10015946523", "LOT-PRESORT0_10016575792",
    "LOT-PRESORT0_10016822523", "LOT-PRESORT0_10028463670", "LOT-PRESORT0_10017668456",
    "LOT-PRESORT0_10020776105", "LOT-PRESORT0_10019189483", "LOT-PRESORT0_10019222339",
    "LOT-PRESORT0_10014445633", "LOT-PRESORT0_10020148870", "LOT-PRESORT0_10011890660",
    "LOT-PRESORT0_10014445596", "LOT-PRESORT0_10016575703", "LOT-PRESORT0_10013171444",
    "LOT-PRESORT0_10015946515", "LOT-PRESORT0_10022865910", "LOT-PRESORT0_10015059454",
    "LOT-PRESORT0_10028814886", "LOT-PRESORT0_10020112355", "LOT-PRESORT0_10001687229",
    "LOT-PRESORT0_10013773199", "LOT-PRESORT0_10001693635", "LOT-PRESORT0_10021020225",
    "LOT-PRESORT0_10014902210", "LOT-PRESORT0_10019997431", "LOT-PRESORT0_10016972160",
    "LOT-PRESORT0_10014213171", "LOT-PRESORT0_10015204767", "LOT-PRESORT0_10015405431",
    "LOT-PRESORT0_10011890659", "LOT-PRESORT0_10019348753", "LOT-PRESORT0_10022815248",
    "LOT-PRESORT0_10015428915", "LOT-PRESORT0_10015946507", "LOT-PRESORT0_10014209132",
    "LOT-PRESORT0_10029340673", "LOT-PRESORT0_10028650213", "LOT-PRESORT0_10001743469",
    "LOT-PRESORT0_10029331689", "LOT-PRESORT0_10029276370"
];

const groupD = [
    "LOT-PRESORT0_10026625448", "LOT-PRESORT0_10011117766", "LOT-PRESORT0_10024926016",
    "LOT-PRESORT0_10012752706", "LOT-PRESORT0_10019760523", "LOT-PRESORT0_10019903093",
    "LOT-PRESORT0_10015941488", "LOT-PRESORT0_10021373090", "LOT-PRESORT0_10016888305",
    "LOT-PRESORT0_10014628866", "LOT-PRESORT0_10021106509", "LOT-PRESORT0_10023077840",
    "LOT-PRESORT0_10019579724", "LOT-PRESORT0_10021020233", "LOT-PRESORT0_10019921468",
    "LOT-PRESORT0_10017781545", "LOT-PRESORT0_10017236506", "LOT-PRESORT0_10018863874",
    "LOT-PRESORT0_10001699550", "LOT-PRESORT0_10015376419", "LOT-PRESORT0_10019971985",
    "LOT-PRESORT0_10018995398", "LOT-PRESORT0_10017706478", "LOT-PRESORT0_10011046394",
    "LOT-PRESORT0_10017448649", "LOT-PRESORT0_10019406530", "LOT-PRESORT0_10018995404",
    "LOT-PRESORT0_10016294824", "LOT-PRESORT0_10027344491", "LOT-PRESORT0_10021746460",
    "LOT-PRESORT0_10019598385", "LOT-PRESORT0_10022024617", "LOT-PRESORT0_10022664882",
    "LOT-PRESORT0_10018694400", "LOT-PRESORT0_10019902773", "LOT-PRESORT0_10021057200",
    "LOT-PRESORT0_10017663260", "LOT-PRESORT0_10027074554", "LOT-PRESORT0_10027277771",
    "LOT-PRESORT0_10023077839", "LOT-PRESORT0_10023011621", "LOT-PRESORT0_10023077836",
    "LOT-PRESORT0_10024793757", "LOT-PRESORT0_10025088074", "LOT-PRESORT0_10023698268",
    "LOT-PRESORT0_10014767742", "LOT-PRESORT0_10009820559", "LOT-PRESORT0_10025964042",
    "LOT-PRESORT0_10027183322", "LOT-PRESORT0_10027221446", "LOT-PRESORT0_10001755020",
    "LOT-PRESORT0_10001684570", "LOT-PRESORT0_10001684211", "LOT-PRESORT0_10026883007",
    "LOT-PRESORT0_10027789952", "LOT-PRESORT0_10029090425", "LOT-PRESORT0_10016002401",
    "LOT-PRESORT0_10013485370"
];

function updateSpanClasses() {
    const spans = document.querySelectorAll('span[data-e2e="sortable-table-grouping-directions"]');
    spans.forEach((span) => {
        const text = span.textContent.trim();
        let position;
        let label = "";

        // Проверка группы A
        if ((position = groupA.indexOf(text)) !== -1) {
            label = `A-${position + 1}`;
        } 
        // Проверка группы B
        else if ((position = groupB.indexOf(text)) !== -1) {
            label = `B-${position + 1 + 72}`;
        } 
        // Проверка группы C
        else if ((position = groupC.indexOf(text)) !== -1) {
            const adjustedPosition = position + 1 + 144;
            const finalPosition = adjustedPosition >= 147 ? adjustedPosition + 1 : adjustedPosition;
            label = `C-${finalPosition}`;
        } 
        // Проверка группы D
        else if ((position = groupD.indexOf(text)) !== -1) {
            label = `D-${position + 1 + 216}`;
        }

        // Если нашли совпадение, добавляем класс и атрибут
        if (label) {
            span.classList.add('diman__groupBuffer');
            span.setAttribute('data-label', label);
        } 
        // Если не нашли совпадение, удаляем класс и атрибут
        else {
            span.classList.remove('diman__groupBuffer');
            span.removeAttribute('data-label');
        }
    });
}

function updateSpanClassesInSortable() {
    const divs = document.querySelectorAll('div[data-tid="66fcbac9 cb97fdce d276ac8a ee6163ae"]');
    divs.forEach((div) => {
        const text = div.textContent.trim();
        let position;
        let label = "";

        // Проверка группы A
        if ((position = groupA.indexOf(text)) !== -1) {
            label = `A-${position + 1}`;
        } 
        // Проверка группы B
        else if ((position = groupB.indexOf(text)) !== -1) {
            label = `B-${position + 1 + 72}`;
        } 
        // Проверка группы C
        else if ((position = groupC.indexOf(text)) !== -1) {
            const adjustedPosition = position + 1 + 144;
            const finalPosition = adjustedPosition >= 147 ? adjustedPosition + 1 : adjustedPosition;
            label = `C-${finalPosition}`;
        } 
        // Проверка группы D
        else if ((position = groupD.indexOf(text)) !== -1) {
            label = `D-${position + 1 + 216}`;
        }

        // Если нашли совпадение, добавляем класс и атрибут
        if (label) {
            div.classList.add('diman__groupBufferSortables');
            div.setAttribute('data-label', label);
        } 
        // Если не нашли совпадение, удаляем класс и атрибут
        else {
            div.classList.remove('diman__groupBufferSortables');
            div.removeAttribute('data-label');
        }
    });
}

//!!! 

// Функция для обновления времени в нужных тегах <time>
function updateTimeElements() {
    document.querySelectorAll('time[data-tid="28adfd3 11655531"]').forEach(function(timeElement) {
        const datetime = timeElement.getAttribute('datetime');
        const date = new Date(datetime);
        const formattedTime = date.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
        timeElement.textContent = formattedTime;
    });
}

// Функция для проверки строк <tr> и добавления класса при необходимости
function checkAndApplyClassToRows() {
    document.querySelectorAll('tbody tr').forEach(function(row) {
        // Ищем кнопку внутри текущего <tr>
        const button = row.querySelector('button[data-tid="8e34e3c2 d47a3f9b 2cf94f05 cd6e0115"]');
        if (button) {
            // Если кнопка найдена и текст совпадает, добавляем класс
            row.classList.add('diman__sortablesHideExtra');
        } else {
            // Удаляем класс, если условие не выполняется
            row.classList.remove('diman__sortablesHideExtra');
        }
    });
}

//% Icons                                                                                                                                                                                                                       
function setIconsToSortableStatus() {
    const sortableStatus = document.querySelectorAll('span[data-e2e="sortable-table-stage-display-name"] span');
    const getAllRobots = document.querySelectorAll('td button[data-tid="8e34e3c2 d47a3f9b 2cf94f05 cd6e0115"].___Clickable___fcJVD.__disabled___AE_CQ');
    
    getAllRobots.forEach(item =>{
        item.classList.add('diman__robot')
    })

    sortableStatus.forEach(item => {
        item.classList.add('diman__lineHeightFix')
        // Проверяем, есть ли атрибут с нужным значением
        item.getAttribute('data-e2e-i18n-key') === 'common.sorting-center:stage-LABEL_CREATED_DIRECT' ? item.classList.add('diman__emptyLotCreated') : item.classList.remove('diman__emptyLotCreated')
        item.getAttribute('data-e2e-i18n-key') === 'common.sorting-center:stage-LABEL_CREATED_KEEPED_WITH_GROUP_DIRECT' ? item.classList.add('diman__emptyLotCreatedGroup') : item.classList.remove('diman__emptyLotCreatedGroup')
        item.getAttribute('data-e2e-i18n-key') === 'common.sorting-center:stage-LABEL_CREATED_WITH_COURIER_RETURN' ? item.classList.add('diman__emptyLotCreatedReturn') : item.classList.remove('diman__emptyLotCreatedReturn')
        item.getAttribute('data-e2e-i18n-key') === 'common.sorting-center:stage-LABEL_CREATED_WITH_COURIER_DIRECT' ? item.classList.add('diman__emptyLotCreated_sub-2') : item.classList.remove('diman__emptyLotCreated_sub-2')
        item.getAttribute('data-e2e-i18n-key') === 'common.sorting-center:stage-SORTING_IN_LOT_KEEPED_DIRECT' ? item.classList.add('diman__lotFillingInHran') : item.classList.remove('diman__lotFillingInHran')
        item.getAttribute('data-e2e-i18n-key') === 'common.sorting-center:stage-SORTING_IN_LOT_RETURN' ? item.classList.add('diman__lotReturn') : item.classList.remove('diman__lotReturn')
        item.getAttribute('data-e2e-i18n-key') === 'common.sorting-center:stage-SORTING_IN_LOT_KEEPED_RETURN' ? item.classList.add('diman__lotFillingInHranReturn') : item.classList.remove('diman__lotFillingInHranReturn')
        item.getAttribute('data-e2e-i18n-key') === 'common.sorting-center:stage-PACKED_KEEPED_DIRECT' ? item.classList.add('diman__lotPackedKeepedDirect') : item.classList.remove('diman__lotPackedKeepedDirect')
        item.getAttribute('data-e2e-i18n-key') === 'common.sorting-center:stage-SORTED_DIRECT' ? item.classList.add('diman__sortedDirect') : item.classList.remove('diman__sortedDirect')
        item.getAttribute('data-e2e-i18n-key') === 'common.sorting-center:stage-SORTED_RETURN' ? item.classList.add('diman__sortedReturn') : item.classList.remove('diman__sortedReturn')
        item.getAttribute('data-e2e-i18n-key') === 'common.sorting-center:stage-AWAITING_SORT_DIRECT' ? item.classList.add('diman__awaitingSort') : item.classList.remove('diman__awaitingSort')
        item.getAttribute('data-e2e-i18n-key') === 'common.sorting-center:stage-PREPARED_DIRECT' ? item.classList.add('diman__preparedDirect') : item.classList.remove('diman__preparedDirect')
        item.getAttribute('data-e2e-i18n-key') === 'common.sorting-center:stage-AWAITING_ACCEPTANCE_BY_COURIER_DIRECT' ? item.classList.add('diman__waitingCouriedAccept') : item.classList.remove('diman__waitingCouriedAccept')
        item.getAttribute('data-e2e-i18n-key') === 'common.sorting-center:stage-SHIPPED_DIRECT' ? item.classList.add('diman__shipped') : item.classList.remove('diman__shipped')
        item.getAttribute('data-e2e-i18n-key') === 'common.sorting-center:stage-SHIPPED_RETURN' ? item.classList.add('diman__shippedReturn') : item.classList.remove('diman__shippedReturn')
        item.getAttribute('data-e2e-i18n-key') === 'common.sorting-center:stage-FIRST_ACCEPT_DIRECT' ? item.classList.add('diman__firstAccept') : item.classList.remove('diman__firstAccept')
        item.getAttribute('data-e2e-i18n-key') === 'common.sorting-center:stage-FINAL_ACCEPT_DIRECT' ? item.classList.add('diman__secondAccept') : item.classList.remove('diman__secondAccept')
        item.getAttribute('data-e2e-i18n-key') === 'common.sorting-center:stage-FINAL_ACCEPT_RETURN' ? item.classList.add('diman__secondAcceptReturn') : item.classList.remove('diman__secondAcceptReturn')
        item.getAttribute('data-e2e-i18n-key') === 'common.sorting-center:stage-AWAITING_DIRECT' ? item.classList.add('diman__waitingForAccept') : item.classList.remove('diman__waitingForAccept')
        item.getAttribute('data-e2e-i18n-key') === 'common.sorting-center:stage-AWAITING_RETURN' ? item.classList.add('diman__waitingForAcceptReturn') : item.classList.remove('diman__waitingForAcceptReturn')
        item.getAttribute('data-e2e-i18n-key') === 'common.sorting-center:stage-PRE_SORTED_DIRECT' ? item.classList.add('diman__predsortAccept') : item.classList.remove('diman__predsortAccept')
        item.getAttribute('data-e2e-i18n-key') === 'common.sorting-center:stage-PRE_SORTED_RETURN' ? item.classList.add('diman__predsortAcceptReturn') : item.classList.remove('diman__predsortAcceptReturn')
        item.getAttribute('data-e2e-i18n-key') === 'common.sorting-center:stage-KEEPED_DIRECT' ? item.classList.add('diman__onHran') : item.classList.remove('diman__onHran')
        item.getAttribute('data-e2e-i18n-key') === 'common.sorting-center:stage-KEEPED_RETURN' ? item.classList.add('diman__onHranReturn') : item.classList.remove('diman__onHranReturn')
        item.getAttribute('data-e2e-i18n-key') === 'common.sorting-center:stage-SORTING_IN_LOT_DIRECT' ? item.classList.add('diman__fliingHran') : item.classList.remove('diman__fliingHran')
        item.getAttribute('data-e2e-i18n-key') === 'common.sorting-center:stage-DELETED' ? item.classList.add('diman__deleted') : item.classList.remove('diman__deleted')
        item.getAttribute('data-e2e-i18n-key') === 'common.sorting-center:stage-ARRIVED_DIRECT' ? item.classList.add('diman__arrived') : item.classList.remove('diman__arrived')
    });
}

//% Observer                                                                                                                                                                                                                    

// Функция для наблюдения за изменениями в <tbody>
function observeTbodyChanges() {
    const tbody = document.querySelector('tbody');

    if (!tbody) {
        console.warn('Тег <tbody> не найден');
        return;
    }

    const observer = new MutationObserver(function(mutationsList) {
        for (let mutation of mutationsList) {
            if (mutation.type === 'childList' || mutation.type === 'subtree') {
                updateTimeElements();
                checkAndApplyClassToRows();
                setIconsToSortableStatus();
                updateSpanClasses()
                updateSpanClassesInSortable()
                setTimeout(() => {
                    updateTimeElements();
                    checkAndApplyClassToRows();
                    setIconsToSortableStatus();
                    updateSpanClasses()
                    updateSpanClassesInSortable()
                }, 2000);
            }
        }
    });

    // Настройки наблюдателя
    observer.observe(tbody, { childList: true, subtree: true });
}

// Запуск наблюдателя
observeTbodyChanges();
