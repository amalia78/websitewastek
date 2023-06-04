//data poligon dan informasi terkait
var polygonData = {
  pengujian1: {
    coordinates: [
      [ -7.261402254290185, 112.7678557303674],
      [-7.273553346406056 ,112.7636501006139],
      [-7.27465714289886 ,112.7689324072631],
      [-7.27556524001298 ,112.7732898756617],
      [-7.268711951795439 ,112.7743462492746],
      [-7.262395005233428 ,112.7708462741348],
      [-7.261402254290185, 112.7678557303674],
    ],
    info: {
      "Muka Tanah": "0.00",
      "Very Soft": "-10.00",
      "Soft": "-12.00",
      "Medium": "-14.00",
      "Stiff": "-16.00",
      "Hard": "-20.00"
    },
    color: "#9AC4F8"
  },
  pengujian2: {
    coordinates: [
      [-7.264317791489466, 112.7567595437124],
      [-7.273553204332111, 112.7636497308441],
      [-7.261401153085843, 112.7678547113406],
      [-7.258640400858808, 112.7591909579157],
      [-7.264317791489466, 112.7567595437124],
    ],
    info: {
      "Muka Tanah": "0.00",
      "Very Soft": "-10.00",
      "Soft": "-12.00",
      "Medium": "-14.00",
      "Stiff": "-16.00",
      "Hard": "-20.00"
    },
    color: "#1E3D30"
  },
  pengujian3: {
    coordinates: [
      [-7.283661886991948, 112.7720448351754],
      [-7.275566852205423, 112.7732889079125],
      [-7.273553758531484, 112.7636505460061],
      [-7.275976632252386, 112.7639447832777],
      [-7.278000390396669, 112.7623755530987],
      [-7.283297386445826, 112.7631902599462],
      [-7.283661886991948, 112.7720448351754],
    ],
    info: {
      "Muka Tanah": "0.00",
      "Very Soft": "-15.00",
      "Soft": "-16.00",
      "Medium": "-17.00",
      "Stiff": "-18.00",
      "Hard": "-20.00"
    },
    color: "#989A99"
  },
  pengujian4: {
    coordinates: [
      [-7.283016236497828,112.7564051743341],
      [-7.283296521829229,112.7631902834715],
      [-7.278000130281183,112.7623751962113],
      [-7.275975902019404,112.7639451807133],
      [-7.273553427748702,112.7636500487713],
      [-7.270075732178599,112.7610561636821],
      [-7.270926646327749,112.7545023540392],
      [-7.283024542371987,112.7521653232407],
      [-7.283016236497828,112.7564051743341],
    ],
    info: {
      "Muka Tanah": "0.00",
      "Very Soft": "-3.00",
      "Soft": "-5.00",
      "Medium": "-10.00",
      "Stiff": "-11.00",
      "Hard": "-17.00"
    },
    color: "#7A438A"
  },
  pengujian5: {
    coordinates: [
      [-7.283033855925811,112.7472151504317],
      [-7.283024520605724,112.7521653892943],
      [-7.270927700267194,112.7545013825316],
      [-7.272227770855258,112.7444708452008],
      [-7.272920601728684,112.744115407525],
      [-7.283033855925811,112.7472151504317],
    ],
    info: {
      "Muka Tanah": "0.00",
      "Very Soft": "-2.00",
      "Soft": "-4.00",
      "Medium": "-10.00",
      "Stiff": "-14.00",
      "Hard": "-15.00"
    },
    color: "#D14A4A"
  },
  pengujian6: {
    coordinates: [
      [-7.270075959737905,112.7610565113782],
      [-7.264318221457673,112.7567596826371],
      [-7.262858521220991,112.7526730566111],
      [-7.266057631479966,112.747638798731],
      [-7.27222760621888,112.7444710447758],
      [-7.270075959737905,112.7610565113782],
    ],
    info: {
      "Muka Tanah": "0.00",
      "Very Soft": "-5.00",
      "Soft": "-9.00",
      "Medium": "-10.00",
      "Stiff": "-15.00",
      "Hard": "-23.00"
    },
    color: "#189A77"
  },
  pengujian7: {
    coordinates: [
      [-7.283015949238441, 112.7564049121485],
      [-7.293714920643698, 112.7552262323199],
      [-7.294038194620827, 112.7573516097922],
      [-7.29096809423951, 112.7709197233322],
      [-7.28366235587979, 112.7720450045378],
      [-7.283015949238441, 112.7564049121485],
    ],
    info: {
      "Muka Tanah": "0.00",
      "Very Soft": "-10.00",
      "Soft": "-11.00",
      "Medium": "-15.00",
      "Stiff": "-20.00",
      "Hard": "-24.00"
    },
    color: "#EDD03B"
  },
  pengujian8: {
    coordinates: [
      [-7.294038785457915, 112.7573514850474],
      [-7.303948969355019, 112.7546465108277],
      [-7.304560059524356, 112.7651109856189],
      [-7.299355981584635,  112.7696291728601],
      [-7.290968019726617,  112.7709205398837],
      [-7.294038785457915,  112.7573514850474],
    ],
    info: {
      "Muka Tanah": "0.00",
      "Very Soft": "-10.00",
      "Soft": "-15.00",
      "Medium": "-18.00",
      "Stiff": "-20.00",
      "Hard": "-30.00"
    },
    color: "#EDD03B"
  }
}

// Inisialisasi peta
var latitude = -7.2792446; // Contoh nilai latitude
var longitude = 112.7577713; // Contoh nilai longitude
var zoomLevel = 14; // Contoh level zoom

var map = L.map("map").setView([latitude, longitude], zoomLevel);

// Tambahkan tile layer dari peta yang ingin Anda gunakan, seperti OpenStreetMap
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: 'Peta oleh <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
  maxZoom: 18,
}).addTo(map);

// Membuat objek untuk menyimpan data titik koordinat
var coordinateData = {
  pengujian1: {
    latitude: -7.26760279826471,
    longitude: 112.7707121351945
  },
  pengujian2: {
    latitude: -7.2660084,
    longitude: 112.7619253
  },
  pengujian3: {
    latitude: -7.27593926539131,
    longitude: 112.7664108184446
  },
  pengujian4: {
    latitude: -7.281357714068273,
    longitude: 112.7594876003489
  },
  pengujian5: {
    latitude: -7.277507200000001,
    longitude: 112.7493089
  },
  pengujian6: {
    latitude: -7.268197199999999,
    longitude: 112.7504642
  },
  pengujian7: {
    latitude: -7.291517799999999,
    longitude: 112.7595155
  },
  pengujian8: {
    latitude: -7.2993855,
    longitude: 112.7618292
  }
};

// Fungsi untuk mendapatkan koordinat latitude berdasarkan tanda tanah
function getLatitudeFromTanda(tanda) {
  // Cek apakah tanda tanah ada dalam objek coordinateData
  if (tanda in coordinateData) {
    return coordinateData[tanda].latitude;
  }
  // Jika tidak ada tanda yang cocok, kembalikan nilai default
  return 0;
}

// Fungsi untuk mendapatkan koordinat longitude berdasarkan tanda tanah
function getLongitudeFromTanda(tanda) {
  // Cek apakah tanda tanah ada dalam objek coordinateData
  if (tanda in coordinateData) {
    return coordinateData[tanda].longitude;
  }
  // Jika tidak ada tanda yang cocok, kembalikan nilai default
  return 0;
}

// Array untuk menyimpan poligon yang telah ditampilkan sebelumnya
var polygons = [];

// Fungsi untuk membuat poligon baru dengan koordinat yang ditentukan
function areaPolygon(tanda, coordinatesArray) {
  var colorIndex = Math.floor(Math.random() * 10);
  var colors = ['#919191', '#554640', '#D058B2', '#071620', '#E7736F', '#154A6A', '#CAE1F0', '#576C7A', '#60C680', '#ECEC63'];

  var polygon = L.polygon(coordinatesArray, {
    color: '#244282', // Warna garis poligon
    fillColor: colors[colorIndex],
    fillOpacity: 0.4, // Opasitas area poligon
  });

  return polygon;
}

var coordinateArray = [];

for (var pengujian in polygonData) {
  if (polygonData.hasOwnProperty(pengujian)) {
    var coordinates = polygonData[pengujian].coordinates;
    coordinateArray.push(coordinates);
  }
}


// Tambahkan marker pada peta untuk setiap tanda tanah
for (var tanda in polygonData) {
  var marker = L.marker([getLatitudeFromTanda(tanda), getLongitudeFromTanda(tanda)], { icon: createCustomIcon('red') }).addTo(map);
  marker.tanda = tanda;
  marker.on("click", showPopup);
}

// Fungsi untuk membuat ikon marker custom dengan warna tertentu
function createCustomIcon(color) {
  return L.icon({
    iconUrl: `https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-${color}.png`,
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });
}

// Data batas wilayah kecamatan Gubeng Surabaya (contoh koordinat)
var kecamatanBounds = [
  [-7.268711488913444,112.77434605624],
  [-7.262395446539463,112.7708455336656],
  [-7.258640617697223,112.7591913015308],
  [-7.264318006072199,112.7567591934717],
  [-7.262858836314003,112.7526733374856],
  [-7.266056265863632,112.7476400976794],
  [-7.272920304693122,112.7441153333026],
  [-7.283033991679511,112.7472148540959],
  [-7.283016361030574,112.7564045104108],
  [-7.293715027611243,112.755226401339],
  [-7.294038337728746,112.7573515001822],
  [-7.303948414115241,112.7546471742245],
  [-7.304560117951171,112.7651111435496],
  [-7.299356154331787,112.7696292443884],
];

// Buat poligon dari batas wilayah kecamatan
var kecamatanPolygon = L.polygon(kecamatanBounds, {
  color: '#4F82A9', // Warna garis batas wilayah
  fillColor: 'lightblue', // Warna area batas wilayah
  fillOpacity: 0.1, // Opasitas area batas wilayah
}).addTo(map);

// Fungsi untuk menampilkan modal dengan data statigrafi tanah
function showPopup(e) {
  var tanda = e.target.tanda;
  var data = polygonData[tanda].info;
  var tableData = document.getElementById("tableData");
  tableData.innerHTML = ""; // Kosongkan isi tabel sebelum menambahkan data baru

  var headerRow = document.createElement("tr");
  var headerCell = document.createElement("th");
  headerCell.textContent = "Statigrafi Tanah - " + tanda ;
  headerCell.colSpan = "2";
  headerRow.className = "text-white";
  headerRow.appendChild(headerCell);
  tableData.appendChild(headerRow);

  for (var jenisTanah in data) {
    var dataRow = document.createElement("tr");
    var jenisTanahCell = document.createElement("td");
    jenisTanahCell.textContent = jenisTanah;
    dataRow.appendChild(jenisTanahCell);
    var kedalamanCell = document.createElement("td");
    kedalamanCell.textContent = data[jenisTanah];
    dataRow.appendChild(kedalamanCell);
    tableData.appendChild(dataRow);
  }

  var modalData = document.getElementById("modalData");
  modalData.textContent = data;

  var modal = document.getElementById("myModal");
  modal.style.display = "block";

  var closeModal = document.getElementsByClassName("close")[0];
  closeModal.onclick = function() {
    modal.style.display = "none";
  }
}

// tambahin poligon pada peta untuk setiap tanda marker
for (var tanda in polygonData) {
  var coordinates = polygonData[tanda].coordinates;
  var polygon = areaPolygon(tanda, coordinates).addTo(map);
  polygon.tanda = tanda;
  polygon.on("click", showPopup);
}
