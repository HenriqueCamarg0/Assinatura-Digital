// ******* copia campos para o modelo de assinatura *******

function nomeAssinatura(){
   document.getElementById('nome-id').innerText = $('#nome-campo').val();
}

function cargoAssinatura(){
    document.getElementById('cargo-id').innerText = $('#cargo-campo').val();
}

function emailAssinatura(){
    document.getElementById('email-id').innerText = $('#email-campo').val();
}

function celularAssinatura(){
    document.getElementById('cel-id').innerText = $('#cel-campo').val();
}


// ******* salvar e baixar assinatura  *******

currentCanvas = null;

function validaCampos() {
    var gerar = document.getElementById("gerar"),
        nome = document.getElementById('nome-campo'),
        cargo = document.getElementById('cargo-campo'),
        email = document.getElementById('email-campo'),
        celular = document.getElementById('cel-campo');
    if (nome.value == "" || email.value == "" || cargo.value == "" || celular.value == "") {
        alert('Todos os dados!')
    }else {
        this.generate(gerar);
    }
}

function generate(gerar) {
    var salvar = document.getElementById("salvare");
        
        html2canvas(document.getElementById("assinatura-div"), {
            "logging": true //Habilita os logs
        }).then(function (canvas) {
            currentCanvas = canvas;
            salvar.disabled = false;
            salvar.hidden = false;
        }); 
}

function salva() {
    if (currentCanvas !== null) {
        canvasDownload(currentCanvas, "foto.jpeg");
    }
};

function canvasDownload(canvas, filename, formato) {
    var a = document.createElement("a");
    a.href = canvas.toDataURL("image/" + (formato ? formato : "jpeg"));
    a.download = filename;
    a.click();
}