import web3 from "./web3";


const ABI = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_id",
				"type": "string"
			},
			{
				"components": [
					{
						"internalType": "string",
						"name": "tittle",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "shortDescription",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "description",
						"type": "string"
					},
					{
						"internalType": "string[]",
						"name": "skillId",
						"type": "string[]"
					}
				],
				"internalType": "struct ProductCopyrights.Project",
				"name": "newProject",
				"type": "tuple"
			}
		],
		"name": "addProject",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_id",
				"type": "string"
			}
		],
		"name": "getAProject",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "tittle",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "shortDescription",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "description",
						"type": "string"
					},
					{
						"internalType": "string[]",
						"name": "skillId",
						"type": "string[]"
					}
				],
				"internalType": "struct ProductCopyrights.Project",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"name": "projects",
		"outputs": [
			{
				"internalType": "string",
				"name": "tittle",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "shortDescription",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "description",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

const CONTARCTADDRESS = "0x5aB16126d057482D34a29F4352c71763310dC0EC";

const projectCopyright = new web3.eth.Contract(ABI, CONTARCTADDRESS);

export default projectCopyright;
