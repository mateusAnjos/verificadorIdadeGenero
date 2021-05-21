function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var formAno = document.getElementById('txtano')
    var res = document.getElementById('res')


    if(formAno.value.length==0 || formAno.value>ano){
        window.alert(" [ERRO] Verifique os dados e tente novamente")
    } else{
       var formSex = document.getElementsByName('radsex')
       var idade = ano - formAno.value
       
       var genero =""
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')

       if (formSex[0].checked){
        genero = "Homem"
        if(idade >=0 && idade <10){
            //criança/bebe
            img.setAttribute('src','img/bebehomem.png')
        }else if( idade < 21){
            // jovem
            img.setAttribute('src','img/jovem-homem.png')
        }else if (idade < 50){
            //adulto
            img.setAttribute('src','img/homemadulto.png')
        } else{
            //idoso
            img.setAttribute('src','img/idoso.png')
        }
       }else if(formSex[1].checked){
           genero = "Mulher"
           if(idade >=0 && idade <10){
            //criança/bebe
            img.setAttribute('src','img/bebemenina.png')
        }else if( idade < 21){
            // jovem
            img.setAttribute('src','img/jovemmulher.png')
        }else if (idade < 50){
            //adulta
            img.setAttribute('src','img/mulheradulta.png')
        } else{
            //idosa
            img.setAttribute('src','img/dosa.png')
        }
       }else if(formSex[2].checked){
        genero = "Não-binário"
        img.setAttribute('src','img/nb.png')

    }
       res.innerHTML = `Detectamos ${genero} com  ${idade-1} ou ${idade} anos`
       res.appendChild(img)
    }

}