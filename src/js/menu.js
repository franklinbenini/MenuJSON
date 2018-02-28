/*
    Atenção: Não funciona para testes em máquina local no Chrome / IE. Só no firefox
    No Chrome / IE só funciona depois de hospedado em um webserver.
*/
function carregaArquivoJSON(path, callback) {
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function() {
        if (httpRequest.readyState === 4) {
            if (httpRequest.status === 200) {                
                var data = JSON.parse(httpRequest.responseText);
                if (callback) callback(data);
            }
        }
    };
    httpRequest.open('GET', path);
    httpRequest.send(); 
}

function montaMenu(data, issubmenu){
    var html = (issubmenu)?'<div>':''; // Wrap with div if true
    html += '<ul>';
    for(var item in data){
        html += '<li>';
        if(typeof(data[item].submenu) === 'object'){ // An array will return 'object'
            if(issubmenu){
                html += '<a href="' + data[item].link + '">' + data[item].descricao + '</a>';
            } else {
                html += data[item].descricao; // submenumenu found, but top level list item.
            }
            html += montaMenu(data[item].submenu, true); // submenumenu found. Calling recursively same method (and wrapping it in a div)
        } else {
            html += data[item].descricao// No submenumenu
        }
        html += '</li>';
    }
    html += '</ul>';
    html += (issubmenu)?'</div>':'';
    return html;
<<<<<<< HEAD
}

function exibeMenu(idDiv)
{
    carregaArquivoJSON('src/js/menu.json', function(data){
        var html = montaMenu(data.menu, false);
        document.getElementById(idDiv).innerHTML += html;
    });
=======
>>>>>>> 0202acc839c21022c5b0fbc8d52ab993ae12be28
}