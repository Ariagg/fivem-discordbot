module.exports = {
    /**
     * @param {object} client 
     * @param {number} seconds 
     */
    updatePlayerCount: (client, seconds) => {
        const interval = setInterval(function setStatus() {
            status = `${GetNumPlayerIndices()} Players`
            //console.log(status)
            client.user.setActivity(status, {type: 'WATCHING'})
            return setStatus;
        }(), seconds * 1000)
    }

}