// Change this value:
var ruleServiceId = "a37df8246b2048dfba6f07c46e6ed25f";
$.context.selfApproval = true;

// -----------------------------------------------------------------------------------------
// no modifications needed below this line

// check if this is the first time we come here (process start)
if (!$.context.History) {
 	// initialize context
	$.context.Requester.RequestDate = new Date().toISOString().slice(0, 10);
	$.context.History = [];
	var decision = {
		"User": $.info.startedBy,
		"Role": "Requester",
		"Decision": "Initial Request",
		"Comment": $.context.Requester.Comment
	};
    $.context.History.push(decision);
    $.context.internal = {
        approvalStatus: "Running",
        workflowTerminated: false,
        step: {
            isReapproval: false,
        }
    }
}
$.context.role = $.context.approvalstep;

if ($.context.internal.step.isReapproval) {
	// handle rework
	var decision = {
		"User": $.usertasks.usertask2.last.processor,
		"Role": "Requester",
		"Decision": "Reworked",
		"Comment": $.context.comment
	};
    $.context.History.push(decision);
    $.context.internal.step.isReapproval = false;
}

$.context.comment = "";

if (!$.context.internal.workflowTerminated) {
    $.context.internal.approvalStatus = "In Approval";
}

/************ Prepare Input Payload to Execute Rules ****************/
var details = {
	"ApprovalStep": $.context.approvalstep,
	"BusinessUnit": $.context.Investment.BusinessUnit,
	"Country": $.context.Investment.Country,
	"Type": $.context.Investment.Type,
	"TotalCost": $.context.Investment.TotalCost
};

var rulesPayload = {
	"RuleServiceId": ruleServiceId,
	"RuleServiceRevision": "Trial",
	"Vocabulary": [ { "Investment": details } ]
};

$.context.internal.rulesPayload = rulesPayload;
