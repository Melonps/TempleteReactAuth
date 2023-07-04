import axios from "axios";
import { useState } from "react";

// ShowHelloコンポーネントの定義
const ShowHello = () => {
    // 状態変数textとその更新関数setTextをuseStateフックを使って定義します
    const [text, setText] = useState("");

    // getHello関数はボタンがクリックされた時に実行されます
    const getHello = () => {
        // axiosを使用して"http://localhost:5000"にGETリクエストを送信します
        axios
            .get("http://127.0.0.1:5000/")
            .then((res) => {
                // リクエストが成功した場合は、レスポンスデータをコンソールに出力し、textの値を更新します
                console.log(res.data);
                setText(res.data);
            })
            .catch((err) => {
                // エラーが発生した場合は、エラーメッセージをコンソールに出力します
                console.error(err);
            });
    };

    return (
        <div>
            {/* ボタンがクリックされた時にgetHello関数を実行するためのボタンを表示します */}
            <button onClick={getHello}>Morning!</button>
            {/* textの値を表示します */}
            <p>{text}</p>
        </div>
    );
};

export default ShowHello;
