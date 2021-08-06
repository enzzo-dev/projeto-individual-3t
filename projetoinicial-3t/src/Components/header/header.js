import './header.css'

 function Header(){
    return(
        <div>
            
            <header className="cabecalho-principal">
                <div className="container">
                    <img src="/assets/img/senai-logo.png" alt="Image" height="50" width="220" /> 
                    <nav className="cabecalhoPrincipal-nav">
                        <a href="#">Salas</a>
                        <a href="#">Equipamentos</a>
                        <a href="#">Usuários</a>
                        <a href="#">Sair</a>
                    </nav>
                </div>
            </header>        
        </div>  
    )
}

export default Header;
