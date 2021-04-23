// fetch("https://prescriptiontrails.org/api/filter/?by=city&city=Albuquerque&offset=0&count=6",{
// 	"method": "GET",
//     credentials: 'same-origin'
	
// })
// .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.error(err);
// });

$.ajax({
    url: 'https://prescriptiontrails.org/api/filter/?by=city&city=Albuquerque&offset=0&count=6',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    type: "GET", /* or type:"GET" or type:"PUT" */
    dataType: "json",
    data: {
    },
    success: function (result) {
        console.log(result);
    },
    error: function () {
        console.log("error");
    }
});