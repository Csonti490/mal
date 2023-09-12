document.addEventListener("DOMContentLoaded",async()=>{
    await fetch("https://api.myanimelist.net/v2/users/@me?fields=anime_statistics",{method:"GET",mode:"cors",headers:{
        'Authorization': 'Bearer d25e4c3be5d82568e84fe1d293098da4'
    }}).then((res)=>{
        if(res.ok) return res.json();
        if(res.status!=200) alert(res.status);
    }).then((content)=>{
        console.log(content);
    }).catch(()=>{
        alert("Failed the load page.");
    })
});
/*(()=>{

})();*/