const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;
const nodemailer = require('nodemailer');

server.use(middlewares);
server.use(router);

server.listen(port, () => console.log("server is alive"));

server.post('/sendmail', (req, res) => {
    sendTheMail(req.body)
    res.render('./html/contatoLayout')
})

// mailer

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'contatoarch.vus@gmail.com',
        pass: 'arquiteturaviva061'
    }
});

function constructMail(form) {

    var allinformations =
    {
        "nomeProjeto": `${form.nomeProjeto}`,
        "escritorio": `${form.escritorio}`,
        "localEscritorio": `${form.localEscritorio}`,
        "emailContato": `${form.emailContato}`,
        "website": `${form.website}`,

        "anoProjeto": `${form.anoProjeto}`,
        "areaConstruida": `${form.areaBruta}`,
        "localProjeto": `${form.localProjeto}`,
        "arquitetoLider": `${form.arquitetoLider}`,

        "creditos": `${form.creditos}`,
        "emailArtista": `${form.emailArtista}`,
        "perfilArtista": `${form.perfilArtista}`,
        "creditosVideo": `${form.creditosVideo}`,
        "linkDoVideo": `${form.linkDoVideo}`,

        "Imagem1": `${form.imagem1}`,
        "Imagem2": `${form.imagem2}`,
        "Imagem3": `${form.imagem3}`,
        "Imagem4": `${form.imagem4}`,

        "implatacaoDesenho": `${form.implatacaoDesenho}`,
        "ilantaBaixaDesenho": `${form.ilantaBaixaDesenho}`,
        "ilantaBaixaDesenho2": `${form.ilantaBaixaDesenho2}`,
        "cortesDesenho": `${form.cortesDesenho}`,
        "cortesDesenho2": `${form.cortesDesenho2}`,
        "elevacoesDesenho1": `${form.elevacoesDesenho1}`,
        "elevacoesDesenho2": `${form.elevacoesDesenho2}`,
        "isometricaDesenho": `${form.isometricaDesenho}`,
        "detalheConstrutivoDesenho": `${form.detalheConstrutivoDesenho}`,

        "croqui": `${form.croqui}`,
        "croqui2": `${form.croqui2}`,

        "intro": `${form.intro}`,
        "textDescritpion": `${form.textDescritpion}`,
        "textComments": `${form.textComments}`,
    }

    return mail = {
        from: 'contatoarch.vus@gmail.com',
        to: 'contatoarch.vus@gmail.com',
        subject: 'Project sended by arch.vus website',
        text: `${JSON.stringify(allinformations)}`
    };
}

function sendTheMail(form) {
    var mail = constructMail(form)
    console.log(mail)

    transporter.sendMail(mail, (error, info) => {
        if (error) {
            console.log(error)
        } else {
            console.log('Email sent: ' + info.response);
        }
    })

}
