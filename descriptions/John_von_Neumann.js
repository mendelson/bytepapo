var id = 'John_von_Neumann';

document.write(`
    <p id="${id}" class="description mb-4 tm-intro-text text-justify">
        Neste episódio, apresentamos a história de John von Neumann, matemático húngaro de origem judaica de grande destaque no mundo da computação. Separe um byte de minutos do seu dia e venha conosco no quadro Uma Byta História!</br>
        </br>
        Confira o texto adaptado deste episódio <a class="regular-item" href="bytahistoria/${id}.html" onclick="gtag('event', 'Ver texto ep ${id}');" target="_blank">aqui</a>.</br>
        </br>
        <iframe loading="lazy" src="https://open.spotify.com/embed-podcast/episode/69iKJzkDgdgqbfdJFGZjw3" width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
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
        <li><a class="regular-item" href="https://medium.com/trainingcenter/a-arquitetura-de-von-neumann-121489873fd4" target="_blank">A arquitetura de von Neumann</a></li>
    </ul>
    `);