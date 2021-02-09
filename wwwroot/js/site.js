const uri = 'api/PinInfoItems';
let pinInfoItems = [];

function searchByHeaderPin() 
{
    const searchByHeaderPinTextbox = document.getElementById('header-pin');
    let pinName = searchByHeaderPinTextbox.value.trim();

    searchUri = uri + "?pinName=" + pinName;

    fetch(searchUri)
        .then(response => response.json())
        .then(data => _displayItems(data))
        .catch(error => console.error('Unable to get items.', error));
}

function searchBySignalName()
{
    const searchBySignalNameTextbox = document.getElementById('signal-name');
    let signalName = searchBySignalNameTextbox.value.trim();

    searchUri = uri + "?signalName=" + signalName;

    fetch(searchUri)
        .then(response => response.json())
        .then(data => _displayItems(data))
        .catch(error => console.error('Unable to get items.', error));
}

function getItems() {
  fetch(uri)
    .then(response => response.json())
    .then(data => _displayItems(data))
    .catch(error => console.error('Unable to get items.', error));
}

function closeInput() {
  document.getElementById('editForm').style.display = 'none';
}

function _displayItems(data) {
  const tBody = document.getElementById('pins');
  tBody.innerHTML = '';

  data.forEach(item => {

    let tr = tBody.insertRow();
    
    let td0 = tr.insertCell(0);
    let pinName = document.createTextNode(item.id);
    td0.appendChild(pinName);

    let td1 = tr.insertCell(1);
    let armPin = document.createTextNode(item.armPin);
    td1.appendChild(armPin);

    let td2 = tr.insertCell(2);
    let registerAddress = document.createTextNode(item.registerAddress);
    td2.appendChild(registerAddress);

    let td3 = tr.insertCell(3);
    let defaultMode = document.createTextNode(item.defaultMode);
    td3.appendChild(defaultMode);

    let td4 = tr.insertCell(4);
    let mode00 = document.createTextNode(item.mode00Signal);
    td4.appendChild(mode00);

    let td5 = tr.insertCell(5);
    let mode01 = document.createTextNode(item.mode01Signal);
    td5.appendChild(mode01);

    let td6 = tr.insertCell(6);
    let mode02 = document.createTextNode(item.mode02Signal);
    td6.appendChild(mode02);

    let td7 = tr.insertCell(7);
    let mode03 = document.createTextNode(item.mode03Signal);
    td7.appendChild(mode03);

    let td8 = tr.insertCell(8);
    let mode04 = document.createTextNode(item.mode04Signal);
    td8.appendChild(mode04);

    let td9 = tr.insertCell(9);
    let mode05 = document.createTextNode(item.mode05Signal);
    td9.appendChild(mode05);

    let td10 = tr.insertCell(10);
    let mode06 = document.createTextNode(item.mode06Signal);
    td10.appendChild(mode06);

    let td11 = tr.insertCell(11);
    let mode07 = document.createTextNode(item.mode07Signal);
    td11.appendChild(mode07);

    let td12 = tr.insertCell(12);
    let mode08 = document.createTextNode(item.mode08Signal);
    td12.appendChild(mode08);

    let td13 = tr.insertCell(13);
    let mode09 = document.createTextNode(item.mode09Signal);
    td13.appendChild(mode09);

    let td14 = tr.insertCell(14);
    let mode10 = document.createTextNode(item.mode10Signal);
    td14.appendChild(mode10);

    let td15 = tr.insertCell(15);
    let mode11 = document.createTextNode(item.mode11Signal);
    td15.appendChild(mode11);

    let td16 = tr.insertCell(16);
    let mode12 = document.createTextNode(item.mode12Signal);
    td16.appendChild(mode12);

    let td17 = tr.insertCell(17);
    let mode13 = document.createTextNode(item.mode13Signal);
    td17.appendChild(mode13);

    let td18 = tr.insertCell(18);
    let mode14 = document.createTextNode(item.mode14Signal);
    td18.appendChild(mode14);

    let td19 = tr.insertCell(19);
    let mode15 = document.createTextNode(item.mode15Signal);
    td19.appendChild(mode15);
});

  pinInfoItems = data;
}