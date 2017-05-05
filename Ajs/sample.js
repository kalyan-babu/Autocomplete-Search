angular.module('sampleApp', ['simple-autocomplete']).controller('SampleCtrl', function($scope) {
	$scope.selectedData = null;
	$scope.datas = [
		{name: 'Albania',Currency:"Lek",LastPrice:200,PricingData:100,HighPrice:340,LowPrice:110},
		{name: 'Afghanistan',Currency:"Afghani",LastPrice:350,PricingData:131,HighPrice:445,LowPrice:340},
		{name: 'Argentina',Currency:"Peso",LastPrice:8564,PricingData:523,HighPrice:80031,LowPrice:511},
		{name: 'Aruba',Currency:"Guilder",LastPrice:485,PricingData:1254,HighPrice:799856,LowPrice:2312},
		{name: 'Belarus',Currency:"Ruble",LastPrice:788964,PricingData:124,HighPrice:4566,LowPrice:778},
		{name: 'Belize',Currency:"Dollar",LastPrice:214,PricingData:2456,HighPrice:154687,LowPrice:3215},
		{name: 'Bermuda',Currency:"Dollar",LastPrice:7894,PricingData:65,H0ighPrice:3213,LowPrice:32165},
		{name: 'Brazil',Currency:"Real",LastPrice:3213,PricingData:7889,HighPrice:987974,LowPrice:16546},
		{name: 'Chile',Currency:"Peso",LastPrice:378,PricingData:2163,HighPrice:1256,LowPrice:324},
		{name: 'China',Currency:"Yuan Renminbi",LastPrice:12545,PricingData:54866,HighPrice:2345,LowPrice:2654},
		{name: 'Colombia',Currency:"Peso",LastPrice:3145,PricingData:65687,HighPrice:544,LowPrice:12364},
		{name: 'Cuba',Currency:"Peso",LastPrice:332154,PricingData:2120,HighPrice:5664123,LowPrice:74552},
		{name: 'Denmark',Currency:"Krone",LastPrice:54565,PricingData:5123,HighPrice:21422,LowPrice:3450},
		{name: 'Dominican Republic',Currency:"Peso",LastPrice:12311,PricingData:86544,HighPrice:565112,LowPrice:64452},
		{name: 'Egypt',Currency:"Pound",LastPrice:786,PricingData:7895,HighPrice:23644,LowPrice:5468},
		{name: 'Estonia',Currency:"Kroon",LastPrice:3452,PricingData:233,HighPrice:78965,LowPrice:21456},
		{name: 'Euro Member',Currency:"Euro",LastPrice:3050,PricingData:5546,HighPrice:480,LowPrice:340},
		{name: 'Fiji',Currency:"Dollar",LastPrice:3400,PricingData:50054,HighPrice:4180,LowPrice:3890},
		{name: 'Honduras',Currency:"Lempira",LastPrice:33540,PricingData:5333,HighPrice:47880,LowPrice:3644},
		{name: 'Hungary',Currency:"Forint",LastPrice:324,PricingData:214566,HighPrice:5789,LowPrice:3654},
		{name: 'Iceland',Currency:"Krona",LastPrice:7856,PricingData:321,HighPrice:2114,LowPrice:75421},
		{name: 'India',Currency:"Rupee",LastPrice:321,PricingData:2145,HighPrice:354,LowPrice:54566},
		{name: 'Indonesia',Currency:"Rupiah",LastPrice:322,PricingData:508895,HighPrice:4803212,LowPrice:34078},
		{name: 'Iran',Currency:"Rial",LastPrice:3214,PricingData:875,HighPrice:4856,LowPrice:3541},
		{name: 'Jamica',Currency:"Dollar",LastPrice:3660,PricingData:65441,HighPrice:4541,LowPrice:4560},
		{name: 'Japan',Currency:"Yen",LastPrice:25411,PricingData:3654,HighPrice:54632,LowPrice:2145},
		{name: 'Korea(North)',Currency:"Won",LastPrice:35621,PricingData:21203,HighPrice:2144,LowPrice:3212},
		{name: 'Korea(South)',Currency:"Won",LastPrice:54454,PricingData:545,HighPrice:878,LowPrice:36565},
		{name: 'Liberia',Currency:"Dollar",LastPrice:34586,PricingData:5450,HighPrice:878878,LowPrice:5656},
		{name: 'Malaysis',Currency:"Ringgit",LastPrice:200,PricingData:100,HighPrice:340,LowPrice:110},
		{name: 'Mauritius',Currency:"Rupee",LastPrice:350,PricingData:131,HighPrice:445,LowPrice:340},
		{name: 'Mexixo',Currency:"Peso",LastPrice:8564,PricingData:523,HighPrice:80031,LowPrice:511},
		{name: 'Nigeria',Currency:"Naira",LastPrice:485,PricingData:1254,HighPrice:799856,LowPrice:2312},
		{name: 'Oman',Currency:"Rial",LastPrice:788964,PricingData:124,HighPrice:4566,LowPrice:778},
		{name: 'Pakistan',Currency:"Rupee",LastPrice:214,PricingData:2456,HighPrice:154687,LowPrice:3215},
		{name: 'Panma',Currency:"Balboa",LastPrice:7894,PricingData:65,H0ighPrice:3213,LowPrice:32165},
		{name: 'Peru',Currency:"Nuevo Sol",LastPrice:3213,PricingData:7889,HighPrice:987974,LowPrice:16546},
		{name: 'Philippines',Currency:"Peso",LastPrice:378,PricingData:2163,HighPrice:1256,LowPrice:324},
		{name: 'Russia',Currency:"Ruble",LastPrice:12545,PricingData:54866,HighPrice:2345,LowPrice:2654},
		{name: 'Saint Helena',Currency:"Pound",LastPrice:3145,PricingData:65687,HighPrice:544,LowPrice:12364},
		{name: 'Singapoor',Currency:"Dollar",LastPrice:332154,PricingData:2120,HighPrice:5664123,LowPrice:74552},
		{name: 'Somalia',Currency:"Shiling",LastPrice:54565,PricingData:5123,HighPrice:21422,LowPrice:3450},
		{name: 'Sri Lanka',Currency:"Rupee",LastPrice:12311,PricingData:86544,HighPrice:565112,LowPrice:64452},
		{name: 'Switzerland',Currency:"Franc",LastPrice:33540,PricingData:5333,HighPrice:47880,LowPrice:3644},
		{name: 'Suriname',Currency:"Dollar",LastPrice:324,PricingData:214566,HighPrice:5789,LowPrice:3654},
		{name: 'Thailand',Currency:"Baht",LastPrice:7856,PricingData:321,HighPrice:2114,LowPrice:75421},
		{name: 'Turkey',Currency:"Lira",LastPrice:321,PricingData:2145,HighPrice:354,LowPrice:54566},
		{name: 'Tuvalu',Currency:"Dollar",LastPrice:322,PricingData:508895,HighPrice:4803212,LowPrice:34078},
		{name: 'Ukraine',Currency:"Hryvna",LastPrice:3214,PricingData:875,HighPrice:4856,LowPrice:3541},
		{name: 'United Kingdom',Currency:"Pound",LastPrice:3660,PricingData:65441,HighPrice:4541,LowPrice:4560},
		{name: 'Viet Nam',Currency:"Donga",LastPrice:25411,PricingData:3654,HighPrice:54632,LowPrice:2145},
		{name: 'Yemen',Currency:"Rial",LastPrice:35621,PricingData:21203,HighPrice:2144,LowPrice:3212},
		{name: 'United States',Currency:"Dollar",LastPrice:54454,PricingData:545,HighPrice:878,LowPrice:36565},
		{name: 'Zimbabwe',Currency:"Dollar",LastPrice:34586,PricingData:5450,HighPrice:878878,LowPrice:5656}
	];

	$scope.onSelect = function(selection) {
		console.log(selection);
		$scope.selectedData = selection;
	};

	
})