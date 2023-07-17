import { useState } from "react";
import "./Form.css";

const Form = () => {
    const [firstDate, setFirstDate] = useState("none");
    const [lastDate, setLastDate] = useState("none");
    const [name, setName] = useState("");

    const handleFirstDate = (event) => {
        setFirstDate(event.target.value);
    }
    const handleLastDate = (event) => {
        setLastDate(event.target.value);
    }

    const handleName = (event) => {
        setName(event.target.value);
    }
    return (
        <form>
            <div>
                <label htmlFor="firstDate">Data de Início</label>
                <input type="date" name="first" value={firstDate} onChange={handleFirstDate}/>

                <label htmlFor="lastDate">Data de Fim</label>
                <input type="date" name="last" value={lastDate} onChange={handleLastDate}/>

                <label htmlFor="lastDate">Nome do Operador Transacionado</label>
                <input type="text" name="name"  value={name} onChange={handleName}/>
            </div>

            <input type="button" value="Pesquisar" />
        </form>
    );
}

export default Form;