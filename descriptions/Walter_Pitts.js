var id = 'Walter_Pitts';
var notion_url = 'https://pool-patient-050.notion.site/Walter-Pitts-4b2af1108cc24598816d176bde4d3bf7'

document.write(`
    <p id="${id}" class="description mb-4 tm-intro-text text-justify">
        Neste episódio, apresentamos a história de Walter Pitts, ex-morador de rua que se tornou pesquisador no MIT e foi a primeira pessoa a modelar uma rede neural artificial. Separe um byte de minutos do seu dia e venha conosco no quadro Uma Byta História!</br>
        </br>
        Confira o texto adaptado deste episódio <a class="regular-item" href="${notion_url}" onclick="gtag('event', 'Ver texto ep ${id}');" target="_blank">aqui</a>.</br>
        </br>
        <iframe src="https://open.spotify.com/embed/episode/3IkCQibAV4oeqi1AwZQ040" width="100%" height="232" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    </p>
    
    <hr id="line_1_${id}" class="description" />
    <ul id="members_${id}" class="description">
        <li>Apresentação: Mateus Mendelson</li>
        <li>Pesquisa biográfica: Hugo Tadashi</li>
        <li>Edição: Randi Maldonado</li>
    </ul>

    </br>
    <hr id="line_2_${id}" class="description" /></br>

    <p id="links_title_${id}" class="description">
        Links úteis:</br>
    </p>
    <ul id="links_${id}" class="description">
        <li><a class="regular-item" href="https://www.linkedin.com/in/hugo-k-2b7476157/" target="_blank">LinkedIn do Hugo Tadashi</a></li>
    </ul>
    `);