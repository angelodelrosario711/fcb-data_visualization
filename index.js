const dateElement = document.getElementById("date");

let currentDate = new Date();
dateElement.innerHTML = currentDate;

let dataOptions = {year: "numeric", month: "long", day: "numeric"};
dateElement.innerHTML = currentDate.toLocaleDateString('en-US', dataOptions);

const url = "https://fakestoreapi.com/products";
// const options = {
// 	method: 'POST',
// 	headers: {
// 		'content-type': 'application/x-www-form-urlencoded',
// 		'X-RapidAPI-Key': 'd4921beb9amsh547da79d8b1fdb4p1cd19fjsnf45fce634508',
// 		'X-RapidAPI-Host': 'twitter-trends5.p.rapidapi.com'
// 	},
// 	body: new URLSearchParams({woeid: '23424934'})
// };


// Request data to get from URL 
// fetch(url, options)
fetch(url)
.then(res=>res.json())
.then(data => {
	console.log(data);
	// console.log(data[0].category)

	let pids = data.map(object => {
		return object.id;
	});

	let titles = data.map(object => {
		// console.log(object);
		// console.log(object.title);
		return object.title;
	});
	console.log(titles);

	let ratings = data.map(object => {
		// console.log(object.rating.rate);
		return object.rating.rate;
	});
	console.log(ratings);

	const myChart = document.getElementById("myChart");

	let barchart = new Chart(myChart,{
			type: 'bar',
		    data: {
		      labels: titles,
		      datasets: [{
					label: 'Product Ratings',
					data: ratings,
					borderWidth: 2,
					// borderColor: '#ffd966',
					borderColor:[
'rgb(255, 99, 132)',
	    		'rgb(255, 159, 64)',
	    		'rgb(255, 205, 86)',
	    		'rgb(75, 192, 192)',
	    		'rgb(54, 162, 235)',
	    		'rgb(153, 102, 255)',
	    		'rgb(201, 203, 207)'
	    		],
      				backgroundColor: [
					'rgba(255, 99, 132, 0.2)',
	    		'rgba(255, 159, 64, 0.2)',
	    		'rgba(255, 205, 86, 0.2)',
	    		'rgba(75, 192, 192, 0.2)',
	    		'rgba(54, 162, 235, 0.2)',
	    		'rgba(153, 102, 255, 0.2)',
	    		'rgba(201, 203, 207, 0.2)'
      				]

		      }]
		    },
		    options: {
				indexAxis: 'y',
				scales: {
					y: {
						beginAtZero: true
					}
				}
			}
	});

	// data.forEach(data => {
	//     console.log(data.category);  // Log the 'category' of each item
	// });	

	// let producst = [
	// 	{
	// 		title: 
	// 	}
	// ]
})