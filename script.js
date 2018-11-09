console.log("hello world!")

var templates =
	{
		'updatingList': `Thank you XXXXX for your quick response, \n
I’ve been through a high volume of emails; I’ll update our list according to your comments.`,
		
		'responseFromManager': `Thank you XXXX for your response. \n
This system has been marked as Response Receive from Manager and once it is scanned by any of our resources it will be marked as Returned.
`,
		'retrieved': `Thank you XXXXX for your response. \n
The system is now marked as Returned in LART, no more actions are required regarding this asset. Thanks again!!!
`,		
		'notReturnedYet': `Thank you XXXX for your response, I’ve been through a high volume of emails. \n
The system is not marked yet as returned in LART, I’ll update our list according to your comments. Please let me know whether there is any update from the employee regarding this asset or let me know if you agree with me marking this asset as not returned by the exited employee so HR can take further actions, if so; your cost center won't be charged since you've replied to our communication.
`,
		'assetUpdateRequest': `Thank you XXXX for your response, I’ve been through a high volume of emails. \n
The system is not marked yet as returned in LART, I’ll update our list according to your comments. Please let me know whether there is any update from the employee regarding this asset or let me know if you agree with me marking this asset as not returned by the exited employee so HR can take further actions, if so; your cost center won't be charged since you've replied to our communication.
`,
		'notAssigned': `Thank you XXXX for your quick response.\n
This system will be marked as N/A since it’s not assigned to any single user per your email below, no more actions are required regarding this asset. 
`,
		'fte': `Thank you XXXX for your quick response. \n
This system will be marked as N/A since the employee has been converted to FTE. No more actions are required regarding this asset.
`, 
		'notIt': `Thank you XXXX for your quick response. \n
This system will be marked as N/A since it’s not an IT owned asset, please dismiss the original email. 
Bottom line, our apologies for trying to collect a system not owned by IT.
`,
		'hrSystemErr': `Thank you XXXX for your response. \n
This system will be marked as N/A since this was a HR system error, per your email below.
`,
		'hostname': `Thank you XXXXXXX for your quick response. \n
For some reason HR records is populating some hostnames in the Service Tag field.
`,
		'dellOnePak': `Thank you XXXXX for your response. \n
The system has been marked as Response Receive from Manager, HROP has been added to the thread so that team may provide the status of the OnePak for this exited employee.
`,
		'emcOnePak': `Thank you XXXXX for your response. \n
This L-EMC exited employee is showing as Remote Worker, the system was most likely returned through a OnePak only if the employee was impacted by the WFR. I’ve added HROP so that team can verify whether a OnePak has been initiated for this asset and they may provide a status of this.
`,

		'ownership': `Hi XXXXXXX, \n
Can you verify whether the XXXXX is IT owned? \n
Thanks in advance for your help.
`,

		'receipt': `Thank you XXXX for your response. \n
+ XXXXXXX, can you confirm whether the XXXXX has been received? It’s not marked yet as returned in LART.
`,

		'notReturned': `Thank you XXXX for your quick response. \n
There is no much we can do at this stage, I’ll mark this system as Not Returned by exited employee so HR can take further actions regarding this asset. \n
Your cost center won't be charged since you've replied to our communication.
`,
		'mourning': `Hi XXXXXXXX, thank you for your quick response.\n
I’m sorry to hear about this misfortune event, I guess there would be a period of grace for these cases considering XXXXXXX ’s family mourning.
Our condolences to you and your team at this sad time.
`,

		'cascading': `This asset is supposed to be returned to IT and if another or different system is needed, then a request needs to be submitted in InfinIT. \n
Please understand that cascading an IT owned asset is against policy and this system account will be disabled at once per that policy: \n
SAFE@Dell  
https://inside.dell.com/docs/DOC-275825  1.1.1 Devices Policy: 11 (page 2)\n
If you have any question, please let me know.
`

}


// probably export this to another file.

function addTitle() {
 var responseFromManager = document.getElementById('responseFromManager')
 var retrieved = document.getElementById('retrieved')
 var notReturnedYet = document.getElementById('notReturnedYet')
 var assetUpdateRequest = document.getElementById('assetUpdateRequest')
 var notAssigned = document.getElementById('notAssigned')
 var fte = document.getElementById('fte')
 var notIt = document.getElementById('notIt')
 var hrSystemErr = document.getElementById('hrSystemErr')
 var hostname = document.getElementById('hostname')
 var dellOnePak = document.getElementById('dellOnePak')
 var emcOnePak = document.getElementById('emcOnePak')
 var ownership = document.getElementById('ownership')
 var receipt = document.getElementById('receipt')
 var notReturned = document.getElementById('notReturned')
 var mourning = document.getElementById('mourning')
 var cascading = document.getElementById('cascading')
 var botonUpdatingList = document.getElementById('btnupdatingList')

	responseFromManager.setAttribute('title',templates.responseFromManager)
	retrieved.setAttribute('title',templates.retrieved)
	notReturnedYet.setAttribute('title',templates.notReturnedYet)
	assetUpdateRequest.setAttribute('title',templates.assetUpdateRequest)
	notAssigned.setAttribute('title',templates.notAssigned)
	fte.setAttribute('title',templates.fte)
	notIt.setAttribute('title',templates.notIt)
	hrSystemErr.setAttribute('title',templates.hrSystemErr)
	hostname.setAttribute('title',templates.hostname)
	dellOnePak.setAttribute('title',templates.dellOnePak)
	emcOnePak.setAttribute('title',templates.emcOnePak)
	ownership.setAttribute('title',templates.ownership)
	receipt.setAttribute('title',templates.receipt)
	notReturned.setAttribute('title',templates.notReturned)
	mourning.setAttribute('title',templates.mourning)
	cascading.setAttribute('title',templates.cascading)
	botonUpdatingList.setAttribute('title',templates.updatingList)

}

function showNotification(){
    // Get the snackbar DIV
    var x = document.getElementById("snackbar");
    // Add the "show" class to DIV
    x.className = "show";
    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

function copyText(texto){
	navigator.clipboard.writeText(texto)
	.then(showNotification())
	,function(err){alert("Text couldnt be copied: ", err)}
}

window.onload = addTitle;