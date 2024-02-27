function update(value){
    let prevData = JSON.parse(sessionStorage.getItem('MD_DOMAIN_CACHED_STATUS'));
    Object.keys(value).forEach(function(val, key){
         prevData[val] = value[val];
    })
    sessionStorage.setItem('MD_DOMAIN_CACHED_STATUS', JSON.stringify(prevData));
}

function updateInit(value){
    let prevDataInit = JSON.parse(sessionStorage.getItem('MD_DOMAIN_CACHED_STATUS_INIT'));
    Object.keys(value).forEach(function(val, key){
         prevDataInit[val] = value[val];
    })
    sessionStorage.setItem('MD_DOMAIN_CACHED_STATUS_INIT', JSON.stringify(prevDataInit));
}

function checkext() {
    var value = sessionStorage.getItem('MD_DOMAIN_CACHED_STATUS_INIT');
    var value2 = sessionStorage.getItem('MD_DOMAIN_CACHED_STATUS');  
    
    update({blocked: "false"});
    updateInit({exists: "false"});
    console.log(value);
    console.log(value2);
    }
