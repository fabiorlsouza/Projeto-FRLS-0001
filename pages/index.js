
function Home() {
    return (
    <div>
        <html>
            <head>
                <title>Site das lojinhas do Abramoff</title>
            </head>
            <body>
                <br></br>
                <center><h1>Lojinhas do Abramoff</h1></center>
                <br></br>

                <hr></hr>
            
                <br></br>
                <p>Bem vindo ao site das lojinhas do Abramoff, onde  nos preocupamos em cuidar de você acima de tudo!</p>
                
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                
                <div class="topnav" id="myTopnav">
                    <a href="#home" class="active"> Home </a>
                    <a href="#noticias"> Notícias </a>
                    <a href="#contato"> Contato </a>
                    <a href="#sobre"> Sobre nós </a>
                    <a href="javascript:void(0);" class="icon" onclick="myFunction()"></a>
                        <i class="fa fa-bars"></i>
                </div>
                <br></br>

                <hr></hr>

                <br></br>
                <h2>Loja da Vila Menck:</h2>
                Av. Presidente Médici, 2655 <br></br>
                Vila Menck - Osasco - SP<br></br>
                Brasil - CEP 06273-000<br></br>
                <br></br>
                <br></br>

                <hr></hr>

                <br></br>
                <h2>Loja da Vila Jaguara:</h2>
                Av. Cândido Portinari, 656 <br></br>
                Vila Jaguara - Osasco - SP<br></br>
                Brasil - CEP 05114-0011<br></br>
                <br></br>
                <br></br>

                <hr></hr>

                <br></br>
                <p> Deus te livre da sua feiura de Osaskense!</p>
                <p> Todos os direitos reservados.</p>
                <br></br>

                <button type="button" onclick="document.getElementById('demo').innerHTML = Data()">CLICK ME!</button>

                <p id="demo"></p>

            </body>
        </html>
    </div>
    )
}

export default Home
