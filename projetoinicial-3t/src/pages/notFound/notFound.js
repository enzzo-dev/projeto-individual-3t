import Header from "../../Components/header/header";
import { Helmet } from "react-helmet";

function notFound(){
    return(
        <div>
            <Helmet >
                <title>SMMS - NotFound</title>
            </Helmet>
            <Header />
            <h1 style={{marginTop: "300px"}}>Error 404 - Página não encontrada</h1>
        </div>
    )
}

export default notFound;