function gravarCookies() {
    nome = document.forms[0]['nome'].value;
    rgm = document.forms[0]['rgm'].value;
    prof = document.forms[0]['prof'].value;

    document.cookie = 'nome='+nome+';';
    document.cookie = 'rgm='+rgm+';';
    document.cookie = 'prof='+prof+';';
};

function carregarCookies() {
    cookieArray = document.cookie.split(";");

    document.forms[0]['nome'].value = cookieArray[0].split('=')[1];
    document.forms[0]['rgm'].value = cookieArray[1].split('=')[1];
    document.forms[0]['prof'].value = cookieArray[2].split('=')[1];
};