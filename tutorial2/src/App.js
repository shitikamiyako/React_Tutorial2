import React, { Component } from 'react'
import Table from './Table'
import Form from './Form'

class App extends Component {
  // stateオブジェクト作成、今回状態が変化するプロパティはcharactersでかつ複数ある想定なので空のリストで設定する。
  state = {
    characters: [

    ],
  }

  removeCharacter = (index) => {
    const { characters } = this.state

    this.setState({
      // charactersはstateであり、リストでプロパティが格納されているのでフィルタリングすることで削除の処理を擬似的に行う。
      characters: characters.filter((character, i ) => {
        return i !== index
      }),
    })
  }

  // App.jsで保持しているstate(charactersプロパティ)を変更するメソッド
  handleSubmit = (character) => {
    // 既存のthis.state.charactersを取得し、新しい文字パラメータ(character)を追加することで状態を更新します。
    this.setState({characters: [...this.state.characters, character]})
  }

  render() {
    const { characters } = this.state
    return (
      <div className="container">
        {/* インポートしてきたTableコンポーネント(処理的にはTableコンポーネントへデータをパス) */}
        <Table characterData={characters} removeCharacter={this.removeCharacter} />
        {/* インポートしてきたFormコンポーネント(処理的にはFormコンポーネントへデータをパス) */}
        <Form handleSubmit={this.handleSubmit} />
      </div>
    )
  }
}

export default App