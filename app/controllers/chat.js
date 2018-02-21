module.exports.startChat = (app, req, res) => {

  var dataForm = req.body;

  req.assert('nickname', 'O Nickname é obrigatório!').notEmpty();
  req.assert('nickname', 'O Nickname deve ter entre 3 e 15 caracteries!').len(3, 15);

  var errors = req.validationErrors();

  if(errors) {
    res.render('index', {errors})
    return;
  }

  app.get('io').emit('msgToClient', {nickname: dataForm.nickname, msg: ' acabou de entrar no chat'});

  res.render('chat', {dataForm});

}
