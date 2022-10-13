const getWeatherInfo = async (req, res) => {
    try {
        const { lat, lon } = req.query;
        const data = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=8a9425cfda53d800f8f66953f97b26ab`);
        const dataJSON = await data.json();
        res.status(200);
        res.json(dataJSON);
    } catch(error) {
        console.log("error");
        res.status(500);
        res.json({message: "Server error"});
    }

};

export default getWeatherInfo;