document.getElementById("submit").onclick = async function() {
    var serverName = document.getElementById("minehut-server").value;
    const response = await fetch("https://api.minehut.com/server/" + serverName +"?byName=true");
    const data = await response.json();
    const serverData = data.server;
    let servertype = serverData.server_version_type;
    let motd = serverData.motd;
    let visibility = serverData.visibility;
    let server_plan = serverData.server_plan;
    let storage_node = serverData.storage_node;
    let name = serverData.name;
    let creation = serverData.creation;
    let online = serverData.online;
    let playerCount = serverData.playerCount;
    var creation_date = new Date(creation)
    document.getElementById("welcome").style.display="none";
    document.getElementById("name").style.display="block";
    document.getElementById("checkanotherserver").style.display="block";
    document.getElementById("name").innerText = name;
    document.getElementById("online").innerText = online;
    document.getElementById("data1").style.display="block";
    document.getElementById("motd").innerText = motd;
    document.getElementById("data2").style.display="block";
    document.getElementById("server-type").innerText = servertype;
    document.getElementById("data3").style.display="block";
    document.getElementById("visibility").innerText = visibility;
    document.getElementById("data4").style.display="block";
    document.getElementById("server-plan").innerText = server_plan;
    document.getElementById("data5").style.display="block";
    document.getElementById("playerCount").innerText = playerCount;
    document.getElementById("data6").style.display="block";
    document.getElementById("creation").innerText = creation;
    document.getElementById("data7").style.display="block";
    document.getElementById("online").innerText = online;
    document.getElementById("data8").style.display="block";
    document.getElementById("data9").style.display="block";
    document.getElementById("creationdate").innerText = creation_date;
    document.getElementById("storage-node").innerText = storage_node;
}
document.getElementById("refresh").onclick = function() {
    window.location.reload();
}