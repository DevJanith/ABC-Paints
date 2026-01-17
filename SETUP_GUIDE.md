# Google Services Setup Guide for ABC Paints

This guide explains how to set up the "backend" for your website using your personal Google account. This allows you to store products, receive contact messages, and register contractors without paying for a server or database.

## Architecture Overview
1.  **Products**: Your website *reads* data from a public Google Sheet (like a CSV).
2.  **Forms (Contact/Contractor)**: Your website *sends* data to a Google Apps Script, which then *saves* it to the Google Sheet.

---

## Step 1: Create the Google Sheet

1.  Go to [Google Sheets](https://sheets.google.com) and create a New Spreadsheet.
2.  Name it `ABC Paints Database`.
3.  Create **three tabs (sheets)** at the bottom named exactly: `Products`, `Contractors`, `Contact`.

### Setup Columns
**Tab 1: `Products`** (Row 1 headers)
```
product_id, product_name, product_name_si, category_en, category_si, description_en, description_si, coverage, packaging, usage_area_en, usage_area_si, product_owner, brand_name, image_url, is_active, price
```
*   `_en` and `_si` suffix columns require English and Sinhala text respectively.
*   `product_owner`: Enter "ABC" or "OTHER".
*   `is_active`: Enter "TRUE" or "FALSE".
*   `image_url`: Direct link to image.

**Tab 2: `Locations`** (Row 1 headers)
```
id, name, type, address, city, phone, latitude, longitude, google_map_url
```
*   `type`: Enter "official" or "retailer".
*   `latitude`, `longitude`: Decimal coordinates (e.g., 6.9271, 79.8612).

**Tab 3: `Contractors`** (Row 1 headers)
```
Date, Full Name, Company, Phone, Location, Work Type
```

**Tab 4: `Contact`** (Row 1 headers)
```
Date, Name, Email, Phone, Message
```

### Share the Sheet
1.  Click the **Share** button in the top right.
2.  Under "General access", change it to **Anyone with the link** -> **Viewer**.
    *   *Why? This allows the website to read the Products list publicly.*
3.  Copy the URL. It looks like: `https://docs.google.com/spreadsheets/d/123456789ABC/edit...`
4.  The long string between `/d/` and `/edit` is your **SHEET_ID**. Save this.

---

## Step 2: Create the Google Apps Script (The Backend)

1.  In your Google Sheet, go to **Extensions** > **Apps Script**.
2.  A new tab will open with a code editor.
3.  Delete any code there and paste the following:

```javascript
const SHEET_ID = "PASTE_YOUR_SHEET_ID_HERE"; // <--- PASTE YOUR ID HERE

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.tryLock(10000);

  try {
    const doc = SpreadsheetApp.openById(SHEET_ID);
    const data = JSON.parse(e.postData.contents);
    
    if (data.type === 'CONTRACTOR') {
      const sheet = doc.getSheetByName('Contractors');
      sheet.appendRow([
        new Date(),
        data.fullName,
        data.companyName,
        data.phone,
        data.location,
        data.workType
      ]);
    } 
    else if (data.type === 'CONTACT') {
      const sheet = doc.getSheetByName('Contact');
      sheet.appendRow([
        new Date(),
        data.name,
        data.email,
        data.phone,
        data.message
      ]);
    }

    return ContentService.createTextOutput(JSON.stringify({ result: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (e) {
    return ContentService.createTextOutput(JSON.stringify({ result: 'error', error: e.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

// Handle CORS (Cross-Origin Resource Sharing)
function doOptions(e) {
  var headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type"
  };
  return ContentService.createTextOutput("").setMimeType(ContentService.MimeType.TEXT);
}
```

4.  **Important**: Replace `"PASTE_YOUR_SHEET_ID_HERE"` with the ID you copied in Step 1.
5.  Press **Save** (Floppy disk icon).

---

## Step 3: Deploy the Script

1.  Click the blue **Deploy** button > **New deployment**.
2.  Click the simplified gear icon (Select type) > **Web app**.
3.  Fill in the details:
    *   **Description**: "ABC Paints Backend"
    *   **Execute as**: "Me" (your email)
    *   **Who has access**: **Anyone** (This is crucial! It allows your site visitors to submit forms without logging into Google).
4.  Click **Deploy**.
5.  You might be asked to **Authorize access**.
    *   Click "Review permissions".
    *   Choose your account.
    *   You might see a warning "Google hasn't verified this app" (since you just created it). Click **Advanced** > **Go to (Untitled project) (unsafe)**.
    *   Click **Allow**.
6.  Copy the **Web App URL**. It looks like `https://script.google.com/macros/s/.../exec`.

---

## Step 4: Connect to Your Website

1.  Open your project in VS Code.
2.  Open the file: `src/services/api.ts`.
3.  Update the configuration at the top:

```typescript
// src/services/api.ts

// Replace with the ID from Step 1
const SHEET_ID = '123456789ABC...'; 

// Replace with the Web App URL from Step 3
const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/.../exec';
```

## How Testing Works

1.  **Products**: Add a row to your `Products` sheet. Refresh your website (`/products`). It should appear instantly.
2.  **Forms**: Go to "Contact Us" on your site. Fill the form and submit.
    *   Check your Google Sheet `Contact` tab. A new row should appear with the data!

---
**Note on CORS**: If you see "CORS error" in the browser console, it's usually because the `doOptions` function wasn't deployed or "Who has access" wasn't set to "Anyone".
