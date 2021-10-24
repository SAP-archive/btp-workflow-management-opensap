$.context.internal.step.isRequired = false;
var approverUserIDs = [];
var approverGroupIDs = [];
var ruleResult = $.context.internal.ruleresult.Result;

if (ruleResult.length > 0 && ruleResult[0].ApproversList.length) {
    $.context.internal.step.approver = $.context.internal.ruleresult.Result[0].ApproversList[0];
	$.context.internal.step.isRequired = $.context.internal.step.approver.ApprovalRequired;
    for (var i = 0; i < ruleResult[0].ApproversList.length; i++) { 
        approverUserIDs.push(ruleResult[0].ApproversList[i].UserId);
        approverGroupIDs.push(ruleResult[0].ApproversList[i].GroupId);
    }
    $.context.internal.step.approver.UserId = approverUserIDs.join(',');
    $.context.internal.step.approver.GroupId = approverGroupIDs.join(',');
}

if ($.context.selfApproval) {
    $.context.internal.step.approver.UserId = $.info.startedBy;
    $.context.internal.step.approver.GroupId = '';
}

if ($.context.internal.workflowTerminated) {
    // handle already rejected case (for use in process steps)
    $.context.internal.step.isRequired = false;
} else if (!$.context.internal.step.isRequired) {
    // handle automatic approval
	var decision = {
		"User": "-",
		"Role": $.context.role,
		"Decision": "Approve",
		"Comment": "Automatic approval by rule"
	};
    $.context.History.push(decision);
}
