/**
 * Gerador de Assinatura Digital
 * Script para gerenciamento e validação dos campos da assinatura
 */

// Função para atualizar o nome na assinatura
function nomeAssinatura() {
    const nome = document.getElementById('nome-campo').value;
    document.getElementById('nome-id').textContent = nome || 'Julia Liberato';
    validaFeedback('nome-campo', 'nome-feedback');
}

// Função para atualizar o cargo na assinatura
function cargoAssinatura() {
    const cargo = document.getElementById('cargo-campo').value;
    document.getElementById('cargo-id').textContent = cargo || 'Comercial';
    validaFeedback('cargo-campo', 'cargo-feedback');
}

// Função para atualizar o email na assinatura
function emailAssinatura() {
    const email = document.getElementById('email-campo').value;
    document.getElementById('email-id').textContent = email || 'comercial@javagas.com.br';
    validaFeedback('email-campo', 'email-feedback', 'email');
}

// Função para atualizar o celular na assinatura
function celularAssinatura() {
    const celular = document.getElementById('cel-campo').value;
    document.getElementById('cel-id').textContent = celular || '(11) 94736-0198';
    validaFeedback('cel-campo', 'cel-feedback', 'telefone');
}

// Função para atualizar o telefone fixo na assinatura
function fixoAssinatura() {
    const fixo = document.getElementById('fixo-campo').value;
    document.getElementById('fixo-id').textContent = fixo || '(11) 4608-5285';
}

// Função para validar campos e mostrar feedback
function validaFeedback(campoId, feedbackId, tipo) {
    const campo = document.getElementById(campoId);
    const feedback = document.getElementById(feedbackId);
    
    if (!campo.value) {
        feedback.style.display = 'block';
        campo.classList.add('is-invalid');
        return false;
    } else if (tipo === 'email' && !validaEmail(campo.value)) {
        feedback.style.display = 'block';
        feedback.textContent = 'Por favor, insira um email válido.';
        campo.classList.add('is-invalid');
        return false;
    } else if (tipo === 'telefone' && !validaTelefone(campo.value)) {
        feedback.style.display = 'block';
        feedback.textContent = 'Por favor, insira um número de telefone válido.';
        campo.classList.add('is-invalid');
        return false;
    } else {
        feedback.style.display = 'none';
        campo.classList.remove('is-invalid');
        campo.classList.add('is-valid');
        return true;
    }
}

// Função para validar email
function validaEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

// Função para validar telefone
function validaTelefone(telefone) {
    const re = /^(\(\d{2}\)\s?)?\d{4,5}-\d{4}$/;
    return re.test(telefone);
}

// Função para validar todos os campos
function validaCampos() {
    const nomeValido = validaFeedback('nome-campo', 'nome-feedback');
    const cargoValido = validaFeedback('cargo-campo', 'cargo-feedback');
    const emailValido = validaFeedback('email-campo', 'email-feedback', 'email');
    const celValido = validaFeedback('cel-campo', 'cel-feedback', 'telefone');
    
    if (nomeValido && cargoValido && emailValido && celValido) {
        document.getElementById('salvare').hidden = false;
        document.getElementById('salvare').disabled = false;
        
        // Adicionar uma animação de feedback
        const assinaturaDiv = document.getElementById('assinatura-div');
        assinaturaDiv.style.transition = 'box-shadow 0.3s ease';
        assinaturaDiv.style.boxShadow = '0 0 0 2px #0d6efd';
        
        setTimeout(() => {
            assinaturaDiv.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
        }, 1000);
    }
}

// Função para salvar a assinatura
function salva() {
    html2canvas(document.getElementById('assinatura-div')).then(canvas => {
        const link = document.createElement('a');
        link.download = 'assinatura-javagas.png';
        link.href = canvas.toDataURL();
        link.click();
    });
}

// Inicializar todos os tooltips quando o documento estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    var tooltips = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltips.map(function(tooltip) {
        return new bootstrap.Tooltip(tooltip);
    });
});