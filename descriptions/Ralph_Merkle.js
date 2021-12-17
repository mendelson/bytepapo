var id = 'Ralph_Merkle';
var notion_url = 'https://pool-patient-050.notion.site/Ralph-Merkle-8a31084f19a949228f7ebf71817c6e9d'
 
document.write(`
    <p id="${id}" class="description mb-4 tm-intro-text text-justify">
        Neste episódio, apresentamos a história de Ralph Merkle, um cientista da computação, um dos inventores da criptografia de chave pública, o inventor das funções de hash para criptografia e, mais recentemente, pesquisador e palestrante sobre criônica. Separe um byte de minutos do seu dia e venha conosco no quadro Uma Byta História!</br>
        </br>
        Confira o texto adaptado deste episódio <a class="regular-item" href="${notion_url}" onclick="gtag('event', 'Ver texto ep ${id}');" target="_blank">aqui</a>.</br>
        </br>
        <iframe src="https://open.spotify.com/embed/episode/7m8VrU3y4sSGiRYuXQDwex?utm_source=generator" width="100%" height="232" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
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
