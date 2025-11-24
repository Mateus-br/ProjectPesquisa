async function pegarDados() {
    try{
     const resposta = await fetch("https://projectpesquisa-production.up.railway.app/anuncios", { method: "GET" });
     if (resposta.ok){
        console.log(`resposta: ${resposta.json()}`)
        console.log(resposta)
     }
     else{
        console.log('error')
     }
    
    }catch{
        console.log('deu error')
    }
   

}

pegarDados();