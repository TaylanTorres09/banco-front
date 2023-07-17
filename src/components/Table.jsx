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
                        return (
                            <tr key={d.id}>
                                <td>{d.dataTransferencia}</td>
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