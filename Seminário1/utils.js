function formatarData(data) {
    return `${data.toLocaleDateString()} ${data.toLocaleTimeString()}`; // Formata a data para o formato "dd/mm/aaaa hh:mm:ss"
}

module.exports = {
    formatarData
};
