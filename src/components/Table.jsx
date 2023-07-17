/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import "./css/table.css";


const Table = ({ data, totalBalance, periodBalance }) => {

    return (
        <><div>
            <p>
                Saldo Total: R$ {`${totalBalance}`.replace(".", ",")} &emsp; &emsp;
                Saldo no Período: R$ {`${periodBalance}`.replace(".", ",")}
            </p>
        </div>
        <table id="bank">

                <thead>
                    <tr>
                        <th>Dados</th>
                        <th>Valencia</th>
                        <th>Tipo</th>
                        <th>Operador</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((d) => {
                        const date = new Date(d.dataTransferencia);
                        const day = date.getDate() > 10 ? `${date.getDate()}` : `0${date.getDate()}`;
                        const month = date.getMonth() + 1 > 10 ? `${date.getMonth() + 1}` : `0${date.getMonth() + 1}`;
                        return (
                            <tr key={d.id}>
                                <td>{`${day}/${month}/${date.getFullYear()}`}</td>
                                <td>R$ {`${d.valor.toFixed(2)}`.replace(".", ",")}</td>
                                <td>{d.tipo}</td>
                                <td>{d.nomeOperadorTransacao ? d.nomeOperadorTransacao : "----"}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table></>
    );
}

export default Table;