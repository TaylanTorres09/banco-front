import { useEffect, useState } from "react";
import "./css/Form.css";
import get from "../services/service";
import Table from "./Table";

const Form = () => {
  const [firstDate, setFirstDate] = useState("none");
  const [lastDate, setLastDate] = useState("none");
  const [name, setName] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    get.findAll().then(obj => setData(obj));
  }, [])

  return (
    <>
      <form>
        <div>
          <label htmlFor="firstDate">Data de Início</label>
          <input
            type="date"
            name="first"
            value={firstDate}
            onChange={(e) => setFirstDate(e.target.value)}
          />

          <label htmlFor="lastDate">Data de Fim</label>
          <input
            type="date"
            name="last"
            value={lastDate}
            onChange={(e) => setLastDate(e.target.value)}
          />

          <label htmlFor="lastDate">Nome do Operador Transacionado</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <input type="button" value="Pesquisar" />
      </form>
      <Table data={data} />
    </>
  );
};

export default Form;
