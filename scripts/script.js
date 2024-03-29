var listOfButtons = [
  {
    name: "UpdatingList",
    displayName: `Updating List`,
    content: `Thank you XXXXX for your response,\n\nI’ll update our list according to your comments and let you know once the system is marked as Returned in our Leaver Tracker.\n`,
    style: `btn btn-primary`,
    appName: "lartTemplates"
  },
  {
    name: "RespondeCovid",
    content: `Thank you XXXXX for your response, \n\nI’ll update our list according to your comments, please stay safe at home and let me know once the system is just returned.\n`,
    style: `btn btn-primary`,
    displayName: `Updating List - COVID`,
    appName: "lartTemplates"
  },
  {
    name: "ResponsePickUp",
    content: `Thank you XXXXXX, all is set.\n\nXXXXXXXXXXX\n\nA pickup needs to be scheduled so the person in possession of the equipment can stay safe at home during this difficult covid-19 situation, please follow directions attached.\n\n`,
    style: `btn btn-primary`,
    displayName: `Pickup Schedule`,
    appName: "lartTemplates"
  },
  {
    name: "ResponseReceivedFromManager",
    displayName: `Response Received from Manager`,
    content: `Thank you XXXX for your response. \n\nThis system has been marked as Response Received from Manager and once it is scanned by any of our resources it will be marked as Returned.`,
    style: `btn btn-primary`,
    appName: "lartTemplates"
  },
  {
    name: "FollowUp",
    content: `Hello XXXXXX, just following up on this. \n\nDid you manage to return the PC?`,
    style: `btn btn-primary`,
    displayName: `Follow Up`,
    appName: "lartTemplates"
  },
  {
    name: "FollowUp2",
    content: `Hi xxxx, this is a follow-up.\n\nIs there any recent update from XXXXX in regards of the XXXXX? There is no record of we receiving this system and the tracking information does not show any scheduled pickup.\n\n`,
    style: "btn btn-primary",
    displayName: "Follow Up 2",
    appName: "lartTemplates"
  },
  {
    name: "FedExFollowUp",
    content: `Thank you XXXX for your response,\n\nI’ve double-checked and an order was previously placed by WCA Franklin for the return of this asset.\n\nPacking shipped via FedEx # XXXXXXXXXXXXX is showing as delivered to employee on XXXXXX but there is no scheduled pickup for the FedEx return label # XXXXXXXX and we have no record of receiving the asset described above.\n\nA pickup needs to be scheduled so the person in possession of the equipment can stay safe at home during these difficult times, please have the exiting team member to follow Return Shipment directions attached.`,
    style: "btn btn-primary",
    displayName: "FedEx Follow-up",
    appName: "lartTemplates"
  },
  {
    name: "CheckOwnership",
    content: `Hi XXXXXXX, \n\nCan you verify whether the XXXXX is IT owned? \nThanks in advance for your help.`,
    style: "btn btn-primary",
    displayName: `Check Ownership of Asset`,
    appName: "lartTemplates"
  },
  {
    name: "ConfirmIfReceived",
    content: `Thank you XXXX for your response. \n\n+ XXXXXXX, can you confirm whether the XXXXX has been received? It’s not marked yet as returned in LART.`,
    style: `btn btn-primary`,
    displayName: `Check if Asset was Received`,
    appName: "lartTemplates"
  },
  {
    name: "retrieved",
    displayName: `Retrieved`,
    content: `Thank you XXXXX for your response. \n\nThe system is now showing as Returned in LART, no more actions are required regarding this asset. Thanks again!!!`,
    style: `btn btn-success`,
    appName: "lartTemplates"
  },
  {
    name: "retrievedfollow",
    displayName: `Retrieved Update`,
    new: true,
    content: `Hi XXXX, just FYI... \n\nThe system is now showing as Returned in LART, no more actions are required regarding this asset. Thanks again!!!`,
    style: `btn btn-success`,
    appName: "lartTemplates"
  },
  {
    name: "NotReturnedYet",
    displayName: `Not Returned Yet`,
    content: `Thank you XXXX for your response, \n\nThe system is not marked yet as returned in LART, I’ll update our list according to your comments. Please let me know whether there is any update from the employee regarding this asset or let me know if you agree with me marking this asset as not returned by the exited employee so HR can take further actions, if so; your cost center won't be charged since you've replied to our communication.`,
    style: `btn btn-warning`,
    appName: "lartTemplates"
  },
  {
    name: "notAssigned",
    displayName: `Not Assigned`,
    content: `Thank you XXXX for your response.\n\nThis system will be marked as N/A since it’s not assigned to any single user per your email below, no more actions are required regarding this asset. `,
    style: `btn btn-warning`,
    appName: "lartTemplates"
  },
  {
    name: "FullTimeEmployee",
    displayName: `Turned into Full Time Employee`,
    content: `Thank you XXXX for your response. \n\nThis system will be marked as N/A since the employee has been converted to FTE. No more actions are required regarding this asset.`,
    style: "btn btn-warning",
    appName: "lartTemplates"
  },

  {
    name: "NotOwnedByIT",
    content: `Thank you XXXX for your response. \n\nThis system will be marked as N/A since it’s not an IT owned asset, please dismiss the original email.\n\nBottom line, our apologies for trying to collect a system not owned by IT.`,
    style: "btn btn-warning",
    displayName: "Not Owned By IT",
    appName: "lartTemplates"
  },
  {
    name: "HRSystemError",
    content: `Thank you XXXX for your response. \n\nThis system will be marked as N/A since this was a HR system error, per your email below.`,
    style: `btn btn-warning`,
    displayName: "HR System Error",
    appName: "lartTemplates"
  },
  {
    name: "Hostname",
    displayName: `Hostname in ServiceTag`,
    style: `btn btn-warning`,
    content: `Thank you XXXXXXX for your response. \n\nFor some reason HR records is populating some hostnames in the Service Tag field.`,
    appName: "lartTemplates"
  },
  {
    name: "NotReturned",
    content: `Thank you XXXX for your response. \n\nThere is no much we can do at this stage, I’ll mark this system as Not Returned by exited employee so HR can take further actions regarding this asset. \nYour cost center won't be charged since you've replied to our communication.`,
    style: "btn btn-danger",
    displayName: `Not Returned`,
    appName: "lartTemplates"
  },
  {
    name: "Mourning",
    content: `Hi XXXXXXXX, thank you for your response.\n\nI’m sorry to hear about this misfortune event, I guess there would be a period of grace for these cases considering XXXXXXX ’s family mourning.\nOur condolences to you and your team at this sad time.`,
    style: "btn btn-danger",
    displayName: "Mourning Message",
    appName: "lartTemplates"
  },
  {
    name: "Cascading",
    content: `This asset is supposed to be returned to IT and if another or different system is needed, then a request needs to be submitted in InfinIT. \nPlease understand that cascading an IT owned asset is against policy and this system account will be disabled at once per that policy: \n\nSAFE@Dell  \nhttps://inside.dell.com/docs/DOC-275825  1.1.1 Devices Policy: 11 (page 2)\nIf you have any question, please let me know.`,
    style: `btn btn-danger`,
    displayName: `Cascading Policy`,
    appName: "lartTemplates"
  },
  {
    name: "ShippingOffer",
    content: `Thank you XXXX for your response,\n\nI can make arrangements for a box with labels, I'll just need the ship from address ***AND*** a phone number. Please let me know if a box is needed or just a return label ** and I will provide pickup scheduling instructions once the order is created.**\n\nThanks in advance for your assistance.\n`,
    style: `btn btn-info`,
    displayName: `Shipping Label Offer`,
    appName: "lartTemplates"
  },
  {
    name: "ShipingOfferCovid19",
    content: `Thank you XXXX for your response,\n\nI can make arrangements for a box with labels, I'll just need the ship from address and a phone number. Please let me know if a box is needed or just a return label. After the order is created, FedEx pickup scheduling directions will be provided so the person in possession of the system may stay safe at home during this difficult covid-19 situation.\n\n`,
    style: "btn btn-info",
    displayName: "Shipping Label Offer COVID19",
    appName: "lartTemplates"
  },
  {
    name: "DanBoxRequest",
    content: `Hi Dan,\nPlease prepare a box with labels for a XXXX to the following:\n\nXXXXXXX\n\nI've looked for the Cost Center for you: XXXXXX\n\nThanks in advance for your assistance.\n`,
    style: `btn btn-info`,
    displayName: `Dan Box Request`,
    appName: "lartTemplates"
  },
  {
    name: "DanCompetitorBox",
    content: `Hi Dan, this is for competitor matters so the system needs to be routed to Karen's place.\n\nPlease prepare box with labels for a XXXXXX to the following:\n\nXXXXXX\n\nI've looked for the Cost Center name for you: XXXXX\n\nThanks in advance for your assistance\n`,
    style: `btn btn-info`,
    displayName: `Dan Competitor Box Request`,
    appName: "lartTemplates"
  },
  {
    name: "OnePakAddressRequest",
    content: `Thank you XXXX for your response,\n\nHR Ops requires the below for OnePak, please reply to ALL with the information below so HR Ops may initiate the OnePak:\n\n•	Badge:\n•	Name:\n•	Dell Federal (y/n):\n•	Quest/DSG (y/n):\n•	Legal Hold (y/n):\n•	Personal email address:\n•	Personal phone number:\n•	Personal address (cannot be a PO Box):\n•	Quantity of Notebooks:\n•	Quantity of Printers:\n•	Quantity of Monitors:\n•	Blackberry or Mobile Phone to return:\n•	Quantity of boxes for Hard Copy Documents:\n•	Any other assets or equipment such as: tablet, docking station, projector, fax machine, etc.\nOnce this information is provided to WFR Operations, the OnePak order will be entered and an email will go directly to the affected employee.\n•	This email contains all the details of the order and the process for returning the assets and how to retrieve and print air bills.\n•	It will take 5-10 business days for the boxes and shipping supplies to be delivered to the home address.\n•	The employee must print their own waybills, which will be delivered to their personal e-mail address by OnePak.`,
    style: `btn btn-info`,
    displayName: `OnePak Address Request`,
    appName: "lartTemplates"
  },
  {
    name: "OnePakFollowUp",
    content: `Thank you XXXXX for your response.\n\nI’ve double-checked. The order # XXXXXX is showing as delivered to XXXXXX on XXXXX. Labels are not yet printed by the employee and a pickup has not yet been scheduled for this OnePak.\n\nPlease let the exiting team member know that the return labels needs to be printed following directions emailed by OnePak and a pickup needs to be scheduled by going to http://www.dellreturncenter.com/pickups and entering their OnePak order information, this may help them to stay safe at home during these difficult times.\n\nThanks in advance for your assistance.\n`,
    style: "btn btn-primary",
    displayName: "OnePak Follow-Up",
    appName: "lartTemplates"
  },
  {
    name: "OnePakFollowUp2",
    content: `Hi XXXX, this is a follow-up\n\nThe order # XXXXXX is showing as delivered to XXXXXX on XXXXX. Labels are not yet printed by the employee and a pickup has not yet been scheduled for this OnePak.\n\nPlease let the exiting team member know that the return labels needs to be printed following directions emailed by OnePak and a pickup needs to be scheduled by going to http://www.dellreturncenter.com/pickups and entering their OnePak order information, this may help them to stay safe at home during these difficult times.\n\nThanks in advance for your assistance.\n`,
    style: "btn btn-primary",
    displayName: "OnePak Follow-Up 2",
    new: true
  },
  {
    name: "ONEPAKFOLLOW-UP–HRNOTIFIER",
    content: `Thank you XXXXX for your response.\n\nThe XXXXXX was delivered to employee on XXXXX. Labels are not yet created and a pickup has not yet been scheduled for this OnePak.\n\nPlease let the exiting team member know that a pickup needs to be scheduled by going to http://www.dellreturncenter.com/pickups and entering their OnePak order information, this may help them to stay safe at home during these difficult times.\n\nIf this employee was impacted by a WFR please add the HR Notifier to the thread so he / she may have the employee to follow directions above.\n\nThanks in advance for your assistance.\n\n`,
    style: "btn btn-primary",
    displayName: "ONEPAK FOLLOW-UP – HR NOTIFIER",
    new: true,
    appName: "lartTemplates"
  },
  {
    name: "ONEPAKFOLLOW-EXISTS",
    content: `Thank you XXXX for your response,\n\nI’ve double-checked and a OnePak order has already been placed for this return. I’ve updated our list accordingly and will let you know once the system is marked as Returned in our Leaver Tracker.\n\nNote: this email was sent to you since you are listed as the manager of this exiting team member. Not sure if the employee was impacted by a WFR since HR has not provided IT with that info, if so; it is still managers’ responsibility to ensure the return of the equipment assigned to the terminated employee, per policy End User System Management Standard v 4.1 (6.5 Return of Assets 3.C). (https://inside.dell.com/docs/DOC-275825)`,
    style: "btn btn-primary",
    displayName: "ONEPAK HAS BEEN PLACED",
    new: true,
    appName: "lartTemplates"
  },
  {
    name: "OnePakCOVID",
    content: `Thank you XXXX for your quick response,

    We can make arrangements for a OnePak and once the order is created the employee can schedule a pickup by going to http://www.dellreturncenter.com/pickups and entering their OnePak order information, this may help them to stay safe at home during this difficult covid-19 situation.
    
    HR Ops requires the below for OnePak, please reply to ALL with the information below so HR Ops may initiate the OnePak:
    
                   •         Badge:  
                   •         Name:  
                   •         Dell Federal (y/n):  
                   •         Quest/DSG (y/n):  
                   •         Legal Hold (y/n):  
                   •         Personal email address:  
                   •         Personal phone number:  
                   •         Personal address (cannot be a PO Box):  
                   •         Quantity of Notebooks:  
                   •         Quantity of Printers:  
                   •         Quantity of Monitors:  
                   •         Blackberry or Mobile Phone to return:  
                   •         Quantity of boxes for Hard Copy Documents:  
                   •         Any other assets or equipment such as: tablet, docking station, projector, fax machine, etc. 
    
    Thanks in advance for your assistance.
    `,
    style: `btn btn-info`,
    displayName: `OnePak Request - COVID`,
    appName: "lartTemplates"
  },
  {
    name: "HrOpsOnePakUpdateRequest",
    content: `Thank you HROP,\n\nIs there any update regarding this OnePak (label printed by exiting team member, system dropped-off at UPS, etc)? It’s not marked yet as Returned in our Leaver DB and it’s showing as IN USE in ServiceNOW.\n`,
    style: `btn btn-info`,
    displayName: `HROps OnePak Update Request`,
    appName: "lartTemplates"
  },
  {
    name: "PickUpSchedule",
    content: `Thank you XXXXXX, all is set.\n\nXXXXXXXXX: going out today – may be delivered on next business day.\n\nXXXXXXXXX: a pickup needs to be scheduled so the person in possession of the equipment can stay safe at home during these difficult times, please have him / her to follow Return Shipment directions attached.\n\n`,
    style: "btn btn-info",
    displayName: "PickUp Schedule",
    appName: "lartTemplates"
  },
  {
    name: "OnePakAlready",
    displayName: `OnePak Already Created`,
    content: `Thank you XXXX for your response,\n\nI’ve double-checked and a OnePak order has been requested to HR Ops for this return.  I’ve updated our list accordingly and will let you know once the system is marked as Returned in our Leaver Tracker or if further follow-up with employee is required.\n\n`,
    style: `btn btn-info`,
    appName: "lartTemplates"
  },
  {
    name: "DELLOnePak",
    displayName: `Dell OnePak`,
    content: `Thank you XXXXX for your response.\n\nThe system has been marked as Response Receive from Manager, HROP has been added to the thread so that team may provide the status of the OnePak for this exited employee.`,
    style: `btn btn-info`,
    appName: "lartTemplates"
  },
  {
    name: "LEMCOnePak",
    content: `Thank you XXXXX for your response. \n\nThis L-EMC exited employee is showing as Remote Worker, the system was most likely returned through a OnePak only if the employee was impacted by the WFR. I’ve added HROP so that team can verify whether a OnePak has been initiated for this asset and they may provide a status of this.`,
    style: `btn btn-info`,
    displayName: `Legacy EMC OnePak`,
    appName: "lartTemplates"
  },
  {
    name: "FedEx",
    content: `Hello XXXXXX, To send the shipping label i require the following info:\n\nContact Name:\nAddress:\nPhone:\n\n`,
    style: `btn btn-info`,
    displayName: `FedEx Shipping Label`,
    appName: "lartTemplates"
  },
];

bar = document.getElementById("bar");
body = document.getElementById("containerBotones");

function getButtons(list) {

  var contenedor = document.getElementById("containerBotones");

  for (button in list) {
    contenedor.innerHTML += `<a id="${list[button].id
      }" data-toggle='tooltip' data-placement='bottom' onclick="copyText(listOfButtons[${[
        button,
      ]}].content, listOfButtons[${[button]}].name)" class="col-sm ${list[button].style}" title='${list[button].content
      }'>${list[button].new ? '<span class="badge badge-secondary">New</span>' : ""
      }${list[button].displayName}</a>`;
  }
  
}

function showNotification(button) {
  var x = document.getElementById("snackbar");
  x.className = "show";
  setTimeout(function () {
    x.className = x.className.replace("show", "");
  }, 1500);
  track(button)
}

function track(button) {
  let url = `https://tmxdev.amer.dell.com/nodeapi/buttonTracker`

  let send = { buttonName: button, app: "LeaverTemplates" }

  fetch(url, { method: 'POST', mode: "cors", body: JSON.stringify(send), headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': "*" } })
}

function copyText(text, button) {
  navigator.clipboard.writeText(text).then(showNotification(button)),
    function (err) {
      alert("Text couldnt be copied: ", err);
    };
}

function showLoading() {
  setTimeout(function () {
    body.style.display = "block";
    bar.style.display = "none";
  }, 2000);
}

(window.onload = getButtons(listOfButtons)), showLoading();
