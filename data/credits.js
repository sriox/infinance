[
	{
		id: 7,
		bank: 'banklombia',
		product: {
			id: 'CL',
			name: 'Libre Inversión',
			description: 'Credito para lo que quiera'
		},
		rates:[
			{
				minMonths: 1,
				maxMonths: 12
				value: 18.3
			},
			{
				minMonths: 13,
				maxMonths: 36,
				value: 22.5
			}
		],
		restrictions: {
			minSalary: 1000000,
			employee: true,
			mesesemployee: 3 
		}
	},
	{
		id: 51,
		bank: 'Davivienda',
		product: {
			id: 'CL',
			name: 'Libre Inversión',
			descripcion: 'Credito para lo que quiera'
		},
		rates:[
			{
				minMonths: 1,
				maxMonths: 12
				value: 18.0
			},
			{
				minMonths: 13,
				maxMonths: 36,
				value: 23.1
			},
			{
				minMonths: 37,
				maxMonths: 60,
				value: 25.2
			}
		],
		restrictions: {
			minSalary: 1500000,
			employee: true,
			mesesemployee: 3 
		}
	}
]