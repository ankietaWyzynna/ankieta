
    var ctx = document.getElementById('myChart5').getContext('2d');
    var myPieChart = new Chart(ctx, {
    type: 'pie',
    data:  {
    datasets: [{
        data: [16, 13, 2],
        backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 206, 86)',
                
    ],
    }],
    labels: [
        'Tak',
        'Nie ',
        'Brak zdania',
    ]
    }
    });

        var ctx = document.getElementById('myChart4').getContext('2d');
        var myPieChart = new Chart(ctx, {
        type: 'pie',
        data:  {
        datasets: [{
            data: [12, 10, 7, 2],
            backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 206, 86)',
                    'rgb(62, 189, 79)',
        ],
        }],
        labels: [
            'Nie',
            'Nie wszystkie',
            'Tak',
            'Brak zdania',
        ]
        }
        });

        var ctx = document.getElementById('myChart2').getContext('2d');
        var myPieChart = new Chart(ctx, {
        type: 'bar',
        data:  {
        datasets: [{
           
            data: [18, 8, 5],
            backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 206, 86)',
        ],
        }],
        labels: [
            'Zmiana',
            'Wycinka',
            'Brak zdania'
        ]
        }
        });


    var ctx = document.getElementById('myChart').getContext('2d');
    var myPieChart = new Chart(ctx, {
    type: 'pie',
    data:  {
    datasets: [{
        data: [16, 12, 3],
        backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 206, 86)',
    ],
    }],
    labels: [
        'Brak zgody',
        'Zgoda',
        'Brak Zdania'
    ]
    }
    });
