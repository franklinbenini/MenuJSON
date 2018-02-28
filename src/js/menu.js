var data = {
    menu: [
        {id: '0', descricao: 'MENU 0', acao: null, submenu:[
            {descricao: 'menuitem 0-0',link: '0-0', acao: null, submenu: null},
            {descricao: 'menuitem 0-1',link: '0-1', acao: null, submenu: null},
            {descricao: 'menuitem 0-2',link: '0-2', acao: null, submenu: null}
            ]
        },
        {id: '1', descricao: 'MENU 1', acao: null, submenu: null},
        {id: '2', descricao: 'MENU 2', acao: null, submenu: [
            {descricao: 'menuitem 2-0',link: '2-0', acao: null, submenu: null},
            {descricao: 'menuitem 2-1',link: '2-1', acao: null, submenu: null},
            {descricao: 'menuitem 2-2',link: '2-2', acao: null, submenu:[
                {descricao: 'menuitem 2-2-0',link: '2-2-0', acao: null, submenu: null},
                {descricao: 'menuitem 2-2-1',link: '2-2-1', acao: null, submenu: null},
                {descricao: 'menuitem 2-2-2',link: '2-2-2', acao: null, submenu: null},
                {descricao: 'menuitem 2-2-3',link: '2-2-3', acao: null, submenu: null},
                {descricao: 'menuitem 2-2-4',link: '2-2-4', acao: null, submenu: null},
                {descricao: 'menuitem 2-2-5',link: '2-2-5', acao: null, submenu: null},
                {descricao: 'menuitem 2-2-6',link: '2-2-6', acao: null, submenu: null}
            ]},
            {descricao: 'menuitem 2-3',link: '2-3', acao: null, submenu: null},
            {descricao: 'menuitem 2-4',link: '2-4', acao: null, submenu: null},
            {descricao: 'menuitem 2-5',link: '2-5', acao: null, submenu: null}
            ]
        },
        {id: '3', descricao: 'MENU 3', acao: null, submenu: null}
    ]
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
}