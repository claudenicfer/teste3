const = corsOptions = {
  origin: 'http://example.com',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use((req, res, next) => {
	//
    res.header("Access-Control-Allow-Origin", "*");
	//
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    app.use(cors(corsOptions));
    next();
});


//https://expressjs.com/en/resources/middleware/cors.html