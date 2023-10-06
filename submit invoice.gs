function submitData2() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var purchaseOrderSheet = ss.getSheetByName("Purchase Order");
  var penjualanSheet = ss.getSheetByName("Penjualan");
  var stokTerjualSheet = ss.getSheetByName("Stok Terjual");
  // Get the last row of data in Penjualan sheet
  var penjualanLastRow = penjualanSheet.getLastRow()+1;
  var date = purchaseOrderSheet.getRange("L7").getValue();
  var idmember = purchaseOrderSheet.getRange("D7").getValue();
  var member = purchaseOrderSheet.getRange("D8").getValue();
  var name = purchaseOrderSheet.getRange("D9").getValue();
  var contact = purchaseOrderSheet.getRange("D10").getValues();
  var city = purchaseOrderSheet.getRange("D11").getValues();
  var channel = purchaseOrderSheet.getRange("L8").getValues();
  var orderid = purchaseOrderSheet.getRange("L9").getValues();
  var ekspedisi = purchaseOrderSheet.getRange("L10").getValues();
  var datas = purchaseOrderSheet.getRange("R6:R11").getValues(); 
  var newData = [["","","","",date,idmember,member, name,contact, city,"",channel,orderid,ekspedisi].concat(datas.flat())]; 
  var rangeToMove = penjualanSheet.getRange(penjualanLastRow, 1, newData.length, newData[0].length);
  rangeToMove.setValues(newData);
  // Transfer data from Purchase Order to Stok Terjual
  var purchaseOrderData = purchaseOrderSheet.getDataRange().getValues();
  var stokTerjualData = [];
  
  for (var i = 14; i < purchaseOrderData.length; i++) {
    if(purchaseOrderSheet.getRange(i,2).isBlank() == false )
    {
    var productCode = purchaseOrderData[i][1];
    var quantity = purchaseOrderData[i][6];
    var rowData = ["","","","",date,channel,orderid,productCode,"","","",quantity];
    stokTerjualData.push(rowData);
  }}
  var stokTerjualRange = stokTerjualSheet.getRange(stokTerjualSheet.getLastRow() + 1, 1, stokTerjualData.length, 12);
  stokTerjualRange.setValues(stokTerjualData);var stokTerjualLastRow = stokTerjualSheet.getLastRow();stokTerjualSheet.deleteRow(stokTerjualLastRow);
  purchaseOrderSheet.getRange("D8:D11").clearContent();
  purchaseOrderSheet.getRange("L7:L11").clearContent();
  purchaseOrderSheet.getRange("B15:I").clearContent();
  //purchaseOrderSheet.getRange("G15:G").clearContent();
  rangeToClear = ss.getRange('L14').getNextDataCell(SpreadsheetApp.Direction.DOWN);
  rangeToClear.offset(-4, 0, 2).setValue('0,00%');
  rangeToClear.offset(-7, 0, 3).setValue('Rp0');
