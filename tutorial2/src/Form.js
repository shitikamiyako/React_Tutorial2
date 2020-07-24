import React, {Component} from 'react'

class Form extends Component {
    // initialsateオブジェクト作成、こちらはフォームなのでリストではなく、入力されるデータに応じてプロパティを設定する
    initialState = {
        name:'',
        job:'',
    }

    state = this.initialState

    // eventが実行されたときに発火するメソッド。今回はフォームなのでeventはフォームのフィールドの更新ということになる。
    handleChange = (event) => {
        // キー(=name)と値を設定
        const {name, value} = event.target

        this.setState({
            [name]: value,
        })
    }

    // handleSubmitを呼び出して実行するメソッド
    submitForm = () => {
        // 引数にconst { name, job }を設定してhandleSubmitを実行し、propsのcharacterDataをこれに置き換える
        this.props.handleSubmit(this.state)
        // フォームの状態を初期状態にリセット
        this.setState(this.initialState)
    }

    render() {
        const { name, job } = this.state;

        return (
            <form>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    // フィールドの内容が変更されたらhandleChangeメソッド発火
                    onChange={this.handleChange} />
                    <label htmlFor="job">Job</label>
                <input
                    type="text"
                    name="job"
                    id="job"
                    value={job}
                    onChange={this.handleChange} />
                {/* クリックイベントでsubmitFormメソッド発火 */}
                <input type="button" value="Submit" onClick={this.submitForm} />
            </form>
        );
    }
}

export default Form;