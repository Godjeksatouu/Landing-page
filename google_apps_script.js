/**
 * GOOGLE APPS SCRIPT FOR ORDER MANAGEMENT DASHBOARD & AUTOMATIC SYNC
 * 
 * Instructions:
 * 1. Open your Google Sheet.
 * 2. Click Extensions -> Apps Script.
 * 3. Replace all existing code with this script.
 * 4. Click "Deploy" -> "New deployment" -> Select "Web app".
 * 5. Set "Execute as": "Me" and "Who has access": "Anyone".
 * 6. Click "Deploy" and copy the Web App URL.
 * 7. Add `VITE_GOOGLE_SHEETS_WEBHOOK_URL="YOUR_WEB_APP_URL"` to your .env file.
 */

// Allowed Order Status Values
const VALID_STATUSES = ['Nouvelle', 'Confirmée', 'Expédiée', 'Livrée', 'Annulée'];

// Required Columns in Order
const HEADERS = [
  'Order ID',
  'Date & Time',
  'Nom Complet',
  'Ville',
  'Téléphone',
  'Produit commandé',
  'Quantité',
  'Prix total',
  'Statut de commande',
  'Notes'
];

function setupDashboard() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  
  // Set headers if sheet is empty
  if (sheet.getLastRow() === 0) {
    sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);
    sheet.getRange(1, 1, 1, HEADERS.length)
      .setFontWeight('bold')
      .setBackground('#101827')
      .setFontColor('#33FF55')
      .setFontSize(11)
      .setHorizontalAlignment('center');
    sheet.setRowHeight(1, 35);
  }
}

function doPost(e) {
  try {
    setupDashboard();
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);

    // Clean input values
    const orderId = data.orderId || ('MA-' + Math.floor(100000 + Math.random() * 900000));
    const dateTime = data.dateTime || new Date().toLocaleString('fr-FR');
    const fullName = data.fullName || '';
    const city = data.city || '';
    const phone = data.phone || '';
    const productName = data.productName || 'PRO FAST YY-203';
    const quantity = data.quantity || 1;
    const totalPrice = data.totalPrice || '799 د.م.';
    const status = data.status || 'Nouvelle';
    const notes = data.notes || 'طلب جديد عبر الموقع';

    // Prevent Duplicate Orders (check phone & full name in recent rows)
    const lastRow = sheet.getLastRow();
    if (lastRow > 1) {
      const existingData = sheet.getRange(2, 1, Math.min(lastRow - 1, 50), HEADERS.length).getValues();
      for (let i = 0; i < existingData.length; i++) {
        const existingPhone = String(existingData[i][4]).replace(/[\s\-\(\)]/g, '');
        const cleanPhone = String(phone).replace(/[\s\-\(\)]/g, '');
        if (existingPhone && cleanPhone && existingPhone === cleanPhone) {
          return ContentService
            .createTextOutput(JSON.stringify({ result: 'duplicate', message: 'Order already exists' }))
            .setMimeType(ContentService.MimeType.JSON);
        }
      }
    }

    // Insert NEWEST order at the TOP (Row 2, right below Header)
    sheet.insertRowBefore(2);
    
    const newRowValues = [
      orderId,
      dateTime,
      fullName,
      city,
      phone,
      productName,
      quantity,
      totalPrice,
      status,
      notes
    ];

    const newRowRange = sheet.getRange(2, 1, 1, HEADERS.length);
    newRowRange.setValues([newRowValues]);
    newRowRange.setFontSize(10).setVerticalAlignment('middle');
    sheet.setRowHeight(2, 30);

    // Apply Status Data Validation Dropdown Rule to column 9 (Statut de commande)
    const rule = SpreadsheetApp.newDataValidation()
      .requireValueInList(VALID_STATUSES, true)
      .setAllowInvalid(false)
      .build();
    sheet.getRange(2, 9).setDataValidation(rule);

    return ContentService
      .createTextOutput(JSON.stringify({ result: 'success', orderId: orderId }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'error', error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService.createTextOutput("Google Sheets Order Management Web App is active!");
}
