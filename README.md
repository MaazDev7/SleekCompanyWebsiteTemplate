# 🌑 SleekCompanyWebsiteTemplate


Welcome to the `SleekCompanyWebsiteTemplate`
This template is designed to create a sleek, professional, and minimalistic company website with a dark theme.

## 📖 Overview

This template includes the following:
- **Loader**
- **AOS JS library effect for fadeup appearance**
- **Welcome Section**
- **About**
- **Services**
- **Why Us**
- **Contact**
- **Social Links and detailed footer**

## ✨ Features
- Responsive design
- Dark theme
- Minimalistic layout
- Easy to customize

## 🧪 Ingredients

- **HTML**
- **CSS**
- **JavaScript**
- **AOS JavaScript Library**
- **Bootstrap**
- **Bootstrap Icons**

## 🚀 Getting Started

Follow these instructions to set up and customize the template for your own use.

### 📥 Installation

1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/maazkhandev75/SleekCompanyWebsiteTemplate.git
   ```
2. Open the project directory
   ```bash
   cd SleekCompanyWebsiteTemplate
   ```
## 🛠️ Customization

**1. Replace images**
- The img directory contains black placeholder images. For best results, replace these images with your own logos and pictures.
- Make sure your images are the same size as the placeholders provided to maintain the layout and design consistency.
- You can find the images to replace in assets/img folder


**2. Edit Content**
- Open the index.html file and replace the placeholder text with your company’s details.
- Customize the section headings, paragraphs, and social links to suit your needs.

**3. Edit manifest.json file**
- change the company name in the manifest.json file for adding shortcut to homescreen in android devices, also for apple add to home screen replace the apple-touch-icon.png image in the img folder with you own alphabet or logo image

## 📧 Setting Up the Contact Form API

Follow these steps to set up the Google Sheets API for the contact form:

### 1. Create a Google Sheet
- Create a new Google Sheet and name it **"Contact Form"** (or any other name you prefer).

### 2. Access Google Apps Script
- Go to the **Extensions** tab in your Google Sheet.
- Click on **Apps Script** to open the script editor.
- Name the script **"Contact Form"**.

### 3. Add the Script
- Paste the following code into the script editor. This code is adapted from the repository [form-to-google-sheets](https://github.com/jamiewilson/form-to-google-sheets):

  ```javascript
  var sheetName = 'Sheet1'
  var scriptProp = PropertiesService.getScriptProperties()

  function intialSetup () {
    var activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet()
    scriptProp.setProperty('key', activeSpreadsheet.getId())
  }

  function doPost (e) {
    var lock = LockService.getScriptLock()
    lock.tryLock(10000)

    try {
      var doc = SpreadsheetApp.openById(scriptProp.getProperty('key'))
      var sheet = doc.getSheetByName(sheetName)

      var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0]
      var nextRow = sheet.getLastRow() + 1

      var newRow = headers.map(function(header) {
        return header === 'timestamp' ? new Date() : e.parameter[header]
      })

      sheet.getRange(nextRow, 1, 1, newRow.length).setValues([newRow])

      return ContentService
        .createTextOutput(JSON.stringify({ 'result': 'success', 'row': nextRow }))
        .setMimeType(ContentService.MimeType.JSON)
    }

    catch (e) {
      return ContentService
        .createTextOutput(JSON.stringify({ 'result': 'error', 'error': e }))
        .setMimeType(ContentService.MimeType.JSON)
    }

    finally {
      lock.releaseLock()
    }
  }
  ```
### 4. Run the Script
- Run the script for the first time by selecting the intialSetup function.
- You will be prompted to authorize the script to access your Google account. Complete the authorization process.

### 5. Deploy as a Web App
- After the script runs successfully, click on Deployment > New deployment.
- Choose the type as Web app.
- Configure the deployment settings, ensuring that:
  - Execute as: Me
  - Who has access: Anyone
- Deploy the web app.

### 6. Use the Web App URL
- After deployment is complete, you will receive a link to the web app.
- Copy this link and use it as the 'SCRIPT URL' in your contact form's JavaScript code to enable form submissions.

Your contact form is now set up and ready to receive messages, which will be saved directly to your Google Sheet!

## 📄 License
This project is licensed under the MIT License.
