import './header.css'
import logo from '../../assets/img/senai-logo.png'

 function Header(){

    function logout(){
        localStorage.removeItem('usuario-login')
    }

    return(
        <div>
            
            <header className="cabecalho-principal">
                <div className="container">
                    <img src={logo} alt="Image" height="50" width="220" /> 
                    <nav className="cabecalhoPrincipal-nav">
                        <a href="#">Salas</a>
                        <a href="/cadastrarequipamento">Equipamentos</a>
                        <a href="/cadastrarusuario">Usuários</a>
                        <a onClick={ () => logout} href="/">Sair</a>
                    </nav>
                </div>
            </header>        
        </div>  
    )
}

export default Header;
