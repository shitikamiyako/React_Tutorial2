import React from 'react'

// 関数コンポーネント

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
                <th>Remove</th>
            </tr>
        </thead>
    )
}

const TableBody = (props) => {
    // propsからcharacterDataプロパティを配列にマッピングする。
    const rows = props.characterData.map((row, index) => {
        // マッピングしたを取り出して描画
        return (
            // キーをindexに設定して、それに基づいてリストから描画
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td>
                    <button onClick={() => props.removeCharacter(index)}>Delete</button>
                </td>
            </tr>
        )
    })
    return <tbody>{rows}</tbody>
}

const Table = (props) => {
    // パスされたCharacterData、removeCharacterをpropsする。
    const {characterData, removeCharacter} = props

    return (
        <table>
            <TableHeader />
            {/* TableBodyコンポーネントへパス */}
            <TableBody characterData={characterData} removeCharacter={removeCharacter} />
        </table>
    )
}

// クラスコンポーネント
// class Table extends Component {
//     render() {
//         return (
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Name</th>
//                         <th>Job</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     <tr>
//                         <td>Charlie</td>
//                         <td>Janitor</td>
//                     </tr>
//                     <tr>
//                         <td>Mac</td>
//                         <td>Bouncer</td>
//                     </tr>
//                     <tr>
//                         <td>Dee</td>
//                         <td>Aspiring actress</td>
//                     </tr>
//                     <tr>
//                         <td>Dennis</td>
//                         <td>Bartender</td>
//                     </tr>
//                 </tbody>
//             </table>
//         )
//     }
// }

export default Table