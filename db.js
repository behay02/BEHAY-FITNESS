var DB;

async function initDatabase() {
    if (DB) return;
    
    var SQL = await initSqlJs({
        locateFile: function(file) { return './sql-wasm.wasm'; }
    });
    
    // Пытаемся загрузить сохранённую БД
    var saved = localStorage.getItem('sqliteDB');
    if (saved) {
        DB = new SQL.Database(new Uint8Array(JSON.parse(saved)));
    } else {
        DB = new SQL.Database();
    }
    
    DB.run("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, lastName TEXT, firstName TEXT, middleName TEXT, birthDate TEXT, phone TEXT UNIQUE, email TEXT, password TEXT, tariff TEXT, created_at TEXT)");
    DB.run("CREATE TABLE IF NOT EXISTS payments (id INTEGER PRIMARY KEY AUTOINCREMENT, user_phone TEXT, tariff TEXT, price TEXT, card_last4 TEXT, paid_at TEXT)");
    
    saveDB();
    console.log('БД готова');
}

function saveDB() {
    var data = DB.export();
    var arr = Array.from(data);
    localStorage.setItem('sqliteDB', JSON.stringify(arr));
}

function escapeSQL(str) {
    if (!str) return '';
    return str.replace(/'/g, "''");
}

function registerUser(userData, callback) {
    try {
        var sql = "INSERT INTO users (lastName, firstName, middleName, birthDate, phone, email, password, tariff, created_at) VALUES ('" +
            escapeSQL(userData.lastName) + "', '" +
            escapeSQL(userData.firstName) + "', '" +
            escapeSQL(userData.middleName || '') + "', '" +
            escapeSQL(userData.birthDate) + "', '" +
            escapeSQL(userData.phone) + "', '" +
            escapeSQL(userData.email || '') + "', '" +
            escapeSQL(userData.password) + "', '" +
            escapeSQL(userData.tariff || '') + "', '" +
            new Date().toISOString() + "')";
        
        DB.run(sql);
        saveDB();
        callback({ success: true });
    } catch (e) {
        callback({ success: false, error: 'Ошибка: ' + e.message });
    }
}

function loginUser(phone, password, callback) {
    try {
        var sql = "SELECT * FROM users WHERE phone = '" + escapeSQL(phone) + "' AND password = '" + escapeSQL(password) + "'";
        var result = DB.exec(sql);
        if (result.length > 0 && result[0].values.length > 0) {
            var row = result[0].values[0];
            callback({ success: true, user: { id: row[0], lastName: row[1], firstName: row[2], middleName: row[3], birthDate: row[4], phone: row[5], email: row[6], tariff: row[8] } });
        } else {
            callback({ success: false, error: 'Неверный телефон или пароль' });
        }
    } catch (e) {
        callback({ success: false, error: 'Ошибка' });
    }
}

function getUser(phone, callback) {
    try {
        var sql = "SELECT * FROM users WHERE phone = '" + escapeSQL(phone) + "'";
        var result = DB.exec(sql);
        if (result.length > 0 && result[0].values.length > 0) {
            var row = result[0].values[0];
            callback({ success: true, user: { id: row[0], lastName: row[1], firstName: row[2], middleName: row[3], birthDate: row[4], phone: row[5], email: row[6], tariff: row[8] } });
        } else {
            callback({ success: false });
        }
    } catch (e) {
        callback({ success: false });
    }
}

function savePayment(phone, tariff, price, cardLast4) {
    try {
        var sql = "INSERT INTO payments (user_phone, tariff, price, card_last4, paid_at) VALUES ('" +
            escapeSQL(phone) + "', '" +
            escapeSQL(tariff) + "', '" +
            escapeSQL(price) + "', '" +
            escapeSQL(cardLast4) + "', '" +
            new Date().toISOString() + "')";
        DB.run(sql);
        saveDB();
    } catch (e) {
        console.log('Ошибка сохранения платежа');
    }
}

function getPayments(phone) {
    try {
        var sql = "SELECT * FROM payments WHERE user_phone = '" + escapeSQL(phone) + "' ORDER BY paid_at DESC";
        var result = DB.exec(sql);
        if (result.length > 0) {
            return result[0].values.map(function(row) {
                return { tariff: row[2], price: row[3], card_last4: row[4], paid_at: row[5] };
            });
        }
    } catch (e) {}
    return [];
}

initDatabase().then(function() {
    console.log('БД инициализирована');
});