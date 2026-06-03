document.addEventListener('DOMContentLoaded', function() {
    
    var burger = document.getElementById('burger');
    var nav = document.getElementById('nav');
    
    if (burger && nav) {
        burger.addEventListener('click', function() {
            nav.classList.toggle('active');
        });
    }
    
    if (typeof SITE_DATA !== 'undefined') {
        renderMap();
        renderClubs();
        renderTariffs();
        renderTrainers();
    } else {
        renderMapFallback();
    }
    
});

function renderMap() {
    var mapElement = document.getElementById('map');
    if (!mapElement || !SITE_DATA.clubs || SITE_DATA.clubs.length === 0) return;

    var map = L.map('map').setView([55.72, 37.62], 10);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'OpenStreetMap'
    }).addTo(map);
    
    var icon = L.icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41]
    });
    
    var coords = {
        'Авиапарк': [55.7887, 37.5336],
        'Европейский': [55.7436, 37.5668],
        'Метрополис': [55.8188, 37.4983],
        'Афимолл Сити': [55.7500, 37.5486],
        'Европолис': [55.8356, 37.6612],
        'Columbus': [55.6124, 37.6039],
        'Vegas Крокус Сити': [55.8263, 37.3846],
        'Охотный ряд': [55.7558, 37.6145],
        'Ривьера': [55.7042, 37.6547],
        'Атриум': [55.7584, 37.6624]
    };
    
    SITE_DATA.clubs.forEach(function(club) {
        var coord = coords[club.title];
        if (coord) {
            L.marker(coord, { icon: icon })
                .addTo(map)
                .bindPopup('<b>' + club.title + '</b><br>' + club.address);
        }
    });
}

function renderMapFallback() {
    var mapElement = document.getElementById('map');
    if (!mapElement) return;

    var map = L.map('map').setView([55.72, 37.62], 10);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'OpenStreetMap'
    }).addTo(map);
    
    var clubs = [
        { lat: 55.7887, lng: 37.5336, name: 'Авиапарк' },
        { lat: 55.7436, lng: 37.5668, name: 'Европейский' },
        { lat: 55.8188, lng: 37.4983, name: 'Метрополис' },
        { lat: 55.7500, lng: 37.5486, name: 'Афимолл Сити' },
        { lat: 55.8356, lng: 37.6612, name: 'Европолис' },
        { lat: 55.6124, lng: 37.6039, name: 'Columbus' },
        { lat: 55.8263, lng: 37.3846, name: 'Vegas Крокус Сити' },
        { lat: 55.7558, lng: 37.6145, name: 'Охотный ряд' },
        { lat: 55.7042, lng: 37.6547, name: 'Ривьера' },
        { lat: 55.7584, lng: 37.6624, name: 'Атриум' }
    ];
    
    var icon = L.icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41]
    });
    
    clubs.forEach(function(club) {
        L.marker([club.lat, club.lng], { icon: icon })
            .addTo(map)
            .bindPopup('<b>PULSE FITNESS ' + club.name + '</b>');
    });
}

function renderClubs() {
    var container = document.getElementById('clubsContainer');
    if (!container || !SITE_DATA.clubs) return;
    
    container.innerHTML = '';
    
    SITE_DATA.clubs.forEach(function(club) {
        var card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = 
            '<img src="' + (club.image || 'images/default.jpg') + '" alt="' + club.title + '">' +
            '<h3>' + club.title + '</h3>' +
            '<p>🕐 ' + club.hours + '</p>' +
            '<p>📍 ' + club.address + '</p>' +
            '<p>🚇 ' + club.metro + '</p>' +
            '<a href="tariffs.html" class="btn">Купить абонемент</a>';
        container.appendChild(card);
    });
}

function renderTariffs() {
    var container = document.getElementById('tariffsContainer');
    if (!container || !SITE_DATA.tariffs) return;
    
    container.innerHTML = '';
    
    SITE_DATA.tariffs.forEach(function(tariff) {
        var features = tariff.features ? tariff.features.split(';') : [];
        var featuresHtml = '';
        features.forEach(function(f) {
            featuresHtml += '<li>✅ ' + f.trim() + '</li>';
        });
        
        var isPopular = tariff.popular === true;
        
        var card = document.createElement('div');
        card.className = 'tariff-card' + (isPopular ? ' tariff-popular' : '');
        
        card.innerHTML = 
            (isPopular ? '<div class="tariff-badge">Популярный</div>' : '') +
            '<div class="tariff-header">' +
                '<h3>' + tariff.title + '</h3>' +
                '<p class="tariff-price">' + tariff.price + ' ₽</p>' +
                '<p class="tariff-period">' + tariff.period + '</p>' +
            '</div>' +
            '<div class="tariff-body"><ul>' + featuresHtml + '</ul></div>' +
            '<div class="tariff-footer">' +
                '<a href="payment.html" class="btn" onclick="saveTariff(\'' + tariff.title + '\', \'' + tariff.price + '\')">Купить</a>' +
            '</div>';
        
        container.appendChild(card);
    });
}

function renderTrainers() {
    var group1 = document.getElementById('trainersGroup1');
    var group2 = document.getElementById('trainersGroup2');
    
    if ((!group1 && !group2) || !SITE_DATA.trainers) return;
    
    if (group1) group1.innerHTML = '';
    if (group2) group2.innerHTML = '';
    
    var centerClubs = ['aviapark', 'metropolis', 'evropeyskiy', 'afimall', 'ohotny'];
    
    var clubNames = {
        aviapark: 'Авиапарк', metropolis: 'Метрополис', evropeyskiy: 'Европейский',
        afimall: 'Афимолл Сити', ohotny: 'Охотный ряд', evropolis: 'Европолис',
        atrium: 'Атриум', columbus: 'Columbus', riviera: 'Ривьера', vegas: 'Vegas Крокус Сити'
    };
    
    SITE_DATA.trainers.forEach(function(trainer) {
        var card = document.createElement('div');
        card.className = 'trainer-card coach-card';
        card.setAttribute('data-clubs', trainer.clubs || '');
        
        var clubsText = (trainer.clubs || '').split(' ').map(function(c) {
            return clubNames[c] || c;
        }).join(', ');
        
        card.innerHTML = 
            '<div class="trainer-photo"><img src="' + (trainer.image || 'trainers/default.jpg') + '" alt="' + trainer.name + '"></div>' +
            '<h3>' + trainer.name + '</h3>' +
            '<p class="trainer-spec">' + (trainer.speciality || '') + '</p>' +
            '<p class="trainer-exp">Опыт: ' + (trainer.exp || '') + '</p>' +
            '<p class="trainer-clubs">📍 ' + clubsText + '</p>' +
            '<p class="trainer-about">' + (trainer.about || '') + '</p>';
        
        var clubList = (trainer.clubs || '').split(' ');
        var isCenter = clubList.some(function(c) { return centerClubs.indexOf(c) !== -1; });
        
        if (isCenter && group1) {
            group1.appendChild(card);
        } else if (group2) {
            group2.appendChild(card);
        }
    });
}
