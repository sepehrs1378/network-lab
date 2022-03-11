
// Provide a default path to dwr.engine
if (dwr == null) var dwr = {};
if (dwr.engine == null) dwr.engine = {};
if (DWREngine == null) var DWREngine = dwr.engine;

if (DWRServices == null) var DWRServices = {};
DWRServices._path = '/ebanking/dwr';
DWRServices.addAccountToFavorite = function(p0, p1, p2, p3, p4, p5, p6, callback) {
  dwr.engine._execute(DWRServices._path, 'DWRServices', 'addAccountToFavorite', p0, p1, p2, p3, p4, p5, p6, callback);
}
DWRServices.addMellatBankAccountToFavorite = function(p0, p1, p2, p3, p4, p5, p6, callback) {
  dwr.engine._execute(DWRServices._path, 'DWRServices', 'addMellatBankAccountToFavorite', p0, p1, p2, p3, p4, p5, p6, callback);
}
DWRServices.addShebaAccountToFavorite = function(p0, p1, p2, p3, p4, p5, p6, callback) {
  dwr.engine._execute(DWRServices._path, 'DWRServices', 'addShebaAccountToFavorite', p0, p1, p2, p3, p4, p5, p6, callback);
}
DWRServices.addShetabCardToFavorite = function(p0, p1, p2, p3, p4, p5, p6, callback) {
  dwr.engine._execute(DWRServices._path, 'DWRServices', 'addShetabCardToFavorite', p0, p1, p2, p3, p4, p5, p6, callback);
}
DWRServices.addMellatCardToFavorite = function(p0, p1, p2, p3, p4, p5, p6, callback) {
  dwr.engine._execute(DWRServices._path, 'DWRServices', 'addMellatCardToFavorite', p0, p1, p2, p3, p4, p5, p6, callback);
}
DWRServices.addOtherFacilityReimburseNumberToFavorite = function(p0, p1, p2, p3, p4, p5, p6, callback) {
  dwr.engine._execute(DWRServices._path, 'DWRServices', 'addOtherFacilityReimburseNumberToFavorite', p0, p1, p2, p3, p4, p5, p6, callback);
}
DWRServices.getMellatBankAccountInfo = function(p0, p1, p2, callback) {
  dwr.engine._execute(DWRServices._path, 'DWRServices', 'getMellatBankAccountInfo', p0, p1, p2, callback);
}
DWRServices.changeLocale = function(p0, callback) {
  dwr.engine._execute(DWRServices._path, 'DWRServices', 'changeLocale', p0, callback);
}
DWRServices.getConfirmerDetails = function(p0, p1, p2, p3, p4, callback) {
  dwr.engine._execute(DWRServices._path, 'DWRServices', 'getConfirmerDetails', p0, p1, p2, p3, p4, callback);
}
DWRServices.getScheduledFundTransferInfo = function(p0, p1, p2, p3, p4, callback) {
  dwr.engine._execute(DWRServices._path, 'DWRServices', 'getScheduledFundTransferInfo', p0, p1, p2, p3, p4, callback);
}
DWRServices.getTargetShebaCodeInfo = function(p0, callback) {
  dwr.engine._execute(DWRServices._path, 'DWRServices', 'getTargetShebaCodeInfo', p0, callback);
}
DWRServices.updateFacilityBranchList = function(p0, p1, p2, p3, p4, callback) {
  dwr.engine._execute(DWRServices._path, 'DWRServices', 'updateFacilityBranchList', p0, p1, p2, p3, p4, callback);
}
DWRServices.getCitiesOfProvince = function(p0, callback) {
  dwr.engine._execute(DWRServices._path, 'DWRServices', 'getCitiesOfProvince', p0, callback);
}
DWRServices.getCountryProvinceList = function(callback) {
  dwr.engine._execute(DWRServices._path, 'DWRServices', 'getCountryProvinceList', callback);
}
DWRServices.getBranchesOfCity = function(p0, p1, p2, callback) {
  dwr.engine._execute(DWRServices._path, 'DWRServices', 'getBranchesOfCity', p0, p1, p2, callback);
}
DWRServices.getHajCitiesOfProvince = function(p0, callback) {
  dwr.engine._execute(DWRServices._path, 'DWRServices', 'getHajCitiesOfProvince', p0, callback);
}
DWRServices.getHajCityBranches = function(p0, p1, callback) {
  dwr.engine._execute(DWRServices._path, 'DWRServices', 'getHajCityBranches', p0, p1, callback);
}
DWRServices.getDepositAccountOwner = function(p0, p1, callback) {
  dwr.engine._execute(DWRServices._path, 'DWRServices', 'getDepositAccountOwner', p0, p1, callback);
}
DWRServices.getFundTotalTransferredAmount = function(p0, p1, callback) {
  dwr.engine._execute(DWRServices._path, 'DWRServices', 'getFundTotalTransferredAmount', p0, p1, callback);
}
DWRServices.getSubActivitiesList = function(callback) {
  dwr.engine._execute(DWRServices._path, 'DWRServices', 'getSubActivitiesList', callback);
}
DWRServices.getSubActivityDescList = function(p0, p1, callback) {
  dwr.engine._execute(DWRServices._path, 'DWRServices', 'getSubActivityDescList', p0, p1, callback);
}
DWRServices.getBranchInfo = function(p0, callback) {
  dwr.engine._execute(DWRServices._path, 'DWRServices', 'getBranchInfo', p0, callback);
}
DWRServices.getShebaDetailFromCentralBank = function(p0, p1, p2, callback) {
  dwr.engine._execute(DWRServices._path, 'DWRServices', 'getShebaDetailFromCentralBank', p0, p1, p2, callback);
}
DWRServices.getAccountBalance = function(p0, p1, callback) {
  dwr.engine._execute(DWRServices._path, 'DWRServices', 'getAccountBalance', p0, p1, callback);
}
DWRServices.getDetailSellRowInfo = function(p0, p1, callback) {
  dwr.engine._execute(DWRServices._path, 'DWRServices', 'getDetailSellRowInfo', p0, p1, callback);
}
DWRServices.getSellRowInfo = function(p0, p1, callback) {
  dwr.engine._execute(DWRServices._path, 'DWRServices', 'getSellRowInfo', p0, p1, callback);
}
DWRServices.getJobLevel2 = function(p0, p1, callback) {
  dwr.engine._execute(DWRServices._path, 'DWRServices', 'getJobLevel2', p0, p1, callback);
}
DWRServices.getJobLevel3 = function(p0, p1, callback) {
  dwr.engine._execute(DWRServices._path, 'DWRServices', 'getJobLevel3', p0, p1, callback);
}
DWRServices.getLongTermAccsInfo = function(p0, p1, callback) {
  dwr.engine._execute(DWRServices._path, 'DWRServices', 'getLongTermAccsInfo', p0, p1, callback);
}
DWRServices.sendSmsOtpCodeForLogin = function(p0, p1, p2, p3, p4, callback) {
  dwr.engine._execute(DWRServices._path, 'DWRServices', 'sendSmsOtpCodeForLogin', p0, p1, p2, p3, p4, callback);
}
DWRServices.fetchUsersOther = function(p0, p1, callback) {
  dwr.engine._execute(DWRServices._path, 'DWRServices', 'fetchUsersOther', p0, p1, callback);
}
DWRServices.fetchPansOther = function(p0, p1, p2, p3, p4, callback) {
  dwr.engine._execute(DWRServices._path, 'DWRServices', 'fetchPansOther', p0, p1, p2, p3, p4, callback);
}
DWRServices.fetchPansOwnerAcc = function(p0, p1, p2, callback) {
  dwr.engine._execute(DWRServices._path, 'DWRServices', 'fetchPansOwnerAcc', p0, p1, p2, callback);
}
