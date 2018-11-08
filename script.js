console.log("hello world!")

var updatingList = `Thank you XXXXX for your quick response, 
I’ve been through a high volume of emails; I’ll update our list according to your comments.`

var responseFromManager = `Thank you XXXX for your response.
This system has been marked as Response Receive from Manager and once it is scanned by any of our resources it will be marked as Returned.
`

var retrieved = `Thank you XXXXX for your response.
The system is now marked as Returned in LART, no more actions are required regarding this asset. Thanks again!!!
`

var notReturnedYet = `Thank you XXXX for your response, I’ve been through a high volume of emails.
The system is not marked yet as returned in LART, I’ll update our list according to your comments. Please let me know whether there is any update from the employee regarding this asset or let me know if you agree with me marking this asset as not returned by the exited employee so HR can take further actions, if so; your cost center won't be charged since you've replied to our communication.
`
var assetUpdateRequest = `v=Thank you XXXX for your quick response.
Please know that the XXXXXXX is not listed as returned yet in our Leaver Tracker, can you kindly provide any update regarding this asset?
`

var notAssigned = `Thank you XXXX for your quick response.
This system will be marked as N/A since it’s not assigned to any single user per your email below, no more actions are required regarding this asset. 
`

var fte = `Thank you XXXX for your quick response.
This system will be marked as N/A since the employee has been converted to FTE. No more actions are required regarding this asset.
`

var notIt = `Thank you XXXX for your quick response.
This system will be marked as N/A since it’s not an IT owned asset, please dismiss the original email. 
Bottom line, our apologies for trying to collect a system not owned by IT.
`

var hrSystemErr = `Thank you XXXX for your response.
This system will be marked as N/A since this was a HR system error, per your email below.
`

var hostname = `Thank you XXXXXXX for your quick response.
For some reason HR records is populating some hostnames in the Service Tag field.
`

var dellOnePak = `Thank you XXXXX for your response.
The system has been marked as Response Receive from Manager, HROP has been added to the thread so that team may provide the status of the OnePak for this exited employee.
`

var emcOnePak = `Thank you XXXXX for your response.
This L-EMC exited employee is showing as Remote Worker, the system was most likely returned through a OnePak only if the employee was impacted by the WFR. I’ve added HROP so that team can verify whether a OnePak has been initiated for this asset and they may provide a status of this.
`

var ownership = `Hi XXXXXXX,
Can you verify whether the XXXXX is IT owned?
Thanks in advance for your help.
`

var receipt = `Thank you XXXX for your response.
+ XXXXXXX, can you confirm whether the XXXXX has been received? It’s not marked yet as returned in LART.
`

var notReturned = `Thank you XXXX for your quick response.
There is no much we can do at this stage, I’ll mark this system as Not Returned by exited employee so HR can take further actions regarding this asset. 
Your cost center won't be charged since you've replied to our communication.
`

var mourning = `Hi XXXXXXXX, thank you for your quick response.
I’m sorry to hear about this misfortune event, I guess there would be a period of grace for these cases considering XXXXXXX ’s family mourning.
Our condolences to you and your team at this sad time.
`

var cascading = `This asset is supposed to be returned to IT and if another or different system is needed, then a request needs to be submitted in InfinIT.
Please understand that cascading an IT owned asset is against policy and this system account will be disabled at once per that policy:
SAFE@Dell  
https://inside.dell.com/docs/DOC-275825  1.1.1 Devices Policy: 11 (page 2)
If you have any question, please let me know.
`

// probably export this to another file.


function copyText(text){
	navigator.clipboard.writeText(text)
	.then(function(){
		alert("The template is copied in your clipboard.");}
		,function(err){alert("Text couldnt be copied: ", err)})}