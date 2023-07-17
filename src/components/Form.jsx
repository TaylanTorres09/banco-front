import { useEffect, useState } from "react";
import "./css/Form.css";
import get from "../services/service";
import Table from "./Table";

const Form = () => {
  const [firstDate, setFirstDate] = useState("none");
  const [lastDate, setLastDate] = useState("none");
  const [name, setName] = useState("");

  const [all, setAll] = useState(false);
  const [operator, setOperator] = useState();
  const [date, setDate] = useState();

  const [data, setData] = useState([]);

  const handleSearch = () => {
    if (firstDate === "none" && lastDate === "none" && name === "") {
      setAll(true);
    } else if (firstDate === "none" && lastDate === "none" && name !== "") {
        setOperator(name);
    } else if (firstDate !== "none" && lastDate !== "none" && name === "") {
        setDate({
            firstDate,
            lastDate
        });
    }
    setFirstDate("none");
    setLastDate("none");
    setName("");
  };

  useEffect(() => {
    get.findAll().then((obj) => setData(obj));
    setAll(false);
  }, [all]);

  useEffect(() => {
    get.findByNameOperador(operator).then((obj) => setData(obj));
    setOperator();
  }, [operator]);

  useEffect(() => {
    get.findByNameOperador(operator).then((obj) => setData(obj));
    setOperator();
  }, [operator]);

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
            required={firstDate !== "none" ? true : false}
          />

          <label htmlFor="lastDate">Nome do Operador Transacionado</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <input type="button" value="Pesquisar" onClick={handleSearch} />
      </form>
      <Table data={data} />
    </>
  );
};

export default Form;
