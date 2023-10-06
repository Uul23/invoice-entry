Project Description
This Google Apps Script project involves automating data transfer and processing between different Google Sheets. The script performs the following tasks:

Submit Data to Penjualan (Sales) Sheet

Copies data from a Purchase Order Sheet to a Penjualan (Sales) Sheet.
Retrieves information such as date, member details, channel, order ID, and more from the Purchase Order Sheet.
Appends the data as a new row in the Penjualan Sheet.
Transfer Data to Stok Terjual (Sold Stock) Sheet

Transfers relevant data from the Purchase Order Sheet to a Stok Terjual (Sold Stock) Sheet.
Collects data like product codes and quantities for items purchased.
Appends this data as new rows in the Stok Terjual Sheet.
Deletes the processed data rows from the Purchase Order Sheet.
Clear Data in Purchase Order Sheet

Clears specific ranges of data in the Purchase Order Sheet to prepare it for new entries.
How to Use
To use this script, follow these steps:

Open your Google Sheets document that contains the Purchase Order, Penjualan, and Stok Terjual sheets.

Make sure the script is correctly associated with your Google Sheets document.

Run the submitData2() function, which will execute the data transfer and processing tasks.

Important Notes
This script assumes specific cell locations in the Purchase Order Sheet for data extraction. Make sure your Purchase Order Sheet matches this structure.

The script is designed for specific use cases, so ensure that the data in your sheets aligns with the expected format.

Be cautious when running the script, as it may modify your data.

Author
Musnida Ulya


