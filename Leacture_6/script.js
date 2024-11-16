
// async function fetchData() {
//     const data = await fetch(
//     "https://timeapi.io/api/time/current/zone?timeZone=Asia%2FKolkata"
// );
// console.log(data)
// }
//   fetchData()
function Fetch(){
    fetch(
        "https://timeapi.io/api/time/current/zone?timeZone=Asia%2FKolkata"
    ).then((response) => {
        response.json().then((data)  => {
            document.getElementById("time").innerText= data.hour + ":" + data.minute + ": " + data.seconds;
    
        });
    }).catch(error => {
        console.log(error);
        clearInterval(couroutine);
    });
}
const couroutine = setInterval(Fetch, 1000);
// console.warn(warm)