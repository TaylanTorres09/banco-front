/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

const Table = ({ data }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Dados</th>
                    <th>Valencia</th>
                    <th>Tipo</th>
                    <th>Operador</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((d) => {
                        const date = new Date(d.dataTransferencia);
                        const day = date.getDate() > 10 ? `${date.getDate()}` : `0${date.getDate()}`;
                        const month = date.getMonth()+1 > 10 ? `${date.getMonth()+1}` : `0${date.getMonth()+1}`;
                        return (
                            <tr key={d.id}>
                                <td>{`${day}/${month}/${date.getFullYear()}`}</td>
                                <td>R$ {d.valor}</td>
                                <td>{d.tipo}</td>
                                <td>{d.nomeOperadorTransacao ? d.nomeOperadorTransacao : "----"}</td>
                            </tr>
                        );
                    })
                }
            </tbody>
        </table>
    );
}

export default Table;