import React from "react"
import Footer from "../components/footer"
import Menu from "../components/menu"
import CardTurma from "../components/card-turma"
import GridContainer from "../style/Grid"


export default  function Home(){
    return(
        <GridContainer >  
            <Menu></Menu>
            <div className="controls">
                filtros e outros paranauê
            </div>

            <div className="card-container">
                <CardTurma></CardTurma>
            </div>
            

            <Footer></Footer>
        </GridContainer >
    )

}
