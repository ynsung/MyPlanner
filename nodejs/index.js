const compression = require("compression");
const cors = require("cors");
const {indexRouter} = require("./src/router/indexRouter");
const { userRouter } = require("./src/router/userRouter");

const express = require('express');
const app = express();
const port = 3000;

/* localhost:3000으로 접속했을 때 'Hello World!' 출력 */

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

/* express 미들웨어 설정 */

// 정적 파일 제공
app.use(express.static("completeService"));

// cors 설정
app.use(cors());

// body json 파싱 : 클라이언트에서 패킷이 오면 body를 찾아서 json 부분 파싱
app.use(express.json());

// HTTP 요청 압축
app.use(compression());

// 라우터 분리
indexRouter(app);
userRouter(app);


/* users를 get하는 요청이 들어왔을 때. 응답으로 'hello' 출력 */
// app.get("/users", function (req, res) {
//   return res.send("hello");
// });


/* user 생성하는 요청 들어왔을 때, body에서 name 읽어와서 출력 */
// app.post("/user", function (req, res) {
//   const name = req.body.name;
//   return res.send(name);
// });


app.listen(port, () => {
  console.log(`Express app listening at port: ${port}`)
})