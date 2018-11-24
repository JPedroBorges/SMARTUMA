const config = 
{
	"chart":
	{
		"height": "300",
		"width": "100%",
		"theme": "fusion"
	},
	"thresholds":
	{
		"bad": 25,
		"good": 75
	},
	"results":
	{	
		"good":
		{
			"icon": "sentiment_very_satisfied",
			"response":  "Sim!"
		},
		"average":
		{
			"icon": "sentiment_neutral",
			"response": "Talvez!"
		},		
		"bad":
		{
			"icon": "sentiment_very_dissatisfied",
			"response": "Não!"
		}
	}
}