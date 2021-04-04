if(window.SimpleSlide) {
    
    new SimpleSlide ({
        slide: "quote", // nome do atributo data-slide="principal"
        time: 5000, // tempo de transição dos slides
    });

    new SimpleSlide ({
        slide: "portfolio",
        time: 15000,
        nav: true
    });

}

if(window.SimpleAnime) {
    new SimpleAnime();
}

if(window.SimpleForm) {
    new SimpleForm ({
        form: ".formphp", //seletor do formulário
        button: "#submit", //seletor do botão
        erro: "<div id='form-erro'><h2>Um erro ocorreu!</h2><p>Tente novamente.</p></div>",
        sucesso: "<div id='form-sucesso'<h2>Formulário enviado com sucesso>/h2><p>Entraremos em contato em breve</p></div>",
    });
}