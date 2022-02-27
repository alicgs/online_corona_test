var quest_n=0
var yes_button=0
var no_button=0

function startButton()
{
	quest_n++
	document.getElementById('start-button').style.display="none"
	document.getElementById('yes-button').style.display="block"
	document.getElementById('no-button').style.display="block"
	document.getElementById('quest-number').innerHTML=quest_n
	if (quest_n==1)
	{
	document.getElementById('quest').innerHTML="Ateş var mı?"
	}
}
function yesPress()
{
	yes_button++
	quest_n++
	document.getElementById('yes').innerHTML=yes_button
	document.getElementById('quest-number').innerHTML=quest_n
	if (quest_n==2)
	{
		document.getElementById('quest').innerHTML="Nefes darlığı var mı?"
	}
	else if (quest_n==3)
	{
		document.getElementById('quest').innerHTML="Balgamlı öksürük var mı?"
	}
	else if (quest_n==4)
	{
		document.getElementById('quest').innerHTML="Kuru öksürük var mı?"
	}
	else if (quest_n==5)
	{
		document.getElementById('quest').innerHTML="Boğaz ağrısı var mı?"
	}
	else if (quest_n==6)
	{
		document.getElementById('quest').innerHTML="Kas ve eklem ağrıları var mı?"
	}
	else if (quest_n==7)
	{
		document.getElementById('quest').innerHTML="Mide bulantısı veya kusma var mı?"
	}
	else if (quest_n==8)
	{
		document.getElementById('quest').innerHTML="İştahsızlık var mı?"
	}
	else if (quest_n==9)
	{
		document.getElementById('quest').innerHTML="Burun akıntısı var mı?"
	}
	else if (quest_n==10)
	{
		document.getElementById('quest').innerHTML="Baş ağrısı var mı?"
	}
	else if (quest_n==11)
	{
		document.getElementById('quest').innerHTML="Ağır solunum yetmezliği var mı?"
	}
	else if (quest_n==12)
	{
		document.getElementById('quest').innerHTML="Böbrek yetmezliği var mı?"
	}
	else if(quest_n==13)
	{
		document.getElementById('quest').innerHTML="Test bitti sonuçları görmek için aşşağıdaki butona bas"
		document.getElementById('show-results-button').style.display="block"
		document.getElementById('yes-button').style.display="none"
		document.getElementById('no-button').style.display="none"
	}
	else
	{
		document.getElementById('quest').innerHTML="Götlük Var!!"	
	}
}
function noPress()
{
	no_button++
	quest_n++
	document.getElementById('no').innerHTML=no_button
	document.getElementById('quest-number').innerHTML=quest_n
	if (quest_n==2)
	{
		document.getElementById('quest').innerHTML="Nefes darlığı var mı?"
	}
	else if (quest_n==3)
	{
		document.getElementById('quest').innerHTML="Balgamlı öksürük var mı?"
	}
	else if (quest_n==4)
	{
		document.getElementById('quest').innerHTML="Kuru öksürük var mı?"
	}
	else if (quest_n==5)
	{
		document.getElementById('quest').innerHTML="Boğaz ağrısı var mı?"
	}
	else if (quest_n==6)
	{
		document.getElementById('quest').innerHTML="Kas ve eklem ağrıları var mı?"
	}
	else if (quest_n==7)
	{
		document.getElementById('quest').innerHTML="Mide bulantısı veya kusma var mı?"
	}
	else if (quest_n==8)
	{
		document.getElementById('quest').innerHTML="İştahsızlık var mı?"
	}
	else if (quest_n==9)
	{
		document.getElementById('quest').innerHTML="Burun akıntısı var mı?"
	}
	else if (quest_n==10)
	{
		document.getElementById('quest').innerHTML="Baş ağrısı var mı?"
	}
	else if (quest_n==11)
	{
		document.getElementById('quest').innerHTML="Ağır solunum yetmezliği var mı?"
	}
	else if (quest_n==12)
	{
		document.getElementById('quest').innerHTML="Böbrek yetmezliği var mı?"
	}
	else if(quest_n==13)
	{
		document.getElementById('quest').innerHTML="Test bitti sonuçları görmek için aşşağıdaki butona bas"
		document.getElementById('show-results-button').style.display="block"
		document.getElementById('yes-button').style.display="none"
		document.getElementById('no-button').style.display="none"
	}	
	else
	{
		document.getElementById('quest').innerHTML="Götlük Var!!"	
	}
}

function showResults()
{
	if (yes_button>no_button)
	{
		document.getElementById('quest').innerHTML="Corona olma riskin yüksek en yakın hastaneye gitmelisin."
	}
	else
		document.getElementById('quest').innerHTML="Corona olma riskin oldukça düşük ama tedbiri elden bırakmamalısın."
	if (yes_button==no_button)
	{
		document.getElementById('quest').innerHTML="Semptomların bazıları sende yok ama çoğu semptomda var. Tedbiri elden bırakma en kısa sürede bir hastaneye görün."
	}
	document.getElementById('show-results-button').style.display="none"
	document.getElementById('clear-button').style.display="block"
}



























