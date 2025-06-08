// Уберите импорт из CDN и используйте глобальный объект XLSX
console.log("[background.js] Service worker загружен");

// Проверка доступности XLSX
function getXLSX() {
  if (typeof XLSX === 'undefined') {
    throw new Error("XLSX library not loaded. Check manifest configuration.");
  }
  return XLSX;
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "PARSE_EXCEL" && message.buffer) {
    console.log("[background.js] Получен запрос на парсинг Excel-файла");

    const uint8Array = new Uint8Array(message.buffer);
    console.log("[background.js] Получен буфер, длина Uint8Array:", uint8Array.length);
    console.log("[background.js] Первые 10 байт:", uint8Array.slice(0, 10));

    try {
      const XLSX = getXLSX();
      const workbook = XLSX.read(uint8Array, { type: 'array' });
      
      // ... остальной ваш код без изменений ...
      
      sendResponse({ html });
    } catch (error) {
      console.error("[background.js] Ошибка при парсинге Excel:", error);
      sendResponse({ error: error.message });
    }

    return true;
  }
});

// Оставьте функцию formatExcelDate без изменений

function formatExcelDate(excelDate) {
  if (typeof excelDate === 'number') {
    const utcMs = (excelDate - 25569) * 86400 * 1000;
    const dateObj = new Date(utcMs);

    const yyyy = dateObj.getUTCFullYear();
    const mm = String(dateObj.getUTCMonth() + 1).padStart(2, '0');
    const dd = String(dateObj.getUTCDate()).padStart(2, '0');
    const date = `${dd}/${mm}/${yyyy}`;

    const hh = String(dateObj.getUTCHours()).padStart(2, '0');
    const min = String(dateObj.getUTCMinutes()).padStart(2, '0');
    const ss = String(dateObj.getUTCSeconds()).padStart(2, '0');
    const time = `${hh}:${min}:${ss}`;

    return { date, time };
  }
  return { date: '', time: '' };
}
