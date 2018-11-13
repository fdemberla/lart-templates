
var templates =
	{
		'UpdatingList': `Thank you XXXXX for your quick response, \n
I’ve been through a high volume of emails; I’ll update our list according to your comments.`,
		
		'ResponseReceivedFromManager': `Thank you XXXX for your response. \n
This system has been marked as Response Receive from Manager and once it is scanned by any of our resources it will be marked as Returned.
`,
		'Retrieved': `Thank you XXXXX for your response. \n
The system is now marked as Returned in LART, no more actions are required regarding this asset. Thanks again!!!
`,		
		'NotReturnedYet': `Thank you XXXX for your response, I’ve been through a high volume of emails. \n
The system is not marked yet as returned in LART, I’ll update our list according to your comments. Please let me know whether there is any update from the employee regarding this asset or let me know if you agree with me marking this asset as not returned by the exited employee so HR can take further actions, if so; your cost center won't be charged since you've replied to our communication.
`,
		'AssetUpdateRequest': `Thank you XXXX for your response, I’ve been through a high volume of emails. \n
The system is not marked yet as returned in LART, I’ll update our list according to your comments. Please let me know whether there is any update from the employee regarding this asset or let me know if you agree with me marking this asset as not returned by the exited employee so HR can take further actions, if so; your cost center won't be charged since you've replied to our communication.
`,
		'NotAssigned': `Thank you XXXX for your quick response.\n
This system will be marked as N/A since it’s not assigned to any single user per your email below, no more actions are required regarding this asset. 
`,
		'FullTimeEmployee': `Thank you XXXX for your quick response. \n
This system will be marked as N/A since the employee has been converted to FTE. No more actions are required regarding this asset.
`, 
		'NotOwnedByIT': `Thank you XXXX for your quick response. \n
This system will be marked as N/A since it’s not an IT owned asset, please dismiss the original email. 
Bottom line, our apologies for trying to collect a system not owned by IT.
`,
		'HRSystemError': `Thank you XXXX for your response. \n
This system will be marked as N/A since this was a HR system error, per your email below.
`,
		'Hostname': `Thank you XXXXXXX for your quick response. \n
For some reason HR records is populating some hostnames in the Service Tag field.
`,
		'DELLOnePak': `Thank you XXXXX for your response. \n
The system has been marked as Response Receive from Manager, HROP has been added to the thread so that team may provide the status of the OnePak for this exited employee.
`,
		'LEMCOnePak': `Thank you XXXXX for your response. \n
This L-EMC exited employee is showing as Remote Worker, the system was most likely returned through a OnePak only if the employee was impacted by the WFR. I’ve added HROP so that team can verify whether a OnePak has been initiated for this asset and they may provide a status of this.
`,

		'CheckOwnership': `Hi XXXXXXX, \n
Can you verify whether the XXXXX is IT owned? \n
Thanks in advance for your help.
`,

		'ConfirmIfReceived': `Thank you XXXX for your response. \n
+ XXXXXXX, can you confirm whether the XXXXX has been received? It’s not marked yet as returned in LART.
`,

		'NotReturned': `Thank you XXXX for your quick response. \n
There is no much we can do at this stage, I’ll mark this system as Not Returned by exited employee so HR can take further actions regarding this asset. \n
Your cost center won't be charged since you've replied to our communication.
`,
		'Mourning': `Hi XXXXXXXX, thank you for your quick response.\n
I’m sorry to hear about this misfortune event, I guess there would be a period of grace for these cases considering XXXXXXX ’s family mourning.
Our condolences to you and your team at this sad time.
`,

		'Cascading': `This asset is supposed to be returned to IT and if another or different system is needed, then a request needs to be submitted in InfinIT. \n
Please understand that cascading an IT owned asset is against policy and this system account will be disabled at once per that policy: \n
SAFE@Dell  
https://inside.dell.com/docs/DOC-275825  1.1.1 Devices Policy: 11 (page 2)\n
If you have any question, please let me know.
`

}

var variables = []

function createList(){
	for(var key in templates){
		if(templates.hasOwnProperty(key))
			variables.push(key)
	}
}

function createVariables() {
	var contenedor = document.getElementById("containerBotones")
	for(i=0; i<variables.length; i++){
		contenedor.innerHTML += `<a id="${variables[i]}" data-toggle='tooltip' data-placement='bottom' onclick="copyText(templates.${variables[i]})" href="#" class="col-sm btn btn-primary">${insertSpaces(variables[i])}</a>`								}
	}

function showNotification(){
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

function copyText(texto){
	navigator.clipboard.writeText(texto)
	.then(showNotification())
	,function(err){alert("Text couldnt be copied: ", err)}
}

bar = document.getElementById('bar')
body = document.getElementById('containerBotones')

function hideAndShow(){
	setTimeout(function (){body.style.display='block'; bar.style.display='none'; console.log("flip")}, 2000)
}

function insertSpaces(string) {
    string = string.replace(/([a-z])([A-Z])/g, '$1 $2');
    string = string.replace(/([A-Z])([A-Z][a-z])/g, '$1 $2')
    return string;
}


window.onload = createList(), createVariables(), hideAndShow();

