function userForm(req, res){
    res.writeHead(200,{"content-type":"text/html"})
    res.write(`
    <form action="/submit" method="post">
        <input type="text" placeholder="enter name" name="name">
        <input type="text" placeholder="enter email" name="email">
        <button type="submit">submit</submit>
    </form>`)

    res.end()
}

module.exports = userForm