exports.respond = (int, data, client) => {

  client.api.interactions(int.id, int.token).callback.post({
    data: {
        type: 4,
        data: {
            content: data
        }
    }
})

}

/*exports.edit = (int, data, client) => {
  client.api.webhooks(client.user.id, int.token).messages(undefined).patch({ data: { content: data } });
}*/