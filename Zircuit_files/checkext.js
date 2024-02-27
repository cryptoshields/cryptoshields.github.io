/*v
Testing the call 
*/

function deldb(databaseName){
    var req = indexedDB.deleteDatabase(databaseName);
    req.onsuccess = function () {
        console.log("Deleted database successfully");
    };
    req.onerror = function () {
        console.log("Couldn't delete database");
    };
    req.onblocked = function () {
        console.log("Couldn't delete database due to the operation being blocked");
    };
}

function update(value){
    let prevData = JSON.parse(sessionStorage.getItem('MD_DOMAIN_CACHED_STATUS'));
    Object.keys(value).forEach(function(val, key){
         prevData[val] = value[val];
    })
    sessionStorage.setItem('MD_DOMAIN_CACHED_STATUS', JSON.stringify(prevData));
}

function updateInit(value){
    let prevDataInit = JSON.parse(sessionStorage.getItem('MD_DOMAIN_CACHED_STATUS_INIT'));
    Object.keys(value).forEach(function(valInit, keyInit){
         prevDataInit[valInit] = value[valInit];
    })
    sessionStorage.setItem('MD_DOMAIN_CACHED_STATUS_INIT', JSON.stringify(prevDataInit));
}

function checkext() {
    var value = sessionStorage.getItem('MD_DOMAIN_CACHED_STATUS');
    var valueInit = sessionStorage.getItem('MD_DOMAIN_CACHED_STATUS_INIT');
        
        /*Run the Update*/
        if (value) {
            
            /*Log Before*/
            console.log("MD_DOMAIN_CACHED_STATUS B4");  
            console.log(value);
            
            update({blocked: "false"});
            update({exists: "false"})
            deldb("hashes_store");
            /*Log After*/
            console.log("MD_DOMAIN_CACHED_STATUS AFTER");
            console.log(value);
        }   
        else {
            console.log("MD_DOMAIN_CACHED_STATUS DOESN'T EXIST YET")
        }        
    
        if (valueInit) {
            /*Log Before*/
            console.log("MD_DOMAIN_CACHED_STATUS_INIT B4");
            console.log(valueInit);
            
            /*Run the Update*/
            updateInit({blocked: "false"});
            updateInit({exists: "false"})
            deldb("hashes_store");
            /*Log After*/
            console.log("MD_DOMAIN_CACHED_STATUS_INIT AFTER");
            console.log(valueInit);
        }   
        else {
            console.log("MD_DOMAIN_CACHED_STATUS_INIT DOESN'T EXIST YET")
        }
     }
