function formatarData(data) {
    return `${data.toLocaleDateString()} ${data.toLocaleTimeString()}`;
}

module.exports = {
    formatarData
};
