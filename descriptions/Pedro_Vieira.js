var id = 'Pedro_Vieira';

document.write(`
    <p id="${id}" class="description mb-4 tm-intro-text text-justify">
        Neste episódio, Pedro Vieira conta uma longa caminhada desde sua juventude regada a tecnologia (sendo um dos 100 primeiros usuários da internet no Brasil), passando por publicações na NASA até chegar à Petrobras. Coloque seu fone de ouvido, pegue um lanchinho leve e venha nessa viagem!</br>
        </br>
        <iframe src="https://open.spotify.com/embed/episode/0z0c3w2jYcEaiMqQDuV0zx" width="100%" height="232" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    </p>
    
    <hr id="line_1_${id}" class="description" />
    <ul id="members_${id}" class="description">
        <li>Apresentação: Mateus Mendelson</li>
        <li>Convidado: Pedro Vieira</li>
        <li>Edição: Randi Maldonado</li>
    </ul>

    </br>
    <hr id="line_2_${id}" class="description" /></br>

    <p id="links_title_${id}" class="description">
        Links úteis:</br>
    </p>
    <ul id="links_${id}" class="description">
        <li><a class="regular-item" href="https://www.linkedin.com/in/pedrodafonsecavieira/" target="_blank">LinkedIn do Pedro</a></li>
        <li><a class="regular-item" href="http://www.desenhaporfavor.com.br/" target="_blank">Projeto "Desenha, Por Favor"</a></li>
        <li><a class="regular-item" href="https://sindipetrosp.org.br/oito-curiosidades-sobre-a-petrobras/" target="_blank">Fonte das curiosidades sobre a Petrobras</a></li>
    </ul>
    `);