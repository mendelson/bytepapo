var id = 'Mary_Celine_Fasenmyer';

document.write(`
    <p id="${id}" class="description mb-4 tm-intro-text text-justify">
        Neste episódio, apresentamos a história de Mary Celine Fasenmyer, freira e matemática americana que desenvolveu o método de Celine, um algoritmo precursor de uma série de algoritmos que auxiliam sistemas de computação algébricos, como o Wolfram Alpha. Separe um byte de minutos do seu dia e venha conosco no quadro Uma Byta História!</br>
        </br>
        Confira o texto adaptado deste episódio <a class="regular-item" href="bytahistoria/${id}.html" onclick="gtag('event', 'Ver texto ep ${id}');" target="_blank">aqui</a>.</br>
        </br>
        <iframe loading="lazy" src="https://open.spotify.com/embed/episode/4rIxMWl9QxeSnm0mQmaq5z" width="100%" height="232" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
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