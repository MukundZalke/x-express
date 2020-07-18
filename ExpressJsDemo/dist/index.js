"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.get('/', function (req, res) {
    res.send('Hello Worassld1122 from GET !!');
});
/* Path Variables */
app.get('/hello/:nm', function (req, res) {
    res.send('Hello with ' + req.params.nm);
});
app.get('/add/:n1/:n2', function (req, res) {
    var sum = +req.params.n1 + +req.params.n2;
    res.send('Hello with ' + sum);
});
/* Query Params */
app.get('/hello', function (req, res) {
    res.send('GET Hello with queryparam ' + req.query.username);
});
app.post('/hello', function (req, res) {
    var empno = req.body.empno;
    var ename = req.body.ename;
    res.send('POST Hello with body params ' + empno + "," + ename);
});
app.post('/', function (req, res) {
    res.send('Hello World from POST !!');
});
app.put('/', function (req, res) {
    res.send('Hello World from PUT !!');
});
app.delete('/', function (req, res) {
    res.send('Hello World from DELETE !!');
});
app.get('/*', function (req, res) {
    res.send('Catchall.. 404 !!');
});
app.listen(3000, function (err) {
    if (err) {
        return console.error(err);
    }
    return console.log('server is listening on 3000');
});
