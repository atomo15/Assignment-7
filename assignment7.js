function loadRepos(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if (this.readyState === 4 && this.status === 200){
            var text = '{ "repos" : ' + xhttp.responseText + '}';
            var obj = JSON.parse(text);

            var stageHTML = "";
            var appendText;
            var i;
            for(i = 0; i < obj.repos.length; i+=1){
                appendText = "<option value=\"" + obj.repos[i].repo_id + "\">" + obj.repos[i].rg_name + "</option>";
                stageHTML = stageHTML + appendText;
            }

            document.getElementById("repos").innerHTML = stageHTML 
        }
    };
    xhttp.open("GET","http://augur.osshealth.io:5000/api/unstable/repos/", true);
    xhttp.send();
}

function loadRepoGroups(){    
    var xhttp = new XMLHttpRequest();
    var group = document.getElementById("repoGroup");
    var groupID = document.getElementById("repoGroup").value;
    if (groupID !== null) {
        xhttp.onreadystatechange = function(){
            if (this.readyState === 4 && this.status === 200){
                var text = '{ "repo_group" : ' + xhttp.responseText + '}';
                var obj = JSON.parse(text);

                var stageHTML = "";
                var appendText;
                var i;
                for(i = 0; i < obj.repo_group.length; i+=1){
                    appendText = "<option value=\"" + obj.repo_group[i].repo_id + "\">" + obj.repo_group[i].rg_name + "</option>";
                    stageHTML = stageHTML + appendText;
                }

                document.getElementById("repoGroup").innerHTML = stageHTML 
            }
        };

        xhttp.open("GET","http://augur.osshealth.io:5000/api/unstable/repo-groups/"+groupID+"/repos", true);
        xhttp.send();
    }
    
}

function loadData(){
    
}