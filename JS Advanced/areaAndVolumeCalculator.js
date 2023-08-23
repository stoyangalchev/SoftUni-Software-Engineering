    function area() {
    return Math.abs(this.x * this.y);
    }
    function vol() {
    return Math.abs(this.x * this.y * this.z);
    }

    function areaAndVolumeCalculator(area, vol, string) {
    let parcedObj = JSON.parse(string);
    let result = [];
    parcedObj.forEach((element) => {
        let res = area.bind(element);
        let res2 = vol.bind(element);
        result.push({
        area: res(),
        volume: res2(),
        });
    });
    return result;
    }
console.log(
  areaAndVolumeCalculator(
    area,
    vol,
    `[
{"x":"1","y":"2","z":"10"},
{"x":"7","y":"7","z":"10"},
{"x":"5","y":"2","z":"10"}
]`
  )
);
