var ss = SpreadsheetApp.getActiveSpreadsheet()
var ssheet = ss.getSheetByName('Master')

function createSheets() {
  
    var names = ssheet.getRange(711, 3, 29).getValues()
      Logger.log(names)
      Logger.log(names.length)
    
    for (i = 0; i <= names.length ; i++){
    ss.insertSheet().setName(names[i])
    }  
}

function request(url){
   var request = UrlFetchApp.fetch(url)
    var json = request.getContentText()
    var data = JSON.parse(json) 
    return data;}

function teamid(){
  var tdb = ss.getSheetByName('Team')
    var data = request('https://statsapi.web.nhl.com/api/v1/teams/')
    var array = []
     Logger.log(data)
     Logger.log(data.teams.length)
      for (var i = 0; i < data.teams.length; i++){ 
          var team = data.teams[i]
            Logger.log(data.teams[i])
            Logger.log(data.teams[i].timeZone)
            array.push([team.name,team.link,team.venue.name,team.venue.link,team.venue.city,
            team.abbreviation,team.teamName,team.locationName,team. firstYearOfPlay,
            team.division.id,team.division.name,team.division.link,team.conference.id,team.conference.name,team.conference.link,
            team.franchise.franchiseid, team.franchise.link,team. officialSiteUrl])}
    tdb.getRange(2, 1, array.length, array[0].length).setValues(array)
var array1 =["teamName","teamLink","teamVenue","TeamVenueLink","VenueCity",
            "abbreviation","Mascot","City","firstYearofPlay",
            "divisionID","divisionName","divisionLink","conferenceID","conferenceName","conferenceLink",
            "franchiseID", "franchiseLink","teamurl"]            
var array2 = []
array2.push(array1)
tdb.getRange(1, 1, 1, array1.length).setValues(array2)}
     

function test(){ var testdb = ss.getSheetByName('Sheet40')
                 var values = ["0","1","2","3","4","5","6","7","8","9"]
                 var array = []
                 for (i=0; i<values.length; i++){ 
                 var value = values [i]
                 values.push([values[0]],values[2], values[6])}
                 sheet.getRange(sheet.getLastRow()+1, 1, values.length, values[0].length).setValues(values);
                 }

function draft(){
  var draftdb = ss.getSheetByName('Draft')
    var data = request('https://records.nhl.com/site/api/draft')
      
      draftdb.getRange(1,1).setValue('playerId')
      draftdb.getRange(1,2).setValue('playerName')
      draftdb.getRange(1,3).setValue('roundNumber')
      draftdb.getRange(1,4).setValue('pickInRound')
      draftdb.getRange(1,5).setValue('overallPickNumber')
      draftdb.getRange(1,6).setValue('draftYear')
      draftdb.getRange(1,7).setValue('draftedByTeamId')
      draftdb.getRange(1,8).setValue('amateurLeague')
      draftdb.getRange(1,9).setValue('amateurClubName')
      draftdb.getRange(1,10).setValue('height')
      draftdb.getRange(1,11).setValue('weight')
      draftdb.getRange(1,12).setValue('shootsCatches')
      draftdb.getRange(1,13).setValue('teamPickHistory')
      draftdb.getRange(1,14).setValue('triCode')
      draftdb.getRange(1,15).setValue('position')
      draftdb.getRange(1,16).setValue('firstName')
      draftdb.getRange(1,17).setValue('lastName')
      draftdb.getRange(1,18).setValue('birthDate')
      draftdb.getRange(1,19).setValue('birthPlace')
      draftdb.getRange(1,20).setValue('countryCode')
      draftdb.getRange(1,21).setValue('csPlayerId')
      draftdb.getRange(1,22).setValue('removedOutright')
      draftdb.getRange(1,23).setValue('removedOutrightWhy')      
      //var range = draftdb.getRange(2, 1, 1, data.data[0].length)
      
       var array = []
         for (var i = 0; i<data.data.length; i++){var draft = data.data[i]
                                             array.push([draft.playerId,draft.playerName,draft.roundNumber,draft.pickInRound,draft.overallPickNumber,
                                             draft.draftYear,draft.draftedByTeamId,draft.amateurLeague,draft.amateurClubName,draft.height,draft.weight,
                                             draft.shootsCatches,draft.teamPickHistory,draft.triCode,draft.position,draft.firstName,draft.lastName,draft.birthDate,
                                             draft.birthPlace,draft.countryCode,draft.csPlayerId,draft.removedOutright,draft.removedOutrightWhy])
                                             }
           draftdb.getRange(draftdb.getLastRow()+1, 1, array.length,array[0].length).setValues(array)}
     
   
function stadium(){
      var stadiumdb = ss.getSheetByName('Stadium')
        var teamID= ss.getSheetByName('Team').getRange(2, 1,38).getValues()
        array = []
        for (var i=0; i<teamID.length; i++){
        var data = request('https://statsapi.web.nhl.com/api/v1/teams/'+teamID[i])
          for (var j=0; j<data.teams.length; j++){
                var si = data.teams[j]
                  Logger.log(si)
                array.push(si.teamName,si.venue.name,si.venue.link,si.venue.city,si.venue.timeZone.tz,si.abbreviation,
                si.franchise.id,si.franchise.teamName,si.franchise.link,
                si.locationName,si.teamName,si.firstYearOfPlay,si.division.id,si.division.name,si.division.link,
                si.conference.id,si.conference.name,si.conference.link,si.officialsiteurl)
                }
      }
     stadiumdb.getRange(stadiumdb.getLastRow()+1, 1, array.length, array[0].length).setValues(array)
}


     /*
     This method was abandoned since this array of ~11,000 lines timed out after about 2,000 line, so about 46,000 setValue calls.
      for (var i = 0; i<data.data.length; i++){draftdb.getRange(i+2,1).setValue(data.data[i].playerId)
                                               draftdb.getRange(i+2,2).setValue(data.data[i].playerName)
                                               draftdb.getRange(i+2,3).setValue(data.data[i].roundNumber)
                                               draftdb.getRange(i+2,4).setValue(data.data[i].pickInRound)
                                               draftdb.getRange(i+2,5).setValue(data.data[i].overallPickNumber)
                                               draftdb.getRange(i+2,6).setValue(data.data[i].draftYear)
                                               draftdb.getRange(i+2,7).setValue(data.data[i].draftedByTeamId)
                                               draftdb.getRange(i+2,8).setValue(data.data[i].amateurLeague)
                                               draftdb.getRange(i+2,9).setValue(data.data[i].amateurClubName)
                                               draftdb.getRange(i+2,10).setValue(data.data[i].height)
                                               draftdb.getRange(i+2,11).setValue(data.data[i].weight)
                                               draftdb.getRange(i+2,12).setValue(data.data[i].shootsCatches)
                                               draftdb.getRange(i+2,13).setValue(data.data[i].teamPickHistory)
                                               draftdb.getRange(i+2,14).setValue(data.data[i].triCode)
                                               draftdb.getRange(i+2,15).setValue(data.data[i].position)
                                               draftdb.getRange(i+2,16).setValue(data.data[i].firstName)
                                               draftdb.getRange(i+2,17).setValue(data.data[i].lastName)
                                               draftdb.getRange(i+2,18).setValue(data.data[i].birthDate)
                                               draftdb.getRange(i+2,19).setValue(data.data[i].birthPlace)
                                               draftdb.getRange(i+2,20).setValue(data.data[i].countryCode)
                                               draftdb.getRange(i+2,21).setValue(data.data[i].csPlayerId)
                                               draftdb.getRange(i+2,22).setValue(data.data[i].removedOutright)
                                               draftdb.getRange(i+2,23).setValue(data.data[i].removedOutrightWhy)}*/
                                               
